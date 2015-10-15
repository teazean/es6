/*
###for...of 遍历
1. for...of 遍历所有支持iterator的数据结构
2. for...in会遍历所有属性，包括原型的属性，但for...of不会.
3. forEach不能使用break、return等。for...of支持。

###iterator迭代器
1. 拥有[Symbol.iterator]的集合被称为可迭代的，可以被for...of循环。
2. [Symbol.iterator]是一个函数，调用返回一个迭代器对象。
3. 支持iterator的集合有：数组、Set、Map、字符串、Generator。对象并不支持itertor，但你可以1.对对象的[Symbol.iterator]赋值使其支持迭代器、2.使用
Array.from将类数组转化为数组、3.Object.keys生成数组。
4. 迭代器有next、return方法，如果for-of循环过早退出会调用return()方法，异常、break、return语句均可触发过早退出。
5. 迭代器返回的每一次数据有两个属性`{value:"11",done:false/true}`
*/

var a = {
    0: "h",
    1: "e",
    2: "l",
    3: "l",
    4: "o",
    length: 5,
    [Symbol.iterator](){
        var me = this,
            _cur = 0;
        return {
            next() {
                if (_cur >= me.length) {
                    return {done:true}
                } else {
                    return {done:false, value: me[_cur++]};
                }
            },
            return() {
                console.log("iterator return");
            }
        }
    }
};

var i = a[Symbol.iterator]();
console.log(i);

for (let i of a) {
    console.log(i);
    if ( i === "l") {
        break;
    }
}