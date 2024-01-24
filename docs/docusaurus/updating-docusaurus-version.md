---
sidebar_position: 1
---

# 升級 Docusaurus 版本

## 從 v2 升級到 v3 版本

官方參考資料：https://docusaurus.io/docs/installation#updating-your-docusaurus-version

我的 commit：https://github.com/crzbread/blog.dbb.tw/commit/d7c5b74a0c7e2d7d9e382d903a01e897bcd089a6 

將 package.json 中 docusaurus 開頭的套件版本號改成最新的版本號

以我的例子來說

```javascript
  // 將這幾個套件的版本號改成最新的版本號
  "dependencies": {
    "@docusaurus/core": "3.1.0",
    "@docusaurus/plugin-google-gtag": "3.1.0",
    "@docusaurus/preset-classic": "3.1.0",
    ...
```

不過這個部落格已經兩年沒有更新版本了，所以還遇到了 react 版本需要升級的問題

最後再執行 `yarn upgrade` 升級其他套件就可以了 

另外補充一個問題，升級到 v3 之後 node.js 版本最低要求改完18，所以也需要修改

原本 v2 的版本是 16，所以這邊也要改成 18

反過來說，現在每個平台也開始不支援 node.js v16 了，所以這個版本升級也可以說是必須的

