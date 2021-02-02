<template>
    <div  id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">   //App需要设置全局样式，因此这里不能加scoped
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    font-family: $font-hei;
    font-size: 16px;
    color: #333;
    background: white;
}
</style>
