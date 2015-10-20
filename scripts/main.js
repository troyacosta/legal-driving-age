'use strict';

var ageInput = document.getElementById('ageInput');
var message = document.getElementById('message');
var form = document.querySelector('form');

form.addEventListener('submit',function(e) {
	e.preventDefault();
	var age = parseInt(ageInput.value, 10);
	message.innerHTML = (age < 16) ? 'Sorry, you\'re too young' : 'Congrats, you\'re old enough to drive!';
});