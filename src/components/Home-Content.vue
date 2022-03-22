<template>
  <div class="home-content" id="home-content">
      <div class="markdown-context" v-html="article"></div>
  </div>
</template>

<script>
import file from "../source/markdownTest.md";// @dking/markdown-webpack-loader -D = markdown-it  = html-loader

export default {
    name: "Home-Content",
    data(){
        return {
            article: file
        }
    },
}
</script>

<style lang="scss">
@import "../styles/markdown.scss";
.home-content {
    width: 80%;
    margin: 0 auto 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,.2);
    transition: all 0.3s ease;
}
</style>