---
sidebar_position: 1
---

# 部落格模式

更改`docusaurus.config.js` 官方的設定檔案

```
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
      },
    ],
  ],
};
```

> Don't forget to delete the existing homepage at ./src/pages/index.js or else there will be two files mapping to the same route!

這邊其實有遇到別的問題。我在更改時，沒有將navbar的超連結改掉(原本有一個 /blog 的連結)，在build的時候會報錯

```
Error: Docusaurus found broken links!

Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

It looks like some of the broken links we found appear in many pages of your site.
Maybe those broken links appear on all pages through your site layout?
We recommend that you check your theme configuration for such links (particularly, theme navbar and footer).
Frequent broken links are linking to:
- /blog
.....

```

將navbar的錯誤連結拿掉就可以了

參考資料：
[blog-only-mode](https://docusaurus.io/docs/blog#blog-only-mode)