// ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
/*
const m = new Map();
const o = {p:"Hello World"};
m.set(o,"content");
console.log(m.get(o));//content

m.has(o);//true
m.delete(o);
m.has(o);//false*/

/*const map=new Map([
    ["name","张三"],
    ["title","Author"]
]);
console.log(map.size);
console.log(map.has("name"));
console.log(map.get("name"));
console.log(map.has("title"));
console.log(map.get("title"));*/

// Map构造函数接受数组作为参数,不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数
/*
const item=[
    ["name","张三"],
    ["title","Author"]
];
const map = new Map();
item.forEach(
    ([key,value])=>map.set(key,value)
);
const set = new Set([
    ["foo",1],
    ["bar",2]
]);
const m1 = new Map(set);
m1.get("foo");//1
const m2 = new Map([["bar",3]]);
const m3 = new Map(m2);
m3.get("baz");//3
const map1 = new Map();
// 同一个键多次赋值，后面的值将覆盖前面的值。
map1.set(1,"aaa").set(1,"bbb");
console.log(map1);
*/

// Map转为数组
const myMap = new Map();
myMap.set(true,7).set({foo:3},["abc"]);
console.log([...myMap]);//[ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
// 数组转为Map
const myMap2=new Map([
    [true,7],
    [{foo:3},["aabc"]]
]);
console.log(myMap2);//Map { true => 7, { foo: 3 } => [ 'aabc' ] }
//map转对象
function StrMapToObj(str) {
    let obj = Object.create(null);
    for (let [k,v] of str){
        obj[k]=v;
    }
    return obj;
}
const myMap3 = new Map();
myMap3.set("yes",true).set("no",false);
console.log(StrMapToObj(myMap3));//{ yes: true, no: false }
//对象转Map
function objToMap(obj) {
    let str=new Map();
    for (let k of Object.keys(obj)){
        str.set(k,obj[k]);
    }
    return str;
}
console.log(objToMap({yes:true,no:false}));//{ yes: true, no: false }
// Map转JSON
function MapToJson(map) {
    return JSON.stringify(StrMapToObj(map));
}
let myMap4=new Map().set("yes",true).set("no",false);
console.log(MapToJson(myMap4));//{"yes":true,"no":false}

//JSON转为Map
function JSONToMap(json) {
    return objToMap(JSON.parse(json));
}
console.log(JSONToMap('{"yes":true,"no":false}'));//Map { 'yes' => true, 'no' => false }





