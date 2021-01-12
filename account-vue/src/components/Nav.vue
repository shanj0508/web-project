<template>
    <!-- 底部导航栏 -->
    <div class="nav">
        <router-link to="/labels">
            <svg>
                <use xlink:href="#labels"/>
                <!-- #labels 是svg的id -->
            </svg>
            标签
        </router-link>
        |
        <router-link to="/money">
            <svg>
                <use xlink:href="#money"/>

            </svg>
            记账
        </router-link>
        |
        <router-link to="/statistics">
            <svg>
                <use xlink:href="#statistics"/>

            </svg>
            统计
        </router-link>
    </div>
</template>

<script lang="ts">
    import x1 from "@/assets/icons/labels.svg";
    import x2 from "@/assets/icons/money.svg";
    import x3 from "@/assets/icons/statistics.svg";

    console.log(x1);
    console.log(x2);
    console.log(x3);

    export default {
        name: "Nav"
    };
</script>

<style lang="scss" scoped>
    .nav {
        border: 1px solid red;
    }
</style>