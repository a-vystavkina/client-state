'use strict';


const editor = document.getElementById('editor');
const elClear = document.getElementById('clear');

document.addEventListener('DOMContentLoaded', function() {
	let getLS = localStorage.getItem('textEditor');
	if (getLS) editor.value = getLS;
});


editor.addEventListener('keyup', function() {
	localStorage.setItem('textEditor', editor.value);
});

elClear.addEventListener('click', function(){
	editor.value = '';
	localStorage.removeItem('textEditor');
});