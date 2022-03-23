<template>
  <div class="posts-box">
      <HeadNav :title="$route.params.name" sty="post-img"></HeadNav>
      <div class="post-body" v-if="$route.params.name == 'markdownTest'">
          <div class="markdown-context" v-html="post[0]"></div>
          <hr/>
      </div>
      <div class="post-body" v-if="$route.params.name == 'hello-world'">
          <div class="markdown-context" v-html="post[1]"></div>
          <hr/>
      </div>
      <div class="post-body" v-if="$route.params.name == 'php01'">
          <div class="markdown-context" v-html="post[2]"></div>
          <hr/>
      </div>
      <ToTop></ToTop>
  </div>
</template>

<script>
import HeadNav from "../components/Head-Nav.vue";
import ToTop from "../components/ToTop.vue";
import file1 from "../source/markdownTest.md";
import file2 from "../source/hello-world.md";
import file3 from "../source/php01.md";

export default {
    name: "PostsView",
    components: {
        HeadNav,
        ToTop
    },
    data() {
        return {
            post: [file1,file2,file3]
        }
    },
    methods: {
    },
    computed: {},
    created() {},
    mounted() {},
}
</script>

<style lang="scss">
@import "../styles/markdown.scss";
@import url("highlight.js/styles/idea.css");

.post-img {
    height: 400px;
    background: linear-gradient(-45deg,rgb(108, 108, 255),rgb(207, 56, 207));
}
.post-body {
    width: 60%;
    margin: -80px auto 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,.2);
}

</style>