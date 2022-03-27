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
          <div class="list-drop-box">
            <button id="list-drop">
              <i class="fas fa-bars" id="list-drop-btn"></i>
            </button>
          </div>
        </div>
        <ul id="nav-link">
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
  props: ["title", "sty"],
  data() {
    return {
      navListOpen: false,
    };
  },
  methods: {
    scollBar: function () {
      const navbox = document.querySelector(".nav-box");
      window.onscroll = function () {
        if (window.scrollY > 50) {
          navbox.classList.add("nav-drop");
        } else {
          navbox.classList.remove("nav-drop");
        }
      };
    },
    showNavLink: function(){
      const btn = document.getElementById("list-drop");
      const navLink = document.getElementById("nav-link");
      btn.addEventListener('click',()=>{
        if(this.navListOpen){
          navLink.style.transform = "translateX(100%)";
          this.navListOpen = false;
        } else {
          navLink.style.transform = "translateX(0)";
          this.navListOpen = true;
        }
      })
    }
  },
  mounted() {
    this.scollBar();
    this.showNavLink();
  },
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
  font-size: 50px;
  font-weight: bold;
}
.nav-drop {
  background-color: #232323;
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
    width: 80%;
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
    .list-drop-box {
      height: 40px;
      display: none;
      button {
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        color: white;
        margin-top: 10px;
      }
      i {
        font-size: 20px;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  nav {
    .nav-container {
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
      .title {
        padding: 0 12px 0 12px;
        .list-drop-box {
          margin-left: auto;
          display: block;
        }
      }
      ul {
        flex-direction: column;
        background: #232323;
        height: 100vh;
        padding: 5px 10px;
        transform: translateX(100%);
      }
    }
  }
}
</style>
