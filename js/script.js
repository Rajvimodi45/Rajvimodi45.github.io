// WEB303 Assignment 2
// Rajvi Nilesh Modi

$(document).on("click", '#vprospect', function(event) { 
	var xhr = new XMLHttpRequest;
    xhr.open('GET', 'prospect.html', true);
    $('#vprospect').load('prospect.html #vprospect');
});
$(document).on("click", '#vconvert', function(event) { 
	var xhr = new XMLHttpRequest;
    xhr.open('GET', 'convert.html', true);
    $('#vconvert').load('convert.html #vconvert');
});
$(document).on("click", '#vretain', function(event) { 
	var xhr = new XMLHttpRequest;
    xhr.open('GET', 'retain.html', true);
    $('#vretain').load('retain.html #vretain');
});

