/*
    let是块级变量声明
    const是块级常量声明
*/

//i只在for内部有用
var arr = [1,2,3];
for(let i = 1; i< arr.length; i++){
    //
}
console.log(i);//error

{
    const c = "hello world!";
    c = "you";//error
}
console.log(c);//error