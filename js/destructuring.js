/*
###解构赋值，destructuring
1. 解构允许在(变量-值)绑定时，支持匹配数组和对象，解构支持失效弱化，差不结果时，生成undefined值。
2. 数组的解构赋值，可以指定默认值 如`var [x=1] =[]`;
3. 对象的解构赋值，可以更改变量名 如`var {m: m-alias} = {m: 2}`
4. 应用：
    +变量交换 `[y, x] = [x, y]`
    +函数的多值返回 
    +函数参数的解构赋值
    +对象的数据提取

*/
"use strict";

//数组解构
var [a, , b = 2] = [1,2]
console.log(a);
console.log(b);

//对象解构
function foo(){
    return {
        m: 11,
        y: 2025
    }
}

var {m: month , y: year} = foo();
console.log(month);
console.log(year);