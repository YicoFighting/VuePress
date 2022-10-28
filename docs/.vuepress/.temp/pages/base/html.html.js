export const data = JSON.parse("{\"key\":\"v-ab115cee\",\"path\":\"/base/html.html\",\"title\":\"标题一\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebar\":\"auto\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"标题二\",\"slug\":\"标题二\",\"children\":[]}],\"git\":{\"updatedTime\":1656512458000,\"contributors\":[{\"name\":\"刘智慧\",\"email\":\"zhliu@luopan88.com\",\"commits\":2}]},\"filePathRelative\":\"base/html.md\"}")

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
