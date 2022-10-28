export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://v3.cn.vuejs.org/logo.png\",\"actions\":[{\"text\":\"立即开始\",\"link\":\"/base/html\",\"type\":\"primary\"},{\"text\":\"个人介绍\",\"link\":\"/guide/\",\"type\":\"secondary\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1655964956000,\"contributors\":[{\"name\":\"刘智慧\",\"email\":\"zhliu@luopan88.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

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
