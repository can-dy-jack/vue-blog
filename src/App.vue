<template>
  <nav>
    <div class="nav-container">
      <div class="title">
        <img
          src="./assets/logo.jpg"
          alt="logo"
          height="30"
          class="title-logo"/>
        <span>{{ title }}</span>
      </div>
      <ul>
        <li class="link-start">
          <router-link to="/"><i class="fas fa-house-user"></i>Home</router-link>
        </li>
        <li>
          <router-link to="/about"><i class="fas fa-info-circle"></i>About</router-link>
        </li>
        <li>
          <router-link to="/friend"><i class="fas fa-link"></i>Friends</router-link>
        </li>
        <li>
          <router-link to="/calendar"><i class="fas fa-calendar-alt"></i>Calendar</router-link>
        </li>
        <li class="list-drop">
          <i class="fas fa-bars"></i>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      title: "陈科衡的vue项目",
    };
  },
};
</script>

<style lang="scss">
$vueThemeColor: #42b983;

* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: "Times New Roman", "microsoft yahei", "楷体", Helvetica, Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.bg-img {
  // filter: brightness(80%);
  // filter: saturate(80%);
  // filter: opacity(80%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: -1;
  font: bold 50px "华文行楷", "楷体", sans-serif;
}

nav {
  width: 100%;
  height: 40px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  color:white;
  
  // user-select: none;
  .nav-container {
    height: 40px;
    margin: 0 auto;
    display: flex;
    .title {
      display: flex;
      align-items: center;
      img {
        margin-right: 4px;
      }
    }
    ul {
      height: 40px;
      line-height: 40px;
      list-style: none;
      display: flex;
      margin-left: auto;
      li {
        margin-left: 5px;
        &.list-drop{
          display: none;
        }
      }
      a {
        font-weight: bold;
        color: #eee;
        text-decoration: none;
        transition: all 0.2s linear;
        &.router-link-exact-active {
          color: $vueThemeColor;
        }
        &:hover {
          color: $vueThemeColor;
        }
        i {
          font-size: 16px;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px){
  .nav-container {
    width: 1000px;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1199px){
  .nav-container {
    width: 800px;
  }
}
@media screen and (min-width: 700px) and (max-width: 999px){
  .nav-container {
    width: 100%;
  }
}
@media screen and (max-width: 699px){
  .nav-container {
    width: 100%;
    padding: 0 5px;
    ul {
      li {
        display: none;
      }
      li.list-drop {
        display: block !important;
        font-size: 22px;
        line-height: 40px;
        padding: 0 10px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
}

</style>
