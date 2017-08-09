const prefixImage = "data:image/png;base64,";
var sections = [];
var titleHtml = ['<li>',
					'<div id="%id" class="section title">',
						'<input class="pointer" type="radio" name="focus">',
						'<div class="options">',
							'<span class="btn btn-link drag"><span class="glyphicon glyphicon-th"></span></span>',
							'<button class="btn btn-link remove remove"><span class="glyphicon glyphicon-remove"></span></button>',
						'</div>',
						'<h1>',
							'<input type="text" class="section-input" placeholder="Inserte un título aquí">',
						'</h1>',
					'</div>',
				'</li>',
				];
var textHtml = ['<li>',
					'<div id="%id" class="section text">',
						'<input class="pointer" type="radio" name="focus">',
						'<div class="options">',
							'<span class="btn btn-link drag"><span class="glyphicon glyphicon-th"></span></span>',
							'<button class="btn btn-link remove"><span class="glyphicon glyphicon-remove"></span></button>',
						'</div>',
						'<div id="text-%id" class="md">',
							'<textarea style="display: none;" class="section-input"></textarea>',
						'</div>',
						'<div class="rendered hidden">',
						'</div>',
					'</div>',
				'</li>',
				];
var graphHtml = ['<li>',
					'<div id="%id" class="section graph placeholder">',
						'<input class="pointer" type="radio" name="focus">',
						'<div class="options">',
							'<span class="btn btn-link drag"><span class="glyphicon glyphicon-th"></span></span>',
							'<button class="btn btn-link edit"><span class="glyphicon glyphicon-pencil"></span></button>',
							'<button class="btn btn-link remove"><span class="glyphicon glyphicon-remove"></span></button>',
						'</div>',
						'<div class="geogebra hidden">',
							'<div id="graph-%id"></div>',
							'<div class="geogebra-options">',
								'<button class="btn btn-success save col-md-6">Guardar cambios</button>',
								'<button class="btn btn-danger discard col-md-6">Descartar</button>',
							'</div>',
						'</div>',
						'<div class="graph-image hidden">',
							'<img>',
						'</div>',
					'</div>',
				'</li>'
				];


class Section {
	constructor(source, type) {
		this.alive = true;
		this.type = type;
		this.source = source;
		this.id = sections.length;
		this.listeners = [];
		this.content = "";
		this.pngBase64 = "";
		this.base64 = "";
		this.editing = false;

		// Include value '"ggbBase64"' to load graph.
		this.params = {
                "height":600,
                "showToolBar":true,
                "borderColor":null,
                "showMenuBar":false,
                "allowStyleBar":true,
                "showAlgebraInput":true,
                "enableLabelDrags":false,
                "enableShiftDragZoom":true,
                "capturingThreshold":null,
                "showToolBarHelp":false,
                "errorDialogsActive":true,
                "showTutorialLink":true,
                "showLogging":true,
                "useBrowserForJS":true,
                "perspective":"AG"
            };

		if (this.type == 'title') {
			this.html = $(titleHtml.join('').replace('%id', this.id));
		} else if (this.type == 'text') {
			this.html = $(textHtml.join('').replace(/\%id/g, this.id));
		} else if (this.type == 'graph') {
			this.html = $(graphHtml.join('').replace(/\%id/g, this.id));
		}


		this.insert_section();

		if (this.type == 'graph') {
			this.params['width'] = this.section.width()
			this.params['id'] = this.get_graph_id()
			this.load_graph();
		} else if (this.type == 'text') {
			this.load_text();
		}
	}

	insert_section() {
		$('.editor').append(this.html);
		this.section = $(this.get_id());
		this.section.find('input').focus();
		this.enable_listener();
	}

	enable_listener() {
		var self = this;
		let listener = $(this.section).find('.remove').click(function() {
			self.remove_section();
		});

		if (this.type == 'graph') 
			this.enable_graph_listener();
		else if (this.type == 'text')
			this.enable_text_listener();

		this.listeners.push(listener);
	}

	get_id() {
		return '#' + this.id;
	}

	remove_section() {
		$(this.section).remove();
		this.alive = false;
	}

	// Text

