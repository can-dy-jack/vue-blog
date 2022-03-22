<template>
  <div class="home">
    <HeadNav title="主页" sty="home-img"></HeadNav>
    <HomeContent></HomeContent>
    <ToTop></ToTop>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadNav from "../components/Head-Nav.vue";
import HomeContent from "../components/Home-Content.vue";
import ToTop from "../components/ToTop.vue";

export default {
  name: "HomeView",
  components: {
    HeadNav,
    HomeContent,
    ToTop,
  },
  methods: {
    homeContentScroll: function () {
      const hc = document.getElementById("home-content");
      const navbox = document.querySelector(".nav-box");
      window.onscroll = function () {
        let scrollHeight = window.scrollY / 4 < 50 ? window.scrollY / 4 : 50;
        if (scrollHeight < 50) {
          hc.style.marginTop = "-" + scrollHeight + "px";
        } else {
          hc.style.marginTop = "-50px";
        }
        if (window.scrollY > 50) {
          navbox.classList.add("nav-drop");
        } else {
          navbox.classList.remove("nav-drop");
        }
      };
    },
  },
  mounted() {
    this.homeContentScroll();
  },
};
</script>
<style lang="scss">
.home-img {
  height: 100vh;
  // background: url("@/assets/minimal.jpg") center;
  background: linear-gradient(135deg, rgb(228, 149, 149), rgb(95, 125, 253));
}

// ::-webkit-scrollbar{
//   width: 10px;
//   height: 10px;
//   background-color: transparent;
// }
// ::-webkit-scrollbar-thumb {
//   background-clip: border-box;
//   width: 5px;
//   background-color: #42b983;
//   border: 2px solid transparent;
//   border-radius: 5px;
// }
// ::-webkit-scrollbar-track {
//   background-color: transparent;
// }
</style>
