/*
###模板字符串template strings:`` （区别于'' ""）
1. 支持变量插入。
2. 支持保持原来的格式，如换行等。
3. 通过标签(tag)来自定义构造字符串，避免注入攻击，或者基于字符串构建更高层次的数据结构。

*/

"use strict";

var name = "Bob",
    time = "today";

var a = `Hello ${name}, how are you ${time}`;
console.log(a);



//标签模板
var message = safeHTML`<p>${name} has sent you a message.</p>`;
function safeHTML(template) {
    var s = template[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        s += arg.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
        s += template[i];
    }
    return s;
}

console.log(message);