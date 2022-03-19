<template>
  <div class="home">
    <div class="home-img bg-img">
      主页
    </div>
    <div class="home-content"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style lang="scss">
  .home {
    .home-img {
      height: 500px;
      background: url("@/assets/wheat2.jpg") center;
    }
  }
</style>