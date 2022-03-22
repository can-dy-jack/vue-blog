<template>
  <div>
    <nav class="nav-box">
      <div class="nav-container">
        <div class="title">
          <img
            src="@/assets/logo.jpg"
            alt="logo"
            height="30"
            class="title-logo"
          />
          <span>陈科衡的vue实战项目</span>
        </div>
        <ul>
          <li class="link-start">
            <router-link to="/"
              ><i class="fas fa-house-user"></i>Home</router-link
            >
          </li>
          <li>
            <router-link to="/about"
              ><i class="fas fa-info-circle"></i>About</router-link
            >
          </li>
          <li>
            <router-link to="/friend"
              ><i class="fas fa-link"></i>Friends</router-link
            >
          </li>
          <li>
            <router-link to="/calendar"
              ><i class="fas fa-calendar-alt"></i>Calendar</router-link
            >
          </li>
          <li class="list-drop">
            <i class="fas fa-bars"></i>
          </li>
        </ul>
      </div>
    </nav>
    <div class="head-nav-img" :class="sty">
      {{ title }}
    </div>
  </div>
</template>

<script>

export default {
  name: "Head-Nav",
  props: ["title","sty"],
  data() {
    return {}
  },
  methods: {
    scollBar: function(){
      const navbox = document.querySelector(".nav-box");
      window.onscroll = function(){
        if(window.scrollY>50){
          navbox.classList.add('nav-drop');
        } else {
          navbox.classList.remove("nav-drop");
        }
      }
    }
  },
  mounted() {
    this.scollBar();
  }
};
</script>

<style lang="scss" scoped>
.head-nav-img {
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
  color: white;
  transition: all 0.3s linear;

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
        margin-left: 6px;
        &.list-drop {
          display: none;
        }
        a {
          margin-left: 5px;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .nav-container {
    width: 1000px;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1199px) {
  .nav-container {
    width: 800px;
  }
}
@media screen and (min-width: 700px) and (max-width: 999px) {
  .nav-container {
    width: 100%;
  }
}
@media screen and (max-width: 699px) {
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
.nav-drop {
  background-color: #232323;
}

</style>
