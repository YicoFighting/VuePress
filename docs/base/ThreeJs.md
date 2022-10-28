---
sidebar: auto
---

# ThreeJS

[ThreeJS 官网](https://threejs.org/)

## 场景(Scene)

下载 ThreeJs 的[代码包](https://github.com/mrdoob/three.js/archive/master.zip)，新建 HTML 页面。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic-scene</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script src="../min/index.js"></script>
    <script src="./index.js"></script>
  </body>
</html>
```

::: tip
../min/index.js 指的是 ThreeJs 的代码包存放的位置
:::

### 新建场景

[场景](https://threejs.org/docs/index.html#api/zh/scenes/Scene)能够让你在什么地方、摆放什么东西来交给 three.js 来渲染，这是你放置物体、灯光和摄像机的地方。

```javascript
// 场景
const scene = new THREE.Scene();
```

### 几何体

几何体可以可以理解为物体形状，这个物体的骨架。[BoxGeometry](https://threejs.org/docs/index.html#api/zh/geometries/BoxGeometry)是四边形的原始几何类，它通常使用构造函数所提供的“width”、“height”、“depth”参数来创建立方体或者不规则四边形。

#### 构造器

BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)

- width — X 轴上面的宽度，默认值为 1。
- height — Y 轴上面的高度，默认值为 1。
- depth — Z 轴上面的深度，默认值为 1。
- widthSegments — （可选）宽度的分段数，默认值是 1。
- heightSegments — （可选）高度的分段数，默认值是 1。
- depthSegments — （可选）深度的分段数，默认值是 1。

```javascript
// 原始几何类
// width — X轴上面的宽度，默认值为1。
// height — Y轴上面的高度，默认值为1。
// depth — Z轴上面的深度，默认值为1。
const geometry = new THREE.BoxGeometry(1, 1, 1);
```

### 材质

[MeshBasicMaterial](https://threejs.org/docs/index.html#api/zh/materials/MeshBasicMaterial)是一个以简单着色（平面或线框）方式来绘制几何体的材质，这种材质不受光照的影响。

#### 构造器

MeshBasicMaterial( parameters : Object )

- parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从 Material 继承的任何属性)。

- 属性 color 例外，其可以作为十六进制字符串传递，默认情况下为 **0xffffff**（白色），内部调用 Color.set(color)。

### 颜色

[color](https://threejs.org/docs/index.html#api/zh/math/Color)表示一个颜色，对 Color 实例进行遍历将按相应的顺序生成它的分量 (r,g,b)，这里的[color](https://threejs.org/docs/index.html#api/zh/materials/MeshBasicMaterial.color)指的是 MeshBasicMaterial 的属性。

#### 构造器

Color( r : Color_Hex_or_String, g : Float, b : Float )

- r - (可选参数) 如果参数 g 和 b 被定义，则 r 表示颜色中的红色分量。 如果未被定义，r 可以是一个十六进制 [hexadecimal triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) 颜色值或 CSS 样式的字符串或一个 Color 实例。
- g - (可选参数) 如果被定义，表示颜色中的绿色分量。
- b - (可选参数) 如果被定义，表示颜色中的蓝色分量。

注意使用十六进制 [hexadecimal triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) 定义一个颜色在 three.js 中是标准的方法，而且其余 文档也将会使用这个方法。

当所有参数被定义时，r 是红色分量，g 是绿色分量，b 是蓝色分量。
当只有 r 被定义时：

- 它可用一个十六进制 [hexadecimal triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) 值表示颜色（推荐）。
- 它可以是一个另一个颜色实例。
- 它可以是另外一个 CSS 样式。例如：
  - 'rgb(250, 0,0)'
  - 'rgb(100%,0%,0%)'
  - 'hsl(0, 100%, 50%)'
  - '#ff0000'
  - '#f00'
  - 'red'

```javascript
//材质
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
```

### 网格

[网格](https://threejs.org/docs/index.html#api/zh/objects/Mesh)表示基于以三角形为[polygon mesh](https://en.wikipedia.org/wiki/Polygon_mesh)（多边形网格）的物体的类。 同时也作为其他类的基类，例如[SkinnedMesh](https://threejs.org/docs/index.html?q=SkinnedMesh#api/zh/objects/SkinnedMesh)。

#### 构造器

Mesh( geometry : BufferGeometry, material : Material )

- geometry —— （可选）BufferGeometry 的实例，默认值是一个新的 BufferGeometry。
- material —— （可选）一个 Material，或是一个包含有 Material 的数组，默认是一个新的 MeshBasicMaterial。

```javascript
//网格
const mesh = new THREE.Mesh(geometry, material);
```

往场景里添加网格

```javascript
scene.add(mesh);
```

尺寸：当做渲染器的尺寸大小，以及透视相机长宽比。

```javascript
const sizes = {
  width: 800,
  height: 600,
};
```

### 透视相机

[透视相机](https://threejs.org/docs/index.html#api/zh/cameras/PerspectiveCamera)使用[perspective projection](<https://en.wikipedia.org/wiki/Perspective_(graphical)>)（透视投影）来进行投影。这一投影模式被用来模拟人眼所看到的景象，它是 3D 场景的渲染中使用得最普遍的投影模式。

#### 构造器

PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )

- fov — 摄像机视锥体垂直视野角度
- aspect — 摄像机视锥体长宽比
- near — 摄像机视锥体近端面
- far — 摄像机视锥体远端面

这些参数一起定义了摄像机的[viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum)（视锥体）。

![](<E:\Desktop\vuepress\docs\base\images\Three\场景(Scene)\透视图.png>)

![](<E:\Desktop\vuepress\docs\base\images\Three\场景(Scene)\侧视图.png>)

camera.position.z

- camera 上的 position 继承至 Object3D，[position](https://threejs.org/docs/#api/zh/core/Object3D.position)的类型为 Vector3，本身具备 x、[y](https://threejs.org/docs/#api/zh/math/Vector3.y)、z 属性，ThreeJS 采用的是右手坐标系。

![](<E:\Desktop\vuepress\docs\base\images\Three\场景(Scene)\右手坐标系.jpg>)

```javascript
//透视相机
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//将相机从立方体移除,z轴垂直屏幕
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 3;
```

往场景里添加透视相机

```javascript
scene.add(camera);
```

### 渲染器

[WebGLRender](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer) 用[WebGL](https://en.wikipedia.org/wiki/WebGL)渲染出你精心制作的场景。

#### 构造器

WebGLRenderer( parameters : Object )

- parameters - (可选) 该对象的属性定义了渲染器的行为。也可以完全不传参数。在所有情况下，当缺少参数时，它将采用合理的默认值。 以下是合法参数：

  - canvas - 一个供渲染器绘制其输出的[canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) 它和下面的 domElement 属性对应。 如果没有传这个参数，会创建一个新 canvas
  - context - 可用于将渲染器附加到已有的渲染环境([RenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext))中。默认值是 null
  - precision - 着色器精度. 可以是 **"highp"**, **"mediump"** 或者 **"lowp"**. 如果设备支持，默认为**"highp"** .
  - alpha - controls the default clear alpha value. When set to **true**, the value is **0**. Otherwise it's **1**. Default is **false**.
  - premultipliedAlpha - renderer 是否假设颜色有 [premultiplied alpha](https://en.wikipedia.org/wiki/Glossary_of_computer_graphics#Premultiplied_alpha). 默认为**true**
  - antialias - 是否执行抗锯齿。默认为**false**.
  - stencil - 绘图缓存是否有一个至少 8 位的模板缓存([stencil buffer](https://en.wikipedia.org/wiki/Stencil_buffer))。默认为**true**
  - preserveDrawingBuffer -是否保留缓直到手动清除或被覆盖。 默认**false**.
  - powerPreference - 提示用户代理怎样的配置更适用于当前 WebGL 环境。 可能是**"high-performance"**, **"low-power"** 或 **"default"**。默认是**"default"**. 详见[WebGL spec](https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14.12)
  - failIfMajorPerformanceCaveat - 检测渲染器是否会因性能过差而创建失败。默认为 false。详见 [WebGL spec](https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14.12) for details.
  - depth - 绘图缓存是否有一个至少 6 位的深度缓存([depth buffer](https://en.wikipedia.org/wiki/Z-buffering) )。 默认是**true**.
  - logarithmicDepthBuffer - 是否使用对数深度缓存。如果要在单个场景中处理巨大的比例差异，就有必要使用。 Note that this setting uses gl_FragDepth if available which disables the [Early Fragment Test](https://www.khronos.org/opengl/wiki/Early_Fragment_Test) optimization and can cause a decrease in performance. 默认是**false**。 示例：[camera / logarithmicdepthbuffer](https://threejs.org/examples/#webgl_camera_logarithmicdepthbuffer)

  [setSize](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer.setSize) ( width : Integer, height : Integer, updateStyle : Boolean ) : undefined

  - 将输出 canvas 的大小调整为(width, height)并考虑设备像素比，且将视口从(0, 0)开始调整到适合大小 将 updateStyle 设置为 false 以阻止对 canvas 的样式做任何改变。

  [render](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer.render) ( scene : Object3D, camera : Camera ) : undefined

  - 用相机(camera)渲染一个场景(scene)或是其它类型的 object。
  - 渲染一般是在 canvas 上完成的，或者是 renderTarget(如果有指定)
  - 如果 forceClear 值是**true**，那么颜色、深度及模板缓存将会在渲染之前清除，即使渲染器的 autoClear 属性值是 false
  - 即便 forceClear 设为 true, 也可以通过将 autoClearColor、autoClearStencil 或 autoClearDepth 属性的值设为 false 来阻止对应缓存被清除。

```javascript
//渲染器
//DOM元素
const canvas = document.querySelector('.webgl');
const render = new THREE.WebGLRenderer({
  canvas: canvas,
});
//设置渲染器大小
render.setSize(sizes.width, sizes.height);
//渲染
render.render(scene, camera);
```

### 完整代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic-scene</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script src="../min/index.js"></script>
    <script src="./index.js"></script>
  </body>
</html>
```

#### JavaScript

```javascript
//场景
const scene = new THREE.Scene();
// 原始几何类
// width — X轴上面的宽度，默认值为1。
// height — Y轴上面的高度，默认值为1。
// depth — Z轴上面的深度，默认值为1。
const geometry = new THREE.BoxGeometry(1, 1, 1);
//材质
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//网格
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//尺寸
const sizes = {
  width: 800,
  height: 600,
};

//camera
//透视相机
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//将相机从立方体移除,z轴垂直屏幕
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 3;
//场景添加相机
scene.add(camera);

//渲染器
//DOM元素
const canvas = document.querySelector('.webgl');
const render = new THREE.WebGLRenderer({
  canvas: canvas,
});
render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

![最终效果](<E:\Desktop\vuepress\docs\base\images\Three\场景(Scene)\scene.png>)

## WebPack

使用[WebPack](https://webpack.js.org/)运行项目。

- 下载并安装[Node](https://nodejs.org/zh-cn/)
- 使用 npm/yarn/pnpm 安装对应的包
- 使用 num run dev/yarn dev 运行项目

### 配置

::: tip
配置文件在 bundler 文件夹下
:::

#### webpack.common.js

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/script.js'),
  output: {
    hashFunction: 'xxhash64',
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, '../static') }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      minify: true,
    }),
    new MiniCSSExtractPlugin(),
  ],
  module: {
    rules: [
      // HTML
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // CSS
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },

      // Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },

      // Fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },
};
```

#### webpack.dev.js

```javascript
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');
const portFinderSync = require('portfinder-sync');

const infoColor = (_message) => {
  return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`;
};

module.exports = merge(commonConfiguration, {
  stats: 'errors-warnings',
  mode: 'development',
  infrastructureLogging: {
    level: 'warn',
  },
  devServer: {
    host: 'local-ip',
    port: portFinderSync.getPort(8080),
    open: true,
    https: false,
    allowedHosts: 'all',
    hot: false,
    watchFiles: ['src/**', 'static/**'],
    static: {
      watch: true,
      directory: path.join(__dirname, '../static'),
    },
    client: {
      logging: 'none',
      overlay: true,
      progress: false,
    },
    setupMiddlewares: function (middlewares, devServer) {
      console.log(
        '------------------------------------------------------------'
      );
      console.log(devServer.options.host);
      const port = devServer.options.port;
      const https = devServer.options.https ? 's' : '';
      const domain1 = `http${https}://${devServer.options.host}:${port}`;
      const domain2 = `http${https}://localhost:${port}`;

      console.log(
        `Project running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(
          domain2
        )}`
      );

      return middlewares;
    },
  },
});
```

#### webpack.prod.js

```javascript
const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commonConfiguration, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
});
```

### scripts 命令

配置 package.json 中的 scripts 命令。

```json
{
  "scripts": {
    "build": "webpack --config ./bundler/webpack.prod.js",
    "dev": "webpack serve --config ./bundler/webpack.dev.js"
  }
}
```

### 完整代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webpack</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

#### JavaScript

```javascript
// 引入的是node_modules里的包
import * as THREE from 'three';

