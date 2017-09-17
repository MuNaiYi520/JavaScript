//原型继承
function Student(props) {
	this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function() {
	console.log(`Hello,${this.name}!`);
};

// var zhangSan = new Student({ name: '张三' });
// zhangSan.hello();

// var liSi = new Student({ name: '李四' });
// liSi.hello();

//现在，我们要基于Student扩展出PrimaryStudent，可以先定义出PrimaryStudent
function PrimaryStudent(props) {
	Student.call(this, props);
	this.grade = props.grade || 1;
}

//借助一个中间对象来实现正确的原型链
//空函数F
function F() {}

//把F的原型指向Student.prototype
F.prototype = Student.prototype;

//把PrimaryStudent的原型指向一个新的对象,F对象的原型正好指向Student.prototype
PrimaryStudent.prototype = new F();
//把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

//继续在PrimaryStudent原型（就是new F()对象）上定义方法
PrimaryStudent.prototype.getGrade = function() {
	return this.grade;
};

var xiaoming = new PrimaryStudent({
	name: '小明',
	grade: 2
});

console.log('xiaoming.name:', xiaoming.name);
console.log('xiaoming.grade:', xiaoming.grade);
console.log('xiaoming.hello()', xiaoming.hello());

//验证原型
console.log(xiaoming.prototype);
console.log(PrimaryStudent.prototype);
console.log(xiaoming._proto_ === PrimaryStudent.prototype);

//验证继承关系
console.log('xiaoming instanceof PrimaryStudent:' + xiaoming instanceof PrimaryStudent);
console.log('xiaoming instanceof Student:' + xiaoming instanceof Student);

function inherits(Child, Parent) {
	var F = function() {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
}

inherits(PrimaryStudent, Student);
