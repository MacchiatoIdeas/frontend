//(function ($) {
	var sections = [];
	var titleHtml = ["<div id=\"%id\" class=\"section title\">",
						"<div class=\"options\">",
							"<button class=\"btn btn-link drag\"><span class=\"glyphicon glyphicon-th\"></span></button>",
							"<button class=\"btn btn-link remove remove\"><span class=\"glyphicon glyphicon-remove\"></span></button>",
						"</div>",
						"<h1><input type=\"text\" class=\"section-input\" placeholder=\"Inserte un título aquí\"></h1>",
					"</div>"
					];
	var textHtml = ["<div id=\"%id\" class=\"section text\">",
						"<div class=\"options\">",
							"<button class=\"btn btn-link drag\"><span class=\"glyphicon glyphicon-th\"></span></button>",
							"<button class=\"btn btn-link remove\"><span class=\"glyphicon glyphicon-remove\"></span></button>",
						"</div>",
						"<textarea type=\"text\" class=\"section-input\" placeholder=\"Inserte un texto aquí\"></textarea>",
					"</div>"
					];
	var graphHtml = "<div id=\"%id\" class=\"section graph\"><img src=\"http://placekitten.com/g/512/200\"></div>"


	class Section {
		constructor(source, type) {
			this.type = type;
			this.source = source;
			this.id = sections.length;
			this.content = "";

			if (this.type == 'title') {
				this.html = $(titleHtml.join('').replace('%id', this.id));
			} else if (this.type == 'text') {
				this.html = $(textHtml.join('').replace('%id', this.id));
			} else if (this.type == 'graph') {
				this.html = $(graphHtml).replace('%id', this.id);
			}


			this.insert_section();
		}

		insert_section() {
			let parent = this.source.closest('.options-buttons').closest('.editor-options')
			$(parent).before(this.html)
			this.section = $(this.get_id());
			this.enable_listener();
		}

		enable_listener() {
			var self = this;
			$(this.section).find('.remove').click(function() {
				self.remove_section();
			});		
		}

		get_id() {
			return '#' + this.id;
		}

		remove_section() {
			$(this.section).remove();
		}
	}

	$(document).ready(function() {
		$(document). on('click', '.options-add', function() {
			$(this).parent('div').find('.options-buttons').css('display', 'inline-block');
		});

		$(document).on('click', '.options-btn', function() {
			sections.push(new Section($(this), $(this).attr('data-type')))
			$('.options-buttons').css('display', 'none');
		});

		$(document).on('click', '.section', function() {
			$(this).find('.section-input').focus();
		});

		$(document).on('mouseover', '.section', function() {
			if (!$(this).hasClass('focus'))
				$(this).addClass('focus hover');
		});

		$(document).on('mouseout', '.section', function() {

			if ($(this).find('.section-input:focus').length == 0) {
				$(this).removeClass('focus');
			}
			$(this).removeClass('hover')
		});

		$(document).on('click', function(e) {
			if (!$(e.target).hasClass('options-btn') && !$(e.target).hasClass('options-add')) {

				$('.options-buttons').css('display', 'none');
			}

			if ($('.focus') && !($(e.target).hasClass('focus').length || $(e.target).closest('.focus').length )) {
				$('.focus').removeClass('focus');
			}
		});

		$(document).on('focus', '.section-input', function() {
			$('.section').removeClass('focus');
			$(this).closest('.section').addClass('focus').removeClass('hover');
		});

	});
//})(jQuery);