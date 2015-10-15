/*
###Generator生成器函数
1. Generator函数是迭代器的子型,Generator函数也是返回一个迭代器
2. Generator函数与普通函数最大的不同就是:普通函数只有执行开始到结束return，而Generator函数是可以中断yield的，而后继续执行。
3. 可以把Generator函数看成是状态机，里面封装了多个状态。
4. Generator函数中也可以出现return语句，直接结束Gererator函数，将返回结果放到value中。
5. 在Generator函数中使用另外一个Generator函数，必须使用`yield*`。相当于把被调用的Generator函数的代码拷贝到调用方。
*/

"use strict";

function* generator() {
    yield "hello!";
    yield "world!";
}

function* generatorProxy() {
    yield "greetings!";
    yield* generator();
    yield "bye";
}

for( let a of generatorProxy()) {
    console.log(a);
}

var iter = generatorProxy();
console.log(iter.next());
console.log(iter.next());
console.log(iter.return("bob"));
console.log(iter.next());