# 1.基础认识
Reflect（反射）：本质是调用对象的基本方法。
基本方法：mdn link
ES6新增的，开放了对外暴露的，对象上的基本方法。
ES6之前不能直接调用，只能从其他方式，如

```js
// 设置属性值
const obj = {};
obj.a = 3;
```
上面👆🏻对应于触发[[Set]]基本方法
```js
Reflect.set(obj, 'a', 3);
```

# 2.Reflect意义何在 
> 当我们写一段语法时，并非直接调用，而是去执行一个被封装过后的方法，在这个被封装过后的方法里，调用了基本方法。
> 因此我们在使用语法的时候，它还做了些额外的事情
```js
const obj = {
	a: 1,
    b: 2,
    get c() {
		return this.a + this.b;
    }
};

console.log(obj.c); // 3
```

略...见抖音TC目录