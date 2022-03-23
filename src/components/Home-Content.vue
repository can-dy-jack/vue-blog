<template>
  <div class="home-content" id="home-content">
    <router-link to="/posts/markdownTest">markdownTest</router-link>
    <router-link to="/posts/markdownTest">hello-world</router-link>
    <router-link to="/posts/php01">php01</router-link>
  </div>
</template>

<script>
export default {
    name: "Home-Content",
    data(){
        return {}
    },
}
</script>

<style lang="scss">
.home-content {
    width: 80%;
    margin: 0 auto 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,.2);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    a {
      display: block;
      box-sizing: border-box;
      padding: 20px;
      height: 100px;
      margin: 20px;
      background: rgb(221, 245, 229);
      font-size: 24px;
    }
    a{
      color: #42b983;
      position: relative;
      &::after {
        content: '';
        height: 2px;
        background: repeating-linear-gradient(to right,#42b983 0,#42b983 5px,transparent 5px,transparent 7px);
        position: absolute;
        bottom: 0;
        left:0;right:0;
        transition: transform 0.5s ease;
        transform: scaleX(0);
        transform-origin: center;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
</style>