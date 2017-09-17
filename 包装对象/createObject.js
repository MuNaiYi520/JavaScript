'use strict';
//构造函数

function Student(name) {
	this.name = name;
	this.hello = function() {
		console.log('Hello,' + this.name + '!');
	};
}

var xiaoming = new Student('小明');
xiaoming.hello();
