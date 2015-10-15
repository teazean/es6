/*
###Promise对象
相当于jquery中的延迟对象
1. Promise对象只有三个状态Pending、Resolved、Rejected.
2. 创建Promise对象的resolve、reject由编译器提供。resolve将Promise状态从Pending变成Resolved。reject将Promise状态从Pending变成Rejected。
*/

//一个完整的Promise对象

var promise = new Promise(function(resolve, reject){
    //dosomething

    if ( true) { //成功
        resolve("s");
    } else {
        reject("f"); 
    }
});
promise.then(function(value){
    console.log("s")
    //resolved回调
}, function(value) {
    //rejected回调
});