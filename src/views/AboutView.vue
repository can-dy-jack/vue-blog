<template>
  <div class="about">
    <HeadNav sty="about-img" title="关于我" :style="{background: 'url('+ img +') center'}"></HeadNav>
    <div class="about-content">
      <div class="saying">
        <div class="h2">{{ saying.content }}</div>
        <div style="text-align: right">—— {{ saying.origin }}</div>
        <span class="tags">{{ saying.tag }}</span>
      </div>
      <div class="saying">
        <div style="text-align: center;font-size: 20px;">阳历：{{ day[0] }}-{{ day[1] }}-{{ day[2] }}   {{ day[3] }}</div>
        <div style="text-align: center;font-size: 20px;">阴历：{{ day[4] }}年{{ day[6] }}月{{ day[7] }}日   /   {{ day[5] }}年</div>
        <span class="tags" v-if="day[9]">{{ day[9] }}</span>
      </div>
      <div class="markdown-context" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import HeadNav from "../components/Head-Nav.vue";
import file from "../source/about/README.md";

export default {
  components: {
    HeadNav,
  },
  data() {
    return {
      saying: {},
      markdown: file,
      img: "",
      day: [],
    };
  },
  methods: {
    getSaying: function () {
      axios
        .get("https://api.xygeng.cn/one")
        .then((text) => {
          this.saying = text.data.data;
        })
        .catch((err) => {
          this.saying = "error!" + err;
          console.error("api error!");
        });
    },
    getImg: function() {
      axios.get("https://api.xygeng.cn/Bing/url/")
      .then((re)=>{
        this.img = re.data.data;
      })
    },
    getDay: function(){
      axios.get("https://api.xygeng.cn/day")
      .then((re)=>{
        const t = re.data.data;
        this.day = [t.solar.year,t.solar.month,t.solar.date,t.solar.day, t.lunar.year,t.lunar.animal,t.lunar.month,t.lunar.date,t.festival];

      })
    }
  },
  created: function () {
    this.getSaying();
    this.getImg();
    this.getDay();
  },
};
</script>

<style lang="scss">
@import "../styles/markdown.scss";
@import "../styles/pub.scss";
@import url("highlight.js/styles/github.css");

.about-img {
  height: 500px;
}
.about-content {
  width: 80%;
  margin: -50px auto 50px auto;
  background-color: #fff;
  z-index: 100;
  padding: 20px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  .saying {
    background-color: #efefef;
    padding: 15px;
    border: 1px dashed #222;
    border-right: 8px solid #121212;
    border-radius: 5px 0 0 5px;
    margin: 10px 0;
  }
}
</style>
