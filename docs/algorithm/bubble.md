# 基础

## 安装

```javascript
import 'xgplayer';
import FlvJsPlayer from 'xgplayer-flv.js';
import store from '../store';

let utils = {};

/**
 * 创建 http-flv 直播播放器
 * @param {DOM} parentId 播放器父级元素 id
 * @param {Object} config 播放器参数
 */
utils.createPlayer = (parentId, config) => {
  store.commit('setPlayerCount');
  // 生成监控 DOM 并添加进页面
  let videoDom = document.createElement('div');
  let id =
    parentId === 'gis-camera-video'
      ? `${parentId}`
      : `${parentId}-${Math.random()}`;
  videoDom.setAttribute('id', id);
  let parentDom = document.getElementById(parentId);
  parentDom.appendChild(videoDom);
  let urlList = [
    // 'http://nvr.jiketravel.com/flv/hls/stream_1.flv',
    // 'http://nvr1.jiketravel.com/flv/hls/stream_1.flv',
    // 'http://nvr2.jiketravel.com/flv/hls/stream_1.flv'
    'http://10.0.2.172/live?port=1935&app=myapp&stream=home',
  ];
  console.log('config======', config);
  // 生成播放器
  let player = new FlvJsPlayer({
    id: id,
    isLive: true,
    // url: 'http://live.luopan88.com/live?port=1935&app=myapp&stream=luopan',
    // url: 'http://47.100.42.180:8935/live?port=1935&app=myapp&stream=home',
    // url: 'http://10.0.2.161/live?port=1935&app=myapp&stream=home',
    // url: urlList[Math.floor(store.state.playerCount / 6)],
    // url: config.url,
    controls: false,
    autoplay: true,
    ignores: ['loading', 'progress'],
    width: '155px',
    height: '109px',
    /**
     * 由于 Chrome 新的 autoplay 政策，必须设置静音才可播放。
     * 但经测试 Chrome 下 xgplayer 仍无法自动播放，flv.js 却可播放
     * 初步怀疑是 xgplayer 问题
     * 其他浏览器暂无此问题（Firefox, Safari, 360极速浏览器, Edge）
     */
    muted: true,
    flvOptionalConfig: {
      enableWorker: true,
      enableStashBuffer: false,
      stashInitialSize: 128,
    },
    ...config,
  });
  // player.once('complete', () => {
  //   let htmlMediaElement = document.getElementById(id).childNodes[0];
  //   setInterval(() => {
  //     if (!htmlMediaElement.buffered.length) {
  //       return;
  //     }
  //     let end = htmlMediaElement.buffered.end(0);
  //     let diff = end - htmlMediaElement.currentTime;
  //     if (diff >= 1) {
  //       htmlMediaElement.currentTime = end;
  //     }
  //   }, 3000);
  // });
  // store.commit('setPlayerList', [...store.state.playerList, player]);
  return player;
};

/**
 * 创建一个哈希值
 * @param {Number} hashLength 哈希值长度，默认24位
 */
utils.createHash = (hashLength) => {
  return Array.from(Array(Number(hashLength) || 24), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join('');
};

export default utils;
```

Vue.js 设计的初衷就包括可以被渐进式地采用。这意味着它可以根据需求以多种方式集成到一个项目中。

将 Vue.js 添加到项目中主要有四种方式：

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn)的形式导入。
2. 下载 JavaScript 文件并[自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。
3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。
4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
