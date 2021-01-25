<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync='record.amount' @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
        {{record}}
    </Layout>

</template>

<script lang='ts'>
    import Vue from "vue";
    import {Component, Watch} from "vue-property-decorator";

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
        recordList:Record[]=[];
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
        saveRecord(){
            //deepClone
            const record2=JSON.parse(JSON.stringify(this.record));
            this.recordList.push(record2);
            console.log(this.recordList);
            
       
        }
        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
        }

        
    };
</script>
<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
