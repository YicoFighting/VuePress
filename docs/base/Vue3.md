---
sidebar: auto
---

# 1、基础语法

Vue 是声明式编程，原生 JavaScript 是命令式编程。

## 1.1、CDN 引入

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CDN引入</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- CDN地址 -->
    <script src="https://unpkg.com/vue@next"></script>
    <script>
      // 使用Vue
      const app = Vue.createApp({
        template: `<h2>Hello World</h2><span>你好,前端</span>`,
      });
      // 挂载
      app.mount('#app');
    </script>
  </body>
</html>
```

## 1.2、本地引入

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>本地引入</title>
  </head>
  <body>
    <div id="app">
      <h2>当前计数: {{counter}}</h2>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>

    <script src="./lib/vue.js"></script>
    <script>
      const app = Vue.createApp({
        data: function () {
          return {
            counter: 0,
          };
        },
        methods: {
          increment: function () {
            this.counter++;
          },
          decrement: function () {
            this.counter--;
          },
        },
      });
      app.mount('#app');
    </script>
  </body>
</html>
```

## 1.3、data 属性

data 属性是传入一个函数，并且该函数需要返回一个对象。

data 中返回的对象会被 Vue 的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理。

```javascript
const obj = {
  key: '值',
};
//方式一(Vue2劫持方法)
Object.defineProperty(obj, 'key', {
  get: () => {},
  set: () => {},
});

//方式二(Vue3劫持方法)
new Proxy(obj, {
  get: () => {},
  set: () => {},
});
```
