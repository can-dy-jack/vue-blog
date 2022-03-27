<template>
    <a href="#" class="totop" id="totop">
        <i class="fas fa-angle-up"></i>
    </a>
</template>

<script>
export default {
    name: "ToTop"
}
</script>

<style lang="scss">
    .totop {
        position: fixed;
        right: 20px;
        bottom: 20px;
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #42b983;
        color: white;
        text-align: center;
        transition: all 0.3s linear;
        box-shadow: 0 0 6px rgba(0,0,0,.05);
        i {
            font-size: 26px;
            line-height: 40px;
        }
        &:hover{
            background-color: #fff;
        }
    }
</style>