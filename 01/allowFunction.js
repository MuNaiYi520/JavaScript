/**
 * 箭头函数相当于匿名函数,并且简化了函数定义.箭头函数有两个格式:
 */
//1.只包含一个表达式,连{...}和return都省略掉了
x => x * x;
// 2.可以包含多条语句,这时候就不能省略{...}和return
//一个参数
x => {
  if (x > 0) {
    return x * x;
  } else {
    return -x * x;
  }
};

//多个参数
(x, y) => x * x + y * y;
//无参数
() => 3.14;
//可变参数
(x, y, ...rest) => {
  var i,
    sum = (x = y);
  for (var index = 0; index < rest.length; index++) {
    var element = rest[index];
    sum += element;
  }
  return sum;
};

//如果要返回一个对象,就要注意了,如果是单表达式,这么写的话会报错:
x => {
  foo: x;
};
x => {
  {
    foo: x;
  }
};
