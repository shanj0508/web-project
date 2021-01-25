<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync='record.amount' @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
        {{recordList}}
    </Layout>

</template>

<script lang='ts'>
    import Vue from "vue";
    import {Component, Watch} from "vue-property-decorator";

    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Notes from '@/components/Money/Notes.vue';
    //数据库版本
    const version=window.localStorage.getItem('version')||'0'
    const recordList:Record[]=JSON.parse(window.localStorage.getItem("recordList")||'[]');
    //数据库升级，数据迁移
    if(version==='0.0.1'){
        recordList.forEach(record=>{
            record.createdAt=new Date(0)
        })
        //保存数据
        window.localStorage.setItem('recordList',JSON.stringify(recordList));
    }
    //更新版本号
    window.localStorage.setItem('version','0.0.2')

    //ts类型声明
    type Record = {
        tags: string[]
        notes: string
        type: string
        amount: number    // 数据类型object | string
        createdAt?:Date    // 类 / 构造函数   ?表示可以createdAt为undefined不存在
    }

    @Component(
        {
            components:{NumberPad,Types,Tags,Notes}
        }
    )
    export default class Money extends Vue {
        tags=['衣','食','住','行'];
        recordList:Record[]=recordList;
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
            //深拷贝
            const record2:Record = JSON.parse(JSON.stringify(this.record));
            record2.createdAt=new Date()
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