//场景
const scene = new THREE.Scene();
// 原始几何类
// width — X轴上面的宽度，默认值为1。
// height — Y轴上面的高度，默认值为1。
// depth — Z轴上面的深度，默认值为1。
const geometry = new THREE.BoxGeometry(1, 1, 1);
//材质
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//网格
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//尺寸
const sizes = {
  width: 800,
  height: 600,
};

//camera
//透视相机
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//将相机从立方体移除,z轴垂直屏幕
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 3;
//场景添加相机
scene.add(camera);

//渲染器
//DOM元素
const canvas = document.querySelector('.webgl');
const render = new THREE.WebGLRenderer({
  canvas: canvas,
});
render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

![](E:\Desktop\vuepress\docs\base\images\Three\WebPack\index.png)

## 转换对象

### 三维物体

[Object3D](https://threejs.org/docs/#api/zh/core/Object3D)是 Three.js 中大部分对象的基类，提供了一系列的属性和方法来对三维空间中的物体进行操纵。请注意，可以通过.add( object )方法来将对象进行组合，该方法将对象添加为子对象，但为此最好使用 Group（来作为父对象）。

::: tip
从[Object3D](https://threejs.org/docs/#api/zh/core/Object3D)类继承的所有类都具有[透视相机](https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera)或[网格](https://threejs.org/docs/#api/zh/objects/Mesh)等属性以及尚未介绍的类。
:::

```javascript
import * as THREE from 'three';

// DOM元素
const canvas = document.querySelector('canvas.webgl');

// 场景
const scene = new THREE.Scene();

/**
 * 对象
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
```

#### 位置

[Vector3](https://threejs.org/docs/#api/zh/math/Vector3)( x : Float, y : Float, z : Float )

- x - 向量的 x 值，默认为**0**。
- y - 向量的 y 值，默认为**0**。
- z - 向量的 z 值，默认为**0**。

[position](https://threejs.org/docs/#api/zh/core/Object3D.position) : Vector3

- 表示对象局部位置的 Vector3，默认值为(0, 0, 0)，它是 Object3D 的属性。

[set](https://threejs.org/docs/#api/zh/math/Vector3.set) ( x : Float, y : Float, z : Float ) : this

- 设置该向量的 x、y 和 z 分量，它是 Vector3 的方法。

```javascript
// x轴向右 y轴向上 z轴垂直平面向外
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
//一次性设置x、y、z x大于0,物体向右移动;y大于0,物体向上移动;z大于0,可能是往摄像头靠近。
mesh.position.set(0.7, -0.6, 1);
```

![Mesh_Position](E:\Desktop\vuepress\docs\base\images\Three\transform-objects\Mesh_Position.png)

```javascript
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

//x大于0,物体向右移动;y大于0,物体向上移动;z大于0,可能是往摄像头靠近。
mesh.position.set(0.7, -0.6, 1);

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

const render = new THREE.WebGLRenderer({
  canvas,
});

render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

#### 缩放

[scale](https://threejs.org/docs/#api/zh/core/Object3D.scale) : [Vector3](https://threejs.org/docs/#api/zh/math/Vector3)

- 物体的局部缩放，默认值是 Vector3( 1, 1, 1 )，它是 Object3D 的属性。

```javascript
//scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
//一次性设置scale  z小于1是往里面缩放,平面缩放
mesh.scale.set(2, 0.5, 0.5);
```

![Mesh_Scale](E:\Desktop\vuepress\docs\base\images\Three\transform-objects\Mesh_Scale.png)

```javascript
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, -0.6, 1);

//z小于1是往里面缩放,平面缩放
mesh.scale.set(2, 0.5, 0.5);

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

const render = new THREE.WebGLRenderer({
  canvas,
});

render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

### 欧拉角

[欧拉角](https://threejs.org/docs/#api/zh/math/Euler.order)表示 [Euler](http://en.wikipedia.org/wiki/Euler_angles) 的类，欧拉角描述一个旋转变换，通过指定轴顺序和其各个轴向上的指定旋转角度来旋转一个物体。对 Euler 实例进行遍历将按相应的顺序生成它的分量 (x, y, z, order)。

#### 构造器

Euler( x : Float, y : Float, z : Float, order : String )

- x - (optional) 用弧度表示 x 轴旋转量。 默认值是 **0**。
- y - (optional) 用弧度表示 y 轴旋转量。 默认值是 **0**。
- z - (optional) 用弧度表示 z 轴旋转量。 默认值是 **0**。
- order - (optional) 表示旋转顺序的字符串，默认为'XYZ'（必须是大写）。

[reorder](https://threejs.org/docs/#api/zh/math/Euler.reorder) ( newOrder : String ) : this

- 通过这个欧拉角创建一个四元数，然后用这个四元数和新顺序设置这个欧拉角。

::: warning
这将弃用旋转信息。
:::

[set](https://threejs.org/docs/#api/zh/math/Euler.set) ( x : Float, y : Float, z : Float, order : String ) : this

- x - 用弧度表示 x 轴旋转量。
- y - 用弧度表示 y 轴旋转量。
- z - 用弧度表示 z 轴旋转量。
- order - (optional) 表示旋转顺序的字符串。

设置该欧拉变换的角度和旋转顺序 order。

#### 四元数

该类实现了 [quaternion](http://en.wikipedia.org/wiki/Quaternion) 。

四元数在 three.js 中用于表示 [rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) （旋转）。

对 Quaternion 实例进行遍历将按相应的顺序生成它的分量 (x, y, z, w)。

##### 构造函数

Quaternion( x : Float, y : Float, z : Float, w : Float )

- x - x 坐标
- y - y 坐标
- z - z 坐标
- w - w 坐标

#### 旋转

[rotation](https://threejs.org/docs/?q=Obje#api/zh/core/Object3D.rotation) : Euler（请参阅[Euler angles](https://en.wikipedia.org/wiki/Euler_angles)-欧拉角）

- 物体的局部旋转，以弧度来表示，，它是 Object3D 的属性。

```javascript
//Rotation
// 旋转顺序 欧拉角方法
mesh.rotation.reorder('YXZ');
// 旋转半个圆 欧拉角属性
mesh.rotation.y = Math.PI;
```

![rotation](E:\Desktop\vuepress\docs\base\images\Three\transform-objects\rotation.png)

```javascript
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, -0.6, 1);

mesh.scale.set(2, 0.5, 0.5);

//Rotation
// 旋转顺序 欧拉角方法
mesh.rotation.reorder('YXZ');
// 旋转1/4个圆 欧拉角属性
mesh.rotation.y = Math.PI / 2;

scene.add(mesh);

//坐标轴
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

const render = new THREE.WebGLRenderer({
  canvas,
});

render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

### [三维向量](https://threejs.org/docs/?q=Obje#api/zh/math/Vector3)

该类表示的是一个三维向量（3D [vector](https://en.wikipedia.org/wiki/Vector_space)）。 一个三维向量表示的是一个有顺序的、三个为一组的数字组合（标记为 x、y 和 z）， 可被用来表示很多事物，例如：

- 一个位于三维空间中的点。
- 一个在三维空间中的方向与长度的定义。在 three.js 中，长度总是从(0, 0, 0)到(x, y, z)的 [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance)（欧几里德距离，即直线距离）， 方向也是从(0, 0, 0)到(x, y, z)的方向。
- 任意的、有顺序的、三个为一组的数字组合。

其他的一些事物也可以使用二维向量进行表示，比如说动量矢量等等； 但以上这些是它在 three.js 中的常用用途。

对 Vector3 实例进行遍历将按相应的顺序生成它的分量 (x, y, z)。

[length](https://threejs.org/docs/?q=Obje#api/zh/math/Vector3.length) () : Float

- 计算从(0, 0, 0) 到 (x, y, z)的欧几里得长度 （[Euclidean length](https://en.wikipedia.org/wiki/Euclidean_distance)，即直线长度）

[normalize](https://threejs.org/docs/?q=Obje#api/zh/math/Vector3.normalize) () : this

将该向量转换为单位向量（[unit vector](https://en.wikipedia.org/wiki/Unit_vector)）， 也就是说，将该向量的方向设置为和原向量相同，但是其长度（length）为 1。

[distanceTo](https://threejs.org/docs/?q=Obje#api/zh/math/Vector3.distanceTo) ( v : Vector3 ) : Float

计算该向量到所传入的 v 间的距离。

```javascript
// 计算从(0, 0, 0) 到 (x, y, z)的欧几里得长度(即直线长度)
console.log(mesh.position.length());
// 将该向量转换为单位向量（unit vector），
// 也就是说,将该向量的方向设置为和原向量相同,但是其长度(length)为1。
// 向量的归一化
mesh.position.normalize();
//长度为1
console.log(mesh.position.length());
// 计算该向量到所传入的v间的距离。
console.log(mesh.position.distanceTo(camera.position));
```

**解释**

```javascript
//沿着向量1，1，1移动100，而非移动到100，100，100的位置
mesh.translateOnAxis( new THREE.Vector3( 1, 1, 1 ).normalize(), 100);
```

往场景里加网格

```javascript
scene.add(mesh);
```

### [组](https://threejs.org/docs/#api/zh/objects/Group)

它几乎和 Object3D 是相同的，其目的是使得组中对象在语法上的结构更加清晰。

```javascript
//弄成一个组 大家一起移动
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = Math.PI;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
group.add(cube1);
cube2.position.x = -2;
group.add(cube2);
cube3.position.x = 2;
group.add(cube3);
```

![group](E:\Desktop\vuepress\docs\base\images\Three\transform-objects\group.png)

```javascript
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

/**
 * Group 组
 */
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = Math.PI / 4;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

//坐标轴
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

// camera.lookAt(group.position);

const render = new THREE.WebGLRenderer({
  canvas,
});

render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

### [坐标轴](https://threejs.org/docs/#api/zh/helpers/AxesHelper)

用于简单模拟 3 个坐标轴的对象。红色代表 X 轴，绿色代表 Y 轴， 蓝色代表 Z 轴。

#### 构造器

AxesHelper( size : Number )

- size -- (可选的) 表示代表轴的线段长度. 默认为 **1**.

```javascript
const axesHelper = new THREE.AxesHelper(1);
```

往场景里添加坐标轴

```javascript
scene.add(axesHelper);
```

![axesHelper](E:\Desktop\vuepress\docs\base\images\Three\transform-objects\axesHelper.png)

```javascript
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, -0.6, 1);

scene.add(mesh);

//坐标轴
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//相机往右移动
camera.position.x = 1;
//相机往上移动
camera.position.y = 1;
camera.position.z = 3;

scene.add(camera);

const render = new THREE.WebGLRenderer({
  canvas,
});

render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

尺寸：当做渲染器的尺寸大小，以及透视相机长宽比。

```javascript
const sizes = {
  width: 800,
  height: 600,
};
```

### [透视相机](https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera)

[lookAt](https://threejs.org/docs/#api/zh/core/Object3D.lookAt) ( vector : Vector3 ) : undefined

[lookAt](https://threejs.org/docs/#api/zh/core/Object3D.lookAt) ( x : Float, y : Float, z : Float ) : undefined

- vector - 一个表示世界空间中位置的向量。
- 也可以使用世界空间中 x、y 和 z 的位置分量。
- 旋转物体使其在世界空间中面朝一个点。
- 这一方法不支持其父级被旋转过或者被位移过的物体。

```javascript
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.x = 1;
// camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);
// 计算该向量到所传入的v间的距离。
console.log(mesh.position.distanceTo(camera.position));
//lookAt
console.log(mesh.position);
console.log(group.position);
// camera.lookAt(mesh.position);
// camera.lookAt(group.position);
```

![lookAt](E:\Desktop\vuepress\docs\base\images\Three\transform-objects\lookAt.png)

```javascript
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, -0.6, 1);

mesh.scale.set(2, 0.5, 0.5);

//Rotation
// 旋转顺序 欧拉角方法
mesh.rotation.reorder('YXZ');
// 旋转1/4个圆 欧拉角属性
mesh.rotation.y = Math.PI / 2;

scene.add(mesh);

//坐标轴
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

// camera.lookAt(new THREE.Vector3(3, 0, 0));

// mesh.position.set(0.7, -0.6, 1);
camera.lookAt(mesh.position);

const render = new THREE.WebGLRenderer({
  canvas,
});

render.setSize(sizes.width, sizes.height);
render.render(scene, camera);
```

### 渲染

```javascript
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```

### 完整代码

#### HTML

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transform objects</title>
</head>
<body>
    <canvas class="webgl"></canvas>
</body>
</html>
```

#### JavaScript

```javascript
import * as THREE from 'three';

// DOM元素
const canvas = document.querySelector('canvas.webgl');

// 场景
const scene = new THREE.Scene();

/**
 * 对象
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// x轴向右 y轴向上 z轴垂直平面向外
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
//一次性设置x、y、z
mesh.position.set(0.7, -0.6, 1);

//缩放
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
//一次性设置scale
mesh.scale.set(2, 0.5, 0.5);

//旋转
// 旋转顺序
mesh.rotation.reorder('YXZ');
// 旋转半个圆
mesh.rotation.y = Math.PI;

// 计算从(0, 0, 0) 到 (x, y, z)的欧几里得长度(即直线长度)
console.log(mesh.position.length());
// 将该向量转换为单位向量（unit vector），
// 也就是说,将该向量的方向设置为和原向量相同,但是其长度(length)为1。
// mesh.position.normalize();

scene.add(mesh);

//弄成一个组 大家一起移动
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = Math.PI;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
group.add(cube1);
cube2.position.x = -2;
group.add(cube2);
cube3.position.x = 2;
group.add(cube3);

//坐标轴
//用于简单模拟3个坐标轴的对象.
// 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

/**
 * 尺寸
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * 相机
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.x = 1;
// camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);
// 计算该向量到所传入的v间的距离。
console.log(mesh.position.distanceTo(camera.position));
//lookAt
console.log(mesh.position);
console.log(group.position);
// camera.lookAt(mesh.position);
// camera.lookAt(group.position);

/**
 * 渲染
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```

![最终效果](E:\Desktop\vuepress\docs\base\images\Three\transform-objects\index.png)

## 动画

### 帧动画

[window.requestAnimationFrame()](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame) 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

![Time](E:\Desktop\vuepress\docs\base\images\Three\animations\Time.gif)

```javascript
//Time
let time = Date.now();

//Animation
const tick = () => {
  //当前时间
  const currentTime = Date.now();

  //每帧相差时间(相当于速度 秒/帧) 
  const deltaTime = currentTime - time;

  //更新时间
  time = currentTime;

  //更新对象 每帧相差时间一致
  //所以与帧数无关,无论帧数如何,它的速度都是正确的
  mesh.rotation.y += 0.002 * deltaTime;

  //渲染
  renderer.render(scene, camera);

  //帧动画
  window.requestAnimationFrame(tick);
};
tick();
```

### Clock

[Clock](https://threejs.org/docs/#api/zh/core/Clock)用于跟踪时间，如果[performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)可用，则 Clock 对象通过该方法实现，否则回落到使用略欠精准的[Date.now](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/now)来实现。

[getElapsedTime](https://threejs.org/docs/#api/zh/core/Clock.getElapsedTime) () : Float

- 获取自时钟启动后的秒数，同时将 .oldTime 设置为当前时间。
- 如果 .autoStart 设置为 **true** 且时钟并未运行，则该方法同时启动时钟。

![clock](E:\Desktop\vuepress\docs\base\images\Three\animations\clock.gif)

```javascript
//Clock
const clock = new THREE.Clock();

const tick = () => {
  //Clock 将当前时间设置给clock,然后将相差时间设置给elapsedTime
  const elapsedTime = clock.getElapsedTime();

  // mesh.rotation.y = elapsedTime * Math.PI * 2;
  //会绕着一个圆转  因为sin*x^2 + cos*x^2 = 1
  mesh.position.y = Math.sin(elapsedTime);
  mesh.position.x = Math.cos(elapsedTime);
  //使其在世界空间中面朝一个点
  camera.lookAt(mesh.position);

  //渲染
  renderer.render(scene, camera);

  //帧动画
  window.requestAnimationFrame(tick);
};
tick();
```

### [GSAP](https://greensock.com/gsap/)

::: tip
首先通过 yarn add gsap --save 安装 gsap，[gsap.to()](<https://greensock.com/docs/v3/GSAP/gsap.to()>)
:::

```javascript
import gsap from 'gsap';

//GSAP
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

const tick = () => {
  //渲染
  renderer.render(scene, camera);

  //帧动画
  window.requestAnimationFrame(tick);
};
tick();
```

![最终效果](E:\Desktop\vuepress\docs\base\images\Three\animations\gsap.gif)

### 完整代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animations</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

#### JavaScript

```javascript
import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//Time
let time = Date.now();

//Animation
const tick = () => {
  //当前时间
  const currentTime = Date.now();

  //每帧相差时间  帧时间 = 1s / 帧数
  const deltaTime = currentTime - time;

  //更新时间
  time = currentTime;

  //更新对象 移动距离 = 帧数 * 单位速度(帧时间)
  //所以与帧数无关,无论帧数如何,它的速度都是正确的
  mesh.rotation.y += 0.002 * deltaTime;

  //渲染
  renderer.render(scene, camera);

  //帧动画
  window.requestAnimationFrame(tick);
};
tick();

//Clock
const clock = new THREE.Clock();

const tick = () => {
  //Clock
  const elapsedTime = clock.getElapsedTime();

  // mesh.rotation.y = elapsedTime * Math.PI * 2;
  //会绕着一个圆转  因为sin*x^2 + cos*x^2 = 1
  mesh.position.y = Math.sin(elapsedTime);
  mesh.position.x = Math.cos(elapsedTime);
  //使其在世界空间中面朝一个点
  camera.lookAt(mesh.position);

  //渲染
  renderer.render(scene, camera);

  //帧动画
  window.requestAnimationFrame(tick);
};
tick();

//GSAP
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

const tick = () => {
  //渲染
  renderer.render(scene, camera);

  //帧动画
  window.requestAnimationFrame(tick);
};
tick();
```

## 相机

### [透视相机](https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera)

#### near 和 far

[near](https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera.near) : Float

- 摄像机的近端面，默认值是**0.1**。

[far](https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera.far) : Float

- 摄像机的远端面，默认值是**2000**。

- 该值必须大于 near plane（摄像机视锥体近端面）的值。

```javascript
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);
```

![透视相机](E:\Desktop\vuepress\docs\base\images\Three\cameras\透视相机.png)

```javascript
import './style.css';
import * as THREE from 'three';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
// 物体 与 相机 长度需要在near和far之间,否则会有奇奇怪怪的bug
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
//2、相机距离
console.log(camera.position.length());
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```

### [正交相机](https://threejs.org/docs/#api/zh/cameras/OrthographicCamera)

#### 构造器

OrthographicCamera( left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number )

- left — 摄像机视锥体左侧面。
- right — 摄像机视锥体右侧面。
- top — 摄像机视锥体上侧面。
- bottom — 摄像机视锥体下侧面。
- near — 摄像机视锥体近端面。
- far — 摄像机视锥体远端面。

这些参数一起定义了摄像机的[viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum)（视锥体）。

```javascript
//正交相机 长/宽 = x / 1
const aspectRatio = sizes.width / sizes.height;
//背景是长方形 所以 y轴 / x轴 不是1/1
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
);
```

![正交相机](E:\Desktop\vuepress\docs\base\images\Three\cameras\正交相机.png)

```javascript
import './style.css';
import * as THREE from 'three';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

const aspectRatio = sizes.width / sizes.height;
// 正交相机
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
);

camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
//2、相机距离
console.log(camera.position.length());
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```

### 鼠标坐标

```javascript
const cursor = {
  x: 0,
  y: 0,
};
// 监听鼠标移动 并记录坐标
window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

// Animate
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  camera.position.y = cursor.y * Math.PI * 2;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
tick();
```

![鼠标](E:\Desktop\vuepress\docs\base\images\Three\cameras\鼠标.gif)

```javascript
import './style.css';
import * as THREE from 'three';

/**
 * 鼠标
 */
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener('mousemove', (event) => {
  //在盒子内的移动距离为-0.5~0.5
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

const aspectRatio = sizes.width / sizes.height;
// 正交相机
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

camera.position.z = 2;
//2、相机距离
console.log(camera.position.length());
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// 动画

const tick = () => {
  //cursor.x * Math.PI * 2  -π ~ π 0->-1->0->1->0
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  //-1->0->1->0->-1
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  camera.position.y = cursor.y * 5;
  camera.lookAt(mesh.position);

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
tick();
```

### [轨道控制器](https://threejs.org/docs/#examples/zh/controls/OrbitControls)

- Orbit controls（轨道控制器）可以使得相机围绕目标进行轨道运动。
- 要使用这一功能，就像在/examples（示例）目录中的所有文件一样， 您必须在 HTML 中包含这个文件。

#### 构造器

OrbitControls( object : Camera, domElement : HTMLDOMElement )

- object: （必须）将要被控制的相机。该相机不允许是其他任何对象的子级，除非该对象是场景自身。
- domElement: 用于事件监听的 HTML 元素。

[enableDamping](https://threejs.org/docs/#examples/zh/controls/OrbitControls.enableDamping) : Boolean

- 将其设置为 true 以启用阻尼（惯性），这将给控制器带来重量感。默认值为 false。
- 请注意，如果该值被启用，你将必须在你的动画循环里调用.update()。

[update](https://threejs.org/docs/#examples/zh/controls/OrbitControls.update) : Boolean

- 更新控制器。必须在摄像机的变换发生任何手动改变后调用， 或如果.autoRotate 或.enableDamping 被设置时，在 update 循环里调用。

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// 轨道控制
const controls = new OrbitControls(camera, canvas);
// 打开阻尼
controls.enableDamping = true;

// 动画
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // 更新轨道控制器
  controls.update();

  // 渲染
  renderer.render(scene, camera);

  // 循环
  window.requestAnimationFrame(tick);
};

tick();
```

![最终效果](E:\Desktop\vuepress\docs\base\images\Three\cameras\轨道控制器.gif)

```javascript
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

const aspectRatio = sizes.width / sizes.height;
// 正交相机
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

camera.position.z = 2;
//2、相机距离
console.log(camera.position.length());
camera.lookAt(mesh.position);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
// controls.target.y = 1;
// controls.update();
// 阻尼 平滑
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// 动画
const tick = () => {
  //OrbitControls每一次修改配置都需要使用update
  controls.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
tick();
```

### 最终代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cameras</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

#### JavaScript

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
// near and far
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);

// 正交相机 长/宽 = x / 1
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 2;

console.log(camera.position.length());
camera.lookAt(mesh.position);
scene.add(camera);

//  轨道控制
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = elapsedTime;

  //   camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  //   camera.position.y = cursor.y * Math.PI * 2;
  //   camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  //   camera.lookAt(mesh.position);

  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
```

## 全屏

使用 CSS 先将 canvas 元素占满全屏

```css
* {
  margin: 0;
  padding: 0;
} 

/* 
    controls.enabled = false;
    mac禁用后滚动 下面会出现空白区域
*/
html,
body {
  overflow: hidden;
}

.webgl {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: none;
}
```

### 调整尺寸

[updateProjectionMatrix](https://threejs.org/docs/index.html?q=ca#api/zh/cameras/PerspectiveCamera.updateProjectionMatrix) () : undefined

- 更新摄像机投影矩阵。在任何参数被改变以后必须被调用。

[Window.devicePixelRatio](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio)

- 返回当前显示设备的*物理像素*分辨率与*CSS 像素*分辨率之比。

[setPixelRatio](https://threejs.org/docs/index.html?q=ren#api/zh/renderers/WebGLRenderer.setPixelRatio) ( value : number ) : undefined

- 设置设备像素比。通常用于避免 HiDPI 设备上绘图模糊

```javascript
//1、调整
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
window.addEventListener('resize', () => {
  //更新尺寸
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //更新相机
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  //更新渲染器尺寸
  renderer.setSize(sizes.width, sizes.height);
  //根据像素比率渲染
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
```

### 双击窗口

[dblclick](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/dblclick_event)

- 在单个元素上单击两次鼠标的指针设备按钮 (通常是小鼠的主按钮) 时，将触发 `dblclick` 事件。

```javascript
//双击窗口
window.addEventListener('dblclick', () => {
  //兼容性写法
  const fullScreen =
    document.fullscreenElement || document.webkitFullscreenElement;
  //全屏
  if (!fullScreen) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
    //退出全屏
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
```

![全屏](E:\Desktop\vuepress\docs\base\images\Three\fullscreen-and-resizing\全屏.gif)

```javascript
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// 场景
const scene = new THREE.Scene();

// 对象
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 尺寸
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// 监听尺寸变化
window.addEventListener('resize', () => {
  //更新尺寸
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //更新相机纵横比
  camera.aspect = sizes.width / sizes.height;
  //需要使用updateProjectionMatrix进行更新
  camera.updateProjectionMatrix();
  //更新渲染器尺寸
  renderer.setSize(sizes.width, sizes.height);
  //根据像素比率渲染
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//双击窗口
window.addEventListener('dblclick', () => {
  const fullScreen =
    document.fullscreenElement || document.webkitFullscreenElement;
  if (!fullScreen) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

// 透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// 轨道控制器
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// 渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
//设置尺寸
renderer.setSize(sizes.width, sizes.height);
//根据像素比率渲染
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const tick = () => {
  // 更新轨道控制器
  controls.update();

  // 渲染
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
```

### 完整代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fullscreen and resizing</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

#### CSS

```css
/* 
* {
  margin: 0;
  padding: 0;
} 
*/

/* 
    controls.enabled = false;
    mac禁用后滚动 下面会出现空白区域
*/
html,
body {
  overflow: hidden;
}

.webgl {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: none;
}
```

#### JavaScript

```javascript
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// DOM元素
const canvas = document.querySelector('canvas.webgl');

// 场景
const scene = new THREE.Scene();

//对象
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//尺寸
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
window.addEventListener('resize', () => {
  //更新尺寸
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //更新相机
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  //更新渲染器尺寸
  renderer.setSize(sizes.width, sizes.height);
  //根据像素比率渲染
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//双击窗口
window.addEventListener('dblclick', () => {
  const fullScreen =
    document.fullscreenElement || document.webkitFullscreenElement;
  if (!fullScreen) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

//透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// 控制
const controls = new OrbitControls(camera, canvas);
//阻尼
controls.enableDamping = true;

//渲染
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//根据像素比率渲染
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//动画
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // 更新控制
  controls.update();

  // 渲染
  renderer.render(scene, camera);

  // 帧动画
  window.requestAnimationFrame(tick);
};

tick();
```

## 几何

### [BufferGeometry](https://threejs.org/docs/index.html?q=BufferGeometry#api/zh/core/BufferGeometry)

- 是面片、线或点几何体的有效表述。包括顶点位置，面片索引、法相量、颜色值、UV 坐标和自定义缓存属性值。使用 BufferGeometry 可以有效减少向 GPU 传输上述数据所需的开销。

[Float32Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

- Float32Array 类型数组代表的是平台字节顺序为 32 位的浮点数型数组 (对应于 C 浮点数据类型) 。其内容初始化为 0，一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。

### [BufferAttribute](https://threejs.org/docs/index.html?q=BufferAttribute#api/zh/core/BufferAttribute)

- 这个类用于存储与 BufferGeometry 相关联的 attribute（例如顶点位置向量，面片索引，法向量，颜色值，UV 坐标以及任何自定义 attribute ）。 利用 BufferAttribute，可以更高效的向 GPU 传递数据。详情和例子见该页。
- 在 BufferAttribute 中，数据被存储为任意长度的矢量（通过 itemSize 进行定义），下列函数如无特别说明， 函数参数中的 index 会自动乘以矢量长度进行计算。 When working with vector-like data, the _.fromBufferAttribute( attribute, index )_ helper methods on Vector2, Vector3, Vector4, and Color classes may be helpful.

#### 构造函数

BufferAttribute( array : TypedArray, itemSize : Integer, normalized : Boolean )

- array -- 必须是 [TypedArray](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/TypedArray). 类型，用于实例化缓存。
  该队列应该包含：`itemSize * numVertices`个元素，numVertices 是 BufferGeometry 中的顶点数目

- itemSize -- 队列中与顶点相关的数据值的大小。举例，如果 attribute 存储的是三元组（例如顶点空间坐标、法向量或颜色值）则 itemSize 的值应该是 3。

- normalized -- (可选) 指明缓存中的数据如何与 GLSL 代码中的数据对应。例如，如果 array 是 UInt16Array 类型，且 normalized 的值是 true，则队列中的值将会从 0 - +65535 映射为 GLSL 中的 0.0f - +1.0f。 如果 array 是 Int16Array (有符号)，则值将会从 -32768 - +32767 映射为 -1.0f - +1.0f。若 normalized 的值为 false，则数据映射不会归一化，而会直接映射为 float 值，例如，32767 将会映射为 32767.0f.

[setAttribute](https://threejs.org/docs/index.html?q=BufferGeometry#api/zh/core/BufferGeometry.setAttribute) ( name : String, attribute : BufferAttribute ) : this

- 为当前几何体设置一个 attribute 属性。在类的内部，有一个存储 .attributes 的 hashmap， 通过该 hashmap，遍历 attributes 的速度会更快。而使用该方法，可以向 hashmap 内部增加 attribute。 所以，你需要使用该方法来添加 attributes。

[wireframe](https://threejs.org/docs/index.html?q=MeshBasicMaterial#api/zh/materials/MeshBasicMaterial.wireframe) : Boolean

- 将几何体渲染为线框。默认值为**false**（即渲染为平面多边形）。

```javascript
//自定义几何
const geometry = new THREE.BufferGeometry();
const count = 50;
//创造50个三角形
const positionArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
  positionArray[i] = (Math.random() - 0.5) * 4;
}
const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
geometry.setAttribute('position', positionAttribute);

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
```

![最终效果](E:\Desktop\vuepress\docs\base\images\09-geometries.png)

### 完整代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Geometries</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

#### CSS

```css
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow: hidden;
}

.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
```

#### JavaScript

```javascript
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//DOM元素
const canvas = document.querySelector('canvas.webgl');

//场景
const scene = new THREE.Scene();

// 对象
const geometry = new THREE.BufferGeometry();
const count = 50;
//创造50个三角形
const positionArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
  positionArray[i] = (Math.random() - 0.5) * 4;
}
const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
geometry.setAttribute('position', positionAttribute);

//网格
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 尺寸
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // 更新尺寸
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // 更新相机
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // 更新渲染
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 相机
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// 控制
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// 渲染
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 动画
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // 更新控制
  controls.update();

  // 渲染
  renderer.render(scene, camera);

  // 帧动画
  window.requestAnimationFrame(tick);
};

tick();
```

## [调试工具](https://github.com/dataarts/dat.gui)

[dat.GUI 示例](https://jsfiddle.net/ikatyang/182ztwao/)

```javascript
import * as dat from 'dat.gui';

//调试debug
const gui = new dat.GUI({ closed: true, width: 400 });
//隐藏控制面板 h显示隐藏
gui.hide();
//参数
const parameters = {
  color: 0xc2ff,
  //旋转
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 });
  },
};
//调节颜色
gui
  .addColor(parameters, 'color')
  .name('颜色')
  .onChange(() => {
    material.color.set(parameters.color);
  });
//旋转
gui.add(parameters, 'spin');
//调节y轴
gui.add(mesh.position, 'y').min(-3).max(3).step(0.01).name('网格y轴');
//是否显示网格
gui.add(mesh, 'visible').name('显示网格');
//是否线框
gui.add(material, 'wireframe').name('显示线框');
```

![最终效果](E:\Desktop\vuepress\docs\base\images\10-debug-ui.gif)

### 完整代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Debug UI</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

#### CSS

```css
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow: hidden;
}

.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
```

#### JavaScript

```javascript
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import * as dat from 'dat.gui';

//调试debug
const gui = new dat.GUI({ closed: true, width: 400 });
//隐藏控制面板 h显示隐藏
gui.hide();
//参数
const parameters = {
  color: 0xc2ff,
  //旋转
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 });
  },
};
//调节颜色
gui
  .addColor(parameters, 'color')
  .name('颜色')
  .onChange(() => {
    material.color.set(parameters.color);
  });
gui.add(parameters, 'spin');

// DOM元素
const canvas = document.querySelector('canvas.webgl');

// 场景
const scene = new THREE.Scene();

//对象
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: parameters.color });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Debug
//调节y轴
gui.add(mesh.position, 'y').min(-3).max(3).step(0.01).name('网格y轴');
//是否显示网格
gui.add(mesh, 'visible').name('显示网格');
//是否线框
gui.add(material, 'wireframe').name('显示线框');

/**
 * 尺寸
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // 更新尺寸
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // 更新相机
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // 更新渲染
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// 控制
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * 渲染
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * 动画
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // 更新控制
  controls.update();

  // 渲染
  renderer.render(scene, camera);

  // 帧动画
  window.requestAnimationFrame(tick);
};

tick();
```

## 纹理

### [LoadingManager](https://threejs.org/docs/index.html?q=LoadingManager#api/zh/loaders/managers/LoadingManager)

onStart : Function

- 此函数在加载开始时被调用。 有如下参数：
  - url — 被加载的项的 url。
  - itemsLoaded — 目前已加载项的个数。
  - itemsTotal — 总共所需要加载项的个数。

该函数默认为 undefined。

onLoad : Function

- 所有的项目加载完成后将调用此函数。默认情况下，该函数是未定义的，除非在构造函数中传入。

onProgress : Function

- 此方法加载每一个项，加载完成时进行调用。 有如下参数：
  - url — 被加载的项的 url。
  - itemsLoaded — 目前已加载项的个数。
  - itemsTotal — 总共所需要加载项的个数。

默认情况下，该函数为 undefined，除非在构造函数中传入。

onError : Function

- 此方法将在任意项加载错误时，进行调用。 有如下参数：
  - url — 加载发生错误的项目的 url

默认情况下，该函数为 undefined，除非在构造函数中传入。

```javascript
//纹理  将图片转成纹理
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log('onStart');
};
loadingManager.onLoad = () => {
  console.log('onLoaded');
};
loadingManager.onProgress = () => {
  console.log('onProgress');
};
loadingManager.onError = () => {
  console.log('onError');
};
```

### [TextureLoader](https://threejs.org/docs/index.html?q=TextureLoader#api/zh/loaders/TextureLoader)

```javascript
const textureLoader = new THREE.TextureLoader(loadingManager);
// const colorTexture = textureLoader.load('/textures/door/color.jpg');
// const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png');
// const colorTexture = textureLoader.load('/textures/checkerboard-8x8.png');
const colorTexture = textureLoader.load('/textures/minecraft.png');
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const heightTexture = textureLoader.load('/textures/door/height.jpg');
const normalTexture = textureLoader.load('/textures/door/normal.jpg');
const ambientOcclusionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
//更改纹理
const material = new THREE.MeshBasicMaterial({ map: colorTexture });
```

### [Texture](https://threejs.org/docs/index.html#api/zh/textures/Texture)

[repeat](https://threejs.org/docs/index.html#api/zh/textures/Texture.repeat) : Vector2

- 纹理在表面上重复多少次，在每个方向 U 和 V。如果在任一方向上将重复设置为大于 1，则相应的 Wrap 参数也应设置为 THREE.RepeatWrapping 或 THREE.MirroredRepeatWrapping 以实现所需的平铺影响。为纹理设置不同的重复值的方式与 .offset 相同。

[wrapS](https://threejs.org/docs/index.html#api/zh/textures/Texture.wrapS) : number

- 这个值定义了纹理贴图在水平方向上将如何包裹，在 UV 映射中对应于**U**。默认值是 THREE.ClampToEdgeWrapping，即纹理边缘将被推到外部边缘的纹素。 其它的两个选项分别是 THREE.RepeatWrapping 和 THREE.MirroredRepeatWrapping。 请参阅 texture constants 来了解详细信息。

[wrapT](https://threejs.org/docs/index.html#api/zh/textures/Texture.wrapT) : number

- 这个值定义了纹理贴图在垂直方向上将如何包裹，在 UV 映射中对应于**V**。可以使用与 .wrapS : number 相同的选项。

**包裹模式**

```javascript
THREE.RepeatWrapping;
THREE.ClampToEdgeWrapping;
THREE.MirroredRepeatWrapping;
```

- 这些常量定义了纹理贴图的 wrapS 和 wrapT 属性，定义了水平和垂直方向上纹理的包裹方式。
- 使用 RepeatWrapping，纹理将简单地重复到无穷大。 With RepeatWrapping the texture will simply repeat to infinity.
- ClampToEdgeWrapping 是默认值，纹理中的最后一个像素将延伸到网格的边缘。
- 使用 MirroredRepeatWrapping， 纹理将重复到无穷大，在每次重复时将进行镜像。

[offset](https://threejs.org/docs/index.html#api/zh/textures/Texture.offset) : Vector2

- 在 U 和 V 的每个方向上，纹理的单个重复从开头偏移多少。典型范围是 0.0 到 1.0。 以下纹理类型共享引擎中的第一个 uv 通道。偏移（和重复）设置根据以下优先级进行评估，然后由这些纹理共享：

  - color map
  - specular map
  - displacement map
  - normal map
  - bump map
  - roughness map
  - metalness map
  - alpha map
  - emissive map
  - clearcoat map
  - clearcoat normal map
  - clearcoat roughnessMap map

  以下纹理类型共享引擎中的第二个 uv 通道。偏移（和重复）设置根据以下优先级进行评估，然后由这些纹理共享：

  - ao map
  - light map

[rotation](https://threejs.org/docs/index.html#api/zh/textures/Texture.rotation) : number

- 纹理将围绕中心点旋转多少度，单位为弧度（rad）。正值为逆时针方向旋转，默认值为**0**。

[center](https://threejs.org/docs/index.html#api/zh/textures/Texture.center) : Vector2

- 旋转中心点。(0.5, 0.5)对应纹理的正中心。默认值为(0,0)，即左下角。

[generateMipmaps](https://threejs.org/docs/index.html#api/zh/textures/Texture.generateMipmaps) : Boolean

- 是否为纹理生成 mipmap（如果可用）。默认为 true。 如果你手动生成 mipmap，请将其设为 false。

[minFilter](https://threejs.org/docs/index.html#api/zh/textures/Texture.minFilter) : number

- 当一个纹素覆盖小于一个像素时，贴图将如何采样。默认值为 THREE.LinearMipmapLinearFilter， 它将使用 mipmapping 以及三次线性滤镜。

**缩小滤镜**

```javascript
THREE.NearestFilter;
THREE.NearestMipmapNearestFilter;
THREE.NearestMipmapLinearFilter;
THREE.LinearFilter;
THREE.LinearMipmapNearestFilter;
THREE.LinearMipmapLinearFilter;
```

- 这些常量用于纹理的 minFilter 属性，它们定义了当被纹理化的像素映射到大于 1 纹理元素（texel）的区域时，将要使用的纹理缩小函数。

- 除了 NearestFilter 和 LinearFilter， 下面的四个函数也可以用于缩小：

  - NearestMipmapNearestFilter 选择与被纹理化像素的尺寸最匹配的 mipmap， 并以 NearestFilter（最靠近像素中心的纹理元素）为标准来生成纹理值。
  - NearestMipmapLinearFilter 选择与被纹理化像素的尺寸最接近的两个 mipmap， 并以 NearestFilter 为标准来从每个 mipmap 中生成纹理值。最终的纹理值是这两个值的加权平均值。
  - LinearMipmapNearestFilter 选择与被纹理化像素的尺寸最匹配的 mipmap， 并以 LinearFilter（最靠近像素中心的四个纹理元素的加权平均值）为标准来生成纹理值。
  - LinearMipmapLinearFilter 是默认值，它选择与被纹理化像素的尺寸最接近的两个 mipmap， 并以 LinearFilter 为标准来从每个 mipmap 中生成纹理值。最终的纹理值是这两个值的加权平均值。

- 请查看示例：[materials / texture / filters](https://threejs.org/examples/#webgl_materials_texture_filters)。

[magFilter](https://threejs.org/docs/index.html#api/zh/textures/Texture.magFilter) : number

- 当一个纹素覆盖大于一个像素时，贴图将如何采样。默认值为 THREE.LinearFilter， 它将获取四个最接近的纹素，并在他们之间进行双线性插值。 另一个选项是 THREE.NearestFilter，它将使用最接近的纹素的值。
- 请参阅 texture constants 页面来了解详细信息。

**放大滤镜**

```javascript
THREE.NearestFilter;
THREE.LinearFilter;
```

- 这些常量用于纹理的 magFilter 属性，它们定义了当被纹理化的像素映射到小于或者等于 1 纹理元素（texel）的区域时，将要使用的纹理放大函数。
  - NearestFilter 返回与指定纹理坐标（在曼哈顿距离之内）最接近的纹理元素的值。
  - LinearFilter 是默认值，返回距离指定的纹理坐标最近的四个纹理元素的加权平均值， 并且可以包含纹理的其他部分中，被包裹或者被重复的项目，具体取决于 wrapS 和 wrapT 的值，and on the exact mapping。

```javascript
// colorTexture.repeat.x = 2;
// colorTexture.repeat.y = 3;
// colorTexture.wrapS = THREE.RepeatWrapping;
// colorTexture.wrapT = THREE.RepeatWrapping;
//镜像
// colorTexture.wrapS = THREE.MirroredRepeatWrapping;
// colorTexture.wrapT = THREE.MirroredRepeatWrapping;

//纹理向左
// colorTexture.offset.x = 0.5;
//纹理向下
// colorTexture.offset.y = 0.5;
//旋转 以左下角为旋转中心 逆时针
// colorTexture.rotation = Math.PI / 4;
//让中心点成为旋转中心
// colorTexture.center.x = 0.5;
// colorTexture.center.y = 0.5;

colorTexture.generateMipmaps = false;
//高精度 配合1024看效果
colorTexture.minFilter = THREE.NearestFilter;
//低精度 配合8看效果
colorTexture.magFilter = THREE.NearestFilter;
```

### 其他形状

#### [球缓冲几何体](https://threejs.org/docs/index.html?q=Sphere#api/zh/geometries/SphereGeometry)

- 一个用于生成球体的类。

##### 构造器

SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)

- radius — 球体半径，默认为 1。
- widthSegments — 水平分段数（沿着经线分段），最小值为 3，默认值为 32。
- heightSegments — 垂直分段数（沿着纬线分段），最小值为 2，默认值为 16。
- phiStart — 指定水平（经线）起始角度，默认值为 0。。
- phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI \* 2。
- thetaStart — 指定垂直（纬线）起始角度，默认值为 0。
- thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。

 该几何体是通过扫描并计算围绕着 Y 轴（水平扫描）和 X 轴（垂直扫描）的顶点来创建的。 因此，不完整的球体（类似*球形切片*）可以通过为 phiStart，phiLength，thetaStart 和 thetaLength 设置不同的值来创建， 以定义我们开始（或结束）计算这些顶点的起点（或终点）。

#### [圆锥缓冲几何体](https://threejs.org/docs/index.html?q=Cone#api/zh/geometries/ConeGeometry)

- 一个用于生成圆锥几何体的类。

##### 构造器

ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)

- radius — 圆锥底部的半径，默认值为 1。
- height — 圆锥的高度，默认值为 1。
- radialSegments — 圆锥侧面周围的分段数，默认为 8。
- heightSegments — 圆锥侧面沿着其高度的分段数，默认值为 1。
- openEnded — 一个 Boolean 值，指明该圆锥的底面是开放的还是封顶的。默认值为 false，即其底面默认是封顶的。
- thetaStart — 第一个分段的起始角度，默认为 0。（three o'clock position）
- thetaLength — 圆锥底面圆扇区的中心角，通常被称为“θ”（西塔）。默认值是 2\*Pi，这使其成为一个完整的圆锥。

#### [圆环缓冲几何体](https://threejs.org/docs/index.html?q=Torus#api/zh/geometries/TorusGeometry)

- 一个用于生成圆环几何体的类。

##### 构造器

TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)

- radius - 环面的半径，从环面的中心到管道横截面的中心。默认值是 1。
- tube — 管道的半径，默认值为 0.4。
- radialSegments — 管道横截面的分段数，默认值为 8。
- tubularSegments — 管道的分段数，默认值为 6。
- arc — 圆环的圆心角（单位是弧度），默认值为 Math.PI \* 2。

```javascript
//球体
const geometry = new THREE.SphereBufferGeometry(1, 32, 32);
//圆锥
const geometry = new THREE.ConeBufferGeometry(1, 1, 32);
//圆环
const geometry = new THREE.TorusBufferGeometry(1, 0.35, 32, 100);
```

![最终效果](E:\Desktop\vuepress\docs\base\images\11-textures.png)

### 完整代码

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Textures</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

#### CSS

```css
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow: hidden;
}

.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
```

#### JavaScript

```javascript
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//纹理  将图片转成纹理
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log('onStart');
};
loadingManager.onLoad = () => {
  console.log('onLoaded');
};
loadingManager.onProgress = () => {
  console.log('onProgress');
};
loadingManager.onError = () => {
  console.log('onError');
};
const textureLoader = new THREE.TextureLoader(loadingManager);
// const colorTexture = textureLoader.load('/textures/door/color.jpg');
// const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png');
// const colorTexture = textureLoader.load('/textures/checkerboard-8x8.png');
const colorTexture = textureLoader.load('/textures/minecraft.png');
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const heightTexture = textureLoader.load('/textures/door/height.jpg');
const normalTexture = textureLoader.load('/textures/door/normal.jpg');
const ambientOcclusionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');

// colorTexture.repeat.x = 2;
// colorTexture.repeat.y = 3;
// colorTexture.wrapS = THREE.RepeatWrapping;
// colorTexture.wrapT = THREE.RepeatWrapping;
//镜像
// colorTexture.wrapS = THREE.MirroredRepeatWrapping;
// colorTexture.wrapT = THREE.MirroredRepeatWrapping;

//纹理向左
// colorTexture.offset.x = 0.5;
//纹理向下
// colorTexture.offset.y = 0.5;
//旋转 以左下角为旋转中心 逆时针
// colorTexture.rotation = Math.PI / 4;
//让中心点成为旋转中心
// colorTexture.center.x = 0.5;
// colorTexture.center.y = 0.5;

colorTexture.generateMipmaps = false;
//高精度 配合1024看效果
colorTexture.minFilter = THREE.NearestFilter;
//低精度 配合8看效果
colorTexture.magFilter = THREE.NearestFilter;

// DOM元素
const canvas = document.querySelector('canvas.webgl');

// 场景
const scene = new THREE.Scene();

//方形
const geometry = new THREE.BoxGeometry(1, 1, 1);
//球体
// const geometry = new THREE.SphereBufferGeometry(1, 32, 32);
//圆锥
// const geometry = new THREE.ConeBufferGeometry(1, 1, 32);
//圆环
// const geometry = new THREE.TorusBufferGeometry(1, 0.35, 32, 100);

//材料
const material = new THREE.MeshBasicMaterial({ map: colorTexture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//尺寸
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // 更新尺寸
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // 更新相机
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // 更新渲染器
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
scene.add(camera);

// 控制
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// 渲染
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 动画
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // 更新控制
  controls.update();

  // 渲染
  renderer.render(scene, camera);

  // 帧动画
  window.requestAnimationFrame(tick);
};

tick();
```

## 材料

### [TextureLoader](https://threejs.org/docs/#api/zh/loaders/TextureLoader)

- 加载 texture 的一个类。 内部使用 ImageLoader 来加载文件。

### [CubeTextureLoader](https://threejs.org/docs/#api/zh/loaders/CubeTextureLoader)

- 加载 CubeTexture 的一个类。 内部使用 ImageLoader 来加载文件。

[minFilter](https://threejs.org/docs/?q=TextureLoader#api/zh/textures/Texture.minFilter) : number

- 当一个纹素覆盖小于一个像素时，贴图将如何采样。默认值为 THREE.LinearMipmapLinearFilter， 它将使用 mipmapping 以及三次线性滤镜。

- 请参阅 texture constants 页面来了解所有可能的选项。

[magFilter](https://threejs.org/docs/?q=TextureLoader#api/zh/textures/Texture.magFilter) : number

- 当一个纹素覆盖大于一个像素时，贴图将如何采样。默认值为 THREE.LinearFilter， 它将获取四个最接近的纹素，并在他们之间进行双线性插值。 另一个选项是 THREE.NearestFilter，它将使用最接近的纹素的值。
  请参阅 texture constants 页面来了解详细信息。

[放大滤镜](https://threejs.org/docs/?q=TextureLoader#api/zh/constants/Textures)（Magnification Filters）

```javascript
THREE.NearestFilter;
THREE.LinearFilter;
```

- 这些常量用于纹理的 magFilter 属性，它们定义了当被纹理化的像素映射到小于或者等于 1 纹理元素（texel）的区域时，将要使用的纹理放大函数。

- NearestFilter 返回与指定纹理坐标（在曼哈顿距离之内）最接近的纹理元素的值。

- LinearFilter 是默认值，返回距离指定的纹理坐标最近的四个纹理元素的加权平均值， 并且可以包含纹理的其他部分中，被包裹或者被重复的项目，具体取决于 wrapS 和 wrapT 的值，and on the exact mapping。

[generateMipmaps](https://threejs.org/docs/?q=TextureLoader#api/zh/textures/Texture.generateMipmaps) : Boolean

- 是否为纹理生成 mipmap（如果可用）。默认为 true。 如果你手动生成 mipmap，请将其设为 false。

### [MeshBasicMaterial](https://threejs.org/docs/?q=MeshBasicMaterial#api/zh/materials/MeshBasicMaterial)

- 一个以简单着色（平面或线框）方式来绘制几何体的材质。这种材质不受光照的影响。

#### 构造器

**MeshBasicMaterial( parameters : Object )**

- parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从 Material 继承的任何属性)。

- 属性 color 例外，其可以作为十六进制字符串传递，默认情况下为 **0xffffff**（白色），内部调用 Color.set(color)。

[map](https://threejs.org/docs/?q=MeshBasicMaterial#api/zh/materials/MeshBasicMaterial.map) : Texture

- 颜色贴图。可以选择包括一个 alpha 通道，通常与.transparent 或.alphaTest。默认为 null。

[transparent](https://threejs.org/docs/?q=MeshBasicMaterial#api/zh/materials/Material.transparent) : Boolean

- 定义此材质是否透明。这对渲染有影响，因为透明对象需要特殊处理，并在非透明对象之后渲染。
- 设置为 true 时，通过设置材质的 opacity 属性来控制材质透明的程度。
- 默认值为**false**。

[opacity](https://threejs.org/docs/?q=MeshBasicMaterial#api/zh/materials/Material.opacity) : Float

- 在 0.0 - 1.0 的范围内的浮点数，表明材质的透明度。值**0.0**表示完全透明，**1.0**表示完全不透明。
- 如果材质的 transparent 属性未设置为**true**，则材质将保持完全不透明，此值仅影响其颜色。 默认值为**1.0**。

[alphaMap](https://threejs.org/docs/?q=MeshBasicMaterial#api/zh/materials/MeshBasicMaterial.alphaMap) : Texture

- alpha 贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为 null。

[side](https://threejs.org/docs/?q=MeshBasicMaterial#api/zh/materials/Material.side) : Integer

- 定义将要渲染哪一面 - 正面，背面或两者。 默认为 THREE.FrontSide。其他选项有 THREE.BackSide 和 THREE.DoubleSide。

**面**

```javascript
THREE.FrontSide;
THREE.BackSide;
THREE.DoubleSide;
```

- 定义了哪一边的面将会被渲染 —— 正面，或是反面，还是两个面都渲染。 默认值是 FrontSide（只渲染正面）。

### [MeshNormalMaterial](https://threejs.org/docs/?q=MeshNormalMaterial#api/zh/materials/MeshNormalMaterial)

- 一种把法向量映射到 RGB 颜色的材质。

#### 构造器

MeshNormalMaterial( parameters : Object )

- parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从 Material 继承的任何属性)。

[flatShading](https://threejs.org/docs/?q=MeshNormalMaterial#api/zh/materials/MeshNormalMaterial.flatShading) : Boolean

- 定义材质是否使用平面着色进行渲染。默认值为 false。

### [MeshMatcapMaterial](https://threejs.org/docs/?q=MeshMatcapMaterial#api/zh/materials/MeshMatcapMaterial)

- MeshMatcapMaterial 由一个材质捕捉（MatCap，或光照球（Lit Sphere））纹理所定义，其编码了材质的颜色与明暗。
- 由于 mapcap 图像文件编码了烘焙过的光照，因此 MeshMatcapMaterial 不对灯光作出反应。 它将会投射阴影到一个接受阴影的物体上(and shadow clipping works)，但不会产生自身阴影或是接受阴影。

[matcap](https://threejs.org/docs/?q=MeshMatcapMaterial#api/zh/materials/MeshMatcapMaterial.matcap) : Texture

- matcap 贴图，默认为 null。

### [MeshDepthMaterial](https://threejs.org/docs/?q=MeshDepthMaterial#api/zh/materials/MeshDepthMaterial)

- 一种按深度绘制几何体的材质。深度基于相机远近平面。白色最近，黑色最远。

### [MeshLambertMaterial](https://threejs.org/docs/?q=MeshLambertMaterial#api/zh/materials/MeshLambertMaterial)

- 一种非光泽表面的材质，没有镜面高光。
- 该材质使用基于非物理的[Lambertian](https://en.wikipedia.org/wiki/Lambertian_reflectance)模型来计算反射率。 这可以很好地模拟一些表面（例如未经处理的木材或石材），但不能模拟具有镜面高光的光泽表面（例如涂漆木材）。
- 使用[Gouraud](https://en.wikipedia.org/wiki/Gouraud_shading)着色模型计算着色。这将计算每个顶点的着色 （即在[vertex shader](https://en.wikipedia.org/wiki/Shader#Vertex_shaders)中）并在多边形的面上插入结果。
- 由于反射率和光照模型的简单性，MeshPhongMaterial，MeshStandardMaterial 或者 MeshPhysicalMaterial 上使用这种材质时会以一些图形精度为代价，得到更高的性能。

### [MeshPhongMaterial](https://threejs.org/docs/?q=MeshPhongMaterial#api/zh/materials/MeshPhongMaterial)

- 一种用于具有镜面高光的光泽表面的材质。

- 该材质使用非物理的[Blinn-Phong](https://en.wikipedia.org/wiki/Blinn-Phong_shading_model)模型来计算反射率。 与 MeshLambertMaterial 中使用的 Lambertian 模型不同，该材质可以模拟具有镜面高光的光泽表面（例如涂漆木材）。

- 使用[Phong](https://en.wikipedia.org/wiki/Phong_shading)着色模型计算着色时，会计算每个像素的阴影（在[fragment shader](https://en.wikipedia.org/wiki/Shader#Pixel_shaders)， AKA pixel shader 中），与 MeshLambertMaterial 使用的 Gouraud 模型相比，该模型的结果更准确，但代价是牺牲一些性能。 MeshStandardMaterial 和 MeshPhysicalMaterial 也使用这个着色模型。

- 在 MeshStandardMaterial 或 MeshPhysicalMaterial 上使用此材质时，性能通常会更高 ，但会牺牲一些图形精度。

[shininess](https://threejs.org/docs/?q=MeshPhongMaterial#api/zh/materials/MeshPhongMaterial.shininess) : Float

- specular 高亮的程度，越高的值越闪亮。默认值为 **30**。

[specular](https://threejs.org/docs/?q=MeshPhongMaterial#api/zh/materials/MeshPhongMaterial.specular) : Color

- 材质的高光颜色。默认值为**0x111111**（深灰色）的颜色 Color。
- 这定义了材质的光泽度和光泽的颜色。

### [MeshToonMaterial](https://threejs.org/docs/?q=MeshToonMaterial#api/zh/materials/MeshToonMaterial)

- 实现卡通着色的材料。

[gradientMap](https://threejs.org/docs/#api/zh/materials/MeshToonMaterial.gradientMap) : Texture

- 卡通着色的渐变贴图。使用此类纹理时，需要将 Texture.minFilter 和 Texture.magFilter 设置为 THREE.NearestFilter。默认为空。

### [MeshStandardMaterial](https://threejs.org/docs/?q=MeshStandardMaterial#api/zh/materials/MeshStandardMaterial.envMap)

- 一种基于物理的标准材质，使用 Metallic-Roughness 工作流程。

- 基于物理的渲染（PBR）最近已成为许多 3D 应用程序的标准，例如[Unity](https://blogs.unity3d.com/2014/10/29/physically-based-shading-in-unity-5-a-primer/)， [Unreal](https://docs.unrealengine.com/latest/INT/Engine/Rendering/Materials/PhysicallyBased/)和 [3D Studio Max](http://area.autodesk.com/blogs/the-3ds-max-blog/what039s-new-for-rendering-in-3ds-max-2017)。

- 这种方法与旧方法的不同之处在于，不使用近似值来表示光与表面的相互作用，而是使用物理上正确的模型。 我们的想法是，不是在特定照明下调整材质以使其看起来很好，而是可以创建一种材质，能够“正确”地应对所有光照场景。

- 在实践中，该材质提供了比 MeshLambertMaterial 或 MeshPhongMaterial 更精确和逼真的结果，代价是计算成本更高。

- 计算着色的方式与 MeshPhongMaterial 相同，都使用[Phong](https://en.wikipedia.org/wiki/Phong_shading)着色模型， 这会计算每个像素的阴影（即在[fragment shader](https://en.wikipedia.org/wiki/Shader#Pixel_shaders)， AKA pixel shader 中）， 与 MeshLambertMaterial 使用的 Gouraud 模型相比，该模型的结果更准确，但代价是牺牲一些性能。

- 请注意，为获得最佳效果，您在使用此材质时应始终指定 environment map。

[metalness](https://threejs.org/docs/?q=MeshStandardMaterial#api/zh/materials/MeshStandardMaterial.metalness) : Float

- 材质与金属的相似度。非金属材质，如木材或石材，使用 0.0，金属使用 1.0，通常没有中间值。 默认值为 0.0。0.0 到 1.0 之间的值可用于生锈金属的外观。如果还提供了 metalnessMap，则两个值相乘。

[roughness](https://threejs.org/docs/?q=MeshStandardMaterial#api/zh/materials/MeshStandardMaterial.roughness) : Float

- 材质的粗糙程度。0.0 表示平滑的镜面反射，1.0 表示完全漫反射。默认值为 1.0。如果还提供 roughnessMap，则两个值相乘。

[aoMap](https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial.aoMap) : Texture

- 该纹理的红色通道用作环境遮挡贴图。默认值为 null。aoMap 需要第二组 UV。

[aoMapIntensity](https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial.aoMapIntensity) : Float

- 环境遮挡效果的强度。默认值为 1。零是不遮挡效果。

[displacementMap](https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial.displacementMap) : Texture

- 位移贴图会影响网格顶点的位置，与仅影响材质的光照和阴影的其他贴图不同，移位的顶点可以投射阴影，阻挡其他对象， 以及充当真实的几何体。位移纹理是指：网格的所有顶点被映射为图像中每个像素的值（白色是最高的），并且被重定位。

[displacementScale](https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial.displacementScale) : Float

- 位移贴图对网格的影响程度（黑色是无位移，白色是最大位移）。如果没有设置位移贴图，则不会应用此值。默认值为 1。

[metalnessMap](https://threejs.org/docs/?q=metalnessMap#api/zh/materials/MeshStandardMaterial.metalnessMap) : Texture

- 该纹理的蓝色通道用于改变材质的金属度。

[roughnessMap](https://threejs.org/docs/?q=metalnessMap#api/zh/materials/MeshStandardMaterial.roughnessMap) : Texture

- 该纹理的绿色通道用于改变材质的粗糙度。

[normalMap](https://threejs.org/docs/?q=metalnessMap#api/zh/materials/MeshStandardMaterial.normalMap) : Texture

- 用于创建法线贴图的纹理。RGB 值会影响每个像素片段的曲面法线，并更改颜色照亮的方式。法线贴图不会改变曲面的实际形状，只会改变光照。 如果材质具有使用左手约定创作的法线贴图，则应该取消 normalScale 的 y 分量以补偿不同的手性。

[normalScale](https://threejs.org/docs/?q=metalnessMap#api/zh/materials/MeshStandardMaterial.normalScale) : Vector2

- 法线贴图对材质的影响程度。典型范围是 0-1。默认值是 Vector2 设置为（1,1）。

[envMap](https://threejs.org/docs/?q=metalnessMap#api/zh/materials/MeshStandardMaterial.envMap) : Texture

- 环境贴图，为了能够保证物理渲染准确，您应该添加由 PMREMGenerator 预处理过的环境贴图，默认为 null。

### [AmbientLight](https://threejs.org/docs/?q=AmbientLight#api/zh/lights/AmbientLight)

- 环境光会均匀的照亮场景中的所有物体。
- 环境光不能用来投射阴影，因为它没有方向。

### [PointLight](https://threejs.org/docs/?q=PointLight#api/zh/lights/PointLight)

- 从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。
- 该光源可以投射阴影 - 跳转至 PointLightShadow 查看更多细节。

```javascript
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

//debug
const gui = new dat.GUI();

// 纹理
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const doorAmbientOcclusionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg');
const doorNormalexture = textureLoader.load('/textures/door/normal.jpg');
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
const matcapTexture = textureLoader.load('/textures/matcaps/1.png');
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg');
gradientTexture.minFilter = THREE.NearestFilter;
gradientTexture.magFilter = THREE.NearestFilter;
gradientTexture.generateMipmaps = false;

const environmentMapTexture = cubeTextureLoader.load([
  '/textures/environmentMaps/4/px.png',
  '/textures/environmentMaps/4/nx.png',
  '/textures/environmentMaps/4/py.png',
  '/textures/environmentMaps/4/ny.png',
  '/textures/environmentMaps/4/pz.png',
  '/textures/environmentMaps/4/nz.png',
]);

// DOM元素
const canvas = document.querySelector('canvas.webgl');

// 场景
const scene = new THREE.Scene();

//材料
// const material = new THREE.MeshBasicMaterial({ color: 'red' });
// const material = new THREE.MeshBasicMaterial();
//设置地图
// material.map = doorColorTexture;
//设置颜色
// material.color.set('red');
// material.color = new THREE.Color('red');
//网格
// material.wireframe = true;
//透明度
// material.transparent = true;
// material.opacity = 0.5;
// material.alphaMap = doorAlphaTexture;
// material.side = THREE.BackSide
// material.side = THREE.DoubleSide;

// const material = new THREE.MeshNormalMaterial();
// material.wireframe = true;

//false更光滑,true的话增加纹理
// material.flatShading = true;

// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcapTexture;

//灯光对这种材质不起作用
// const material = new THREE.MeshDepthMaterial();

// const material = new THREE.MeshLambertMaterial();

// const material = new THREE.MeshPhongMaterial();
// //光的反射点
// material.shininess = 100;
// //反射点颜色
// material.specular = new THREE.Color(0xff0000);

// const material = new THREE.MeshToonMaterial();
// material.gradientMap = gradientTexture;
// const material = new THREE.MeshStandardMaterial();
// // material.metalness = 0.45;
// // material.roughness = 0.65;
// material.metalness = 0;
// material.roughness = 1;
// material.map = doorColorTexture;

//这两个要结合'uv2'使用，因为他需要两个uv2  后面的2代表两个uv2
//目的是为了加深阴影
// material.aoMap = doorAmbientOcclusionTexture;
// material.aoMapIntensity = 1;

//凸出显示displacementMap的东西,下面为凸出距离
// material.displacementMap = doorHeightTexture;
// material.displacementScale = 0.05;

//该纹理的蓝色通道用于改变材质的金属度。
// material.metalnessMap = doorMetalnessTexture;
//该纹理的绿色通道用于改变材质的粗糙度。
// material.roughnessMap = doorRoughnessTexture;

// material.normalMap = doorNormalexture;
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = doorAlphaTexture;

const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;

material.envMap = environmentMapTexture;

// material.wireframe = true;

gui.add(material, 'metalness').min(0).max(1).step(0.0001);
gui.add(material, 'roughness').min(0).max(1).step(0.0001);
gui.add(material, 'aoMapIntensity').min(0).max(10).step(0.0001);
gui.add(material, 'displacementScale').min(0).max(1).step(0.0001);

//球体
const sphere = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.5, 64, 64),
  material
);
sphere.position.x = -1.5;

sphere.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
);

//平面缓冲几何体
const plane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(1, 1, 100, 100),
  material
);

plane.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);

// 圆环缓冲几何体
const torus = new THREE.Mesh(
  new THREE.TorusBufferGeometry(0.3, 0.2, 64, 128),
  material
);
torus.position.x = 1.5;

torus.geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
);

scene.add(sphere, plane, torus);

//灯光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

//尺寸
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // 更新尺寸
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // 更新相机
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // 更新渲染
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//透视相机
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// 控制
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//渲染
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//动画
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  //更新对象
  sphere.rotation.y = 0.1 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  sphere.rotation.x = 0.15 * elapsedTime;
  plane.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // 更新控制
  controls.update();

  // 渲染
  renderer.render(scene, camera);

  // 帧动画
  window.requestAnimationFrame(tick);
};

tick();
```
