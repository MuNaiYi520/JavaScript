const crypto = require('crypto');

//MD5是一种常用的哈希算法,用于给任意数据一个"签名",这个签名通常用一个十六进制的字符串表示
const hash = crypto.createHash('md5');
const sha1 = crypto.createHash('sha1');
const sha256 = crypto.createHash('sha256');
const sha512 = crypto.createHash('sha512');

// 可任意多次调用update():
//update()方法默认字符串编码为UTF-8，也可以传入Buffer。
hash.update('Hello,world.');
sha1.update('Hello,Nodejs!');
sha256.update('Hello,Nodejs!');
sha512.update('Hello,Nodejs!');

console.log(`hash:${hash.digest('hex')}`);

console.log(`sha1:${sha1.digest('hex')}`);

console.log(`sha256:${sha256.digest('hex')}`);
console.log(`sha512:${sha512.digest('hex')}`);