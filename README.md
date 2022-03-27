# booknote

## 开发

- 动态路由 -> 主页文章列表入口
- markdown解析 -> 更多语法！
  - 代码块复制功能
  - 文章分享功能
- 文章
  - 日期
  - formatter
- 文章评论系统
  - 表情组件的动画
- 上下篇文章
- footer组件

## 问题

- 表格溢出
- 评论组件
  - 添加表情时，只能添加到最后，不能添加到鼠标所在地

### 已解决

- 编译markdown时，防止XSS注入： `str.replace(/</g,'&#60;').replace(/>/g,'&#62;')`

### markdown解析

- 代码块无故多了个20px！，暂时解决： `margin-bottom: -20px;`

## more need to do

> Run your unit tests

``` bash
yarn test:unit
```

> Lints and fixes files

``` bash
yarn lint
```

> Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## use

- markdown引入+编译：`markdown-loader + markd + html-loader`
- emoji：vue3-emoji-picker
