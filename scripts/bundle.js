(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var ageInput = document.getElementById('ageInput');
var message = document.getElementById('message');
var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	var age = parseInt(ageInput.value, 10);
	message.innerHTML = age < 16 ? 'Sorry, you\'re too young' : 'Congrats, you\'re old enough to drive!';
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map