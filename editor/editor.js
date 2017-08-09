const prefixImage = "data:image/png;base64,";
var sections = [];
var titleHtml = ['<li>',
					'<div id="%id" class="section title">',
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
						'<div class="options">',
							'<span class="btn btn-link drag"><span class="glyphicon glyphicon-th"></span></span>',
							'<button class="btn btn-link remove"><span class="glyphicon glyphicon-remove"></span></button>',
						'</div>',
						'<textarea type="text" class="section-input" placeholder="Inserte un texto aquí"></textarea>',
					'</div>',
				'</li>',
				];
var graphHtml = ['<li>',
					'<div id="%id" class="section graph placeholder">',
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
		this.type = type;
		this.source = source;
		this.id = sections.length;
		this.listeners = [];
		this.content = "";
		this.pngBase64 = "";
		this.base64 = "";

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
			this.html = $(textHtml.join('').replace('%id', this.id));
		} else if (this.type == 'graph') {
			this.html = $(graphHtml.join('').replace(/\%id/g, this.id));
		}


		this.insert_section();

		if (this.type == 'graph') {
			this.params['width'] = this.section.width()
			this.params['id'] = this.get_graph_id()
			this.load_graph();
		}
	}

	insert_section() {
		$('.editor').append(this.html);
		this.section = $(this.get_id());
		this.enable_listener();
	}

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

	enable_listener() {
		var self = this;
		let listener = $(this.section).find('.remove').click(function() {
			self.remove_section();
		});

		if (this.type == 'graph') 
			this.enable_graph_listener();

		this.listeners.push(listener);
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

	get_id() {
		return '#' + this.id;
	}

	get_graph_id() {
		return 'graph-' + this.id;
	}

	remove_section() {
		$(this.section).remove();
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

$(document).ready(function() {
	$(document). on('click', '.options-add', function() {
		$(this).parent('div').find('.options-buttons').css('display', 'inline-block');

	}).on('click', '.options-btn', function() {
		sections.push(new Section($(this), $(this).attr('data-type')))
		$('.options-buttons').css('display', 'none');

	}).on('click', '.section', function() {
		$(this).find('.section-input').focus();

	}).on('mouseover', '.section', function() {
		if (!$(this).hasClass('focus'))
			$(this).addClass('focus hover');

	}).on('mouseout', '.section', function() {

		if ($(this).find('.section-input:focus').length == 0) {
			$(this).removeClass('focus');
		}
		$(this).removeClass('hover')

	}).on('click', function(e) {
		if (!$(e.target).hasClass('options-btn') && !$(e.target).hasClass('options-add')) {

			$('.options-buttons').css('display', 'none');
		}

		if ($('.focus') && !($(e.target).hasClass('focus').length || $(e.target).closest('.focus').length )) {
			$('.focus').removeClass('focus');
		}

	}).on('focus', '.section-input', function() {
		$('.section').removeClass('focus');
		$(this).closest('.section').addClass('focus').removeClass('hover');

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
