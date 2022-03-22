<template>
  <div class="home-content">
      <div class="markdown-context" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import {marked} from "marked";
const axios  = require("axios");

export default {
    name: "Home-Content",
    data(){
        return {
            articleDetail: ""
        }
    },
    computed:{
        compiledMarkdown () {
            return marked.parse(this.articleDetail);
        }
    },
    methods: {
        readMarkdown: function(){
            axios.get('https://raw.githubusercontent.com/can-dy-jack/data/main/tip.md')
            .then((data)=>{
                this.articleDetail = data.data;
            })
        }
    },
    created() {
        this.readMarkdown();
    }
}
</script>

<style lang="scss">
    .home-content {
        width: 80%;
        margin: 50px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0,0,0,.2);
    }
    .markdown-context {
        font-family: microsoft yahei, sans-serif;
        h1 {
            margin: 30px 0;
        }
        h2 {
            border-bottom: 1px solid #aaa;
            margin: 20px 0;
        }
        h3,h4{
            margin: 10px 0;
        }
        pre {
            background-color: #efefef;
            overflow: auto;
            padding: 10px;
            code {
                font-family: Roboto Mono,JetBrains Mono,Consolas,sans;
            }
        }
        table {
            border: 1px solid rgb(21, 146, 105);
            border-collapse: collapse;
            tr {
                td {
                    border: 1px solid rgb(21, 146, 105);
                    padding: 5px;
                }
                &:nth-child(2n){
                    background: #eee;
                }
            }
            tr th {
                background-color: rgb(15, 116, 85);
                color: white;
                padding: 5px;
            }
        }
    }
</style>