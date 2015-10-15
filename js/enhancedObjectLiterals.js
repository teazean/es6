/*
###增强的Object字面量
1. 支持__proto__
2. 属性、方法的简写
3. super调用
4. 表达式确定属性名，用[]包裹
*/
"use strict";

var handler = function(){
    return "handler";
}

var a = {
    toString() {
        return "Object-a";
    }
}
var b = {
    //支持定义__proto__
    __proto__: a,
    //handler:handler的属性简写
    handler,
    //方法简写 
    toString() {
        //super关键词的使用
        return "d " + super.toString();
    },
    //动态确定属性名
    ["prop_" + (()=>42)]: 42
}

console.log(b.handler());
console.log(b.toString());