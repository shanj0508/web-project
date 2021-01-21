<template>
    <Layout class-prefix="layout">
        <NumberPad/>
        <Types/>
        <Notes/>
        <Tags/>
    </Layout>

</template>

<script lang="ts">
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Notes from '@/components/Money/Notes.vue';
    export default {
        name: "money",
        components:{NumberPad,Types,Tags,Notes}
    };
</script>
<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
