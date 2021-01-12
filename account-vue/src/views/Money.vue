<template>
    <div class="nav-wrapper">
        <div class="content">
            <p>Money.vue</p>
            </div>
        <Nav/>
    </div>
</template>

<script lang="ts">

    export default {
        name:'money',
    }
</script>

<style lang="scss" scoped>
.nav-wrapper{
    border:1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    border:1px solid blue;
    flex-grow: 1;   //让content区域尽量占满全屏
    overflow:auto;    //自动出滚动条
}

</style>