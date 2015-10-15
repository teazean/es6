/*
###ES6模块化
1. 像AMD、commonjs等规范都是执行时加载文件，引入模块，而ES6模块是预编译时就确定模块之间的依赖、变量的输出、输入。
2. 使用export输出模块内的变量、方法。使用import引入模块的变量、方法。as对模块重命名、from指向模块文件。
3. 使用export default为一个模块设置默认输出
4. 处理module的还有一个module loader的草案，<https://people.mozilla.org/~jorendorff/es6-draft.html#>
*/

"use strict";

// 引入默认的
// import M from "js/module/math.js";
// console.log(M);


// 引入指定变量、方法
import {PI, abs} from "js/module/math.js";
console.log(PI);
console.log(abs);