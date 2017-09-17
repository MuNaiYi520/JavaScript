class Student {
	constructor(name) {
		this.name = name;
	}

	hello() {
		console.log(`Hello,${this.name}!`);
	}
}

class PrimaryStudent extends Student {
	constructor(name, grade) {
		super(name); //用super调用父类的构造方法
		this.grade = grade;
	}

	myGrade() {
		console.log(`I am at grade ${this.grade}`);
	}
}

var xiaoming = new Student('小明');
xiaoming.hello();

var xiaoHong = new PrimaryStudent('小红', 20);
xiaoHong.hello();
xiaoHong.myGrade();

('use strict');
class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Cat extends Animal {
	say() {
		console.log(`Hello,${this.name}`);
	}
}

var xiaoMaoMi = new Cat('小喵咪');
xiaoMaoMi.say();
