/*
###set
1. 方法：add，delete，has，clear
2. 属性：size
3. 遍历：keys,values,entries,forEach (set没有key，key与values相同)

###map
1. 方法：set，get，has，delete，clear
2. 属性：size
3. 遍历：keys,values,entries,forEach

###weakset、weakmap
1. weakset、weakmap里面存储的只能是对象，里面的对象引用是弱引用，不被垃圾回收器考虑，当一个对象被垃圾回收器回收后，weakset、weakmap里面所有的对象引用会直接删除。
2. weakset、weakmap并不提供遍历方法。
*/

"use strict";
var s = new Set();
s.add("hello").add("world").add("!");
console.log(s.size);


var m = new Map();
m.set("hello", 1);
m.set("world", 2);
m.set("!", 3);
console.log(m.size);