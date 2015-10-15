/*
###proxy代理
为一个对象创建代理对象（方法、属性完全一致），当你访问这个代理对象的方法、属性的时候，可以做一些预操作如拦截等。
1. 如果一个对象的proxy属性定义了Proxy对象，访问该对象时，默认访问Proxy对象。


###Reflect反射
在运行级别上获取对象的运行状态，进行查看、修改等。
1. 如Object.defineProperty(obj, name, desc)在无法定义的时候，会抛出错误，而Reflect.defineProperty(obj, name, desc)会返回fasle。
2. Reflect意在处理Object上的一些语言层面的方法，未来的新方法都会部署在Reflect对象上。
3. Reflect对象上的放法与Proxy的方法一一对应，方便于Proxy对象调用Reflect对象完成被代理对象的默认操作。
*/

"use strict";

var proxy = {
    //拦截属性
    get(target, name){
        console.log("proxy get" +name);
        Reflect.get(target, name);
    },
    //拦截Proxy的对象当做方法
    apply(target, object, args){
        console.log("proxy apply");
        Reflect.apply(target, object, name);
    },
    //拦截Proxy的对象当做构造函数
    constructor(target, args) {
        console.log("proxy constructor");
        Reflect.constructor(target, args);
    }
}


var my = {
    a : 1,
    abs () {
        console.log("func abs");
    }
}

my.proxy = new Proxy(my, proxy);

console.log(my.a);
