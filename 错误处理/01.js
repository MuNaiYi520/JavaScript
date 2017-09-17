'use strict';

var r1, r2, s = null;
try {
    r1 = s.length;
    r2 = 100;
} catch (error) {
    console.log("出错了:" + error);
} finally {
    console.log("finally");
}
console.log('r1=' + r1);
console.log('r2=' + r2);