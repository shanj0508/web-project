<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text"
                   v-model="value"
                   placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Watch} from "vue-property-decorator";

    @Component
    export default class Notes extends Vue {
        value = '';
        // 监听value，发生变化时触发
        @Watch('value')
        onValueChanged(value:String){
            this.$emit('update:value',value)
        }
    }
</script>

<style lang="scss" scoped>
    .notes {
        display: flex;
        font-size: 14px;
        background: #E5E5E5;
        padding-left: 16px;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 64px;
            flex-grow: 1;
            background: transparent; /*背景色透明*/
            border: none;
            padding-right: 16px;
        }

    }
</style>