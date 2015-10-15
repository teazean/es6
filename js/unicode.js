/*
###unicode
unicode是变长字节进行编码，从1~6个字节都有可能，ES6提供了对unicode的支持。
*/

"use strict";

// same as ES5.1
// 与 ES5.1 相同
"𠮷".length == 2

// new RegExp behaviour, opt-in ‘u’
// 新的正则表达式行为，使用可选的‘u’修饰符
"𠮷".match(/./u)[0].length == 2

// new form
// ES5.1的写法是`反斜杠+u+码点`，新的形式可以通过添加一组大括号`{}`来表示超过四字节的码点
"\u{20BB7}"=="𠮷"=="\uD842\uDFB7"
console.log("\u{20BB7}");
console.log("\uD842\uDFB7");

// new String ops
// 新的字符串处理方法
"𠮷".codePointAt(0) == 0x20BB7

// for-of iterates code points
// foo-of 以码位为单位进行迭代
for(var c of "𠮷") {
  console.log(c);
}