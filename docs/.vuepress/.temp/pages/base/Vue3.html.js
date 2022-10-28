export const data = JSON.parse("{\"key\":\"v-c5daca32\",\"path\":\"/base/Vue3.html\",\"title\":\"1、基础语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebar\":\"auto\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"1.1、CDN 引入\",\"slug\":\"_1-1、cdn-引入\",\"children\":[]},{\"level\":2,\"title\":\"1.2、本地引入\",\"slug\":\"_1-2、本地引入\",\"children\":[]},{\"level\":2,\"title\":\"1.3、data 属性\",\"slug\":\"_1-3、data-属性\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"base/Vue3.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
