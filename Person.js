function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.sayName = () => { console.log(this.name); }

var person1 = new Person("张三", 33, "搬砖的");
person1.sayName();