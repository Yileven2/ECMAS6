let s=Symbol();
console.log(typeof s);

//Symbol函数前不能使用new命令，否则会报错

//Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
let s1=Symbol("foo");
let s2=Symbol("bar");
console.log(s1);
console.log(s2);

//如果 Symbol 的参数是一个对象，会先转换成字符串，然后再生成一个Symbol值
const obj= {
    toString() {
        return "abc";
    }
};
console.log(Symbol(obj));



















Symbol(obj)

