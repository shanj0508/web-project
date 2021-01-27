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

    import NumberPad from "@/components/Money/NumberPad.vue";
    import Types from "@/components/Money/Types.vue";
    import Tags from "@/components/Money/Tags.vue";
    import Notes from "@/components/Money/Notes.vue";
    import recordListModel from "@/models/recordListModel";
    import tagListModel from '@/models/tagListModel';

    const recordList = recordListModel.fetch();
    const tagList=tagListModel.fetch();

    @Component(
        {
            components: {NumberPad, Types, Tags, Notes}
        }
    )
    export default class Money extends Vue {
        tags = ["衣", "食", "住", "行"];
        recordList: RecordItem[] = recordList;
        record: RecordItem = {
            tags: [],
            notes: "",
            type: "-",
            amount: 0
        };

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        // onUpdateType(value:string){
        //     this.record.type=value;
        // }
        // onUpdateAmount(value:string){
        //     this.record.amount=parseFloat(value);
        // }
        saveRecord() {
            //深拷贝
            const record2: RecordItem = recordListModel.clone(this.record);
            record2.createdAt = new Date();
            this.recordList.push(record2);
            console.log(this.recordList);


        }

        @Watch("recordList")
        onRecordListChange() {
            recordListModel.save(this.recordList);
        }


    };
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
