class Editor {
	constructor(id) {
		this.id = id;
		this.editor = editormd(id, {
	        path: "vendor/editormd/lib/",
	        tex: true,
	        autoHeight : true,
	        watch: false,
	        placeholder: "Inserte un texto aquí",
	        saveHTMLToTextarea: true,
	        toolbarAutoFixed: false,
	        toolbar: false,
	        imageUpload: true,
	        imageUploadUrl: "images/",
	        lineNumbers: false,
        	styleActiveLine: false,
        	saveHTMLToTextarea: true,
        	autoFocus: false,
	    });
	}

	getHtml() {
		return this.editor.getHTML();
	}
}