	render_() {
		console.log(':D!!');
		this.editing = false;
		$(this.section).find('.md').addClass('hidden');
		$(this.section).find('.rendered').removeClass('hidden').html(this.editormd.getHtml());
	}

	load_text() {
		let self = this;
		this.editormd = new Editor(this.get_text_id());
	}


	enable_text_listener() {
		let self = this;
		$(this.section).find('.pointer').change(function() {
			self.editing = true;
			console.log("this.editing", self.editing);
			$(self.section).find('.md').removeClass('hidden');
			$(self.section).find('.rendered').addClass('hidden')
			$('.text-options').removeClass('hidden');

		});
	}



	get_text_id() {
		return 'text-' + this.id;
	}

	// Graph

	load_graph() {
		var self = this;

		$(this.section).find('.edit').addClass('hidden');
		this.section.find('.graph-image').addClass('hidden');
		this.section.addClass('placeholder');
		
		if (this.base64 != "")
			this.params['ggbBase64'] = this.base64;
		this.applet = new GGBApplet(this.params, '5.0', this.get_graph_id(), true);
		this.applet.inject();
		let state = true;
		let interval = setInterval(function() {
			if ($('#' + self.get_graph_id()).find('.jsloaded').length == 1) {
				$('#' + self.get_graph_id()).parent('.geogebra').removeClass('hidden');
				clearInterval(interval);
			}
		}, 200);
	}

	enable_graph_listener() {
		var self = this;
		let clickListener = $(this.section).find('.geogebra-options').find('button').on('click', function() {
			if($(this).hasClass('save')) {
				self.pngBase64 = ggbApplet.getPNGBase64(1, 100);
				self.base64 = ggbApplet.getBase64();
				self.close_graph();
			}
		});

		let editBtn = $(this.section).find('.edit').on('click', function() {
			self.load_graph();
		});
		this.listeners.push(clickListener);

	}

	get_graph_id() {
		return 'graph-' + this.id;
	}

	close_graph() {
		ggbApplet.remove();

		$('#' + this.get_graph_id()).parent('div').addClass('hidden');
		this.section.removeClass('placeholder');
		this.section.find('.edit').removeClass('hidden');
		this.section.find('.graph-image').find('img').attr('src', prefixImage + this.pngBase64);
		this.section.find('.graph-image').removeClass('hidden');
	}
}

function checkTextSections() {
	$.each(sections, function(index, section) {
		console.log(':(');
		if (section.alive && section.editing) {
			console.log(':D');
			section.render_();
		}
		$('.text-options').addClass('hidden');
	});
}

$(document).ready(function() {
	$(document). on('click', '.options-add', function() {
		$(this).parent('div').find('.options-buttons').css('display', 'inline-block');

	}).on('click', '.options-btn', function() {
		sections.push(new Section($(this), $(this).attr('data-type')))
		$('.options-buttons').css('display', 'none');

	}).on('click', '.section', function() {
		$(this).find('input, textarea').focus();
		$(this).find('.pointer')[0].click();

	}).on('mouseover', '.section', function() {
		if (!$(this).hasClass('focus'))
			$(this).addClass('focus hover');

	}).on('mouseout', '.section', function() {

		if ($(this).find('input:focus').length == 0 && $(this).find('textarea:focus').length == 0) {
			$(this).removeClass('focus');
		}
		$(this).removeClass('hover')

	}).on('click', function(e) {
		if (!$(e.target).hasClass('options-btn') && !$(e.target).hasClass('options-add')) {

			$('.options-buttons').css('display', 'none');
		}

		if ($('.focus') && !($(e.target).hasClass('focus').length || $(e.target).closest('.focus').length )) {
			$('.focus').removeClass('focus');
			$('.pointer').prop('checked', false);

			checkTextSections();
		}

	}).on('change', '.pointer', function() {
		console.log('asd');
		if ($(this).is(':checked')) {
			$('.section').removeClass('focus');
			$(this).closest('.section').addClass('focus').removeClass('hover');
		}

	}).on('input', 'textarea', function() {
		var el = this;
		setTimeout(function(){
			el.style.cssText = 'height:auto; padding:0';
			// for box-sizing other than "content-box" use:
			// el.style.cssText = '-moz-box-sizing:content-box';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		},0);
	});

});
