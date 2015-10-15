/*
###symbol
symbol是ES6中继null、undefined、number、string、boolean、object之后的新原语。
1. symbol可以作为属性的键来访问属性。
2. symbol是独一无二的。
*/

"use strict";

var a = Symbol("hello");
var b = Symbol("hello");

console.log(a == b);//false

var obj = {
    [a]: "a",
    [b]: "b"
}

console.log(obj[a]);
console.log(obj[b]);