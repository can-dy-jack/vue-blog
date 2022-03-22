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
  name: 'HomeView',
  components: {
    HeadNav,
    HomeContent,
    ToTop
  }
}
</script>
<style lang="scss">
.home-img {
  height: 100vh;
  // background: url("@/assets/minimal.jpg") center;
  background: linear-gradient(135deg,rgb(228, 129, 129),rgb(129, 231, 129));
}

</style>