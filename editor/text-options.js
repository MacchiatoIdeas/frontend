class Buttons {
	constructor() {
		this.templateBtn = ['<div class="option">',
            '					<button class="tooltip-btn" data-toggle="tooltip">B</button>',
          					'</div>'	
          					];

         this.

		this.element = $('.text-options');
	}

	getHtml() {
		return this.templateBtn.join('');
	}
}