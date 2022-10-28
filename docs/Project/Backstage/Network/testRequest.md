# 测试网络请求

## 实例化网络请求

```typescript
// ./src/service/index.ts
const service = new Service(
  {
    baseURL: '/xiao',
    timeout: 5000,
    validateStatus: function (status) {
      return status >= 200 && status < 300; //默认值
    },
  },
  6
);
export default service;
```

## 测试请求

[httpbin](https://httpbin.org/)

```typescript
// ./src/service/Test/index.ts
import service from '../index';

export const testPostOrMock = () => {
  return service.get({
    url: '/test',
  });
};
```

```typescript
// ./src/main.ts
import service from './service';
import { testPostOrMock } from './service/Test';
// 当mock接口存在时不请求真实接口
testPostOrMock().then((res) => {
  console.log(res);
});

service.get({ url: 'https://httpbin.org/ip' }).then((res) => {
  console.log('real:', res);
});
```
