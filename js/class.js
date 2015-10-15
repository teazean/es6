/*
###Class类
1. ES6中，class仅仅是原型链的一层包装，是一个棉花糖表象。
2. ES6中，仅仅只有静态方法，静态属性在ES7的草案中提到。
3. ES6的继承的实质是先创建父类的对象this，然后在用子类的构造函数去装饰this。因此构造函数中使用this之前必须先调用super。
4. 子类若是没有显示定义constructor，都会有一个默认的constructor。
*/
'use strict';
//类定义
class Animal{
    constructor(age){
        this.age = age;
    }

    sleep() {
        //dosomething 
    }

    eat() {
        //dosomething 
        console.log("animal eat!");
    }

    static toAnimal(object){
        //dosomething    
    }
}

//继承
class Dog extends Animal{
    constructor(age, color) {
        super(age);
        this.color = color;
    }

    eat() {
        super.eat();
        console.log("dog eat!");
    }

}

var dog = new Dog(11, "red");
console.log(dog);
dog.eat();

