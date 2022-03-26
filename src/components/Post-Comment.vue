<template>
    <!-- <div class="post-comment-list">
        <ul>
            <li v-for="text of compilepostComment"
                    :key="text" >
                <div class="post-comment-item markdown-context" v-html="text">
                <i class="far fa-comment"></i>
                </div>
            </li>
        </ul>
    </div> -->
  <div class="post-comment">
    <div class="post-comment-userInfo">
      <div class="post-comment-username">
        <input type="text" placeholder="名字" v-model="userName" />
      </div>
      <div class="post-comment-userEmail">
        <input type="email" placeholder="邮件地址" v-model="userPassword" />
      </div>
    </div>
    <div class="post-comment-input">
      <textarea
        v-model="commentText"
        name="post-comment-inputArea"
        id="post-comment-inputArea"
        placeholder="畅所欲言"
      ></textarea>
      <div class="post-comment-input-em">
        <button id="post-comment-check-emoji" title="选择表情输入">
          <div id="post-comment-emoji" class="post-comment-emoji">
            <EmojiPicker :native="true" @select="onSelectEmoji" />
          </div>
          <i class="far fa-smile" id="post-comment-check-emoji-i"></i>
        </button>
        <button id="post-comment-check-markdown" title="查看编译后的markdown">
          <i class="fas fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="post-comment-control">
      <i class="fab fa-markdown"></i>
      <button class="emit" @click="pushGithubIssue()">提交</button>
    </div>
    <div
      id="post-comment-markdown-compile"
      class="post-comment-markdown-compile markdown-context"
      v-html="commentTextCompile"
    ></div>
  </div>
</template>

<script>
const marked = require("marked");
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (str, lang) {
        let language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
        if (!lang) lang = "plaintext";
        let codeColor = hljs.highlight(str, { language }).value;
        if (!codeColor)
        codeColor = str.replace(/</g, "&#60;").replace(/>/g, "&#62;");
        return `<div class="lang-head"><span><i class="fas fa-code"></i> ${lang}</span><i class="fas fa-copy"></i></div><div class="code-box">${codeColor}</div>`;
    },
    langPrefix: "language-",
});
const hljs = require("highlight.js");
import axios from "axios";

import EmojiPicker from "vue3-emoji-picker";

export default {
  name: "Post-Comment",
  components: {
    EmojiPicker,
  },
  data() {
    return {
      cmTrue: false,
      emojiTrue: false,
      userName: "",
      userPassword: "",
      commentText: '',
        // "## 评论系统制作\n> marked + highlight\n```js\nconsole.log(test code);\n```",
      postComment: [],
    };
  },
  computed: {
    commentTextCompile: function () {
      return marked.parse(this.commentText);
    },
    compilepostComment: function(){
        let data = [];
        for(const text of this.postComment){
            data.push(marked.parse(text));
        }
        return data;
    }
  },
  methods: {
    viewCompileMarkdown: function () {
      const checkMarkdown = document.getElementById(
        "post-comment-check-markdown"
      );
      const MarkdownBox = document.getElementById(
        "post-comment-markdown-compile"
      );

      checkMarkdown.addEventListener("click", () => {
        if (this.cmTrue) {
          MarkdownBox.style.display = "none";
          checkMarkdown.children[0].style.color = "#42b983";
          this.cmTrue = false;
        } else {
          MarkdownBox.style.display = "block";
          checkMarkdown.children[0].style.color = "#222";
          this.cmTrue = true;
        }
      });
    },
    viewEmojis: function () {
      const checkEmoji = document.getElementById("post-comment-check-emoji-i");
      const emoji = document.getElementById("post-comment-emoji");
      checkEmoji.addEventListener("click", () => {
        if (this.emojiTrue) {
          emoji.style.display = "none";
          this.emojiTrue = false;
        } else {
          emoji.style.display = "block";
          this.emojiTrue = true;
        }
      }); 
    },
    onSelectEmoji: function (emoji) {
      this.commentText += emoji.i;
      /*
        // result
        { 
            i: "😚", 
            n: ["kissing face"], 
            r: "1f61a", // with skin tone
            t: "neutral", // skin tone
            u: "1f61a" // without tone
        }
        */
    },
    getGithubIssue: function(){
        axios.get("https://api.github.com/repos/can-dy-jack/vue-blog/issues")
        .then(()=>{
            // for(const d of result.data){
            //     this.postComment.push(d.body);
            // }

            // 依照 title中是否含有 $route.params.name 来判断是不是本文章的评论
        });
    },
    pushGithubIssue: function(){
      var axios = require('axios');
      var data = JSON.stringify({
        "title": "this.$route.params.name2",
        "body": "test for post",
        "labels": [
          "posts",
          "test"
        ]
      });

      var config = {
        method: 'post',
        url: 'https://api.github.com/repos/can-dy-jack/vue-blog/issues',
        headers: { 
          'accept': 'application/vnd.github.v3+json', 
          'Authorization': this.commentText,
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    },
  },
  mounted() {
    this.viewCompileMarkdown();
    this.viewEmojis();
    // this.getGithubIssue();
  },
};
</script>

<style lang="scss">
@import url("../styles/emoji.scss");
// 
.post-comment-list {
    ul {
        list-style-type: none;
        padding-left: 0;
        li {
            border-bottom: 1px dashed #42b983;
            margin: 10px 0;padding: 5px 10px;
            background: #fef9fe;
        }
    }
}

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
        &::placeholder {
            color: #bbe9d4;
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
      font-family: microsoft yahei, sans-serif;
      font-size: 1em;
      &:focus {
        border-color: #42b983;
      }
      &::-webkit-scrollbar {
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
      &::placeholder {
        color: #bbe9d4;
      }
    }
    .post-comment-input-em {
      text-align: right;
      padding: 5px 0;
      #post-comment-check-markdown {
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
      #post-comment-check-emoji {
        margin-left: 5px;
        border: 1px dashed transparent;
        transition: all 0.25s linear;
        background: none;
        position: relative;
        i {
          font-size: 1.3rem;
          color: #42b983;
          cursor: pointer;
          &:active {
            color: #339166;
          }
        }
        .post-comment-emoji {
          position: absolute;
          right: 30px;
          top: 0;
          display: none;

          &::after {
            content: "";
            height: 0;
            width: 0;
            position: absolute;
            right: -12px;
            top: 10px;
            border-top: 8px solid #fff;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #fff;
            border-right: 8px solid transparent;
          }
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
    display: none;
    padding: 0 10px;
    border: 1px solid #42b983;
    // background-color: rgb(253, 248, 240);
  }
}
</style>
