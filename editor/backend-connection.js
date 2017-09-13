// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function sendContent() {
	$('.focus').removeClass('focus');
	$('.pointer').prop('checked', false);
	//$('.save').click();
	checkTextSections();
	let html = $('#editor').html();
	let text = "";
	let subtitle = $('.section.title').first().find('input[type="text"]').val();
	let summary = $('.section.text').first().find('.editormd-html-textarea').val();
	summary = $(summary).text().substring(0, 150);

	$('.section').each(function() {
		text += '<div class="section">';
		if ($(this).hasClass('text'))
			text += $(this).find('.editormd-html-textarea').val();
		else if ($(this).hasClass('title')){			
			let h1Content = $(this).find('input[type="text"]').val();
			text += '<h1>' + h1Content + '</h1>';
		}
		else if ($(this).hasClass('graph'))
			text += $(this).find('.graph-image').html();
		text += '</div>';
	});

	var data = {
		unit: '1',
		summary: summary,
		subtitle: subtitle,
		text: text.replace(/\"/g, "'").replace(/\\n/g, ""),
		html_text: "<h1> Marzzelo </h1>",
		}

	data = JSON.stringify(data)
	console.log("data", data);
	


console.log("data", data);
	$.ajaxSetup({
	    beforeSend: function(xhr, settings) {
	        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
	            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
	        }
	    }
	});
	$.ajax({
		url: "http://localhost:8000/",
		type: "GET",
	}).done(function(response) {
		console.log("response", response);
	});


	$.ajax({
		url: "http://localhost:8000/material/content/",
		type: "POST",
        contentType: "application/json; charset=utf-8",
		data: data,
		headers: { 'X-CSRFToken': getCookie('csrftoken'), 'Authorization': 'Basic aGVybmFuaGVycmVyb3M6c2FtYW50aGEwMDc='},
	}).done(function(response) {
		if (response['id'] > 0) {
			alert('Guardado con éxito');
		}
	});
}