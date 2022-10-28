---
sidebar: auto
---

# Vue

## 代码片段

```javascript
我们在前面练习Vue的过程中，有些代码片段是需要经常写的。
我们再VSCode中我们可以生成一个代码片段，方便我们快速生成。
VSCode中的代码片段有固定的格式，所以我们一般会借助于一个在线工具来完成。
具体的步骤如下：
第一步，复制自己需要生成代码片段的代码；
第二步，https://snippet-generator.app/在该网站中生成代码片段；
第三步，在VSCode中配置代码片段；
```

## class 数组语法

```javascript
<h2 :class="['abc',title]">{{message}}</h2>
//解析成<h2 :class="abc change">{{message}}</h2>
data() {
    return {
        message: "Hello World",
        title: "change"
    }
}
```

## v-bind

### 绑定属性

```javascript
<div :[key]="value">{{message}}</div>
// <div username="xzy">Hello World</div>
data() {
    return {
        message: "Hello World",
        key: "username",
        value: "xzy"
    }
}
```

### 绑定对象

- 可用来封装自己的组件

```javascript
<h2 v-bind="info">{{message}}</h2>
//<h2 name="xzy" age="18" height="175">Hello World</h2>
data() {
    return {
        message: "Hello World",
        info: {
            name: "xzy",
            age: 18,
            height: 175
        }
    }
}
```

## v-show

- 元素需要频繁的显示与隐藏时使用

```javascript
//v-show应该可以用来做后门
```

## v-for

- 遍历对象

```javascript
<ul>
	<li v-for="value in info" :key="value">{{value}}</li>
</ul>
<ul>
	<li v-for="(value,key) in info" :key="value">{{key + " : " + value}}</li>
</ul>
//xzy
//18
//女
//name : xzy
//age : 18
//sex : 女
data() {
    return {
        message: "Hello World",
        info: {
            name: "xzy",
            age: 18,
            sex: "女"
        }
    }
}
```

### 与 template 结合使用

- 不会出现多余的元素

```javascript
<ul>
    <template v-for="(value,key) in info" :key="value">
        <li>{{key}}</li>
        <li>{{value}}</li>
        <li></li>
	</template>
</ul>
data() {
    return {
        message: "Hello World",
        info: {
            name: "xzy",
            age: 18,
            sex: "女"
        }
    }
}
```

## computed

