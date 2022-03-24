# booknote

## 开发

- 动态路由 -> 主页文章列表入口
- markdown解析 -> 更多语法！
- 文章评论系统
    - form标签？
- 上下篇文章

## 打包

markdown引入+编译：`markdown-loader + markd + html-loader`

## 问题

- 表格溢出

### 已解决

- 编译markdown时，防止XSS注入： `str.replace(/</g,'&#60;').replace(/>/g,'&#62;')`


### markdown解析

- 代码块无故多了个20px！，暂时解决： `margin-bottom: -20px;`

### Compiles and minifies for production

``` bash
yarn build
```

### Run your unit tests

``` bash
yarn test:unit
```

### Lints and fixes files

``` bash
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
