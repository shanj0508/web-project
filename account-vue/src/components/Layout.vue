<template>
    <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
        <div class="content" :class="classPrefix && `${classPrefix}-content`">
            <slot></slot>
            </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        props:['classPrefix'],
        name: "layout",

    };
</script>

<style lang="scss" scoped>
.layout-wrapper{
    /*border:1px solid green;*/
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content{
    /*border:1px solid blue;*/
    flex-grow: 1;   //让content区域尽量占满全屏
    overflow:auto;    //自动出滚动条
}
</style>