/*
###Arrows箭头操作符，Lambda表达式
1. 该表达式用于创建匿名函数。与普通函数不同的是，箭头函数和其上下文中的代码共享一个具有词法作用域的this。
2. `n => n*2`或者`n => ({n:n})`，若右边是一个语句，解析成`return 语句`;
3. `n => {var m =1 ;return n*m;}`，若右边是一个语句块，解析成语句块执行，若有返回值，在语句块自行返回。
*/
"use strict";

var arr = [1,2,3];
var newArr = arr.map((e,i) => ({e:e, i:i}));
console.log(newArr);

var bob = {
    _name: "Bob",
    _friends: ["Amy", "Bob", "Cinne"],
    printFriends() {
        this._friends.forEach( f => console.log(this._name + " knows " + f));
    }
}
bob.printFriends();
