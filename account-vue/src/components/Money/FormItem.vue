<template>
    <div>
        <label class="formItem">
            <span class="name">{{this.fieldName}}</span>
            <input type="text"
                   v-model="value"
                   :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";

    @Component
    export default class FormItem extends Vue {
        value = "";
        // 监听value，发生变化时触发
        //{required:true} 表示必填
        @Prop({required: true}) fieldName!: string;
        @Prop() placeholder?: string;   //?表示有可能不存在


        @Watch("value")
        onValueChanged(value: String) {
            this.$emit("update:value", value);
        }
    }
</script>

<style lang="scss" scoped>
    .formItem {
        display: flex;
        font-size: 14px;
        /*background: #E5E5E5;*/
        padding-left: 16px;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 40px;
            flex-grow: 1;
            background: transparent; /*背景色透明*/
            border: none;
            padding-right: 16px;
        }

    }
</style>