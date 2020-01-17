'use strict';


const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const login = document.getElementsByName('login')[0];
const logout = document.getElementById('logout__btn');

document.addEventListener('DOMContentLoaded', function () {

	if (localStorage.getItem('lsAuth')) {
		let dataLogId = JSON.parse(localStorage.getItem('lsAuth'));

		welcome.classList.add('welcome_active');
		userId.textContent = `${dataLogId.login} (id = #${dataLogId.id})`;
	} else {
		signin.classList.add('signin_active');
	}
});

logout.addEventListener('click', function () {
	signin.classList.add('signin_active');
	welcome.classList.remove('welcome_active');
	localStorage.removeItem('lsAuth');
});

document.forms['signin__form'].addEventListener('submit', event => {
	event.preventDefault();

	let xhr = new XMLHttpRequest();
	let form = document.getElementById('signin__form');
	let formData = new FormData(form);

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
	xhr.send(formData);
	
	xhr.addEventListener('readystatechange', function () {

		if (this.readyState == xhr.DONE && this.status == 200) {
			let data = JSON.parse(this.responseText);

			if (data.success) {
				signin.classList.remove('signin_active');
				welcome.classList.add('welcome_active');
				userId.textContent = `${login.value} (id = #${data.user_id})`;

				let dataLogId = JSON.stringify({login: login.value, id: data.user_id});
				localStorage.setItem('lsAuth', dataLogId);
				clearInput();
			} else {
				alert('Неверный логин/пароль');
			}
		}
	});
});

function clearInput() {
	let elInput = document.getElementsByTagName('input');
	for (let i = 0; i < elInput.length; i++) {
		elInput[i].value = '';
	}
}