<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync='record.amount'/>
        <Types :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
        {{record}}
    </Layout>

</template>

<script lang='ts'>
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Notes from '@/components/Money/Notes.vue';
    //ts类型声明
    type Record = {
        tags: string[]
        notes: string
        type: string
        amount: number
    }

    @Component(
        {
            components:{NumberPad,Types,Tags,Notes}
        }
    )
    export default class Money extends Vue {
        tags=['衣','食','住','行'];
        record: Record={
            tags:[],
            notes:'',
            type:'-',
            amount:0
        };
        onUpdateTags(value:string[]){
            this.record.tags=value;
        }
        onUpdateNotes(value:string){
            this.record.notes=value;
        }
        // onUpdateType(value:string){
        //     this.record.type=value;
        // }
        // onUpdateAmount(value:string){
        //     this.record.amount=parseFloat(value);
        // }
        
    };
</script>
<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
