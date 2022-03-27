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
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    padding: 20px;
    // temp
    display: flex;
    justify-content: center;
    align-items: flex-end;
    p {
        text-align: center;
    }
}
</style>