```markdown
## 标题2
### 标题3
#### 标题4
##### 标题5
```

## 标题2
### 标题3
#### 标题4
##### 标题5

---
文本样式

```markdown
**加粗**  __斜体__  _斜体_  *斜体*  ~~划线~~  ~划线~
> 引用文本
```

**加粗**  __斜体__  _斜体_  *斜体*  ~~划线~~  ~划线~
> 引用文本

---
列表样式：

```markdown
* 列表
* 列表
* 列表

- 列表
- 列表
- 列表
 
+ 列表
+ 列表
+ 列表
```

* 列表
* 列表
* 列表
- 列表
- 列表
- 列表
+ 列表
+ 列表
+ 列表

```markdown
- 项目
  * 项目
    + 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务
```

- 项目
  * 项目
    + 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务

---
链接和图片：
[link-delicate](http://localhost:4000/delicate)

![测试-付款码](https://i.loli.net/2021/12/01/X1pkv9ShmeDWZ25.jpg)

---
内联代码块:`code`

代码块：

```js
var foo = 'bar';
```

```javascript
// An highlighted block
var foo = 'bar';
```

---
表格：

{% note warning %}
表格与上下文字需要隔一行。
{% endnote %}

| Column 1 | Column 2      |
|:--------:| -------------:|
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |

---

代码里的code颜色
> 常用于记录代码或文字的更替

```diff
+ this will be highlighted in green
- this will be highlighted in red
```

----
### 公式-MathJax

需要 front-matter 添加 `mathjax: true`

> 语法参考官网：[mathjax](https://www.mathjax.org/)

```text
直接在markdown文件中添加下面的语句即可，即包含在 $$ 内的文字会被解析为数学公式
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

有公式才加载MathJax，没有公式仍然加载js渲染公式，会影响页面加载速度。
