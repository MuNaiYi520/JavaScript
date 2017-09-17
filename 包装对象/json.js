//序列化
var xiaoming = {
	name: '小明',
	age: 14,
	gender: true,
	height: 1.65,
	grade: null,
	'middle-school': '"W3C" Middle School',
	skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

console.log('序列化后:', JSON.stringify(xiaoming));
console.log('序列化后输出好看一些:', JSON.stringify(xiaoming, null, ' '));

console.log('序列化时也可以指定需要序列化的属性:', JSON.stringify(xiaoming, ['name', 'age', 'skills'], ' '));

//还可以传入一个函数,这样对象的每个键值对都会被函数先处理
function convert(key, value) {
	if (typeof value === 'string') {
		return value.toUpperCase();
	}
	return value;
}

console.log('被函数处理过后:', JSON.stringify(xiaoming, convert, ' '));

//如果我们还想要精确控制如何序列化小明,可以xiaoming1定义一个toJSON()的方法,
//直接返回JSON应该序列化的数据:
var xiaoming1 = {
	name: '小明',
	age: 14,
	gender: true,
	height: 1.65,
	grade: null,
	'middle-school': '"W3C" Middle School',
	skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
	toJSON: function() {
		//此处的函数名只能是toJSON
		return {
			//这里只输出name和age,并且改变了key
			Name: this.name,
			Age: this.age
		};
	}
};

console.log('精确控制序列化后:', JSON.stringify(xiaoming1));

//反序列化
console.log(JSON.parse('[1,2,3,true]'));
console.log(JSON.parse('{"name":"小明","age":14}'));
console.log(JSON.parse('true'));
console.log(JSON.parse('123.45'));

//JSON.parse()还可以接收一个函数,用来转换解析出的属性
var temp = JSON.parse('{"name":"小明","age":14}', function(key, value) {
	if (key === 'name') {
		return value + '同学';
	}
	return value;
});

console.log(temp);
