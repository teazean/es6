/*
ES6编译器中添加了对尾调用的优化。很多语言编译器也有对尾调用的优化。
尾调用：在函数的最后一个操作是另外一个函数调用。
优化：防止栈溢出
*/

"use strict";

function fac(n, acc=1){
    if (n <= 1) {
        return acc;
    }
    return fac(n-1, n + acc);
}

console.log(fac(100000));