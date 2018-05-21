/*const s = new Set();
//类似于数组，但是成员是唯一的，没有重复的值
[2,3,5,4,5,2,2].forEach(x=>s.add(x));
for (let i of s) {
    console.log(i);
}*/

/*
const set = new Set([1,2,3,4,5]);
console.log([...set]);
console.log(set.size);
*/

/*
// 数组去重,但是并不排序
let arr=[1,2,2,4,6,7,3,4,6,35,6,8,1];
arr=[...new Set(arr)];
console.log(arr);
*/

/*
// 向set中加入值得时候，不会进行类型转换
let set=new Set();
let a=NaN;
let b=NaN;
set.add(a).add(b);
console.log(set);//Set { NaN }  在set内部，NaN是一个相等的值，所以只能加入一个
set.add({}).add({});
console.log(set);//Set { NaN, {}, {} } 在set内部，每一个对象都是一个独一无二的值，两个空对象也不相同
*/

// Set实例的属性和方法
// Set.prototype.constructor
// Set.prototype.size
// Set.prototype.add
// Set.prototype.delete
// Set.prototype.has
// Set.prototype.clear

/*let set=new Set();
set.add(1).add(2).add(3);
console.log(set.size);//3
console.log(set.has(2));//true
set.delete(2);
set.clear();
console.log(set.has(2));//false*/

// 遍历操作
// 查看键值key和value值
/*
let set = new Set(["red","green","blue"]);
for (let item of set.keys()){
    console.log(item);
}
for (let item of set.values()){
    console.log(item);
}
for (let item of set.entries()){
    console.log(item);
}
set.forEach((key,value)=>console.log(key+"-"+value));
*/


/*
let set = new Set(["red","blue","green"]);
let arr = [...set];
console.log(arr);
console.log(set);

let arr2=[3,4,5,3,1,3];
let unique=[...new Set(arr2)];
console.log(unique);
*/

//map与filter
/*
let set = new Set([1,2,3]);
set = new Set([...set].map(x=>x*2));
console.log(set);// Set { 2, 4, 6 }

let set2 = new Set([1,2,3,4,5]);
set2=new Set([...set2].filter(x=>(x%2)===0));
console.log(set2);// Set { 2, 4 }
*/

//集合的处理
/*
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);
//并集
let union = new Set([...a,...b]);
console.log(union);//Set { 1, 2, 3, 4 }
//交集
let intersect = new Set([...a].filter(x=>b.has(x)));
console.log(intersect);//Set { 2, 3 }
//差集
let diff = new Set([...a].filter(x=>!b.has(x)));
console.log(diff);//Set { 1 }
*/

/*
let set = new Set([1,2,3]);
set = new Set([...set].map(value => value*2));
console.log(set);//Set { 2, 4, 6 }
let set2 = new Set([1,2,3]);
set2 = new Set(Array.from(set2,v => v*2))
console.log(set2);//Set { 2, 4, 6 }
*/













