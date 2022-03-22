<template>
  <div class="about">
    <HeadNav sty="about-img" title="关于我"></HeadNav>
    <div class="about-content">
      <div class="saying">
        <div class="h2">{{ saying.content }}</div>
        <div style="text-align: right">—— {{ saying.origin }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import HeadNav from "../components/Head-Nav.vue";

export default {
  components: {
    HeadNav,
  },
  data() {
    return {
      saying: {},
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
  },
  created: function () {
    this.getSaying();
  },
};
</script>

<style lang="scss">
.about-img {
  height: 500px;
  background: url("@/assets/forest.jpg") center;
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
  }
}
</style>
