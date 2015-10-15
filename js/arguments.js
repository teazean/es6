/*
###默认参数+不定参数+参数展开
*/

"use strict";
//默认参数
function f(x, y=12) {
    return x + y;
}
console.log(f(3));

//不定参数
function g(x, ...y) {
    return x * y.length;
}
console.log(g(3,"hello", true));

//参数展开
function h(x, y ,z){
    return x + y + z;
}
console.log(h(...[1,2,3]));