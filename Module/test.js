'use strict';

var a = {
    name: 1
};

var b = a;

console.log(a);
console.log(b);
console.log('a是一个对象,b是对a的引用,即a和b指向同一块内存,所以此处的输出是一样的.');

b.name = 2;
console.log('b.name is modify ...')
console.log(a);
console.log(b);
console.log('当对b做修改时,即a和b指向同一块内存地址的内容发生了改变,所以a也会体现出来,所以此处的输出也是一样的.');

var b = {
    name: 3
}

console.log(a);
console.log(b);

console.log('当b被覆盖时,b指向了一块新的内存,a还是原来的内存,所以最后两个输出不一样.');