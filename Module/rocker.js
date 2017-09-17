'use strict';

//module.exports = 'Rock IT!';

// exports.name = function () {
//     console.log('My name is Lemmy Kilmister');
// }


//这里展示的模块是一个类
// module.exports = function (name, age) {
//     this.name = name;
//     this.age = age;

//     this.about = function () {
//         console.log(`${this.name} is ${this.age} years old.`)
//     }
// }

//这里展示的模块时一个数组
//module.exports = ['Lemmy Kilmister', 'Ozzy Osbourne', 'Ronnie James Dio', 'Steven Tyler', 'Mick Jagger'];

//给Module.exports添加属性类似于给exports添加属性
// module.exports.name = function () {
//     console.log('My name is Lemmy Kilmister');
// }

//同样，exports是这样的
exports.name = function () {
    console.log('My name is Lemmy Kilmister');
};

exports.age = 30;