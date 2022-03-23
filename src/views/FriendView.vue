<template>
  <div class="friends">
    <head-nav title="友链" sty="friends-img"></head-nav>
    <div class="friends-content">
      <h1>友链</h1>
      <div class="friends-items-box">
        <div class="friends-items">
          <i class="fab fa-vuejs" style="color: #42b983;"></i>
          <div>
            <span>Vue</span>
            <span class="friends-items-info">渐进式 JavaScript 框架</span>
          </div>
        </div>
        <div class="friends-items">
          <i class="fab fa-react" style="color: #61dafb;"></i>
          <div>
            <span>React</span>
            <span class="friends-items-info">用于构建用户界面的 JavaScript 库</span>
          </div>
        </div>
        <div class="friends-items">
          <i class="fab fa-angular" style="color: #dd0031;"></i>
          <div>
            <span>Angular</span>
            <span class="friends-items-info">现代 Web 开发平台</span>
          </div>
        </div>
        <div class="friends-items">
          <i class="fab fa-ember" style="color: #cf2d20;"></i>
          <div>
            <span>Ember</span>
            <span class="friends-items-info">A framework for ambitious web developers.</span>
          </div>
        </div>
        <div class="friends-items">
          <i class="fab fa-font-awesome-flag" style="color: #146ebe;"></i>
          <div>
            <span>Fontawesome</span>
            <span class="friends-items-info">Take the hassle out of icons in your website.</span>
          </div>
        </div>
        <div class="friends-items">
          <i class="fab fa-unsplash" style="color: #146ebe;"></i>
          <div>
            <span>Unsplash</span>
            <span class="friends-items-info">Beautiful Free Images & Pictures</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNav from "../components/Head-Nav.vue";
export default {
  components: {
    HeadNav,
  },
  methods: {
  },
  created: function(){
  }
}
</script>

<style lang="scss">
.friends-img {
  height: 500px;
  background: url("@/assets/mount2.jpg") center;
}

.friends-content {
  font-family: microsoft yahei,sans-serif;
  width: 80%;
  margin: -80px auto 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 1px 20px rgba(0,0,0,.2);
  h1 {
    text-align: center;
  }
  .friends-items-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .friends-items {
      width: 300px;
      height: 100px;
      margin: 20px;
      transition: all 0.25s ease-in-out;
      &:hover {
        background-color: #edfff7;
      }
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      i {
        font-size: 80px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 70px;
        padding-left: 10px;
        .friends-items-info {
          color: gray;
          font-size: 14px;
        }
      }
    }
  }
}
</style>