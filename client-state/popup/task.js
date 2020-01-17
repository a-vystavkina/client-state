'use strict';


const modalClose = document.querySelector('.modal__close');
const subscribeModal = document.getElementById('subscribe-modal');

document.addEventListener('DOMContentLoaded', function() {
	let cookie = document.cookie.split(';');
	console.log(cookie);
	for (let i = 0; i < cookie.length; i++) {
		
		if(cookie[i] === 'name=') {
			subscribeModal.classList.remove('modal_active');
		}
	}
});

modalClose.addEventListener('click', function() {
	subscribeModal.classList.remove('modal_active');
	document.cookie = 'name=; expires=Tue, 19 Jan 2038 03:14:07 GMT';
});

