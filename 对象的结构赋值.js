/*
let {foo,bar} = {foo:"aaa",bar:"bbb"};
console.log(foo);//aaa
console.log(bar);//bbb
console.log("===================================");
*/

/*
let {foo:f1,bar:b1}={foo:"aaa",bar:"bbb"};
console.log(foo);//aaa
console.log(bar);//bbb
console.log(f1);//aaa
console.log(b1);//bbb
console.log("===================================");
*/

/*
//完整格式的对象解构复制
let {foo:foo,bar:bar}={foo:"aaa",bar:"bbb"};
console.log(foo);//aaa
console.log(bar);//bbb
*/

/*
let {foo:baz}={foo:"aaa"};
console.log(foo);//foo is not defined
console.log(baz);//aaa
*/

/*
let obj={
    p:[
        'Hello',
        {y:'World'}
    ]
};
let {p,p:[x,{y}]}=obj;
console.log(x);//Hello
console.log(y);//World
console.log(p);//[ 'Hello', { y: 'World' } ]
*/

/*
const node= {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let {loc,loc:{start},loc:{start:{line}}}=node;
console.log(line);// 1
console.log(loc);// { start: { line: 1, column: 5 } }
console.log(start);// { line: 1, column: 5 }
*/

/*
let {x=3}={x:2};
console.log(x);//2
//默认值生效的条件是，对象的属性严格等于undefined，null都不行
let {x2=3}={};
let {x3=3}={x3:undefined};
let {x4=3}={x4:null};
console.log(x2);//3
console.log(x3);//3
console.log(x4);//NULL
let {foo}={bar:"baz"};
//无法解构时返回的是undefined
console.log(foo);//undefined
*/

/*let {foo:{bar}}={foo:"aaa"};
// console.log(foo);//foo is not defined
console.log(bar);//undefined*/

/*
let x;
({x}={x:1});
console.log(x);//1
*/


/*
let {log,sin,cos,PI} = Math;
console.log(sin(PI/2));//1
*/

/*
let arr=[1,2,3];
let {0:first,[arr.length-1]:last}=arr;
console.log(first);//1
console.log(last);//3
*/

/*
//字符串的解构赋值
const [a,b,c,d,e]="Hello";
console.log(a+" "+b+" "+c+" "+d+" "+e);//H e l l o
let {length:len}="hello";
console.log(len);//5
*/

/*
let {toString:s}=123;
console.log(s===Number.prototype.toString);//true

let {toString:s2}=true;
console.log(s2===Boolean.prototype.toString);//true
*/

/*
//函数参数的解构赋值
function add([x,y]) {
    return x+y;
}
console.log(add([1,2]));//3

console.log([[1,2],[3,4]].map(([a,b])=>a*b));//[ 2, 12 ]
//函数也可以使用默认参数
function move({x=0,y=0}={}) {
    return [x,y];
}
move({x:3,y:8})//[3,8]
move({x:3})//[3,0]
move({})//[0,0]
move()//[0,0]
// undefined直接采取默认值
y=[1,undefined,3].map((x="yes")=>x);
console.log(y);//[ 1, 'yes', 3 ]
*/

//不能使用圆括号的情况1
/*
let [(a)]=[1];
let {x:(c)}={};
let ({x:c})={};
let {(x:c)}={};
let {(x):c}={};
let {o:({p:p})}={o:{p:2}};
*/
//不能使用圆括号的情况2
/*function f([(z)]) {
    return z;
}
function f1([z,(x)]) {
    return x;
}*/
//不能使用圆括号的情况3
/*({p:a})={p:42};
([a]=[5]);
[({p:a}),{x:c}]=[{},{}];*/

//可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
/*[(b)]=[3];
({p:(d)}={})
[(parseInt.prop)]=[3];*/

//用途1：交换变量的值
let x=1,y=2;
[x,y]=[y,x];
console.log(x+" "+y);//2 1

//用途2：从函数返回多个值
function e() {
    return [1,2,3];
}
let [a,b,c]=e();
function e2() {
    return {
        foo:1,
        bar:2
    }
}
let {foo,bar}=e2();

//用途3：函数参数的定义
function cf([x,y,z]) {
    //...
}
cf([1,2,3]);

function f2({x,y,z}) {
    //...
}
f2({z:3,x:2,y:1});

//用途4:提取JSON数据
let jsonData={
    id:42,
    status:"OK",
    data:[867,5309]
};
let {id,status,data:number}=jsonData;
console.log(id);
console.log(status);
console.log(number);

//用途5：函数参数的默认值
function f(x=1,y=3,z="ojbk") {
    //...
}

//用途6：遍历map解构
const map=new Map();
map.set("first","hello");
map.set("second","world");
for (let[key,value] of map){
    console.log(key+" is "+value);
}


