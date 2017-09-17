'use strict';
// var logging = document.getElementById('test-promise2-log');
// while (logging.children.length > 1) {
// 	logging.removeChild(logging.children[logging.children.length - 1]);
// }

function log(s) {
	// var p = document.createElement('p');
	// p.innerHTML = s;
	// logging.appendChild(p);

	console.log(s);
}

function multiply(input) {
	return new Promise(function(resolve, reject) {
		log(`calculating ${input}*${input}...`);
		setTimeout(resolve, 500, input * input);
	});
}

function add(input) {
	return new Promise(function(resolve, reject) {
		log(`calculating ${input}+${input}...`);
		setTimeout(resolve, 500, input + input);
	});
}

var p = new Promise(function(resolve, reject) {
	log('start new Promise...');
	resolve(123);
});

p.then(multiply).then(add).then(multiply).then(add).then(function(result) {
	log(`Got value:${result}`);
});
