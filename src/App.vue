<template>
  <router-view v-slot="{ Component }">
    <transition name="component-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  
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
body {
  background-color: #fafafa;
}
#app {
  font-family: "Times New Roman", "microsoft yahei", "楷体", Helvetica, Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.25s ease-out,;
  // transform: translateY(50px);
}
.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
  // transform: translateY(0);
}


::selection {
  background-color: $vueThemeColor;
  color:white;
}
</style>
