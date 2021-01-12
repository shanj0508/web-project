<template>
    <!-- 底部导航栏 -->
    <div class="nav">
        <router-link to="/labels">
        <svg>
            <use xlink:href="#labels" />   
            <!-- #labels 是svg的id -->
        </svg>
        标签

        </router-link>|
        <router-link to="/money">记账
        </router-link>|
        <router-link to="/statistics">统计</router-link>
    </div>
</template>

<script lang="ts">
import x from "@/assets/icons/labels.svg";
console.log(x)

    export default {
        name: "Nav"
    };
</script>

<style lang="scss" scoped>
.nav{
    border:1px solid red;
}
</style>