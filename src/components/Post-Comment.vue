<template>
  <div class="post-comment">
      <!-- <form action=""></form> -->
      <div class="post-comment-userInfo">
          <div class="post-comment-username">
              <input type="text" placeholder="名字" v-model="userName">
          </div>
          <div class="post-comment-userEmail">
              <input type="email" placeholder="邮件地址" v-model="userPassword">
          </div>
      </div>
      <div class="post-comment-input">
          <textarea v-model="commentText" name="post-comment-inputArea" id="post-comment-inputArea" placeholder="畅所欲言"></textarea>
          <div class="post-comment-input-em">
            <button class="post-comment-emoji"><i class="far fa-smile"></i></button>
            <button class="post-comment-check-markdown"><i class="fas fa-eye"></i></button>
          </div>
      </div>
      <div class="post-comment-control">
          <i class="fab fa-markdown"></i>
          <button class="emit">提交</button>
      </div>
      <div class="post-comment-markdown-compile markdown-context" v-html="commentTextCompile">
      </div>
  </div>
</template>

<script>
const marked = require("marked");
const hljs = require('highlight.js');

export default {
    name: "Post-Comment",
    data() {
        return {
            userName: '',
            userPassword: '',
            commentText: '## 评论系统制作\n```js\nconsole.log(test code);\n```',
        }
    },
    computed: {
        commentTextCompile: function() {
            marked.setOptions({
                renderer: new marked.Renderer(),
                highlight: function (str, lang) {
                    let language = (lang && hljs.getLanguage(lang)) ? lang : 'plaintext';
                    if(!lang) lang = 'plaintext';
                    let codeColor = hljs.highlight(str,{ language }).value;
                    if(!codeColor) codeColor = str.replace(/</g,'&#60;').replace(/>/g,'&#62;');
                    return `<div class="lang-head"><span><i class="fas fa-code"></i> ${lang}</span><i class="fas fa-copy"></i></div><div class="code-box">${codeColor}</div>`; 
                },
                langPrefix: 'language-'
            });
            return marked.parse(this.commentText);
        }
    }
}
</script>

<style lang="scss">
.post-comment {
    padding: 10px;
    border: 1px solid #42b983;
    border-radius: 5px;
    margin: 10px 0;
    .post-comment-userInfo {
        display: flex;
        div {
            flex: 50%;
            margin-bottom: 5px;
            input {
                outline: none;
                box-sizing: border-box;
                width: 100%;
                padding: 5px 8px;
                font-size: 1rem;
                border: 1px solid transparent;
                border-bottom: 1px dashed #bbe2d1;
                &:focus {
                    // border-bottom-color: #42b983;
                    border: 1px dashed #42b983;
                }
            }
        }
    }
    .post-comment-input {
        textarea {
            display: block;
            box-sizing: border-box;
            width: 100%;
            padding: 10px;
            border: 1px dashed #bbe9d4;
            outline: none;
            min-height: 120px;
            overflow-wrap: break-word;
            resize: vertical;
            transition: all 0.25s linear;
            font-family: microsoft yahei,sans-serif;
            &:focus {
                border-color: #42b983;
            }
            &::-webkit-scrollbar{
              width: 10px;
              height: 10px;
              background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
              background-clip: border-box;
              width: 5px;
              background-color: #42b983;
              border: 2px solid #fff;
              border-radius: 5px;
            }
        }
        .post-comment-input-em {
            text-align: right;
            padding: 5px 0;
            button {
                margin-left: 5px;
                border: 1px dashed transparent;
                cursor: pointer;
                transition: all 0.25s linear;
                background: none;
                &:hover {
                    border-color: #42b983;
                }
                i {
                    font-size: 1.3rem;
                    color: #42b983;
                }
            }
        }
    }
    .post-comment-control {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 5px;
        button {
            border: 1px solid #42b983;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
            padding: 2px 5px;
            background-color: #fff;
            color: #42b983;
        }
        i {
            color: #42b983;
        }
    }

    .post-comment-markdown-compile {
        padding: 0 10px;
        border: 1px solid #42b983;
    }
}
</style>