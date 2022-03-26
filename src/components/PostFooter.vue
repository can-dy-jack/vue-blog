<template>
  <footer>
      <p> copyright @ kartjim </p>
  </footer>
</template>

<script>
export default {
    name: "PostFooter",
    data() {
        return {}
    },
    methods: {},
    computed: {},
    created() {},
    mounted() {},
}
</script>

<style lang="scss">
//  scoped
footer {
    width: 100%;
    height: 200px;
    background-color: #42b983;
    color: white;
    // temp
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        text-align: center;
    }
}
</style>