{ [key: string]: Function | { get: Function, set: Function }

因为后面是函数,所以可以省略成 key( ){ }

```javascript
<h2>{{fullName}}</h2>
<h2>{{reverseMessage}}</h2>
//xzy
//World Hello
data() {
    return {
        message: "Hello World",
        firstName: "x",
        lastName: "zy"
    }
},
computed: {
    fullName() {
    	return this.firstName + this.lastName
    },
    reverseMessage() {
    	return this.message.split(" ").reverse().join(" ")
    }
}
```

## watch 监听

```javascript
<h2>
    {{infoChange.children.children.name}}
</h2>
    <button @click="changeInfo">改变info</button>
    <button @click="changeInfoName">改变info.name</button>
<hr>
<h2>
    {{goodsChange[0].children.children.name}}
</h2>
    <button @click="changeGoods">改变品牌</button>
    <button @click="changeGoodsName">改变名字</button>
data() {
    return {
        info: { name: "zs", age: 18, children: { name: "钟", age: 20, children: { name: "雨", age: 22 } } },
        goods: [{ id: 1, name: "家电", children: { id: 11, name: "海信", children: { id: 111, name: "海信电视" } } }]
    }
},
//这里一定要写计算属性
//利用计算属性的缓存  深拷贝的数据旧值
//要不然侦听器  侦听不出旧值
computed: {
    infoChange() {
        return JSON.parse(JSON.stringify(this.info))
    },
    goodsChange() {
		return JSON.parse(JSON.stringify(this.goods))
	}
},

watch: {
    // 默认情况下,我们的侦听器只会针对监听的数据本身的改变
    // info(newVal, oldVal) {
    //     console.log("newVal:", newVal, "oldVal:", oldVal);
    // }

    //深度侦听  立即执行
    infoChange: {
        handler(newVal, oldVal) {
            //不写计算属性的话 这里是个bug   因为是引用，所以新值和旧值指向同一个地址
            console.log("newVal:", newVal, "oldVal:", oldVal);
        },
        //开启深度监听
        deep: true,
        //开启立即执行
        immediate: true
    },
	//复杂数据类型也能监听
    goodsChange: {
        handler(newVal, oldVal) {
        	console.log("newVal:", newVal, "oldVal:", oldVal);
        },
        immediate: true,
        deep: true
    }
},
methods: {
    changeInfo() {
        this.info.children.children = { name: "wh" }
    },
    changeInfoName() {
        this.info.children.children.name = "wlh"
   },
   changeGoods() {
        this.goods[0].children.children = { id: 12, name: "格力" }
   },
   changeGoodsName() {
        this.goods[0].children.children.name = "海信空调"
   }
}
```

## 对象的引用

```javascript
//   指针
const info = { name: 'lzh', age: 18 }; //info = 指针地址
const obj = info; //obj = info = 指针地址
info.name = 'xzy'; //info改变 所以obj发生变化
console.log(obj.name); //xzy
```

### 浅拷贝

```javascript
// 浅拷贝 拷贝简单对象没问题 拷贝复杂对象会有问题
// 简单对象
//创建一个地址空间A  存放 name: "lzh", age: 18
//info = A(指针地址)
const info = { name: 'lzh', age: 18 };
//创建一个地址空间B 存放空对象 {}
//将info的内容全拷贝地址B   所以B为 name: "lzh", age: 18
//obj = B(指针地址)
const obj = Object.assign({}, info);
//-----------------------------------------------------
//复杂对象
// children的地址空间是C
const info = { name: 'lzh', age: 18, children: { name: 'lyz', age: null } };
//object.assign()拷贝时,children的地址还是C
//所以当info中children发生改变时 obj里面的children也会发生改变
//他们指向同一个地址
const obj = Object.assign({}, info);
info.children.name = 'lzy';
console.log(obj.children.name); //lzy

//lodash(js库)  浅拷贝
//_.clone()
const info = { name: 'lzh', age: 18, children: { name: 'lyz', age: null } };
const obj = _.clone(info);
info.name = 'xzy';
info.children.name = 'lzy';
console.log(obj); //name: 'lzh', age: 18, children: {name: 'lzy', age: null}
```

### 深拷贝

```javascript
//1.JSON方法深拷贝
const info = { name: 'lzh', age: 18, children: { name: 'lyz', age: null } };
const obj = JSON.parse(JSON.stringify(info));
info.children.name = 'lzy';
console.log(obj.children.name); //lyz

//2.lodash  深拷贝
//_.cloneDeep()他这个的话应该是递归拷贝
const info = { name: 'lzh', age: 18, children: { name: 'lyz', age: null } };
const obj = _.cloneDeep(info);
info.children.name = 'lzy';
console.log(obj.children.name); //lyz
```

## v-model

```javascript
<!-- 复选框 -->
<span>你的爱好</span>
<label for="basketball">
    <input type="checkbox" id="basketball" v-model="hobbies" value="basketball">篮球
</label>
<label for="football">
    <input type="checkbox" id="football" v-model="hobbies" value="football">篮球
</label>
<label for="tennis">
    <input type="checkbox" id="tennis" v-model="hobbies" value="tennis">篮球
</label>
<br>
<span>hobbies:{{hobbies}}</span>
<!-- --------------------------------------------------------------------------------- -->
<!-- 单选框 -->
<br>
<span>性别</span>
<label for="male">
    <input type="radio" id="male" v-model="gender" value="male">男
</label>
<label for="female">
    <input type="radio" id="female" v-model="gender" value="female">女
</label>
<br>
<span>gender:{{gender}}</span>
<!-- --------------------------------------------------------------------------------- -->
<!-- 下拉框 -->
<br>
<span>喜欢的水果</span>
<!-- multiple 多选 size -->
<select v-model="fruilt" multiple size="2">
        <option value="apple">苹果</option>
	<option value="orange">橘子</option>
	<option value="banana">香蕉</option>
</select>
<br>
<span>fruilt:{{fruilt}}</span>
data() {
    return {
        hobbies: [],
        gender: "male",
        fruilt: "banana"
    }
}
```

### 真实开发案例

```javascript
<!-- 复选框 -->
<span>你的爱好</span>
<label :for="hobby" v-for="(hobby, index) in hobbyArray" :key="index">
	<input type="checkbox" :id="hobby" v-model="hobbies" :value="hobby">{{hobby}}
</label>
<br>
<span>hobbies:{{hobbies}}</span>
<!-- 单选框 -->
<br>
<span>性别</span>
<label :for="sex" v-for="(sex, index) in genders" :key="index">
	<input type="radio" :id="sex" v-model="gender" :value="sex">{{sex}}
</label>
<br>
<span>gender:{{gender}}</span>
<!-- 下拉框 -->
<br>
<span>喜欢的水果</span>
<!-- multiple 多选 size -->
<select v-model="fruilt" multiple size="2">
	<option :value="fruiltItem" v-for="(fruiltItem, index) in fruilts" :key="fruiltItem">{{fruiltItem}}</option>
</select>
<br>
<span>fruilt:{{fruilt}}</span>
data() {
    return {
        hobbyArray: ["篮球", "足球", "网球"],
        hobbies: [],
        genders: ["male", "female"],
        gender: "male",
        fruilts: ["apple", "orange", "banana"],
        fruilt: "banana"
    }
}
```

### 修饰符

```javascript
<!-- 1.lazy修饰符 -->
//按下enter或者离开时 才进行改变
<input type="text" v-model.lazy="message">
<h2>{{message}}</h2>
<!-- 2.number修饰符 -->
//数据只能接受数字
<input type="text" v-model.number="sum">
<h2>{{sum}}</h2>
<!-- 3.trim修饰符 -->
//去除字符串前后的空格
<input type="text" v-model.trim="message">
<h2>{{message}}</h2>
data() {
    return {
        message: "Hello World",
        sum: 100
    }
}
```

## 组件

### 全局组件

```javascript
//组件名称
//1.comopnent-a(短横线)   则只能<component-a></component-a>这样使用    建议这种
//2.ComponentB(驼峰)   可以<component-b></component-b>,也可以这样写<ComponentB><ComponentB/>
app.component('组件名称', {
  //组件内容
});
```

### 局部组件

```javascript
components: {
  //key:value
  //ComponentA:ComponentA
  //根据ES6可以简写成
  ComponentA;
}
```

## webpack

**全局:**

1、安装 node，node 安装时会自动安装 npm

链接:[Node.js (nodejs.org)](https://nodejs.org/zh-cn/)

2、安装 webpack -g 是全局安装

npm install webpack webpack-cli -g

**局部:**

1、npm init 或者 npm init -y 添加 package.json -y 的意思是后面配置全部都是 yes

2、npm install webpack webpack-cli -D(--save-dev) 开发依赖

3、npx webpack（使用局部的 webpack 进行打包）

4、在 package.json 中书写以下代码

```json
"scripts": {
    "build": "webpack"
  },
```

5、运行 npm run build 即可使用局部的 webpack 进行打包(对步骤 3 的优化)

6.配置 webpack.config.js 配置输入、输出

```javascript
const path = require('path');

module.exports = {
  //    输入文件  从这个文件开始打包
  entry: './src/main.js',
  //   输出文件
  output: {
    //   输出文件路径   路径拼接
    path: path.resolve(__dirname, './build'),
    //   输出文件名称  并且放在js目录下
    filename: 'js/bundle.js',
  },
};
```

7、给 webpack.config.js 设置别名

在 package.json 中书写以下代码

```javascript
"build":"webpack --config why.config.js"
```

坑 1:因为要获取 body js 文件必须在 body 里最后的位置引入

```javascript
document.body.appendChild();
```

8、安装 css-loader 预解析 css

```javascript
npm install css-loader -D
```

9、将解析后的通过 style 插入

```javascript
npm install style-loader -D
```

10、安装 less

```javascript
npm install less -D
```

11、安装 less-loader

```javascript
npm install less-loader -D
```

12、安装 postcss

```javascript
npm install postcss postcss-cli -D
```

13、安装 autoprefixer

```
npm install autoprefixer -D
```

14、添加前缀

```
npx postcss --use autoprefixer -o 处理后.css 处理前.css
```

15、安装 postcss-loader

```
npm install postcss-loader
```

16、安装 postcss-preset-env(内置了 autoprefixer，所以可以不用暗转 autoprefixer)

```
npm install postcss-preset-env -D
```

17、postcss.config.js

在这个文件中配置 webpack.config.js 就可以简单点

```javascript
module.exports = {
  //  插件
  //  postcss-preset-env
  // 可以将现代化的css特性color: #12345678;
  // 并且还可以自动添加浏览器前缀 以兼容
  // 转化为color: rgba(18,52,86,0.47059);现代大多数浏览器认识的css
  plugins: [require('postcss-preset-env')],
};
```

### webpack.config.js(完整版)

```javascript
const path = require('path');

module.exports = {
  //    输入文件  从这个文件开始打包
  entry: './src/main.js',
  //   输出文件
  output: {
    //   输出文件路径   路径拼接
    path: path.resolve(__dirname, './build'),
    //   输出文件名称
    filename: 'bundle.js',
  },
  //模块  object
  module: {
    // 规则 array
    rules: [
      // {
      //   // 匹配.css的文件
      //   test: /\.css/,
      //   // 1.使用loader(语法糖)
      //   // loader: 'css-loader',
      //   // 2.使用哪些loader array  完整写法
      //   // use: [{ loader: 'css-loader' }],
      //   // 3.简洁写法
      //   css规则
      //   use: [
      //     //执行顺序 从后往前
      //     'style-loader',
      //     'css-loader',
      //     'postcss-loader', //配置在外面了
      //     // postcss-loader要配置 所以要写成对象
      //     // {
      //     //   loader: 'postcss-loader',
      //     //   配置额外的选项
      //     //   options: {
      //     //     postcss配置
      //     //     postcssOptions: {
      //     //       插件
      //     //       plugins: [require('autoprefixer')],
      //     //     },
      //     //   },
      //     // },
      //   ],
      // },
      // less规则
      // {
      //   test: /\.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      // },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
    ],
  },
};
```

19、file-loader 加载 jpg、png 等图片(**webpack5 都不用了**)

```javascript
npm install file-loader -D
```

20、安装 url-loader 将较小的图片转成 base64(**webpack5 都不用了**)

```
npm install url-loader -D
```

步骤 19、20 的配置，用了 url-loader 可以不用 file-loader

```javascript
{
	//匹配这些图片形式
    test: /\.(jpe?g|png|gif|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
            // 输出路径 img
            // outputPath: 'img',
            // outputPath和filename配合使用
            // 输出名称  原来的名称_哈希6位 扩展名
            name: 'img/[name]_[hash:6].[ext]',
            // 小于120kb的图片转成base64
            limit: 120 * 1024,
            //  这是因为webpack先用css-loader将url(../resource/1.png) 解析成
            //  url(require('./resource/1.png'))最后url-loader遇到后才能进行处理
            //  但是url-loader默认用es6的模块语法进行解析
            //  如果没有设置esModule为false 那么将出现下面这种情况
            //  问题详解链接:https://www.jianshu.com/p/07322ac362c4
            esModule: false,
        },
    },
    //When using the old assets loaders (i.e. file-loader/url-loader/raw-loader) along with Asset Module in webpack 5, you might want to stop Asset Module from processing your assets again as that would result in asset duplication. This can be done by setting asset's module type to 'javascript/auto'.//
    type: 'javascript/auto',
}
```

21、webpack5 对图片及转化为 base64 的用法

```javascript
{
    test: /.\.(jpe?g|png|gif|svg)$/,
    // 相当于file-loader的作用
    // type: 'asset/resource',
    type: 'asset',
    //generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
    generator: {
        // 文件名字  img文件夹下  原文件夹名_哈希值6位+扩展名
        filename: 'img/[name]_[hash:6][ext]',
    },
    // 解析器
    parser: {
        // 数据url条件
        dataUrlCondition: {
            // 小于120kb生成base64图片
            maxSize: 120 * 1024,
        },
    },
},
```

或者这样也可以起到 file-loader 的作用，并且还可以重命名放入指定文件夹(**了解即可**)

```javascript
//   输出文件
output: {
  // assetModuleFilename: 'img/[name]_[hash:6][ext]',
}
```

22、对字体打包

```javascript
//方法1  使用file-loader对字体打包
{
    test: /\.(eot|ttf|woff2?)$/,
    use: {
        loader: 'file-loader',
        options: {
            // outputPath: 'font',
            // filename:"[name]_[hash:6].[ext]"
            // 这两个要搭配使用
            name: 'font/[name]_[hash:6].[ext]',
            esModule: false,
        },
    },
    //webpack5对loader不兼容
    type: 'javascript/auto',
```

```javascript
方法2 使用webpack5内置的方法打包  推荐这种
{
    test: /\.(eot|ttf|woff2?)$/,
    type: 'asset/resource',
    // 生成器
    generator: {
    	// 文件名
    	filename: 'font/[name]_[hash:6][ext]',
    },
}
```

23、安装 clean-webpack-plugin 插件 打包之前删除原有的打包文件

```javascript
 npm install clean-webpack-plugin -D
```

24、clean-webpack-plugin 的使用

```javascript
//引入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 插件 和module同一级目录
plugins: [
  // 一个个插件对象 一般是类
  new CleanWebpackPlugin(),
];
```

25、安装 html-webpack-plugin 插件，用于生成 index.html 文件

```javascript
npm install html-webpack-plugin -D
```

26、html-webpack-plugin 的使用

```javascript
//引入
const htmlWebpackPlugin = require('html-webpack-plugin')

// 插件
plugins: [
	// 生成index.html文件
    new HtmlWebpackPlugin({
      // 依照这个模板生成的index.html(vue)
      template: './public/index.html',
      // index.html里的标题读的是这个
      title: 'webpack5',
    })
],
```

27、给 index.html 模板里的变量赋值

```javascript
// 定义变量 base_url
const { DefinePlugin } = require('webpack')

new DefinePlugin({
    //const url = "./"
    //BASE_URL: "url",
    BASE_URL: "'./'",
}),
```

28、安装 copy-webpack-plugin，拷贝某些文件

```javascript
npm install copy-webpack-plugin -D
```

29、copy-webpack-plugin 的使用

```javascript
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin')

new CopyWebpackPlugin({
    // 匹配
    patterns: [
        {
            // 从这里来
            from: 'public',
            // 到那里去
            to: './',
            // 配置
            globOptions: {
                // 忽略
                ignore: ['**/index.html'],
            },
        },
    ],
}),
```

**30、方便调试代码**

 webpack 打包的 js 文件只有一行,如果出错的话找不到出错的地方。而加上这个的话，可以映射错误在哪?

```javascript
module.exports = {
  //开发模式  设置模式  production
  mode: 'development',
  //一般是eval  建立js映射文件 方便代码的调试
  devtool: 'source-map',
};
```

31、babel 的使用

@babel/core:babel 的核心代码，必须安装

@babel/cli:可以让我们在命令行使用 babel

```javascript
npm install @babel/core @babel/cli -D
```

32、转化箭头函数

```javascript
npm install @babel/plugin-transform-arrow-functions -D
```

33、转化 const(块级作用域)

```javascript
npm install @babel/plugin-transform-block-scoping -D
```

34、babel 的预设

```javascript
npm install @babel/preset-env -D
```

35、安装 bebel-loader

```
npm install babel-loader -D
```

36、配置 babel 将 es6 转化为 es5 兼容

```javascript
//方法1
{
    test: /\.js$/,
    use: {
        loader: 'babel-loader',
            options: {
                //使用两个插件
                plugins: [
                    //转化箭头函数
                    '@babel/plugin-transform-arrow-functions',
                    //块级作用域  转化const
                    '@babel/plugin-transform-block-scoping',
                ],
        },
    },
},
```

```javascript
//方法2
{
    test: /\.js$/,
    use: {
        loader: 'babel-loader',
        options: {
            //使用预设
            presets: ['@babel/preset-env'],
        },
    },
},
```

```javascript
//方法3   推荐
//webpack.config.js
{
    test: /\.js$/,
    loader: 'babel-loader',
}

//babel.config.js 将代码抽离出来
module.exports = {
  presets: ['@babel/preset-env'],
}
```

### 结合 vue 使用

```javascript
//都行 安装vue3
npm install vue@next --save
npm install vue@next
```

01-vue 代码高亮插件

```javascript
//插件一:Vetur,从vue2开发就一直在使用的vscode支持的vue插件
//插件二:volar，官方推荐的插件(后续会基于volar开发官方的VScode插件)
```

02-指定 vue 版本

```javascript
// 需要解析template,所以需要手动指定版本
import { createApp } from 'vue/dist/vue.esm-bundler';
```

03-解析 vue 文件

```javascript
npm install vue-loader@next -D
```

04-安装 compiler-sfc(vue-loader@next 的依赖文件)

```javascript
npm install @vue/compiler-sfc -D
```

05-解析工具 2(配合 vue-loader@next)

```javascript
// vue解析工具2
const { VueLoaderPlugin } = require('vue-loader/dist/index')

plugins: [
	new VueLoaderPlugin()
],
```

06-补充

```javascript
//webpack.config.js
plugins: [
    // 定义变量
    new DefinePlugin({
      // 是否支持vue2
      __VUE_OPTIONS_API__: true,
      // 是否在生产阶段调试
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],

//因为抽离了template为.vue文件,所以不用指定vue版本了
//对02步骤进行修改
import { createApp } from 'vue'
```

### 开启 webServer

- 热更新

1、watch

```javascript
// 方法1
//package.json
"scripts": {
	"build": "webpack --watch"
},
```

```javascript
// 方法2
//webpack.config.js
module.exports = {
  //用于热更新
  watch: true,
};
```

2、webpack-dev-server(推荐)

安装 webpack-dev-server

```
npm install webpack-dev-server -D
```

使用 webpack-dev-server

```javascript
//package.json
"scripts": {
    //开启热更新
    "server":"webpack server"
  },

//webpack.config.js
module.exports = {
    //和webpack-dev-server热更新一起使用的
    target: 'web',
}
```

webpack-dev-server 配置

```javascript
//webpack.config.js
// 热更新
devServer: {
    //webpack打包之后找不到资源从这找
    //connectBase这个有问题
    //mp3、mp4不想用copyWebpackPlugin复制时
    //可以用这个
    static: './public',
},
```

webpack-dev-server 热替换(HMR)

```javascript
//webpack.config.js
module.exports = {
  // 热更新
  devServer: {
    // 模块热替换(HMR)
    // 替换、添加、刷新模块,无需重新刷新整个页面
    // 改变部分,就修改部分 而不刷新整个浏览器
    hot: true,
  },
};

//引入时要这样写  当element.js发生改变时则只执行element.js里面的内容
import './js/element';
// 热替换
if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log('element发生更新了');
  });
}
```

webpack-dev-server 设置 host(主机地址)、port(端口号)、open(是否自动打开浏览器)

compress(是否对静态资源进行 gzip 压缩(算优化吧))

```javascript
// 热更新
devServer: {
    // host: '0.0.0.0',
    // 自动打开浏览器
    //package.json 或者在这里写也行
    //"scripts": {
    //    "server": "webpack server --open"
    // },
    open: true,
    // 修改端口
    port: 8000,
    // gzip压缩 前端优化
    compress: true,
},
```

### proxy

- 跨域问题

```javascript
// 热更新
devServer: {
    // 跨域问题 代理
    proxy: {
      // 映射
      '/api': {
        // 映射地址
        target: 'http://www.baidu.com',
        // 路径重写 地址拼接不要加上api
        pathRewrite: {
          '^/api': '',
        },
        //无证书也正确代理  设置为false 默认为true
        secure: false,
        // 修改源  有这个服务器才看不出你是代理的
        changeOrigin: true,
      },
    },
},
```

### resolve 路径问题

```javascript
//查找文件
resolve: {
    //自动加载文件夹下的index文件  resolve.mainFiles的默认值是index
    //默认扩展名  当查找的文件无扩展名时,默认添加,然后再查找
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.jsx', '.tsx'],
    // 起别名  解决路径关系
    alias: {
        // 常见起别名  "@" = "./src"
        '@': path.resolve(__dirname, './src'),
    },
},
```

### 区分开发环境与生产环境

1、wepback.config.js 总配置-未拆分前

```javascript
const path = require('path');
// 生成打包文件前删除原有文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 定义变量 base_url
const { DefinePlugin } = require('webpack');
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin');

// vue解析工具2
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  //和webpack-dev-server热更新一起使用的
  target: 'web',
  //开发模式  设置模式  production
  mode: 'development',
  //一般是eval  建立js映射文件 方便代码的调试
  devtool: 'source-map',
  //    输入文件  从这个文件开始打包
  entry: './src/main.js',
  //   输出文件
  output: {
    //   输出文件路径   路径拼接
    path: path.resolve(__dirname, './build'),
    //   输出文件名称
    filename: 'js/bundle.js',
    // assetModuleFilename: 'img/[name]_[hash:6][ext]',
  },
  // 热更新
  devServer: {
    //webpack打包之后找不到资源从这找
    //connectBase这个有问题
    //mp3、mp4不想用copyWebpackPlugin复制时
    //可以用这个
    static: './public',
    // 模块热替换(HMR)
    // 替换、添加、刷新模块,无需重新刷新整个页面
    // 改变部分,就修改部分 而不刷新整个浏览器
    hot: true,
    // 当前网段的ip地址都可以访问
    // host: '0.0.0.0',
    // 自动打开浏览器
    open: true,
    // 修改端口
    port: 8000,
    // gzip压缩 前端优化
    compress: true,
    // 跨域问题 代理
    proxy: {
      // 映射
      '/api': {
        // 映射地址
        target: 'http://www.baidu.com',
        // 路径重写 地址拼接不要加上api
        pathRewrite: {
          '^/api': '',
        },
        //无证书也正确代理  设置为false 默认为true
        secure: false,
        // 修改源  有这个服务器才看不出你是代理的
        changeOrigin: true,
      },
    },
  },
  //模块  object
  module: {
    // 规则 array
    rules: [
      // less/css规则
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      // 图片
      {
        test: /.\.(jpe?g|png|gif|svg)$/,
        // type: 'asset/resource',     file-loader
        type: 'asset',
        //generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
        generator: {
          // 文件名字  img文件夹下  原文件夹名_哈希值6位+扩展名
          filename: 'img/[name]_[hash:6][ext]',
        },
        // 解析器
        parser: {
          // 数据url条件
          dataUrlCondition: {
            // 小于120kb生成base64图片
            maxSize: 120 * 1024,
          },
        },
      },
      // 字体2
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]',
        },
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      //vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  //查找文件
  resolve: {
    //自动加载文件夹下的index文件  resolve.mainFiles的默认值是index
    //默认扩展名  当查找的文件无扩展名时,默认添加,然后再查找
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.jsx', '.tsx'],
    // 起别名  解决路径关系
    alias: {
      // 常见起别名  "@" = "./src"
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 插件
  plugins: [
    // 一个个插件对象 一般是类
    new CleanWebpackPlugin(),
    // 生成index.html文件
    new HtmlWebpackPlugin({
      // 依照这个模板生成的index.html(vue)
      template: './public/index.html',
      // index.html里的标题读的是这个
      title: 'webpack5',
    }),
    // 定义变量
    new DefinePlugin({
      //const url = "./"
      //BASE_URL: "url",
      BASE_URL: "'./'",
      // 是否支持vue2
      __VUE_OPTIONS_API__: true,
      // 是否在生产阶段调试
      __VUE_PROD_DEVTOOLS__: false,
    }),
    //复制文件
    new CopyWebpackPlugin({
      // 匹配
      patterns: [
        {
          // 从这里来
          from: 'public',
          // 到那里去
          to: './',
          // 配置
          globOptions: {
            // 忽略
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    // 加载vue所需要的插件
    new VueLoaderPlugin(),
  ],
};
```

2、公共环境配置

```javascript
//webpack.comm.config.js

const path = require('path');

// 生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 定义变量 base_url
const { DefinePlugin } = require('webpack');
// vue解析工具2
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  target: 'web',
  //    输入文件  从这个文件开始打包
  entry: './src/main.js',
  //   输出文件
  output: {
    //   输出文件路径   路径拼接
    path: path.resolve(__dirname, './build'),
    //   输出文件名称
    filename: 'js/bundle.js',
    // assetModuleFilename: 'img/[name]_[hash:6][ext]',
  },
  //查找文件
  resolve: {
    //自动加载文件夹下的index文件  resolve.mainFiles的默认值是index
    //默认扩展名  当查找的文件无扩展名时,默认添加,然后再查找
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.jsx', '.tsx'],
    // 起别名  解决路径关系
    alias: {
      // 常见起别名  "@" = "./src"
      '@': path.resolve(__dirname, './src'),
    },
  },
  //模块  object
  module: {
    // 规则 array
    rules: [
      // less/css规则
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      // 图片
      {
        test: /.\.(jpe?g|png|gif|svg)$/,
        // type: 'asset/resource',     file-loader
        type: 'asset',
        //generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
        generator: {
          // 文件名字  img文件夹下  原文件夹名_哈希值6位+扩展名
          filename: 'img/[name]_[hash:6][ext]',
        },
        // 解析器
        parser: {
          // 数据url条件
          dataUrlCondition: {
            // 小于120kb生成base64图片
            maxSize: 120 * 1024,
          },
        },
      },
      // 字体2
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]',
        },
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      //vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  // 插件
  plugins: [
    // 生成index.html文件
    new HtmlWebpackPlugin({
      // 依照这个模板生成的index.html(vue)
      template: './public/index.html',
      // index.html里的标题读的是这个
      title: 'webpack5',
    }),
    // 定义变量
    new DefinePlugin({
      //const url = "./"
      //BASE_URL: "url",
      BASE_URL: "'./'",
      // 是否支持vue2
      __VUE_OPTIONS_API__: true,
      // 是否在生产阶段调试
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // 加载vue所需要的插件
    new VueLoaderPlugin(),
  ],
};
```

3、开发环境配置

```javascript
//webpack.dev.config.js
module.exports = {
  //开发模式  设置模式  production
  mode: 'development',
  //一般是eval  建立js映射文件 方便代码的调试
  devtool: 'source-map',
  // 热更新
  devServer: {
    //webpack打包之后找不到资源从这找
    //connectBase这个有问题
    //mp3、mp4不想用copyWebpackPlugin复制时
    //可以用这个
    static: './public',
    // 模块热替换(HMR)
    // 替换、添加、刷新模块,无需重新刷新整个页面
    // 改变部分,就修改部分 而不刷新整个浏览器
    hot: true,
    // 当前网段的ip地址都可以访问
    // host: '0.0.0.0',
    // 自动打开浏览器
    // open:true,
    // 修改端口
    port: 8000,
    // gzip压缩 前端优化
    compress: true,
    // 跨域问题 代理
    proxy: {
      // 映射
      '/api': {
        // 映射地址
        target: 'http://www.baidu.com',
        // 路径重写 地址拼接不要加上api
        pathRewrite: {
          '^/api': '',
        },
        //无证书也正确代理  设置为false 默认为true
        secure: false,
        // 修改源  有这个服务器才看不出你是代理的
        changeOrigin: true,
      },
    },
  },
};
```

4、生产环境配置

```javascript
//webpack.prod.config.js
// 生成打包文件前删除原有文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  //生产模式  设置模式  production
  mode: 'production',
  //插件
  plugins: [
    // 一个个插件对象 一般是类
    new CleanWebpackPlugin(),
    //复制文件
    new CopyWebpackPlugin({
      // 匹配
      patterns: [
        {
          // 从这里来
          from: 'public',
          // 到那里去
          to: './',
          // 配置
          globOptions: {
            // 忽略
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
};
```

5、安装 webpack-merge 合并环境

```javascript
npm install webpack-merge -D
```

6、合并环境

```javascript
// 导入合并环境
const { merge } = require('webpack-merge');

// 引入公共环境
const commonConfig = require('./webpack.comm.config');

//dev以及prod都是这样
module.exports = merge(commonConfig, {
  //具体内容
});
```

7、合并之后要修改环境

7.1、webpack.dev.config.js

```javascript
// 导入合并环境
const { merge } = require('webpack-merge');

// 引入公共环境
const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  //开发模式  设置模式  production
  mode: 'development',
  //一般是eval  建立js映射文件 方便代码的调试
  devtool: 'source-map',
  // 热更新
  devServer: {
    //webpack打包之后找不到资源从这找
    //connectBase这个有问题
    //mp3、mp4不想用copyWebpackPlugin复制时
    //可以用这个
    static: './public',
    // 模块热替换(HMR)
    // 替换、添加、刷新模块,无需重新刷新整个页面
    // 改变部分,就修改部分 而不刷新整个浏览器
    hot: true,
    // 当前网段的ip地址都可以访问
    // host: '0.0.0.0',
    // 自动打开浏览器
    // open:true,
    // 修改端口
    port: 8000,
    // gzip压缩 前端优化
    compress: true,
    // 跨域问题 代理
    proxy: {
      // 映射
      '/api': {
        // 映射地址
        target: 'http://www.baidu.com',
        // 路径重写 地址拼接不要加上api
        pathRewrite: {
          '^/api': '',
        },
        //无证书也正确代理  设置为false 默认为true
        secure: false,
        // 修改源  有这个服务器才看不出你是代理的
        changeOrigin: true,
      },
    },
  },
});
```

7.2、webpack.prod.config.js

```javascript
// 导入合并环境
const { merge } = require('webpack-merge');

// 引入公共环境
const commonConfig = require('./webpack.comm.config');

// 生成打包文件前删除原有文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(commonConfig, {
  //生产模式  设置模式  production
  mode: 'production',
  //插件
  plugins: [
    // 一个个插件对象 一般是类
    new CleanWebpackPlugin(),
    //复制文件
    new CopyWebpackPlugin({
      // 匹配
      patterns: [
        {
          // 从这里来
          from: './public',
          // 到那里去
          to: './',
          // 配置
          globOptions: {
            // 忽略
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
});
```

7.3、webpack.comm.config.js

```javascript
const path = require('path');

// 生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 定义变量 base_url
const { DefinePlugin } = require('webpack');
// vue解析工具2
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  //和webpack-dev-server热更新一起使用的
  target: 'web',
  //    输入文件  从这个文件开始打包
  entry: './src/main.js',
  //   输出文件
  output: {
    //   输出文件路径   路径拼接
    path: path.resolve(__dirname, '../build'),
    //   输出文件名称
    filename: 'js/bundle.js',
    // assetModuleFilename: 'img/[name]_[hash:6][ext]',
  },
  //查找文件
  resolve: {
    //自动加载文件夹下的index文件  resolve.mainFiles的默认值是index
    //默认扩展名  当查找的文件无扩展名时,默认添加,然后再查找
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.jsx', '.tsx'],
    // 起别名  解决路径关系
    alias: {
      // 常见起别名  "@" = "./src"
      '@': path.resolve(__dirname, '../src'),
    },
  },
  //模块  object
  module: {
    // 规则 array
    rules: [
      // less/css规则
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      // 图片
      {
        test: /.\.(jpe?g|png|gif|svg)$/,
        // type: 'asset/resource',     file-loader
        type: 'asset',
        //generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
        generator: {
          // 文件名字  img文件夹下  原文件夹名_哈希值6位+扩展名
          filename: 'img/[name]_[hash:6][ext]',
        },
        // 解析器
        parser: {
          // 数据url条件
          dataUrlCondition: {
            // 小于120kb生成base64图片
            maxSize: 120 * 1024,
          },
        },
      },
      // 字体2
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]',
        },
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      //vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  // 插件
  plugins: [
    // 生成index.html文件
    new HtmlWebpackPlugin({
      // 依照这个模板生成的index.html(vue)
      template: './public/index.html',
      // index.html里的标题读的是这个
      title: 'webpack5',
    }),
    // 定义变量
    new DefinePlugin({
      //const url = "./"
      //BASE_URL: "url",
      BASE_URL: "'./'",
      // 是否支持vue2
      __VUE_OPTIONS_API__: true,
      // 是否在生产阶段调试
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // 加载vue所需要的插件
    new VueLoaderPlugin(),
  ],
};
```

8、package.json 配置

```javascript
//npm run build 开发环境
//npm run server 生产环境
"scripts": {
    "build": "webpack --config ./config/webpack.prod.config.js",
    "server": "webpack server --config ./config/webpack.dev.config.js"
  }
```

## VueCli

全局安装 vue-cli

```javascript
npm install @vue/cli -g
//更新
npm update @vue/cli -g
```

创建项目

```javascript
vue create 项目的名称
```

第一步 选择配置

```javascript
Vue CLI v4.5.14
//选择预设
? Please pick a preset: (Use arrow keys)
  //保存的预设  包括babel(兼容浏览器) router路由 eslint语法检查
> my_preset_02 ([Vue 2] babel, router, eslint)
  //默认vue2
  Default ([Vue 2] babel, eslint)
  //默认vue3
  Default (Vue 3) ([Vue 3] babel, eslint)
  //自定义
  Manually select features
```

第二步 自定义配置

```javascript
//自定义选择  空格选中 enter下一步 a全选  *表示选中
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
 //是否选择vue版本
>(*) Choose Vue version
 //babel兼容浏览器
 (*) Babel
 //是否支持ts
 (*) TypeScript
 //是否支持pwa(一般不选)
 ( ) Progressive Web App (PWA) Support
 //路由
 (*) Router
 //vuex状态管理
 (*) Vuex
 //css预处理器
 (*) CSS Pre-processors
 //是否选择ESLint对代码进行格式化选择
 (*) Linter / Formatter
 //单元测试(一般不选)
 ( ) Unit Testing
 //E2E测试(一般不选)
 ( ) E2E Testing
```

第三步 选择 vue 版本

```
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
  2.x
> 3.x
```

第四步 是否使用 babel 做转义()

```javascript
? Use class-style component syntax? (y/N)  y
```

第五步 使用 Babel 与 TypeScript 一起用于自动检测的填充

```javascript
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n)  y
```

第六步 路由模式(**在 url 中 hash 带了一个很丑的 # 而 history 是没有#的**)

```
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) y
```

第七步 选择 css 预处理器

```javascript
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
> Less
  Stylus
```

第八步 ESLint 选择:提供一个插件化的 javascript 代码检测工具

```javascript
? Pick a linter / formatter config: (Use arrow keys)
  //只有错误预防
  ESLint with error prevention only
  //Airbnb 配置
  ESLint + Airbnb config
  //标准配置
> ESLint + Standard config
  //使用较多  (漂亮的配置)
  ESLint + Prettier
  TSLint (deprecated)
```

第九步 何时检测

```javascript
 Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
 // 保存就检测
>(*) Lint on save
 // fix和commit时候检查
 ( ) Lint and fix on commit
```

第十步 将配置信息放哪

```
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files  //放在独立的文件里
  In package.json
```

第十一步 是否保存预设

```javascript
? Save this as a preset for future projects? (y/N)  n
```

第十二步 目标浏览器

```javascript
.browserslistrc
//浏览器份额要在1%以上 最新两个版本 还在更新
```

## Vite

安装 vite

```javascript
//局部安装
npm install vite -D
//全局安装
npm install vite -g
```

运行

```javascript
npx vite
```

配置 vite

```javascript
//处理less
npm install less -D
//-------------------------------------------------------------------------------------------
//处理浏览器前缀
npm install postcss -D
//postcss依赖包
npm install postcss-preset-env -D
//postcss.config.js配置
module.exports = {
  plugins: [require('postcss-preset-env')],
}
//-------------------------------------------------------------------------------------------
//默认支持ts
//安装vue3
npm install vue@next -D
```

vite 对 vue 的支持

```javascript
//vite对vue提供第一优先级支持：
//Vue 3 单文件组件支持：@vitejs/plugin-vue
//Vue 3 JSX 支持：@vitejs/plugin-vue-jsx
//Vue 2 支持：underfin/vite-plugin-vue2
//-------------------------------------------------------------------------------------------
//对vue3单文件需要的插件
npm install @vitejs/plugin-vue -D
//vite.config.js配置
const vue = require('@vitejs/plugin-vue')

module.exports = {
  plugins: [vue()],
}
//-------------------------------------------------------------------------------------------
//需要依赖该插件
npm install @vue/compiler-sfc -D
```

vite 打包

```
npx vite build
```

打包后预览

```
npx vite preview
```

修改 package.json

```javascript
"scripts": {
    //运行 开发阶段
    "serve":"vite",
    //打包 生产阶段
    "build":"vite build",
    //预览  打包后预览
    "preview":"vite preview"
  },
```

vite的安装

```javascript
//全局安装vite脚手架
npm install @vitejs/create-app -g
//创建项目
create-app 项目名
//官方  省略了脚手架的安装
npm init @vitejs/app
```

## 组件化

### 样式穿透小 bug

```javascript
//父组件
<h2>父亲<h2/>
//子组件  根元素都是h2  会出现样式穿透
<h2>孩子<h2/>
```

### 父子通信

#### 父传子

```javascript
#静态通信
//-----------------------------------
//父组件
<son message="我是你xx"></son>
//子组件
<h2>{{message}}</h2>
//我是你xx
props: ["message"]
//-----------------------------------
#动态通信
//-----------------------------------
//父组件
//这里有个:  v-bind 将数据中的message传给子组件
<son :message="message"></son>
data() {
    return {
    	message: 'hello world',
    }
}
//子组件
//hello world(父组件传过来的)
<h2>{{message}}</h2>
//我是你xx
props: ["message"]
//-----------------------------------
```

#### 类型验证

```javascript
#动态通信
//-----------------------------------
//父组件
//这里有个:  v-bind 将数据中的message传给子组件
<son :message="message"></son>
data() {
    return {
    	message: 'hello world',
    }
}
//子组件
//hello world(父组件传过来的)
<h2>{{message}}</h2>
//我是你xx
props: {
    message: {
        //类型为字符串
        type: String,
        //必须传值
        require: true,
        //默认为空
        default: '',
        //require和default二选一就行
    },
}
//-----------------------------------
```

#### 细节

```javascript
#对象钩  √
props: {
    goods: {
        //类型为对象
        type: Object,
        //必须返回一个函数 返回空对象的话,引用地址是同一个,一个改则所有的都改了
        //default:()=>({}),
        default(){retutn {}}
    },
}
#验证函数
props: {
    gender: {
        validator(value){
            //是否包含在内
            return ["male","female"].includes(value)
        }
    },
}
#传入函数
props: {
    fn: {
        //类型是函数
        type:Function,
        default(){
        	return "default function"
        }
    },
}
```

#### 非 Prop 的 Attribute

**Attribute(属性:类似 class,src)继承**

```javascript
#父组件
<son class="son" id="son"></son>   //子组件
//当组件有单个根节点时，非Prop的Attribute将自动添加到根节点的Attribute中!

//如果我们不希望组件的根元素继承attribute，可以在子组件中设置
#子组件
//inheritAttrs: false;
//禁用attribute继承的常见情况是需要将attribute应用于根元素之外的其他元素；
//我们可以通过 $attrs来访问所有的 非props的attribute
#子组件
//绑定单个属性
:class = "$attrs.class"
//------------------------------------------------
//绑定多个属性
v-bind="$attrs"

//多个根节点的attribute
//多个根节点的attribute如果没有显示的绑定，那么会报警告，我们必须手动的指定要绑定到哪一个属性上
#子组件
<template>
	 <h2 :class="$attrs.class"></h2>
     <h2></h2>
     <h2></h2>
</template>
```

#### 子传父

```javascript
#父祖件
<template>
  <div>
    <h2>当前计数:{{ counter }}</h2>
	//监听子组件传来的函数
    <children @add="add" @sub="sub" @addN="addN"></children>
  </div>
</template>

<script>
import Children from './Children.vue'
export default {
  components: { Children },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      this.counter++
    },
    sub() {
      this.counter--
    },
    addN(value) {
      this.counter += value
    },
  },
}
</script>
#子组件
<template>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <input type="text" v-model.number.lazy="num" />
  <button @click="incrementN">+{{ num }}</button>
</template>

<script>
export default {
  // emits: ['add', 'sub', 'addN'],
  #写对象是为了参数验证
  emits: {
    add: null,
    sub: null,
    addN: (payload) => {
      if (payload > 0) return true
      return false
    },
  },
  data() {
    return {
      num: 2,
    }
  },
  methods: {
    increment() {
      //子传父 不带参
      this.$emit('add')
    },
    decrement() {
      this.$emit('sub')
    },
    incrementN() {
      //子传父 带参数
      this.$emit('addN', this.num)
    },
  },
}
</script>
```

#### 小型案例-tab 栏

```javascript
#父组件
<template>
  <div>
    <tab-control
	  //把标题传给子组件
      :titles="titles"
	  //监听子组件传过来的事件$emit()
      @changeCurrent="currentIndex = $event"
    ></tab-control>
    <h2>{{ contents[currentIndex] }}</h2>
  </div>
</template>
<script>
import tabControl from './components/tabControl.vue'
export default {
  components: { tabControl },
  data() {
    return {
      titles: ['衣服', '鞋子', '裤子'],
      contents: ['衣服页面', '鞋子页面', '裤子页面'],
      currentIndex: 0,
    }
  },
}
</script>
#子组件
<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
	 //循环父组件传的数组
      v-for="(title, index) in titles"
      :key="title"
	  //点击是切换index
      @click="changeCurrent(index)"
	  //只有index对的上  才有样式
      :class="{ current: index === currentIndex }"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  //接收父组件的数组
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    changeCurrent(index) {
      this.currentIndex = index
      //index改变时,传给父组件
      this.$emit('changeCurrent', this.currentIndex)
    },
  },
}
</script>
<style type="less" scoped>
/* 样式 */
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
}
//样式给span
.current span {
  padding: 3px;
  border-bottom: 2.5px solid skyblue;
}
</style>
```

### 非父子组件通信

#### 单向数据流

```javascript
#父孙传值  provide和inject
#父组件
import { computed } from 'vue'
//   provide:{}
//   要用this的话要写成函数 默认写成函数
provide() {
    return {
        // length: this.names.length  非响应式
        length: computed(() => this.names.length) //响应式
    }
}
#孙组件
{{ length.value }}  //使用
export default {
  inject: ['length'],
}
```

#### 双向数据流(eventBus:事件总线)

```javascript
#vue3移除了$on、$off、$once方法，但是推荐了一些库:mitt、tiny-emitter
#兄弟之间也能互相传递
//安装mitt
npm install mitt
//eventBus
import mitt from 'mitt'
const emitter = mitt()
export default emitter
//兄
import emitter from '../utils/eventBus'
btnClick() {
    console.log('为兄')
    emitter.emit('love', { name: 'XiaoZiYan', age: 18 })
}
//弟的孩子
import emitter from '../utils/eventBus'
created() {
    emitter.on('love', (info) => {
        console.log(info)// { name: 'XiaoZiYan', age: 18 }
    })
    //监听所有事件  type:love  info: { name: 'XiaoZiYan', age: 18 }
    emitter.on('*', (type, info) => {
        console.log(type, info) //love { name: 'XiaoZiYan', age: 18 }
    })

    //事件销毁的时候
    //取消所有监听
    emitter.all.clear()
    //取消某一个监听
    //具体处理逻辑写成一个函数
    function onFoo() {}
    emitter.on('foo', onFoo)
    emitter.off('foo', onFoo)
}
```

## 插槽

### 基本使用

```javascript
#App.vue
<template>
  <div>
    Vue2
    <my-slot>
      <button>我是按钮</button>
    </my-slot>

    <my-slot>
      <my-button></my-button>
    </my-slot>

    <my-slot> </my-slot>

    <my-slot>
      //这个会有三份,因为它是默认把这些放在一个插槽,而有三个插槽
      //如果想要平均分配的话，可以使用具名插槽
      <h1>肖</h1>
      <h2>紫嫣</h2>
	  <h3>我喜欢你</h3>
    </my-slot>
  </div>
</template>

<script>
import MySlot from './MySlot.vue'
import MyButton from './MyButton.vue'
export default {
  components: { MySlot, MyButton },
}
</script>
#MySlot
<template>
  <div>
    <h2>组件开始</h2>
    <slot><i>我是默认的i元素</i> </slot>
    <slot><i>我是默认的i元素</i> </slot>
    <slot><i>我是默认的i元素</i> </slot>
    <h2>组件结束</h2>
  </div>
</template>
#MyButton
<template>
  <button>Xiao Button</button>
</template>
```

### 具名插槽

```javascript
#父组件
<template>
  <div>
    //把name的值传给子组件
    <nav-bar :name="name">
      //具名插槽left  v-slot:left
      #也可以简写成 #left
      <template v-slot:left>
        <button>左边的按钮</button>
      </template>
      <template #center>
        <h2>我是标题</h2>
      </template>
      <template v-slot:right>
        <i>右边的i元素</i>
      </template>
	  //动态插槽  不能#name,只能#[name]或v-slot:[name]
      <template #[name]>
        <i>额外的元素</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data() {
    return {
      name: 'Xiao',
    }
  },
}
</script>
#子组件
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="addition">
      //动态读取父组件传来的name
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
}
</script>

<style type="less" scoped>
/* 样式 */
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left,
.right,
.addition {
  width: 80px;
  background-color: red;
}
.center {
  flex: 1;
  background-color: skyblue;
}
</style>
```

### 渲染作用域

```javascript
#父组件
//父级模板里的所有内容都是在父级作用域中编译的
//子级模板里的所有内容都是在子级作用域中编译的
<template>
  <div>Vue2</div>
  <children>
    //父元素没有，子元素有；但是也是渲染不出来的
    <button>{{ message }}</button>
  </children>
</template>

<script>
import children from './ChildrenSlot.vue'
export default {
  components: {
    children,
  },
}
</script>
#子组件
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //子元素有，但是也是渲染不出来的
      //因为父级模板里的所有内容都是在父级作用域中编译的
      message: 'hello world',
    }
  },
}
</script>
```

### 作用域插槽

```javascript
#https://v3.cn.vuejs.org/guide/component-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD
//父组件
<template>
  <div>Vue2</div>
  //传值给子组件
  <children-slot :names="names">
    //父组件 拿到子组件传来的属性
    #具名插槽 v-slot:default="slotProps"  default可以改
    <template v-slot="slotProps">
      //渲染子组件传回来的每一个值
      <button>{{ slotProps.item }}</button>
    </template>
  </children-slot>
#独占默认插槽的缩写语法
//参考地址:https://v3.cn.vuejs.org/guide/component-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95
	//独占默认插槽  子组件的slot没有name(具名插槽和独占默认插槽不能共用)
    <children-slot :names="names" v-slot="slotProps">
        //渲染子组件传回来的每一个值
        <button>{{ slotProps.item }}</button>
    </children-slot>
</template>
<script>
import ChildrenSlot from './ChildrenSlot.vue'
export default {
  components: { ChildrenSlot },
  data() {
    return {
      names: ['why', 'kobe', 'james', 'curry'],
    }
  },
}
</script>
//---------------------------------------------------------------------------------------------
//子组件
<template>
  <div>
    //子组件遍历数组
    #切记不要用name 莫名其妙报错
    <template v-for="item in names" :key="item">
      //子组件把遍历的每一个数据 传回给父组件
      <slot :item="item"></slot>
    </template>
  </div>
</template>
<script>
export default {
  //子组件接收值
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
}
</script>
```

## 切换组件

### v-if

```javascript
#App.vue
<template>
  <div>
    <button
      @click="current = tab"
      :class="{ active: current === tab }"
      v-for="tab in tabs"
      :key="tab"
    >
      {{ tab }}
    </button>
	//通过v-if切换组件
    <template v-if="current === 'home'">
      <home></home>
    </template>
    <template v-else-if="current === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template>
  </div>
</template>

<script>
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Category from './pages/category.vue'
export default {
  components: { Home, About, Category },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      current: 'home',
    }
  },
}
</script>

<style type="less" scoped>
/* 样式 */
button {
  cursor: pointer;
}
.active {
  background-color: red;
}
</style>
//home.vue
<template>
  <div>Home</div>
</template>
//about.vue
<template>
  <div>About</div>
</template>
//category
<template>
  <div>Category</div>
</template>
```

### 动态组件(component 组件)

```javascript
#将上面三个template换成这个
<component :is="current"></component>
```

### 动态路由传值

```javascript
//App.vue
<!-- age带了:所以一定是number -->
<component :is="current" name="Xiao" :age="18" @pageClick="pageClick"></component>

methods: {
    pageClick() {
        console.log('page内部发生了点击')
    }
}
//Home.vue
<template>
  <div @click="btnClick">
    Home
    <br />
    <span>name:{{ name }}</span>
    <br />
    <span>age:{{ age }}</span>
  </div>
</template>

props: {
    name: {
        type: String,
        default: '',
    },
    age: {
        type: Number,
        default: 0,
    },
},
emits: ['pageClick'],
methods: {
    btnClick() {
    	this.$emit('pageClick')
    },
}
```

### keep-alive

```javascript
//include - string | RegExp | Array。只有名称匹配的组件会被缓存；
//exclude - string | RegExp | Array。任何名称匹配的组件都不会被缓存；
//max - number | string。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁
//include 和 exclude prop 允许组件有条件地缓存：
//    二者都可以用逗号分隔字符串、正则表达式或一个数组来表示；
//    匹配首先检查组件自身的 name 选项；
#如果写数组或者正则的时候include和exclude前面都要加冒号
<keep-alive include="home,about">
    <component
        :is="current"
        name="Xiao"
        :age="18"
        @pageClick="pageClick"
    ></component>
</keep-alive>
```

## 异步组件

### webpack 分包

```javascript
//通过import函数导入的模块，后续webpack对其进行打包的时候就会进行分包的操作
import('./utils/math').then((res) => {
  console.log(res.sum(20, 30));
});
```

### 异步组件

```javascript
#参考链接:https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent
import { defineAsyncComponent } from 'vue'
import Loading from './loading.vue'
#类型一：工厂函数，该工厂函数需要返回一个Promise对象
// const AsyncCate = defineAsyncComponent(() => import('./asyncCate.vue'))
#类型二：接受一个对象类型，对异步函数进行配置
const AsyncCate = defineAsyncComponent({
  loader: () => import('./asyncCate.vue'),
  //未加载出来时，用来占位的
  loadingComponent: Loading,
  //在显示loadingComponent组件之前,等待多久
  delay: 2000,
  /**
   *
   * @param {*} error 错误信息对象
   * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
   * @param {*} fail  一个函数，指示加载程序结束退出
   * @param {*} attempts 允许的最大重试次数
   */
  onError: function(err, retry,fail, attempts) {},
})
export default {
  components: {
    AsyncCate,
    Loading,
  },
}
</script>
```

### 异步组件与 suspense

```javascript
//Suspense是一个内置的全局组件，该组件有两个插槽：
//    default：如果default可以显示，那么显示default的内容；
//    fallback：如果default无法显示，那么会显示fallback插槽的内容
<suspense>
    <template #default>
    	<async-cate></async-cate>
    </template>
    <template #fallback>
    	<loading></loading>
    </template>
</suspense>
```

## $toRefs

- 获取元素或组件

### refs 的使用

```javascript
#相当于操作dom元素
<template>
  <div>
    //ref="name"  引用时,this.$refs.name可以得到该元素
    <h2 ref="title">标题</h2>
    <button @click="btnClick">获取元素</button>

    <nav-bar-app ref="nav"></nav-bar-app>
    <button @click="btnClickNav">获取组件</button>
  </div>
</template>

<script>
import NavBarApp from './NavBarApp.vue'
export default {
  components: {
    NavBarApp,
  },
  methods: {
    btnClick() {
      //获取元素
      console.log(this.$refs.title)
    },
    btnClickNav() {
      //获取组件  并调用组件的方法  还可以得到组件的数据
      this.$refs.nav.sayHello()
    },
  },
}
</script>
```

### $parent和$root

```javascript
#$parent访问父元素  $root访问根元素
#$children在vue3已经没有了
<template>
  <div>NavBarApp</div>
  <button @click="getParent">获取父组件或根组件</button>

  //耦合性太强,父元素必须要有names
  <div v-for="item in $parent.names" :key="item"></div>
</template>

<script>
export default {
  name: 'NavBarApp',
  methods: {
    getParent() {
      console.log(this.$parent) //获取父组件
      console.log(this.$root) //获取根组件
    },
  },
}
</script>
```

### $el

```javascript
#$el获取组件根元素
this.$refs.nav.$el
```

## 生命周期

**创建、挂载、更新、卸载**

### 钩子函数

```javascript
#父组件
<template>
  <div>
    //切换的时候才有子组件的卸载
    <button @click="isShow = !isShow">切换</button>
    <template v-if="isShow">
      <home></home>
    </template>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  components: { Home },
  data() {
    return {
      isShow: true,
    }
  },
}
</script>
#子组件
<template>
  <div ref="title">{{ message }}</div>
  <button @click="btnClick">修改message</button>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'hello world',
    }
  },
  methods: {
    btnClick() {
      this.message = '你好啊,李银河'
    },
  },
  beforeCreate() {
    console.log('home beforeCreate')
  },
  created() {
    console.log('home created')
  },
  beforeMount() {
    console.log('home beforeMount')
  },
  mounted() {
    console.log('home mounted')
  },
  beforeUnmount() {
    console.log('home beforeUnmount')
  },
  //取消事件的监听,比如说  事件总线的监听
  unmounted() {
    console.log('home unmounted')
  },
  //dom更新前
  beforeUpdate() {
    console.log('beforeUpdate:' + this.$refs.title.innerHTML)
  },
  //dom更新后
  updated() {
    console.log('updated:' + this.$refs.title.innerHTML)
  },
}
</script>
```

### keep-alive 特有的钩子函数

```javascript
#keep-alive组件
//执行一次
created() {
	console.log('about create')
},
//不执行
unmounted() {
	console.log('about unmounted')
},
//进入时执行
activated() {
	console.log('about activated')
},
//离开时执行
deactivated() {
	console.log('about deactivated')
},
```

## 组件的 v-model

**父组件**

```javascript
<template>
  <div>
    //显示数据
    message:{{ message }}
    title:{{ title }}

    <input type="text" v-model="message" />
    //input里的双向绑定  具体做了这些事
    //<input type="text" :value="message" @input="message=$event.target.value"/>

    <xiao-input v-model="message" v-model:title="title"></xiao-input>
	//组件的v-model:把modelValue传给子组件  并且监听子组件的update:model-value事件
    //<xiao-input :modelValue="message" @update:model-value="message=$event"></xiao-input>
  </div>
</template>

<script>
import XiaoInput from './XiaoInput.vue'
export default {
  components: {
    XiaoInput,
  },
  data() {
    return {
      message: 'hello world',
      title: '标题',
    }
  },
}
</script>
```

**子组件**

```javascript
<template>
  <div>
    //1、默认绑定和事件处理
    <button @click="btnClick">修改</button>

    //2、通过input
    <input type="text" :value="modelValue" @input="inputClick" />

    #3、不对,不应该直接改props
    <input v-model="modelValue" />

    #4.计算属性(推荐这种，更优雅)  v-model绑定的是计算属性
    <input type="text" v-model="value" />
    <input type="text" v-model="titleValue" />
  </div>
</template>

<script>
export default {
  //emits列表
  emits: ['update:modelValue', 'update:title'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    value: {
      //将修改的值  通过update:modelValue传给父组件
      set(value) {
        this.$emit('update:modelValue', value)
      },
      //将props返回
      get() {
        return this.modelValue
      },
    },
    titleValue: {
      set(value) {
        this.$emit('update:title', value)
      },
      get() {
        return this.title
      },
    },
  },
  methods: {
    //默认绑定和事件处理
    btnClick() {
      this.$emit('update:modelValue', '你好,李银河')
    },
    //通过input  input本身的事件
    inputClick(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>
```

## Mixin(混入:代码共享)

### 基本使用

```javascript
#mixin.js
const mixin = {
  created() {
    this.sayLove()
  },
  methods: {
    sayLove() {
      console.log('肖紫嫣,我喜欢你')
    },
  },
}
export default mixin
#App.vue
<template>
  <div>Vue2</div>
</template>

<script>
//引入混合的js代码
import mixin from './mixin'
export default {
  //注册混入的js代码
  mixins: [mixin],
}
</script>
```

### 冲突

```javascript
//如果Mixin对象中的选项和组件对象中的选项发生了冲突，那么Vue会如何操作呢？
//这里分成不同的情况来进行处理；
//情况一：如果是data函数的返回值对象
//返回值对象默认情况下会进行合并；
//如果data返回值对象的属性发生了冲突，那么会保留组件自身的数据；
//情况二：如何生命周期钩子函数
//生命周期的钩子函数会被合并到数组中，都会被调用；
//情况三：值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。
//比如都有methods选项，并且都定义了方法，那么它们都会生效；
//但是如果对象的key相同，那么会取组件对象的键值对
```

### 全局混入

```javascript
//这个App是App.vue
const app = createApp(App);
//全局混入
app.mixin({
  created() {
    console.log('global mixin created');
  },
});
app.mount('#app');
```

### extends

```javascript
//basePage.vue   这个了解即可  因为可以用mixin代替
//template不会被继承
<template>
  <div>basePage</div>
</template>
//这里的会被继承
<script>
export default {
  data() {
    return {
      title: 'hello world',
    }
  },
  methods: {
    sayHello() {
      console.log('hello world')
    },
  },
}
</script>
//在其他组件引用
<script>
import BasePage from './basePage.vue'
export default {
  extends: [BasePage],
}
</script>
```

## Transition 动画

### 1、过渡效果

```javascript
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
	//Transition组件
    <transition name="Xiao">
      <h2 v-if="isShow">hello world</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
}
</script>

<style type="less" scoped>
/* 样式 */
#如果transition没有name,那么就是v-entry-from等等
//进入开始 退出结束
.Xiao-enter-from,
.Xiao-leave-to {
  opacity: 0;
}
//进入结束 退出开始
#这里可以省略
.Xiao-enter-to,
.Xiao-leave-from {
  opacity: 1;
}
//进入中 退出中
.Xiao-enter-active,
.Xiao-leave-active {
  #过渡动画
  transition: opacity 2s ease;
}
</style>
```

### 2、原理

```javascript
//当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
//自动嗅探目标元素是否应用了CSS过渡或者动画，如果有，那么在恰当的时机添加/删除 CSS类名；
//如果 transition 组件提供了JavaScript钩子函数，这些钩子函数将在恰当的时机被调用；
//如果没有找到JavaScript钩子并且也没有检测到CSS过渡/动画，DOM插入、删除操作将会立即执行
```

### 3、动画效果

```css
.Xiao-enter-active {
  animation: bounce 1s ease;
}
.Xiao-leave-active {
  /* reverse:反转 */
  animation: bounce 1s ease reverse;
}
/* 帧动画 */
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
```

### 4、过渡+动画效果(动画组件属性)

```javascript
#存在个问题  animation和transition结束时间不一致，以谁为准
#所以建议  <transition type="transition"></transition>
#type指定以谁的事件为准  可以为:transition和animation
#:duration="1000",执行时间
#:duration="{enter:800,leave:1000}"进入和离开时间
/* 进入开始 退出结束 */
.Xiao-enter-from,
.Xiao-leave-to {
  opacity: 0;
}
/* 进入中 退出中 */
.Xiao-enter-active,
.Xiao-leave-active {
  /* 过渡动画  */
  transition: opacity 1s ease;
}
.Xiao-enter-active {
  animation: bounce 1s ease;
}
.Xiao-leave-active {
  /* reverse:反转 */
  animation: bounce 1s ease reverse;
}
/* 帧动画 */
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
```

### \*\*5、mode 属性

```javascript
//两个元素进行切换 out-in是先出后进，in-out是先进后出
<transition name='Xiao' mode='out-in'>
  <h2 v-if='isShow' class='title'>
    hello world
  </h2>
  <h2 v-else class='title'>
    你好啊,李银河
  </h2>
</transition>
```

### \*\*6、动画中放组件

```javascript
<template>
  <div>
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    <!-- :appear="true" -->
    //:appear="true" 或者直接写appear   初始化时就有动画
    <transition name="Xiao" mode="out-in" appear>
      <component class="title" :is="isShow ? 'home' : 'about'"></component>
    </transition>
  </div>
</template>

<script>
#注意:组件需要有根元素
import Home from './page/Home.vue'
import About from './page/About.vue'
export default {
  components: { Home, About },
  data() {
    return {
      isShow: true,
    }
  },
}
</script>

<style type="less" scoped>
/* 样式 */
.title {
  display: inline-block;
}
/* 进入开始 退出结束 */
.Xiao-enter-from,
.Xiao-leave-to {
  opacity: 0;
}
/* 进入中 退出中 */
.Xiao-enter-active,
.Xiao-leave-active {
  /* 过渡动画  */
  transition: opacity 1s ease;
}
.Xiao-enter-active {
  animation: bounce 1s ease;
}
.Xiao-leave-active {
  /* reverse:反转 */
  animation: bounce 1s ease reverse;
}
/* 帧动画 */
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
```

### 7、使用 animate.css

```javascript
#官网:https://animate.style/
//安装第三方动画库
npm install animate.css
//在main.js全局引入
import 'animate.css'
#使用
/* 进入中 退出中 */
.Xiao-enter-active {
  //fadeIn是animate网站上复制的
  animation: fadeIn 1s ease-in;
}
.Xiao-leave-active {
  animation: fadeIn 1s ease-in reverse;
}
```

### 8、自定义过渡 class

```javascript
<transition
  //animate__animated这个一定要加  animate.css第三方库的内容
  enter-active-class='animate__animated animate__fadeIn'
  leave-active-class='animate__animated animate__fadeOut'
>
  //body
</transition>
```

### 9、javascript 钩子

```javascript
 <transition
      name="Xiao"
      mode="out-in"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
    >
  	//body
</transition>

beforeEnter() {
	console.log('beforeEnter')
},
enter(el, done) {
	console.log('enter')
},
afterEnter() {
	console.log('afterEnter')
},
beforeLeave() {
	console.log('beforeLeave')
},
leave(el, done) {
	console.log('leave')
},
afterLeave() {
	console.log('afterLeave')
}
//当我们使用JavaScript来执行过渡动画时，需要进行 done 回调，否则它们将会被同步调用，过渡会立即完成。
//添加 :css="false",也会让Vue会跳过CSS的检测,除了性能略高之外,这可以避免过渡过程中 CSS 规则的影响。
```

### 10、gsap 库(第三方 js 动画库)

```javascript
//安装
npm install gsap
//使用
enter(el, done) {
    console.log('enter')
    //from:从哪来
    //从距离我200px的地方来，并且来的时候缩放为0
    gsap.from(el, {
        scale: 0,
        x: this.distance,
        onComplete: done,
    })
},
leave(el, done) {
    console.log('leave')
    //to:到哪去
    //到距离我200px的地方，并且到达的时候缩放为0
    gsap.to(el, {
        scale: 0,
        x: this.distance,
        onComplete: done,
    })
}
```

### 11、数字缓慢变化(结合 gsap)

```javascript
<template>
  <div>
    //step步数100
    <input type="number" step="100" v-model="counter" />
    <h2>当前计数:{{ showCounter }}</h2>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      counter: 0,
      showNumber: 0,
    }
  },
  computed: {
    showCounter() {
      //不保存小数
      return this.showNumber.toFixed(0)
    },
  },
  watch: {
    counter(newVal) {
      //跟this  后面的showNumer拼接起来
      gsap.to(this, { duration: 1, showNumber: newVal })
    },
  },
}
</script>
```

## Transition-Group

### 1、介绍

```javascript
//默认情况下，它不会渲染一个元素的包裹器，但是你可以指定一个元素并以 tag attribute 进行渲染；
//过渡模式不可用，因为我们不再相互切换特有的元素；
//内部元素总是需要提供唯一的 key attribute 值；
//CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身；
```

### 2、简单使用

```javascript
<template>
  <div>
    <button @click="addNumber">添加数字</button>
    <button @click="delNumber">删除数字</button>

	//用p标签包含它们
    <transition-group tag="p" name="Xiao">
      <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    }
  },
  methods: {
    addNumber() {
      //随机位置插入一个  0表示插入
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
    },
    delNumber() {
      //随机位置删除一个  1表示删除
      this.numbers.splice(this.randomIndex(), 1)
    },
    randomIndex() {
      //生成随机位置
      return Math.floor(Math.random() * this.numbers.length)
    },
  },
}
</script>

<style type="less" scoped>
/* 样式 */
.item {
  margin-right: 10px;
  display: inline-block;
}
.Xiao-enter-from,
.Xiao-leave-to {
  opacity: 0;
  //来:从下到上  去:从上到下
  transform: translateY(30px);
}
.Xiao-enter-active,
.Xiao-leave-active {
  transition: all 1s ease;
}
</style>
```

### 3、改进

```javascript
#在上面的案例中虽然新增的或者删除的节点是有动画的，但是对于哪些其他需要移动的节点是没有动画的
//安装lodash  用于数字洗牌
npm install lodash

<template>
  <div>
    <button @click="addNumber">添加数字</button>
    <button @click="delNumber">删除数字</button>
#   <button @click="shuffleNumber">数字洗牌</button>

    <transition-group tag="p" name="Xiao">
      <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
//引用lodash
#import _ from 'lodash'
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    }
  },
  methods: {
    addNumber() {
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
    },
    delNumber() {
      this.numbers.splice(this.randomIndex(), 1)
    },
     //洗牌函数  调用lodash的shuffle函数
#    shuffleNumber() {
#      this.numbers = _.shuffle(this.numbers)
#    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    },
  },
}
</script>

<style type="less" scoped>
/* 样式 */
.item {
  margin-right: 10px;
  display: inline-block;
}
.Xiao-enter-from,
.Xiao-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.Xiao-enter-active,
.Xiao-leave-active {
  transition: all 1s ease;
}
//不加这个浮动的话  移除的元素占着位置  后面往前移的元素要等待它移除完才能往前走  还是会有卡顿
#.Xiao-leave-active {
#  position: absolute;
#}
//加了这个属性  添加和删除时其他的数字也会有移动的动画
#.Xiao-move {
#  transition: transform 1s ease;
#}
</style>
```

### 4、列表的交错过渡案例

```javascript
<template>
  <div>
    <input type="text" v-model="keyword" />
    <transition-group
      tag="ul"
      name="Xiao"
	  //取消使用css
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      //:data-index="index"   将index传入动画函数中
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      names: ['abc', 'cba', 'nba', 'why', 'lilei', 'hmm', 'kobe', 'james'],
      keyword: '',
    }
  },
  computed: {
    showNames() {
      //indexOf查找字符串有没有符合要求的，没有返回-1  返回符合要求的
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1)
    },
  },
  methods: {
    beforeEnter(el) {
      //进入前高度和透明度都没有
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      //到哪去:透明度1,高度4.5em,延迟时间 index*0.5
      gsap.to(el, {
        opacity: 1,
        height: '1.5em',
        #el.dataset可以得到元素所有data-开头的属性
        delay: el.dataset.index * 0.5,
        onComplete: done,
      })
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: '0',
        delay: el.dataset.index * 0.5,
        onComplete: done,
      })
    },
  },
}
</script>

<style type="less" scoped>
/* 样式 */
#css样式太生硬了  不用
.Xiao-enter-from,
.Xiao-leave-to {
  opacity: 0;
}
.Xiao-enter-active,
.Xiao-leave-active {
  transition: opacity 1s ease;
}
</style>
```

## setup

### 1、基础(context)

```javascript
   /**
   *  参数一:props父组件传递过来的属性
   *  setup里面不能写this
   *  参数二:context也可以解构出来{emit,attrs,slots}
   *  如果不解构的话，就是context.emit,context.attrs,context.slots
   */
  //单纯用emit的话可以这样写:setup(_,{emit});_可以占位
  setup(props, { emit, attrs, slots }) {
    console.log(props.message)
    console.log(attrs.id)  //attrs：所有的非prop的attribute
    console.log(slots)   //slots：父组件传递过来的插槽,这个在以渲染函数返回时会有作用
    console.log(emit)
//emit：当我们组件内部需要发出事件时会用到emit（因为我们不能访问this，所以不可以通过 this.$emit发出事件）
  }
```

### 2、响应式数据(reactive Api)

```javascript
<template>
  <h2>当前计数:{{ state.counter }}</h2>
  <button @click="addCounter">+1</button>
</template>

<script>
//引入reactive
#reactive API对传入的类型是有限制的，它要求我们必须传入的是一个对象或者数组类型
import { reactive } from 'vue'
export default {
  setup() {
    //把数据定义为响应式
    const state = reactive({
      counter: 100,
    })
    const addCounter = () => {
      state.counter++
    }
    return {
      state,
      addCounter,
    }
  },
}
</script>
```

### 3、响应式数据(ref Api)

```javascript
<template>
  //为什么这里不用加.value
  #这是因为当我们在template中使用ref时，它会自动进行解包
  <h2>当前计数:{{ counter }}</h2>
  <button @click="addCounter">+1</button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    //counter变成一个ref的可响应式的引用
    #变成对象了
    let counter = ref(100)
    //局部函数
    const addCounter = () => {
      #它内部的值是在ref的 value 属性中被维护的，所以使用时要加.value
      //这里的counter是ref对象
      counter.value++
    }
    return {
      counter,
      addCounter,
    }
  },
}
</script>
```

### 4、ref 解包

```javascript
<template>
  <h2>当前计数:{{ counter }}</h2>
  //ref解包是浅层解包(info是一个简单的JavaScript对象)
  <h2>{{ info.counter.value }}</h2>
  //如果最外层包裹的是一个reactive可响应式对象,那么ref可以解包
  <h2>{{ reactiveInfo.counter }}</h2>
  <button @click="addCounter">+1</button>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  setup() {
    const counter = ref(100)
    const info = {
      counter,
    }
    const reactiveInfo = reactive({
      counter,
    })
    const addCounter = () => {
      counter.value++
    }
    return {
      counter,
      info,
      reactiveInfo,
      addCounter,
    }
  },
}
</script>
```

### 5、readonly

```javascript
#readonly只读不可修改  适合传给子组件   但也要是reactive或者ref响应对象   否则子组件不能同步更新
<template>
  <button @click="updateState">readonly</button>
</template>

<script>
import { reactive, readonly, ref } from 'vue'
export default {
  setup() {
    //1、普通对象
    const info = { name: 'Xiao' }
    const readonlyInfo = readonly(info)

    //2、响应式对象reactive  传给子组件,子组件才能响应式
    const info = reactive({
      name: 'Xiao',
    })
    const readonlyInfo = readonly(info)

    //3、响应式对象ref
    const info = ref('Xiao')
    const readonlyInfo = readonly(info)

    const updateState = () => {
      //1、2使用
      readonlyInfo.name = 'ZiYan'
      //3、使用
      readonlyInfo.value = 'ZiYan'
    }
    return {
      updateState,
    }
  },
}
</script>
```

### 6、Reactive 判断的 API

```javascript
#isProxy
//检查对象是否是由 reactive 或 readonly创建的 proxy。
#isReactive
//检查对象是否是由 reactive创建的响应式代理：
//如果该代理是 readonly 建的，但包裹了由 reactive 创建的另一个代理，它也会返回 true；
#isReadonly
//检查对象是否是由 readonly 创建的只读代理。
#toRaw
//返回 reactive 或 readonly 代理的原始对象（不建议保留对原始对象的持久引用。请谨慎使用）。
#shallowReactive
//创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (深层还是原生对象)。
#shallowReadonly
//创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换（深层还是可读、可写的）。
```

### 7、toRefs 和 toRef

```javascript
#toRefs和toRef里面必须是reactive对象
<template>
  <h2>{{ info.name }}-{{ info.age }}</h2>
  <h2>{{ name }}-{{ age }}</h2>
  <button @click="changeAge">修改年龄</button>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  setup() {
    const info = reactive({ name: 'Xiao', age: 16 })

    //普通解构
    let { name, age } = info
    //相当于:
    let name = "Xiao"
    let age = 16

    //1、toRefs:将reactive对象中的所有属性都转成ref,建立链接
    let { name, age } = toRefs(info)
    #info.name与name.value建立了链接,任何一个修改都会引起另外一个变化
    //相当于
    let name = ref("Xiao")
    let age = ref(16)

    //2、toRef:将reactive对象中的一个属性转成ref,建立链接
    let { name } = info
    //toRef(对象,key)
    let age = toRef(info, 'age')


    const changeAge = () => {
      info.age++
      age.value++
    }
    return { info, name, age, changeAge }
  },
}
</script>
```

### --8、ref 其他的 API

```javascript
#unref
//案例
const name =ref("Xiao")
foo(name)
function foo(bar){
	unref(bar)
}
//如果我们想要获取一个ref引用中的value，那么也可以通过unref方法：
//如果参数是一个 ref，则返回内部值，否则返回参数本身；
//这是 val = isRef(val) ? val.value : val 的语法糖函数；
#isRef
//判断值是否是一个ref对象。
#shallowRef
//创建一个浅层的ref对象；
#triggerRef
//手动触发和 shallowRef 相关联的副作用
#案例
<template>
  <h2>{{ info.name }}</h2>
  <button @click="changeInfo">修改</button>
</template>

<script>
import { ref, shallowRef, triggerRef } from 'vue'
export default {
  setup() {
    //ref对象默认是深层的，即可以直接修改对象中的属性
    const info = ref({ name: 'Xiao' })
    //shallowRef:创建一个浅层的ref对象，不可以直接修改对象中的属性
    const info = shallowRef({ name: 'Xiao' })

    const changeInfo = () => {
      // info.value = { name: 'james' }
      // 如果是ref对象，直接修改就行
      // 如果是shallowRef创建的ref浅层对象,必须搭配triggerRef使用
      info.value.name = 'james'
      triggerRef(info) //副作用:强制性刷新info
    }
    return { info, changeInfo }
  },
}
</script>
```

### \*\*9、自定义 ref(防抖函数)

```javascript
#customRef
//创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制：
//它需要一个工厂函数，该函数接受 track 和 trigger 函数作为参数；
//并且应该返回一个带有 get 和 set 的对象；
#bounce.js
import { customRef } from 'vue'
//自定义ref delay:默认延时时间
export default function(value,delay = 300) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        //收集依赖 对其依赖项跟踪
        track()
        return value
      },
      set(newVal) {
        //如果在1000ms继续输入时,清除原有防抖函数,重新计时
        clearTimeout(timer)
        //延时1000ms执行
        timer = setTimeout(() => {
          value = newVal
          //依赖更新触发进行显示控制
          trigger()
        }, delay)
      },
    }
  })
}
#App.vue
<template>
  //这个就是依赖
  <h2>{{ message }}</h2>
  <input type="text" v-model="message" />
</template>

<script>
import useRef from './bounce'
export default {
  setup() {
    //也可以传一个延时时间进去
    const message = useRef('hello world',1000)
    return {
      message,
    }
  },
}
</script>
```

### 10、computed(计算属性)

```javascript
<template>
  <h2>{{ fullName }}</h2>
  <button @click="changeName">修改</button>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const firstName = ref('Xiao')
    const lastName = ref('ZiYan')
    // 1、不是响应式
    // const fullName = firstName.value + lastName.value

    #  方式一：接收一个getter函数，并为 getter 函数返回的值，返回一个不变的 ref 对象；
    // 2、计算属性 用法一:传入一个getter函数 computed返回值是一个ref对象
    #computed value is readonly  指的是fullName不可修改  可以通过修改firstName来修改fullName
    // const fullName = computed(() => firstName.value + lastName.value)

    #  方式二：接收一个具有 get 和 set 的对象，返回一个可变的（可读写）ref 对象；
    // 3、计算属性 用法二:传入一个对象  包含getter/setter
    const fullName = computed({
      get: () => firstName.value + lastName.value,
      set(newVal) {
        //将字符串用空格进行切割  切割成数组
        const names = newVal.split(' ')
        //给firstName和lastName赋值
        firstName.value = names[0]
        lastName.value = names[1]
      },
    })

    const changeName = () => {
      // 配合计算属性,用法一使用的
      // firstName.value = 'Liu'

      // 配合计算属性,用法二使用的
      fullName.value = 'Liu ZiYan'
    }
    return { fullName, changeName }
  },
}
</script>
```

### 11、watchEffect(侦听数据)

```javascript
#watchEffect用于自动收集响应式数据的依赖  拿不到原来的值
//首先，watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖；
//其次，只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行
<template>
  <h2>{{ name }}-{{ age }}</h2>
  <button @click="changeName">修改name</button>
  <button @click="changeAge">修改age</button>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const name = ref('Xiao')
    const age = ref(18)
    const changeName = () => {
      name.value = 'XiaoZiYan'
    }
    const changeAge = () => {
      age.value++
      //当大于25岁时,停止侦听
      if (age.value > 25) {
        stop()
      }
    }
    //默认立即执行一次 onInvalidate是形参  stop是返回值
    const stop = watchEffect((onInvalidate) => {
      //模拟网络请求
      const timer = setTimeout(() => {
        console.log('网络请求成功~')
      }, 2000)

      //在这个函数中清除额外的副作用
      onInvalidate(() => {
        //根据name和age发送网络请求 当进行网络请求时，name和age发生改变，取消之前的网络请求
      	#request.cancel()
        //模拟网络请求
        clearTimeout(timer)
      })

      //收集依赖  当依赖发生改变时执行
      console.log('name:', name.value, 'age:', age.value)
    })
    return { name, age, changeName, changeAge }
  },
}
</script>
```

### 12、ref

```javascript
<template>
  <h2 ref="title">Xiao</h2>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    const title = ref(null)

    watchEffect(
      () => {
        console.log(title.value)
      },
      {
        //这个是立即执行  所以第一次是null 第二次是正确的值
        // flush:"pre"
        //挂载完之后拿   这个第一次就是正确的值
        flush: 'post',
      }
    )

    return { title }
  },
}
</script>
```

### 13、watch 的使用

```javascript
#watch允许我们：
//	懒执行副作用（第一次不会直接执行）
//    访问侦听状态变化前后的值
#watch侦听函数的数据源有两种类型：
//	一个getter函数：但是该getter函数必须引用可响应式的对象（比如reactive或者ref）；
//	直接写入一个可响应式的对象，reactive或者ref（比较常用的是ref）
<template>
  <button @click="change">修改</button>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'Xiao',
      age: 18,
    })
    //1、侦听watch时,传入一个getter函数  新值、旧值不一样
    watch(
      () => info.name,
      (newVal, oldVal) => {
        console.log('newVal:', newVal, 'oldVal:', oldVal)
      }
    )

    //2、传入一个可响应式对象:reactive对象/ref对象
    //情况一:reactive对象获取到的newVal和oldVal本身都是reactive对象  值是一样的
    watch(info, (newVal, oldVal) => {
      console.log('newVal:', newVal, 'oldVal:', oldVal)
    })

    //情况一的修改   返回值为普通的对象   浅层的新值、旧值不一样；深层的都一样
    // watch(()=>({...info}))是简写
    watch(
      () => {
        return { ...info }
      },
      (newVal, oldVal) => {
        console.log('newVal:', newVal, 'oldVal:', oldVal)
      }
    )

    //情况二:ref对象获取newVal和oldVal是value值的本身 新值旧值不同
    const name = ref('Xiao')
    watch(name, (newVal, oldVal) => {
      console.log('newVal:', newVal, 'oldVal:', oldVal)
    })

    const change = () => {
      info.name = 'XiaoZiYan'
      name.value = "XiaoZiYan"
    }
    return { change }
  },
}
</script>
```

### 14、侦听多个数据源

```javascript
<template>
  <button @click="change">修改</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'Xiao',
      age: 18,
    })
    const name = ref('XiaoZiYan')
    //侦听多个数据源
    watch(
      //将info解构  可以得到普通对象
      [() => ({ ...info }), name],
      //让它们一 一入坑
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, oldInfo)
        console.log(newName, oldName)
      }
    )

    const change = () => {
      info.name = 'XiaoZiYan'
      name.value = 'LiuZiYan'
    }
    return { change }
  },
}
</script>
```

### 15、watch 的深度侦听

```javascript
<template>
  <button @click="change">修改</button>
</template>

<script>
import { ref, reactive, watch, computed } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'Xiao',
      age: 18,
      love: {
        name: 'Liu',
        age: 18,
      },
    })

    #计算属性  保留深度监听的旧值 详见010-深度侦听
    const infoComputed = computed(() => JSON.parse(JSON.stringify(info)))
    //默认深度侦听 info是reactive对象  infoComputed是普通对象
    //info 新旧值一样  infoComputed新旧值不一样
    //监听infoComputed,浅层、深层的值改变都可以保留旧值
    watch(infoComputed, (newInfo, oldInfo) => {
      console.log('默认的深度监听', newInfo, oldInfo)
    })
    //自定义深度监听 监听不了计算属性(infoComputed) 监听info是普通对象,但是新旧值一致
    //监听info,浅层的值改变可以保留旧值；深层的值保留不了旧值
    watch(
      #() => ({ ...info.love })  解构出来可以监听深层的值
      #() => info.love.name  还可以给一个getter函数 指定要监听的某一个值
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log('自定义的深度监听', newInfo, oldInfo)
      },
      { deep: true, immediate: true }
    )

    const change = () => {
      info.love.name = 'LiuZhiHui'
      info.name = 'XiaoZiYan'
    }
    return { change }
  },
}
</script>
```

### 16、生命周期

**选项 ApI**

beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted、activated、deactivated

**组合 API**

not needed、not needed、onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount、onUnmounted、onActivated、onDeactivated

因为 setup 是围绕 beforeCreate 和 created 生命钩子运行的，所以这两个生命钩子函数被取消了。

### 17、provide 与 inject

```javascript
#provide与readonly结合使用,形成单向数据流，只有在父组件才可以修改值；子组件只能读而不能写
//App.vue
<template>
  <home></home>
  //父组件进行 counter++操作
  <button @click="counter++">App:{{ counter }}</button>
</template>

<script>
import { provide, readonly, ref } from 'vue'
import Home from './Home.vue'
export default {
  components: { Home },
  setup() {
    let counter = ref(100)
    //provide和readonly结合使用比较好  子组件只可读，不可写
    provide('counter', readonly(counter))

    return {
      counter,
    }
  },
}
</script>
//Home.vue
<template>
  //在子组件展示counter
  <h2>{{ counter }}</h2>
  //这里会报警告,因为在proviede设置了readonly仅读
  <button @click="counter++">Home:{{ counter }}</button>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    //用inject接收provide的值   如果provied没有的话,显示"默认值"
    const counter = inject('counter', '默认值')
    return { counter }
  },
}
</script>
```

### 18、hook(抽取公共代码)

#### 1、useCounter

```javascript
//App.vue
<template>
  <div>counter:{{ counter }}</div>
  <div>counter*2:{{ dobuleCounter }}</div>
  <button @click="addCounter">+1</button>
  <button @click="delCounter">-1</button>
</template>

<script>
import useCounter from './hooks/useCounter'
export default {
  setup() {
    //推荐这种  逻辑清除
    const { counter, dobuleCounter, addCounter, delCounter } = useCounter()
    return { counter, dobuleCounter, addCounter, delCounter }
    // return {
    //   ...useCounter(),
    // }
  },
}
</script>
//hooks/useCounter
import { computed, ref } from 'vue'

export default function() {
  const counter = ref(0)
  const dobuleCounter = computed(() => counter.value * 2)
  const addCounter = () => {
    counter.value++
  }
  const delCounter = () => {
    counter.value--
  }
  return { counter, dobuleCounter, addCounter, delCounter }
}
```

#### 2、useTitle

```javascript
//App.vue
<script>
import useTitle from './hooks/useTitle'
export default {
  setup() {
    //传入一个默认值
    const titleRef = useTitle('我是默认值')
    setTimeout(() => {
      //修改响应式对象
      titleRef.value = 'vue3学习'
    }, 3000)
  },
}
</script>
//hooks/useTitle
import { ref, watch } from 'vue'
//定义一个默认的title
export default function(title = '默认的title') {
  //定义一个响应式对象
  const titleRef = ref(title)
  //因为是响应式对象  所以引用组件改变的话  这边可以监听到
  watch(
    titleRef,
    (newVal) => {
      //将修改的响应式对象赋值给title
      document.title = newVal
    },
    //立即执行一次
    { immediate: true }
  )
  //将响应式对象  return出去
  return titleRef
}

```

#### 3、useScroll

```javascript
//App.vue
<template>
  <p></p>
  <div class="scroll">
    <div class="scroll-x">scrollX:{{ scrollX }}</div>
    <div class="scroll-y">scrollY:{{ scrolly }}</div>
  </div>
</template>

<script>
import useScrollPosition from './hooks/useScrollPosition'
export default {
  setup() {
    const { scrollX, scrolly } = useScrollPosition()
    return { scrollX, scrolly }
  },
}
</script>

<style type="less" scoped>
/* 样式 */
p {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  right: 60px;
  bottom: 30px;
}
</style>
//hooks/useScrollPosition.js
import { ref } from 'vue'

export default function() {
    const scrollX = ref(0)
    const scrolly = ref(0)

    document.addEventListener('scroll', () => {
      scrollX.value = window.scrollX.toFixed(0)
      scrolly.value = window.scrollY.toFixed(0)
    })
    return { scrollX, scrolly }
}
```

#### 4、useMouse

```javascript
//App.vue
<template>
  <div class="mouse">
    <div class="mouse-x">mousex:{{ mousex }}</div>
    <div class="mouse-y">mousey:{{ mousey }}</div>
  </div>
</template>

<script>
import useMouse from './hooks/useMouse'
export default {
  setup() {
    const { mousex, mousey } = useMouse()
    return { mousex, mousey }
  },
}
</script>

<style type="less" scoped>
/* 样式 */
.mouse {
  position: fixed;
  right: 60px;
  bottom: 30px;
}
</style>
//hooks/useMouse.js
import { ref } from 'vue'

export default function() {
  const mousex = ref(0)
  const mousey = ref(0)

  document.addEventListener('mousemove', (event) => {
    mousex.value = event.pageX
    mousey.value = event.pageY
  })
  return { mousex, mousey }
}
```

#### 5、useLocalStorage

```javascript
//App.vue
<template>
  <h2>{{ data }}</h2>
  <button @click="changeData">修改data</button>
</template>

<script>
import useLocalStorage from './hooks/useLocalStorage'
export default {
  setup() {
    //设置localStorage
    const data = useLocalStorage('wife', { name: 'XiaoZiYan', age: 18 })
    //获取localStorage
    //const data = useLocalStorage('wife')

    const changeData = () => {
      //修改值  响应式数据   useLocalStorage能监听到并作出修改
      data.value = { name: 'XiaoZiYan', age: 21 }
    }
    return { data, changeData }
  },
}
</script>
//hooks/useLocalStorage.js
import { ref, watch } from 'vue'

export default function(key, value) {
  //把value设置响应式数据
  const data = ref(value)

  if (value) {
    //保存
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    //取值
    data.value = JSON.parse(window.localStorage.getItem(key))
  }
  //因为data是响应式数据  所以当data修改时能监听到 并重新保存
  watch(data, (newVal) => {
    //保存
    window.localStorage.setItem(key, JSON.stringify(newVal))
  })

  return data
}
```

#### 6、代码的再抽取

```javascript
#hooks/index.js  hooks代码的统一出口
import useCounter from './useCounter'
import useTitle from './useTitle'
import useScrollPosition from './useScrollPosition'
import useMouse from './useMouse'
import useLocalStorage from './useLocalStorage'

export {
    useCounter,
    useTitle,
    useScrollPosition,
    useMouse,
    useLocalStorage
}

#App.vue  App.vue需要什么就导入什么  让代码更简洁
import {useCounter,useTitle,useScrollPosition,useMouse,useLocalStorage} from './hooks/index'
```

#### 7、vue3 的顶层写法

```javascript
//App.vue
<template>
  <h2>当前计数:{{ counter }}</h2>
  <button @click="addCounter">+1</button>
  <hello-world message="呵呵呵" @increment="increment"></hello-world>
</template>
#setup  这个是实验功能
<script setup>
import { ref } from 'vue'
import HelloWorld from './HelloWorld.vue'

const counter = ref(0)
const addCounter = () => counter.value++
const increment = (payload) => {
  counter.value = payload
}
</script>
//Home.vue
<template>
  Hello World
  <h2>{{ message }}</h2>
  <button @click="emitEvent">发射事件</button>
</template>

<script setup>
import { defineProps } from 'vue'
//默认props
const props = defineProps({
  message: {
    type: String,
    default: 'hhhh',
  },
})
//默认emit
const emit = defineEmits(['increment', 'decrement'])
const emitEvent = () => {
  emit('increment', '100000')
}
</script>
```

### 19、h 函数

#### 1、简单的 render 函数

```javascript
#h()函数接受三个参数
//第一个参数:
//{String | Object | Function } tag
//一个html标签名  一个组件 一个异步组件 或一个函数式组件
//必需的
//"div"
//第二个参数:
//{object} props
//与attribute(属性)、prop和事件相对应的对象
//可选的
//{}
//第三个参数
//{String | Array | Object} children
//子VNodes,使用`h()构建`
//或使用字符串获取"文本Vnode"或者有插槽的对象
//可选的
//[
//    "some text",
//    h("h1","A HEADLINE"),
//    h(MyComponent,{
//        sommeProp:"foobar"
//    })
//]
#注意事项：
//如果没有props，那么通常可以将children作为第二个参数传入；
//如果会产生歧义，可以将null作为第二个参数传入，将children作为第三个参数传入；
<script>
import { h } from 'vue'
export default {
  render() {
    return h('h2', { class: 'title' }, 'hello render')
  },
}
</script>
```

#### 2、计数器案例

**第一种写法**

```javascript
<script>
import { ref, h } from 'vue'
export default {
  // data() {
  //   return {
  //     counter: 0,
  //   }
  // },
  setup() {
    const counter = ref(0)
    return { counter }
  },
  render() {
    return h('div', { class: 'app' }, [
      h('h2', null, `当前计数:${this.counter}`),
      h(
        'button',
        {
          onClick: () => this.counter++,
        },
        '+1'
      ),
      h(
        'button',
        {
          onClick: () => this.counter--,
        },
        '-1'
      ),
    ])
  },
}
</script>
```

**第二种写法**

```javascript
<script>
import { ref, h } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    return () => {
      return h('div', { class: 'app' }, [
        h('h2', null, `当前计数:${counter.value}`),
        h(
          'button',
          {
            onClick: () => counter.value++,
          },
          '+1'
        ),
        h(
          'button',
          {
            onClick: () => counter.value--,
          },
          '-1'
        ),
      ])
    }
  },
}
</script>
```

#### 3、函数组件与插槽的使用

```javascript
//App.vue
<script>
import { ref, h } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default {
  render() {
    return h(HelloWorld, null, {
      //这个default是插槽
      default:
        //将这个内容传给子组件
        (props) => h('span', null, `app传入到HelloWorld中的内容:${props.name}`),
    })
  },
}
</script>
//HelloWorld.vue组件
<script>
import { h } from 'vue'
export default {
  render() {
    return h('h2', null, [
      h('h2', null, 'HelloWorld'),
      //取到default插槽
      this.$slots.default
      //如果有就调用这个函数 (props) => h('span', null, `app传入到HelloWorld中的内容:${props.name}`)
      //执行的时候还可以传参数进去 {name:"XiaoZiYan"}=>props
      //相当于父传子 (props) => h('span', null, `app传入到HelloWorld中的内容:${props.name}`)
      //子再传父 {name:"XiaoZiYan"}=>props  传参进去
      //父再读取值 结果就是return h('span', null, `app传入到HelloWorld中的内容:XiaoZiYan`)
      //就是这样 <span>app传入到HelloWorld中的内容:XiaoZiYan</span>
        ? this.$slots.default({ name: 'XiaoZiYan' })
        //如果没有  则显示默认值
        : h('span', null, '我是HelloWorld的默认值'),
    ])
  },
}
</script>
```

#### 4、jsx

```javascript
//App.vue
<script>
import Home from './Home.vue'
export default {
  data() {
    return {
      counter: 0,
    }
  },
  render() {
    const increment = () => this.counter++
    const decrement = () => this.counter--

    return (
      <div>
        //单花括号表示
        <h2>当前计数:{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
	   //插槽  默认插槽
	   //1、父传子 default: (props) => <button>{props.name}</button>
        <Home>{{ default: (props) => <button>{props.name}</button> }}</Home>
      </div>
    )
  },
}
</script>
//Home.vue
<script>
export default {
  render() {
    return (
      <div>
        <h2>HelloWorld</h2>
        //判断是否有默认插槽
        {this.$slots.default ? (
          //有的话就执行  并把{name:"XiaoZiYan"}传进去再执行
          //2、default: (name:"XiaoZiYan") => <button>XiaoZiYan</button>
          //3、执行default <button>XiaoZiYan</button>
          this.$slots.default({ name: 'XiaoZiYan' })
        ):(
          <span>哈哈哈哈</span>
        )}
      </div>
    )
  },
}
</script>
```

## 自定义指令

### 1、基本使用

```javascript
//默认实现  自动获取焦点
<template>
  <input type="text" name="" id="" ref="input" />
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const input = ref(null)
    //挂载完之后
    onMounted(() => {
      input.value.focus()
    })
    return {
      input,
    }
  },
}
</script>
//局部指令
#directives
<template>
  <input type="text" v-focus />
</template>

<script>
export default {
  directives: {
    focus: {
      //对象中的一个属性  到时候会被执行回调
      mounted(el, bindings, vnode, preVnode) {
        el.focus()
      },
    },
  },
}
</script>
//全局指令
//App.vue
<template>
  <input type="text" v-focus />
</template>
//main.js
app.directive('focus', {
  //对象中的一个属性  到时候会被执行回调
  mounted(el, bindings, vnode, preVnode) {
    el.focus()
  },
})
```

### 2、生命周期

```javascript
//created：在绑定元素的 attribute 或事件监听器被应用之前调用；
//beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用；
//mounted：在绑定元素的父组件被挂载后调用；
//beforeUpdate：在更新包含组件的 VNode 之前调用；
//updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用；
//beforeUnmount：在卸载绑定元素的父组件之前调用；
//unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次
<template>
  <button v-if="counter < 2" @click="increment" v-xiao.lazy="'Xiao'">
    当前计数:{{ counter }}
  </button>
</template>

<script>
import { ref } from 'vue'
export default {
  directives: {
    xiao: {
      //el是元素
      created(el, bindings) {
        console.log('created')
        console.log(bindings.value)   // Xiao   修饰符
        console.log(bindings.modifiers)   // {lazy: true}  值
      },
      beforeMount() {
        console.log('beforeMount')
      },
      mounted() {
        console.log('mounted')
      },
      beforeUpdate() {
        console.log('beforeUpdate')
      },
      updated() {
        console.log('updated')
      },
      beforeUnmount() {
        console.log('beforeUnmount')
      },
      unmounted() {
        console.log('unmounted')
      },
    },
  },
  setup() {
    const counter = ref(0)
    const increment = () => counter.value++
    return {
      counter,
      increment,
    }
  },
}
</script>
```

### 3、案例-格式化时间

```javascript
//App.vue
<template>
  //v-format-time自定义指令  'YYYY/MM/DD'是参数
  <h2 v-format-time="'YYYY/MM/DD'">{{ timeStamp }}</h2>
</template>

<script>
export default {
  setup() {
    const timeStamp = 1624452193
    return { timeStamp }
  },
}
</script>
//全局定义指令 main.js
import registerDireactives from './direactives'
registerDireactives(app)
//  direactives/index.js  定义一个函数  做所有自定义指令的出口
import registerFormatTime from './format-time'
export default function registerDireactives(app) {
  registerFormatTime(app)
}
//  direactives/format-time.js  格式化时间的具体函数
import dayjs from 'dayjs'
export default function(app) {
  #默认参数 这里有问题  形成了闭包
  #//let formatString = 'YYYY-MM-DD HH:mm:ss'
  //注册全局自定义指令
  app.directive('format-time', {
    #默认参数放这
    #bindings.formatString = 'YYYY-MM-DD HH:mm:ss'
    //数据挂载放在created
    created(el, bindings) {
      //如果传入了参数
      if (bindings.value) {
        //formatString=参数
        #修改
        //formatString = bindings.value
        #换成这个
        bindings.formatString = bindings.value
      }
    },
    mounted(el, bindings) {
      //获取元素的文本  时间戳
      const text = el.textContent
      //将字符串变成整数
      let timeStamp = parseInt(text)
      //如果字符串长度为10位  秒
      if (text.length === 10) {
        // 毫秒转秒
        timeStamp = timeStamp * 1000
      }
      //给元素的文本赋值  利用dayjs格式化时间
      #修改
      //el.textContent = dayjs(timeStamp).format(formatString)
      #换成这个
      el.textContent = dayjs(timeStamp).format(bindings.formatString)
    },
  })
}
```

## Teleport

```javascript
#to：指定将其中的内容移动到的目标元素，可以使用选择器；
#disabled：是否禁用 teleport 的功能
//index.html
<div id="Xiao"></div>
//App.vue
<template>
  //会挂载到这里去  <div id="Xiao"></div>
  <teleport to="#Xiao">
    <h2>当前计数</h2>
    <button>+1</button>
    <hello-world></hello-world>
  </teleport>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: { HelloWorld },
}
</script>
```

## Vue 插件

### 1、认识

```javascript
//通常我们向Vue全局添加一些功能时，会采用插件的模式，它有两种编写方式：
//对象类型：一个对象，但是必须包含一个 install 的函数，该函数会在安装插件时执行；
//函数类型：一个function，这个函数会在安装插件时自动执行；
//插件可以完成的功能没有限制，比如下面的几种都是可以的：
//添加全局方法或者 property，通过把它们添加到 config.globalProperties 上实现；
//添加全局资源：指令/过滤器/过渡等；
//通过全局 mixin 来添加一些组件选项；
//一个库，提供自己的 API，同时提供上面提到的一个或多个功能
```

### 2、对象类型-插件

```javascript
//  plugins/plugins_object.js
export default {
  //一定要有install
  install(app) {
    //一般插件都是  $开头
    app.config.globalProperties.$name = 'Xiao'
  },
}
//  main.js  注册插件
import plugins_object from './plugins/plugins_object'
app.use(plugins_object)
//  App.vue  使用插件
<script>
import { getCurrentInstance } from 'vue'
export default {
  //vue3使用
  setup() {
    //实例
    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties.$name)
  },
  //vue2使用  this.$name即可
  mounted() {
    console.log(this.$name)
  },
}
</script>
```

### 3、函数类型-插件

```javascript
//  plugins/plugins_function.js
export default function (app) {
  console.log('function app', app);
}
//   main.js 注册插件
import plugins_function from './plugins/plugins_function';
app.use(plugins_function);
```

## vue-router(前端路由)

### 1、hash 模式

```javascript
<div id="app">
    <a href="#/home">home</a>
    <a href="#/about">about</a>
    <div class="content"></div>
</div>

<script>
    const content = document.querySelector(".content")
    window.addEventListener("hashchange", () => {
        switch (location.hash) {
            case "#/home": content.innerHTML = "home"; break;
            case "#/about": content.innerHTML = "about"; break;
            default: content.innerHTML = "404"
        }
    })
</script>
```

### 2、history 模式

```javascript
#六种模式
//replaceState：替换原来的路径；
//pushState：使用新的路径；
//popState：路径的回退；
//go：向前或向后改变路径；
//forward：向前改变路径；
//back：向后改变路径；

<div id="app">
    <a href="/home">home</a>
	<a href="/about">about</a>
	<div class="content"></div>
</div>

<script>
    const content = document.querySelector(".content")
	//替换内容
    const changeContent = () => {
        switch (location.pathname) {
            case "/home": content.innerHTML = "Home"; break;
            case "/about": content.innerHTML = "About"; break;
            default: content.innerHTML = "default";
        }
    }
    const aEls = document.getElementsByTagName("a")
    for (let aEl of aEls) {
        aEl.addEventListener("click", e => {
            //阻止a的默认事件
            e.preventDefault()
            //得到a的href
            const href = aEl.getAttribute("href")
            //pushState是进栈操作
            history.pushState({}, "", href)
            //替换 不能前进后退
            // history.replaceState({}, "", href)
            //改变内容
            changeContent()
        })
    }
	//出栈的时候也要改变内容
    window.addEventListener("popstate", changeContent)
</script>
```

### 3、基本使用

```javascript
//安装
npm install vue-router@4
#   router/index.js
//导入路由相关的api
import {
  //创建路由
  createRouter,
  //路由模式 hash history
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
//导入路由相关页面
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
//将路由路径与组件绑定
const routes = [
  #重定向  默认home页
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
]
//创建一个路由对象router
const router = createRouter({
  //路由关系
  routes,
  //选择路由模式
  history: createWebHashHistory(),
})
export default router
#   main.js
import router from './router'
app.use(router)
#    App.vue
<template>
  <div>
    //to跳至哪个组件 router-link内置方法
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    //路由出口:显示组件内容
    <router-view></router-view>
  </div>
</template>
```

### 4、router-link

```javascript
//to属性：
//是一个字符串，或者是一个对象
//replace属性：
//设置 replace 属性的话，当点击时，会调用 router.replace()，而不是 router.push()；
#active-class属性：
//设置激活a元素后应用的class，默认是router-link-active
#可以通过active-class将其改名
<router-link to="/home" active-class="Xiao-active">首页</router-link>
<router-link to="/about" active-class="Xiao-active">关于</router-link>

<style type="less" scoped>
/* 样式 */
.router-link-active {
  color: skyblue;
}
.Xiao-active {
  color: red;
}
</style>

//------------------------------------------------------------------------------------------------
#exact-active-class属性：
//链接精准激活时，应用于渲染的 <a> 的 class，默认是router-link-exact-active

#区别  假设路径是http://localhost:8080/home/message
//那么 <router-link to="/home">首页</router-link>   这里会加上router-link-active
//<router-link to="/home/message">消息</router-link>  会加上router-link-active和router-link-exact-active
```

### 5、路由懒加载

```javascript
//   index.js
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
#把这个给注释了
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

const routes = [
  //路由重定向
  { path: '/', redirect: '/home' },
  #magic comment 魔法注释  webpack内容
  // /* webpackChunkName: "home-chunk" */ :npm run build打包时会用这个名字
  {
    path: '/home',
    component: () =>
      //利用import路由懒加载
      import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'),
  },
  {
    path: '/about',
    component: () =>
      //利用import路由懒加载
      import(/* webpackChunkName: "about-chunk" */ '../pages/About.vue'),
  },
]

//创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
```

### 6、路由的其他属性

```javascript
const routes = [
  { path: '/', redirect: '/home' },
  //magic comment
  {
    path: '/home',
    //name属性
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'),
    //meta属性
    meta: {
      name: 'XiaoZiYan',
    },
  },
];
```

### 7、动态路由基本匹配

```javascript
//App.vue
//因为动态路由匹配  所以路径上要加上username和id
<router-link :to="'/user/' + username + '/id/' + id"> 用户 </router-link>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const username = ref('XiaoZiYan')
    const id = ref('0')
    return { username, id }
  },
}
</script>
//------------------------------------------------------------------------------------------------
//index.js
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const routes = [
  //默认路由
  { path: '/', redirect: '/home' },
  //magic comment
  {
    #动态路由
    path: '/user/:username/id/:id',
    name: 'user',
    //分包  分包名字是:user-chunk
    component: () => import(/* webpackChunkName: "user-chunk" */ '../pages/User.vue'),
    meta:{
         name:"XiaoZiYan"
    }
  },
]

//创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
```

### 8、获取动态路由的值

```javascript
<template>
  //这里不用写this
  <div>userName:{{ $route.params.username }}</div>
  <div>id:{{ $route.params.id }}</div>
</template>

<script>
//vue3专门为route写的api
import { useRoute } from 'vue-router'
export default {
  //vue2
  created() {
    console.log(this.$route.username)
  },
  //vue3
  setup() {
    //route是一个个的路由对象
    //router是负责路由跳转的
    const route = useRoute()
    console.log(route.params.username)
  },
}
</script>
```

### 9、404-NotFound

```javascript
//   pages/NotFound.vue
<template>
  <div>404 NotFound {{ $route.params.pathMatch }}</div>
</template>
//index.js
const routes = [
  //这个切记写在最后
  {
    //path: '/:pathMatch(.*)*',  匹配所有路径,以"/"切割成一个个数组元素存储在($)route.params.pathMatch
    path: '/:pathMatch(.*)',   //匹配所有路径,直接将字符串存储在($)route.params.pathMatch
    component: () => import('../pages/NotFound.vue'),
  },
]
```

### 10、路由的嵌套

```javascript
//home.vue
<template>
  <div>
    <h2>home</h2>
	//这里写路径要写全
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/good">商品</router-link>
	//路由出口
	<router-view></router-view>
  </div>
</template>
//   router/index.js
const routes = [
  { path: '/', redirect: '/home' },
  //magic comment
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'),
    meta: {
      name: 'XiaoZiYan',
    },
    children: [
      //注意:这里的path不要加"/"
      #二级路由重定向 要写全
      { path: "",redirect:"/home/message"}
      { path: 'message', component: () => import('../pages/homeMessage.vue') },
      { path: 'good', component: () => import('../pages/homeGood.vue') },
    ],
  }
]
```

### 11、代码的页面跳转

```javascript
//App.vue
<button @click="jumpToAbout">关于</button>

<script>
//vue提供了hook
import { useRouter } from 'vue-router'
export default {
  //vue2
  methods: {
    jumpToAbout() {
      this.$router.push('/about')
    },
  },
  //vue3
  setup() {
    const router = useRouter()
    const jumpToAbout = () => {
      router.push('/about')
    }
    return { jumpToAbout }
  },
}
</script>
```

### 12、router.push 补充

```javascript
#router.push()还可以传对象
//App.vue
<button @click="jumpToAbout">关于</button>

<script>
//vue提供了hook
import { useRouter } from 'vue-router'
export default {
  //vue2
  methods: {
    jumpToAbout() {
      this.$router.push('/about')
    },
  },
  //vue3
  setup() {
    const router = useRouter()
    const jumpToAbout = () => {
      #传入对象 query会拼接到  地址上
      router.push({
          path:"/about",
          query:{
              name:"XiaoZiYan",
              age:18
          }
      })
      //还可以写router.replace("/about")  替换页面
    }
    return { jumpToAbout }
  },
}
</script>

//在about页面获取query的内容
<template>
  <div>name:{{ query.name }}</div>
  <div>age:{{ query.age }}</div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    //获取query的内容
    const query = route.query
    return { query }
  },
}
</script>
```

### 13、修改 router-link-active

```javascript
//创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'Xiao-active', //将router-link-active重命名为Xiao-active
  linkExactActiveClass: 'xiao-exact-active', //将router-link-exact-active重命名为xiao-exact-active
});
```

### 14、router-link 的 v-slot

```javascript
#vue-router4.x才有
<template>
  <div>
    //to跳至哪个路由 props相当于slot插槽的作用域插槽 子组件传上来的
    //custom表示自定义 router-link不再用a标签包裹 需要自定义跳转函数
    <router-link to="/home" v-slot="props" custom>
      //props:href跳转的链接  解析后的 URL
      <button>{{ props.href }}</button>
	  //props:route对象  解析后的规范化的route对象
	  <p>{{ props.route }}</p>
	  //props:navigate导航 触发导航的函数
      <button @click="props.navigate">回到Home</button>
      //props:isActive当前是否处于匹配状态  相当于router-link-active
      <span>{{ props.isActive }}</span>
	  //props:isExactActive当前是否处于精确匹配的状态 相当于router-link-eaxct-active
      <span>{{ props.isExactActive }}</span>
    </router-link>

    <!-- 路由出口:显示内容 -->
    <router-view></router-view>
  </div>
</template>
```

### 15、router-view 的 v-slot

```javascript
#vue-router4.x
<router-view v-slot="props">
    //动画
    <transition name="xiao">
        <keep-alive>
        	 //动态组件
        	 //参数一、Component：要渲染的组件；
			//参数二、route：解析出的标准化路由对象
        	<component :is="props.Component"></component>
        </keep-alive>
    </transition>
</router-view>
```

### 16、动态添加路由

```javascript
//创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory(),
});

//动态添加路由
const categoryRoute = {
  path: '/category',
  component: () => import('../pages/Category.vue'),
};

//addRoute：动态添加路由
router.addRoute(categoryRoute);

//添加二级路由对象  这个home是对应的name
router.addRoute('home', {
  path: 'moment',
  name: 'moment',
  component: () => import('../pages/HomeMoment.vue'),
  //这里还可以写children
});
```

### 17、动态删除路由

```javascript
方式一：添加一个name相同的路由；
router.addRoute({
    path:"/about",
    name:"about",
    component:()=>import("../pages/About.vue")
})
//这将会删除之前已经添加的路由，因为他们具有相同的名字且名字必须是唯一的
router.addRoute({
    path:"/other",
    name:"about",
    component:()=>import("../pages/Home.vue")
})
方式二：通过removeRoute方法，传入路由的名称；
router.addRoute({
    path:"/about",
    name:"about",
    component:()=>import("../pages/About.vue")
})
//删除路由
router.removeRoute("about")
方式三：通过addRoute方法的返回值回调
const removeRoute = router.addRoute(routeRecord)
removeRoute() //如果存在的话 删除路由
#路由的其他补充
//router.hasRoute()：检查路由是否存在。
//router.getRoutes()：获取一个包含所有路由记录的数组
```

### 18、路由导航守卫

```javascript
# 其他路由守卫  https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html
# router/index.js
//to:route对象 即将跳转到的路由对象
//from:route对象 从哪一个路由对象导航过来的
/**
 * 返回值
 *  1、false 不进行导航
 *  2、undefined或者不写返回值:进行默认导航
 *  3、字符串:路径,跳转到对应的路径中
 *  4、对象:router.push({path:"/login",component:()=>import("../xxxx.vue")})
 *
 */
router.beforeEach((to, from) => {
  //如果去往的不是登录页面
  if (to.path !== '/login') {
    //获取token
    const token = window.localStorage.getItem('token')
    //如果没有token 返回登录页面
    if (!token) {
      return '/login'
    }
  }
})
//login.vue
<template>
  <div>
    <button @click="btnClick">登录</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const btnClick = () => {
      //设置token
      window.localStorage.setItem('token', 'xiao')
      //跳转路由
      router.push('/home')
    }
    return { btnClick }
  },
}
</script>
```

## vuex 状态管理

### 1、安装 vuex

```javascript
#使用前记得去浏览器的扩展程序页面添加vue/devtool
//vuex4.x  需要添加next指定版本
npm install vuex@next
```

### 2、state 和 mutations 的基本使用

```javascript
//   store/index.js
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 100,
    }
  },
#相当于methods函数
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
})

export default store


// main.js
import store from './store'
app.use(store)


// App.vue
<template>
  <div>
    //这个$store是app.use(store)注册的 知识属于vue插件 install时添加全局$store
    <h2>{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
  },
}
</script>
```

### 3、state 在模板中使用

```javascript
<template>
  <div>{{ $store.state.name }}</div>
</template>
```

### 4、mapState 在 optionsAPI 使用(vue2)

```javascript
<script>
export default {
	//利用计算属性
    computed: {
        //得到vuex中的counter 并且重命名为sCounter  使用{{sCounter}}
        sCounter() {
        	return this.$store.state.counter
        },
    },
}
</script>

##改进  如果vuex中的state很多时，利用computed引入代码太多了
#所以引入mapState
<script>
import { mapState } from 'vuex'
export default {

  //   mapState返回的是一个对象 使用{{counter}}
  //   computed: mapState(["counter","age"]),

  #computed能用...mapState，然后使用说明里面mapState里面的对象是这样的{ counter:function(){} }
  #返回的都是函数
  computed: {
    #因为mapState返回是一个对象 所以需要用展开运算符  这个算按需导入吧  数组表示法  使用{{counter}}
    // 使用对象展开运算符将此对象混入到外部对象中
    // ...mapState(['counter', 'name', 'age', 'height']),

    #对象表示法  可以重命名  使用{{sCounter}}
    ...mapState({
      sCounter: (state) => state.counter,
    }),
  },
}
</script>
```

### 5、state 在 setup 使用(vue3)

#### 1、基本使用

```javascript
<template>
  <div>{{ counter }}</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    //引入store
    const store = useStore()
    //使用计算属性 得到counter
    const counter = computed(() => store.state.counter)
    return {
      counter,
    }
  },
}
```

#### 2、mapState

```javascript
#封装hook函数
#    hooks/useState.js
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'

//mapper可以传入数组或者对象
//因为mapState可以解析数组与对象  返回值都一样
export function useState(mapper) {
  //hook
  const store = useStore()
  //storeStateFns = {
  //    counter:function(){}
  //    age:()=>store.state.age
  //}
  //counter->>function  利用computed(counter)->>counter  相当于computed((state) => store.state.counter)
  const storeStateFns = mapState(mapper)
  const storeState = {}
  //{counter:function,name:function,age:function...}
  Object.keys(storeStateFns).forEach((key) => {
    //storeStateFns[key] = function = (state) => store.state.counter
    //计算属性读...mapState["name"]的执行过程其实是:this.$store.state.name
    //这里没有this 所以就是 undefined.$store
    //所以这里利用bind重新绑定this   .bind({$store:store})
    //this.$store = store
    const fn = storeStateFns[key].bind({ $store: store })
    //storeState = {
    //   counter:computed((state) => store.state.counter) ===>>这是一个ref,是值而不是函数了
    // }
    storeState[key] = computed(fn)
  })
  return storeState
}
# 使用 Home.vue
<template>
  <div>home:{{ counter }}</div>
  <div>home:{{ sCounter }}</div>
  <div>home:{{ sName }}</div>
</template>

<script>
//引入hook函数
import { useState } from '../hooks/useState'

export default {
  setup() {
    //传入数组
    const storeState = useState(['counter'])
    const storeState2 = useState({
      //传入对象  重命名
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    })
    //返回使用
    return {
      ...storeState,
      ...storeState2,
    }
  },
}
</script>
```

### 6、getters 的基本使用

```javascript
// store/index.js
#getters相当于计算属性(某些属性我们可能需要经过变化后来使用）
//只能有两个参数 参数一:state 参数二:getters
getters: {
    //使用:this.$store.getters.totalPrice
    totalPrice(state, getters) {
        return (
            state.books.reduce((p, c) => p + c.price * c.counter, 0) *
            //调用另一个getters  需要在参数二写getters
            getters.currentDiscount
        )
    },
    currentDiscount(state) {
        return state.discount * 0.9
    },
    countGreaterThreeN(state) {
        //使用:this.$store.getters.countGreaterThreeN(3)
        //返回的是函数 使用时只需要加()即可 如果要传参数在()中写就可以
        return function (n) {
            const book = state.books.filter((item) => item.counter >= n)
            return book.reduce((p, c) => p + c.price * c.counter, 0)
        }
    },
},
```

### 7、mapGetters 的使用(vue2)

```javascript
<template>
  <div>{{ nameInfo }}</div>
  <div>{{ ageInfo }}</div>
  <hr />
  <div>{{ gNameInfo }}</div>
  <div>{{ gAgeInfo }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
     //传入数组 使用...展开运算符  使用:{{ nameInfo }}
    // ...mapGetters(['nameInfo', 'ageInfo']),

    //传入对象 为了重命名
    ...mapGetters({
      //重命名  :  原名
      gNameInfo: 'nameInfo',
      gAgeInfo: 'ageInfo',
    }),
  },
}
</script>
```

### 8、mapGetters 的使用(vue3)

#### 1、基本使用

```javascript
<template>
  <div>{{ nameInfo }}</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    //传统做法:利用计算属性
    const nameInfo = computed(() => store.getters.nameInfo)
    return { nameInfo }
  },
}
</script>
```

#### 2、mapGetters

```javascript
#对40.5.2的优化
import { useMapper } from './useMapper'
import { mapState } from 'vuex'

export function useState(mapper) {
  //返回useMapper 将mapState传入进去
  return useMapper(mapper, mapState)
}

#定义一个useMapper函数 hooks/useMapper.js
import { useStore } from 'vuex'
import { computed } from 'vue'

//mapFn：传入的参数 决定是执行 mapState还是mapGetters等...
export function useMapper(mapper, mapFn) {
  const store = useStore()
  const storeStateFns = mapFn(mapper)
  const storeState = {}
  Object.keys(storeStateFns).forEach((key) => {
    const fn = storeStateFns[key].bind({ $store: store })
    storeState[key] = computed(fn)
  })
  return storeState
}

#hooks/useGetters.js
import { useMapper } from './useMapper'
import { mapGetters } from 'vuex'

export function useGetters(mapper) {
  return useMapper(mapper, mapGetters)
}

#   Home.vue
<template>
  <div>{{ nameInfo }}</div>
  <div>{{ ageInfo }}</div>
</template>

<script>
import { useGetters } from '../hooks/useGetters'

export default {
  setup() {
    const getters = useGetters(['nameInfo', 'ageInfo'])
    return { ...getters }
  },
}
</script>
```

### 9、优化 hooks

```javascript
#  hooks/index.js  作为hooks的统一出口
import { useGetters } from './useGetters'
import { useState } from './useState'

export {
    useGetters,
    useState
}
#使用
//使用时只需这样引用即可
import { useGetters } from '../hooks'
```

### 10、Mutation 的基本使用

```javascript
#   store/mutation-types.js   存放常数  谨防写错
export const INCREMENT_N = 'increment_n'
#  store/index.js
import { INCREMENT_N } from './mutation-types'
//mutations有两个参数  参数一:state 参数二:payload载荷
mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    //使用INCREMENT_N常数(这个是导入的,谨防写错)  记得用中括号包裹
    [INCREMENT_N](state, payload) {
      console.log(payload)
      state.counter += payload.n
    },
},
#   Home.vue
<template>
  <div>当前计数:{{ $store.state.counter }}</div>
  <hr />
  //提交函数  处理函数
  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>
  <button @click="addTen">+10</button>
</template>

<script>
//引入 常数
import { INCREMENT_N } from '../store/mutation-types'
export default {
  methods: {
    addTen() {
      //1、提交一个参数
      // this.$store.commit('incrementN', 10)
      //2、提交一个对象
      // this.$store.commit('incrementN', { n: 10, name: 'Xiao', age: 18 })

      //另一种提交风格
      this.$store.commit({
        //使用常数  谨防写错
        type: INCREMENT_N,
        name: 'Xiao',
        n: 10,
        age: 18,
      })
    },
  },
}
</script>
```

### 11、mapMutations(vue2)

```javascript
<template>
  <div>当前计数:{{ $store.state.counter }}</div>
  <hr />
  <button @click="add">+1</button>
  <button @click="decrement">-1</button>
  //注意  这里的INCREMENT_N要换成increment_n(mutation-types这里面赋值的东西)
  <button @click="increment_n({ n: 10 })">+10</button>
</template>

<script>
//引入常量
import { INCREMENT_N } from '../store/mutation-types'
import { mapMutations } from 'vuex'
export default {
  methods: {
    //数组写法  使用@click="increment"
    ...mapMutations(['increment', 'decrement', INCREMENT_N]),
    //对象写法  重命名 使用@click="add"
    ...mapMutations({
      add: 'increment',
    }),
  },
}
</script>
```

### 12、mapMutations(vue3)

```javascript
<template>
  <div>当前计数:{{ $store.state.counter }}</div>
  <hr />
  <button @click="add">+1</button>
  <button @click="decrement">-1</button>
  <button @click="increment_n({ n: 10 })">+10</button>
</template>

<script>
import { INCREMENT_N } from '../store/mutation-types'
import { mapMutations } from 'vuex'
export default {
  setup() {
    const storeMutations = mapMutations(['increment', 'decrement', INCREMENT_N])
    const storeMutations2 = mapMutations({
      add: 'increment',
    })
    return {
      ...storeMutations,
      ...storeMutations2,
    }
  },
}
</script>
```

### 13、Mutation 总结

```javascript
#为什么mapState和mapGetters要使用hooks函数才能与vue2用法一致，而Mutation不需要hooks函数
//他们三者返回的都是类似{ counter:function(){}}的对象
//mapState和mapGetters要得到的是值 而value是函数 所以需要 computed()包裹一下
//而Mutation本来就是要执行这个函数 @click就相当于counter()执行这个函数

#为什么有mutation还要引入actions
//一条重要的原则就是要记住 mutation 必须是同步函数
//这是因为devtool工具会记录mutation的日记；
//每一条mutation被记录，devtools都需要捕捉到前一状态和后一状态的快照；
//但是在mutation中执行异步操作，就无法追踪到数据的变化；
//所以Vuex的重要原则中要求 mutation必须是同步函数；
```

### 14、actions 的基本使用

```javascript
//Action提交的是mutation，而不是直接变更状态；
//Action可以包含任意异步操作
#  store/index.js
import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
  state() {
    return {
      banners: []
    }
  },
  mutations: {
	addBannerData(state, payload) {
      //修改state.banners的内容
      state.banners = payload
    }
  }
  #解决异步函数问题 xxx.vue=>>actions(axios)=>>mutations(commit)
  actions: {
    // 放函数  参数(载荷)
    incrementAction(context, payload) {
      //传来的参数
      console.log(payload)
      //模仿网络请求  =>>commit提交给increment
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    //context属性:commit   dispatch  getters   rootGetters  rootState  state
    //可以解构
    decrementAction({ commit }, payload) {
      //commit提交非decrement
      commit('decrement')
      //参数
      console.log(payload.name)
    },
    getHomeMultiData(context) {
      //发起axios网络请求
      axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
        //commit提交给addBannerData  然后将数据传给addBannerData去处理
        context.commit('addBannerData', res.data.data.banner.list)
      })
    },
  },
})

#   Home.vue
<template>
  <div>当前计数:{{ $store.state.counter }}</div>
  <hr />
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    increment() {
      //使用actions中的incrementAction  参入参数
      this.$store.dispatch('incrementAction', { name: 'Xiao' })
    },
    decrement() {
      // this.$store.dispatch('decrementAction')
      //其他风格  传入对象
      this.$store.dispatch({
        type: 'decrementAction',
        name: 'Xiao',
      })
    },
  },
  mounted() {
    #axios不建议在这里使用  axios发起的数据本就应该放在vuex
    #所以这里倒不如直接提交一个getHomeMultiData(actions)函数 在actions处理异步问题  并保留数据
    // axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
    //   this.$store.commit('addBannerData', res.data.data.banner.list)
    // })
    this.$store.dispatch('getHomeMultiData')
  },
}
</script>
```

### 15、mapActions(vue2)

```javascript
<template>
  <div>
    <h2>{{ this.$store.state.counter }}</h2>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    // @click="incrementAction"  数组
    ...mapActions(['incrementAction', 'decrementAction']),
    ...mapActions({
      //@click="add"  对象  可以重命名
      add: 'incrementAction',
      sub: 'decrementAction',
    }),
  },
}
</script>
```

### 16、mapActions(vue3)

```javascript
<template>
  <div>
    <h2>{{ this.$store.state.counter }}</h2>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  setup() {
    //数组  @click="incrementAction"
    const actions = mapActions(['incrementAction', 'decrementAction'])
    //对象 可以重命名  @click="add"
    const actions2 = mapActions({
      add: 'incrementAction',
      sub: 'decrementAction',
    })
    return {
      ...actions,
      ...actions2,
    }
  },
}
</script>
```

### 17、actions 的其他知识

```javascript
#有时候我们在xxx.vue提交actions函数发送网络请求,我们想要知道请求的结果
//Home.vue
<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    onMounted(() => {
      //接收返回的promise对象
      const promise = store.dispatch('getHomeMultiData')
      promise
        .then((res) => {
          //成功打印resolve()传过来的数据
          console.log(res)
        })
        .catch((err) => {
          //失败打印reject()传过来的数据
          console.log(err)
        })
    })
    return {}
  },
}
</script>
//   store/index.js
import axios from 'axios'

actions:{
    getHomeMultiData(context) {
      //返回一个promise对象
      return new Promise((resolve, reject) => {
        axios
          .get('http://123.207.32.32:8000/home/multidata')
          .then((res) => {
            context.commit('addBannerData', res.data.data.banner.list)
            //如果成功的话把这个对象传出去
            resolve({
              name: 'Xiao',
              age: 18,
            })
          })
          .catch((err) => {
            //失败的话把这个err传出去
            reject(err)
          })
      })
    }
}
```

### 18、modules 的基本使用

```javascript
// store/modules/home.js
const homeModule = {
  state() {
    return {
      homeCounter: 100,
    }
  },
  getters: {},
  mutations: {},
  actions: {},
}
export default homeModule

// store/modules/user.js
const userModule = {
  state() {
    return {
      userCounter: 18,
    }
  },
  getters: {},
  mutations: {},
  actions: {},
}
export default userModule

// store/index.js
import { createStore } from 'vuex'
import home from './modules/home'
import user from './modules/user'
const store = createStore({
  state() {
    return {
      rootCounter: 0,
    }
  },
  getters: {},
  mutations: {
    increment(state) {
      state.rootCounter++
    },
  },
  actions: {},
  modules: {
    // home:home
    home,
    user,
  },
})
export default store

//  Home.vue
<template>
  <div>{{ $store.state.rootCounter }}</div>
  <div>{{ $store.state.home.homeCounter }}</div>
  <div>{{ $store.state.user.userCounter }}</div>
</template>
```

### 19、namespaced 命名空间

```javascript
#命名空间的重要性:使得各个模块的mutations、actions、getters不会弄混
//  Home.vue
<template>
  <div>root:{{ $store.state.rootCounter }}</div>
  //必须写上home
  <div>home:{{ $store.state.home.homeCounter }}</div>
  //必须写上user
  <div>user:{{ $store.state.user.userCounter }}</div>
  //需要区分是哪个模块的
  <button @click="homeIncrement">Home+1</button>
  <button @click="homeIncrementAction">HomeAction+1</button>
  <hr />
  //表示是home模块里面getters的dobuleHomeCounter
  #这个home是在index.js的这里命名的   modules: { home, user }
  <div>home*2:{{ $store.getters['home/dobuleHomeCounter'] }}</div>
</template>
<script>
export default {
  methods: {
    homeIncrement() {
      //表示是home模块里面mutations的increment
      this.$store.commit('home/increment')
    },
    homeIncrementAction() {
      //表示是home模块里面actions的incrementAction
      this.$store.dispatch('home/incrementAction')
    },
  },
}
</script>

//  src/store/index.js
import { createStore } from 'vuex'
import home from './modules/home'
import user from './modules/user'
const store = createStore({
  state() {
    return {
      rootCounter: 0,
    }
  },
  getters: {},
  mutations: {
    increment(state) {
      state.rootCounter++
    },
  },
  actions: {},
  //模块化
  modules: {
    // home:home
    home,
    user,
  },
})
export default store

//   store/modules/home.js
const homeModule = {
  //命名空间:true
  namespaced: true,
  state() {
    return {
      homeCounter: 100,
    }
  },
  getters: {
    // 参数:state getters rootState  rootGetters
    dobuleHomeCounter(state) {
      return state.homeCounter * 2
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter++
    },
  },
  actions: {
    //解构commit state dispatch getters rootState rootGetters
    incrementAction({ commit, dispatch }) {
      commit('increment')
      //对根进行mutations提交  null表示payload(即参数、载荷)
      commit('increment', null, { root: true })
      //对根进行actions提交
      dispatch('incrementAction', null, { root: true })
    },
  },
}
export default homeModule
```

### 20、module 的辅助函数

#### 1、vue2 用法

```javascript
#html部分
<template>
  <h2>{{ homeCounter }}</h2>
  <h2>{{ dobuleHomeCounter }}</h2>
  <button @click="increment">Home+1</button>
  <button @click="incrementAction">HomeAction+1</button>
</template>
#js部分
//写法一
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    //写法一
    ...mapState({
      homeCounter: (state) => state.home.homeCounter,
      homeAge:(state)=>state.home.homeAge
    }),
    ...mapGetters({
      dobuleHomeCounter: 'home/dobuleHomeCounter',
      dobuleHomeAge:"home/dobuleHomeAge"
    }),
  },
  methods: {
    //写法一
    //这里还可以传数组  ...mapMutations(['home/increment','home/decrement'])
    //==>>  this["home/increment]()
    ...mapMutations({
      increment: 'home/increment',
    }),
    //这里还可以传数组  ...mapActions(['home/incrementAction','home/decrementAction'])
    //==>>  this["home/incrementAction]()
    ...mapActions({
      incrementAction: 'home/incrementAction',
    }),
  },
}
</script>
//写法二
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    //写法二
    //还可以写对象 ...mapState('home',{
    //  homeCounter:(state)=>state.homeCounter,
    //  homeAge:(state)=>state.homeCounter
  	//  })
    ...mapState('home', ['homeCounter',"homeAge"]),
    //还可以写对象...mapGetters("home",{
    //  dobuleHomeCounter: 'dobuleHomeCounter',
    //  dobuleHomeAge:"dobuleHomeAge"
    //}),
    ...mapGetters('home', ['dobuleHomeCounter',"dobuleHomeAge"]),
  },
  methods: {
    //写法二
    ...mapMutations('home', ['increment',"xxx其他"]),
    ...mapActions('home', ['incrementAction']),
  },
}
</script>
//写法三
<script>
//引入命名空间辅助函数
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('home')
export default {
  computed: {
    //写法三
    //可以写成对象 ...mapState({homeCounter:(state)=>state.homeCounter,xxx:(state)=>state.xxx})
    ...mapState(['homeCounter']),
    ...mapGetters(['dobuleHomeCounter']),
  },
  methods: {
    //写法三
    ...mapMutations(['increment']),
    ...mapActions(['incrementAction']),
  },
}
</script>
```

#### 2、对 useState、useGetters 进行修改

```javascript
//    hooks/index.js
import { useGetters } from './useGetters'
import { useState } from './useState'
export { useGetters, useState }

//    hooks/useMapper.js
import { useStore } from 'vuex'
import { computed } from 'vue'
export function useMapper(mapper, mapFn) {
  const store = useStore()
  const storeStateFns = mapFn(mapper)
  const storeState = {}
  Object.keys(storeStateFns).forEach((key) => {
    const fn = storeStateFns[key].bind({ $store: store })
    storeState[key] = computed(fn)
  })
  return storeState
}

//     hooks/useState.js
import { useMapper } from './useMapper'
#import { mapState, createNamespacedHelpers } from 'vuex'
//参数包含了moduleName,即module的名称
#export function useState(moduleName, mapper) {
  //默认是mapState
  #let mapperFn = mapState
  #if (typeof moduleName === 'string' && moduleName.length > 0) {
  //如果传入的参数包含 moduleName 则需要使用createNamespacedHelpers找到module
  #  mapperFn = createNamespacedHelpers(moduleName).mapState
  #}else{
  //如果传入的参数没有包含moduleName 而是直接传的数组 那么则将数组赋值给mapper
  #  mapper = moduleName
  #}
  return useMapper(mapper, mapperFn)
}

//     hooks/useGetters.js
import { useMapper } from './useMapper'
#import { mapGetters, createNamespacedHelpers } from 'vuex'
//参数包含了moduleName,即module的名称
#export function useGetters(moduleName, mapper) {
  //默认是mapGetters
  #let mapperFn = mapGetters
  #if (typeof moduleName === 'string' && moduleName.length > 0) {
  //如果传入的参数包含 moduleName 则需要使用createNamespacedHelpers找到module
  #  mapperFn = createNamespacedHelpers(moduleName).mapGetters
  #}else{
  //如果传入的参数没有包含moduleName 而是直接传的数组 那么则将数组赋值给maper
  #  maper = moduleName
  #}
  return useMapper(mapper, mapperFn)
}
```

#### 3、vue3 用法

```javascript
#    home.vue
<template>
  <h2>{{ homeCounter }}</h2>
  <h2>{{ dobuleHomeCounter }}</h2>
  <button @click="increment">Home+1</button>
  <button @click="incrementAction">HomeAction+1</button>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { useGetters, useState } from '../hooks'
export default {
  setup() {
    //useState、useGetters修改过
    const state = useState('home', ['homeCounter'])
    const getters = useGetters('home', ['dobuleHomeCounter'])
    const mutations = mapMutations('home', ['increment'])
    const actions = mapActions('home', ['incrementAction'])
    return {
      ...state,
      ...getters,
      ...mutations,
      ...actions,    }
  },
}
</script>
```

## nextTick

```javascript
#实现原理  宏任务和微任务
//先执行宏任务 message.value += '哈哈哈哈哈哈哈哈'
//再是微任务 微任务是先进先出 而nextTick的顺序在生命周期之后  所以是先更新DOM再执行nextTick的内容
//宏任务和微任务对循环的执行也是有好处的  先执行循环的同步,后再进行DOM的更新 而不是每循环一次就更新一次DOM
<template>
  <div>
    <h2 class="title" ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { nextTick, ref } from 'vue'
export default {
  setup() {
    const message = ref('')
    const titleRef = ref(null)
    const addMessageContent = () => {
      message.value += '哈哈哈哈哈哈哈哈'
      //更新DOM再得到高度 如果直接拿的话只能拿到上一次的结果
      nextTick(() => {
        console.log(titleRef.value.offsetHeight)
      })
    }
    return { message, addMessageContent, titleRef }
  },
}
</script>
```

## historyApiFallback

```javascript
//  如果网址是localhost:8080/user/Xiao，并且我们没有配置静态资源。如果不对historyApiFallback进行配置,那么刷新的时候将会出现cannot get /user/Xiao(找不到静态资源);如果对对historyApiFallback进行了正确的配置,那么当找不到的时候会自动返回index.html然后重定向到对应的组件

#historyApiFallback
//vue默认配置了historyApiFallback,这个知识点在webpack
//如果想手动配置可以在   vue.config.js   编写
module.exports = {
    configureWebpack:{
        devServer:{
            //webpack默认为false  vue里面是true
            historyApiFallback:true
        }
    }
}
```
