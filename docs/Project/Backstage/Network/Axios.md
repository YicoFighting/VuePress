# Axios

[Axios](https://axios-http.com/)

## 请求响应后的数据类型

```typescript
// ./src/service/type.d.ts
export interface Result<T = any> {
  code: number
  data: T
}
```

## 封装axios请求

```typescript
// ./src/service/index.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// 响应数据类型
import { Result } from './type'

class Service {
  private instance: AxiosInstance
  private readonly options: AxiosRequestConfig
  private max: number
  private count: number
  private queue: any[]
  constructor(options: AxiosRequestConfig, max: number) {
    this.instance = axios.create(options)
    this.options = options
    this.max = max
    this.count = 0
    this.queue = []

    //请求拦截器
    this.instance.interceptors.request.use(
      (options) => {
        const token = localStorage.getItem('token')
        if (token && options.headers) {
          options.headers.Authorization = `Bearer ${token}`
        }
        return options
      },
      (err) => {
        return err
      }
    )

    //响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        //处理mock请求
        if (res.data.code === 0) {
          return res.data.data
        }
        return res.data
      },
      (err) => {
        return err
      }
    )
  }
  implement<T>(options: AxiosRequestConfig, resolve: any, reject: any): any {
    // 具体执行函数
    return () => {
      this.instance
        .request<any, AxiosResponse<Result<T>>>(options)
        .then((res) => {
          resolve(res as unknown as Promise<T>)
        })
        .catch(reject)
        .finally(() => {
          this.count--
          if (this.queue.length) {
            const task = this.queue.shift()
            task()
          }
        })
      this.count++
    }
  }
  request<T>(options: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      const task = this.implement<T>(options, resolve, reject)
      //优化:重复请求
      if (this.count >= this.max) {
        this.queue.push(task)
      } else {
        task()
      }
    })
  }
  get<T = any>(options: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...options, method: 'GET' })
  }
  post<T = any>(options: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...options, method: 'POST' })
  }
  delete<T = any>(options: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...options, method: 'DELETE' })
  }
  patch<T = any>(options: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...options, method: 'PATCH' })
  }
}
```
