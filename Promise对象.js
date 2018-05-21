//simple promise realise
/*
function delay(time,num) {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log(num);
            resolve();
        },time*1000);
    }))
}
delay(1,1).then(()=>{
    return delay(2,2);
}).then(()=>{
    delay(3,3);
});*/

//resolve and reject's Parameter passing
/*// resolve
new Promise(((resolve, reject) => {
    resolve("Happy");
})).then(value => {
    console.log(value);
});
// reject
new Promise(((resolve, reject) => {
    reject("error");
})).then(value =>{},err=>{
    console.log(err);
} );
//链式调用
new Promise(((resolve, reject) => {
    resolve("a");
})).then(value => {
    console.log(value);//a
    return "b";
}).then(value => {
    console.log(value)//b
    return "c";
}).then({//传递的不是一个函数，所以直接忽略该级
    name:'lan'
}).then(value => {
    console.log(value);
});*/
// 测试对参数传递的理解程度
/*
let doSomething = function() {
    return new Promise((resolve, reject) => {
        resolve('返回值');
    });
};
let doSomethingElse = function() {
    return '新的值';
};
doSomething().then(function () {
    return doSomethingElse();
}).then(resp => {
    console.warn(resp);//新的值
    console.warn('1 =========<');
});
doSomething().then(function () {
    doSomethingElse();
}).then(resp => {
    console.warn(resp);//undefined
    console.warn('2 =========<');
});
doSomething().then(
    doSomethingElse()
).then(resp => {
    console.warn(resp);//返回值
    console.warn('3 =========<');
});
doSomething().then(
    doSomethingElse
).then(resp => {
    console.warn(resp);//新的值
    console.warn('4 =========<');
});*/

//then中的回调总会异步执行
/*
new Promise(((resolve, reject) => {
    console.log('a');
    resolve('');
})).then(()=>{
    console.log("b");
});
console.log('c');
// 输出顺序为acb：then中的回调总会异步执行
*/
//如果不调用resolve或者reject那么then方法永远不会被触发
/*
new Promise(((resolve, reject) => {
    console.log("d");
})).then(()=>{//then方法永远不会被触发
    console.log("e");
});*/

//Promise.resolve && Promise.reject
/*
Promise.resolve("a");
Promise.reject("b");
//等价于
new Promise(((resolve, reject) => {
    resolve("a");
}));
new Promise(((resolve, reject) => {
    reject("b");
}));
*/

// Promise.all():Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。
/*function asyncFn1() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            resolve("a");
        },1000);
    }));
}
function asyncFn2() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            resolve("b");
        },1000);
    }));
}
function asyncFn3() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            resolve("c");
        },1000);
    }));
}*/
//有了all，你就可以并行执行多个异步操作
/*Promise.all([asyncFn1(),asyncFn2(),asyncFn3()]).then(value => {
    //这里本身应该是每隔一秒输出一个字母，但是使用all之后，要全部运行结束之后才会输出完整的内容
    console.log(value);//[ 'a', 'b', 'c' ]
});*/
//race()和all相反，race()是一旦有一个Promise执行完毕就会执行then()
/*Promise.race([asyncFn1(),asyncFn2(),asyncFn3()]).then(value => {
    console.log(value);// a
});*/








