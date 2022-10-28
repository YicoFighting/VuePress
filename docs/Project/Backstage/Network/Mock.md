# Mock

## 安装

```sh
# 安装mockjs与vite-plugin-mock
yarn add mockjs --save-dev
yarn add vite-plugin-mock cross-env -D
```

## Mock 数据

```typescript
// ./src/mock/test.ts
import { MockMethod } from 'vite-plugin-mock';
import 'mockjs';
export default [
  {
    url: '/xiao/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        // mockjs的api
        name: '@cname',
      },
    },
  },
] as MockMethod[];
```

::: tip
[mockjs(mockjs.com)](http://mockjs.com/)与[vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)的使用教程。
:::

## vite-plugin-mock 的使用

引入 Mock 数据的函数

```typescript
// ./src/mockProdServer
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
/**
 *
 * @returns 拿到所有的mock函数
 */
const getAllMock = () => {
  const allMock: any[] = [];
  // 拿到所有mock函数的路径
  const modules = import.meta.glob('@/mock/*.ts');
  // 拿到所有的path路径
  const keys = Object.keys(modules);
  return new Promise((resolve) => {
    keys.forEach((path, index) => {
      modules[path]().then((mockList) => {
        allMock.push(mockList.default);
      });
      // 遍历到最后一个路径,才返回数据
      if (index === keys.length) {
        resolve(allMock);
      }
    });
  });
};

export const setupProdMockServer = async () => {
  const allMock: any = await getAllMock();
  createProdMockServer([...allMock]);
};
```

在 vite.config.ts 中配置 vite-plugin-mock

```typescript
// ./vite.config.ts
import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true
  return {
    plugins: [
      viteMockServe({
        mockPath: './src/mock',
        supportTs: true,
        watchFiles: true,
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        //  这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
          import { setupProdMockServer } from './src/mockProdServer';
          setupProdMockServer();
        `
      })
    ],
}
```
