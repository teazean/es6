###相关URL
1. <http://www.infoq.com/cn/articles/es6-in-depth-generators>
2. <https://github.com/ES-CN/es6features/blob/master/README.md>
3. <http://es6.ruanyifeng.com/#docs/generator>


node.js：harmony模式

    node --harmony
    node -v8-options | grep harmony

执行:
npm环境：babel：e6到es5的转换器
    
    npm install -g babel
    
    babel a.js //将a.js转化成es5的实现
    babel a.js -o a-complied.js

    babel-node //进入REPL模式
    babel-node -e "class Test{}"
    babel-node test

    <https://babeljs.io/docs/usage/cli/>

    

html环境:
traceur
    
    npm install babel-core

    <script src="http://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="http://google.github.io/traceur-compiler/src/bootstrap.js"></script>
    <script type="module" src="js/proxy-reflect.js"></script>

babel:

    <script src="node_modules/babel-core/browser.js"></script>
    <script type="text/babel">
    class Test {
      test() {
        return "test";
      }
    }

    var test = new Test;
    test.test(); // "test"
    </script>