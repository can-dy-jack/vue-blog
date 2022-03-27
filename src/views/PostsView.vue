<template>
  <div class="posts-box">
      <HeadNav :title="$route.params.name" sty="post-img"></HeadNav>
      <div class="post-body">
          <div class="markdown-context" v-html="post[0]" v-if="$route.params.name == 'markdownTest'"></div>
          <div class="markdown-context" v-html="post[1]" v-if="$route.params.name == 'hello-world'"></div>
          <div class="markdown-context" v-html="post[2]" v-if="$route.params.name == 'php01'"></div>
          <hr/>
          <h2 style="text-align: center;color: #42b983;">评论</h2>
          <PostComment :sha="shas[$route.params.name]"></PostComment>
      </div>
      <ToTop></ToTop>
      <PostFooter></PostFooter>
  </div>
</template>

<script>
import HeadNav from "../components/Head-Nav.vue";
import ToTop from "../components/ToTop.vue";
import PostComment from "../components/Post-Comment.vue";
import PostFooter from "../components/PostFooter.vue";

import file1 from "../source/markdownTest.md";
import file2 from "../source/hello-world.md";
import file3 from "../source/php01.md";

export default {
    name: "PostsView",
    components: {
        HeadNav,
        ToTop,
        PostComment,
        PostFooter
    },
    data() {
        return {
            post: [file1,file2,file3],
            shas: {
                "hello-world":"I4ZR01",
                "markdownTest":"I4ZR14",
                "php01":"I4ZRV4",
            }
        }
    },
    methods: {
    },
    computed: {},
    created() {},
    mounted() {},
    setup() {
        return {} 
    }
}
</script>

<style lang="scss">
@import "../styles/markdown.scss";
@import url("highlight.js/styles/idea.css");

.post-img {
    height: 400px;
    background: linear-gradient(-45deg,rgb(167, 167, 255),rgb(248, 170, 248));
}
hr {
    margin: 0.5rem 0;
}
.post-body {
    width: 60%;
    box-sizing: border-box;
    margin: -80px auto 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,.2);
}
@media screen and (max-width: 800px) {
    .post-body {
        width: 100%;
        border-radius: 0;
    }
}

</style>