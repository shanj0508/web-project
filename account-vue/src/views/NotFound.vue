<template>
    <div>
        <h1>Not Found</h1>
        <p>The requested URL was not found on this server.</p>
        <div>
            <router-link to="/">返回首页</router-link>
            <a href="#/">返回首页</a>
        </div>

    </div>
</template>

<script lang="ts">
    export default {
        name: "NotFound"
    };
</script>

<style lang="scss" scoped>

</style>