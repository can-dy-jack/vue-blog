<template>
  <div class="post-comment-list">
    <ul>
      <li v-for="text of postComment" :key="text.id" class="post-comment-item">
        <div class="markdown-context info">
          <i class="fas fa-user-circle"></i>
          <span>{{ text.body.split("=>")[0] }}</span>
        </div>
        <div
          class="markdown-context text"
          v-html="compileComment(text.body.split('=>')[1])"
        ></div>
      </li>
    </ul>
    <div id="info">{{ info }}</div>
  </div>
  <div class="post-comment">
    <div class="post-comment-userInfo">
      <div class="post-comment-username">
        <input type="text" placeholder="名字" v-model="userName" />
      </div>
      <div class="post-comment-userEmail">
        <input type="email" placeholder="邮件地址" v-model="userEmail" />
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
      <button class="emit" @click="pushGiteeIssue()">提交</button>
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
  props: ["sha"],
  data() {
    return {
      cmTrue: false,
      emojiTrue: false,
      userName: "",
      userEmail: "",
      commentText: "",
      // "## 评论系统制作\n> marked + highlight\n```js\nconsole.log(test code);\n```",
      postComment: [],
      info: "",
    };
  },
  computed: {
    commentTextCompile: function () {
      return marked.parse(this.commentText);
    },
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
    getGiteeIssue: function (issue) {
      if (!issue) return;
      var config = {
        method: "get",
        url:
          "https://gitee.com/api/v5/repos/Kartjim/vue-blog-comment/issues/" +
          issue +
          "/comments?access_token=e4f612fbd30144e6efb96a947cdc5a48&page=1&per_page=20&order=asc",
      };
      axios(config)
        .then((response) => {
          this.postComment = response.data;
        })
    },
    pushGiteeIssue: function () {
      const info = document.getElementById("info");
      if (this.sha === undefined) {
        this.info = "等待评论开启！";
        info.style.display = "block";
        info.classList.add("log");
        setTimeout(() => {
          info.style.display = "none";
          info.classList.remove("log");
        }, 4000);
        return;
      }
      if (this.userName === "" || this.userEmail === "") {
        this.info = "请先输入名字和邮件地址再进行评论";
        info.style.display = "block";
        info.classList.add("err");
        setTimeout(() => {
          info.style.display = "none";
          info.classList.remove("err");
        }, 3000);
        return;
      }
      let body =
        this.userName + " - " + this.userEmail + " => " + this.commentText;
      const access_token = "faad98b49118c1de7e3c76d65c9d27ff";
      axios
        .post(
          "https://gitee.com/api/v5/repos/Kartjim/vue-blog-comment/issues/" +
            this.sha +
            "/comments",
          {
            access_token: access_token,
            body: body,
          }
        )
        .then(() => {
          this.info = "评论成功！";
          info.style.display = "block";
          info.classList.add("sucess");
          setTimeout(() => {
            info.style.display = "none";
            info.classList.remove("sucess");
          }, 3000);
          this.getGiteeIssue(this.sha);
          this.userName = "";
          this.userEmail = "";
          this.commentText = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    compileComment: function (text) {
      return marked.parse(text);
    },
  },
  mounted() {
    this.viewCompileMarkdown();
    this.viewEmojis();
    this.getGiteeIssue(this.sha);
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
      margin: 10px 0;
      padding: 5px 10px;
      background: #fbfdfc;
      display: flex;
      flex-direction: column;
      .info {
        height: 30px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        span {
          font-size: 16px;
          color: gray;
        }
        i {
          font-size: 30px;
          color: #42b983;
          margin-right: 5px;
        }
      }
    }
  }
  #info {
    display: none;
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 12px;
    z-index: 200;
    border-radius: 2px;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.1);
  }
  .sucess {
    background: #309165;
    color: white;
  }
  .err {
    background: #e7505d;
    color: white;
  }
  .log {
    background: rgb(255, 243, 175);
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
