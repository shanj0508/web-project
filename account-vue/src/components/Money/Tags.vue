<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag.id"
                :class="{selected:selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Tags extends Vue {
        @Prop() readonly dataSource: string[] | undefined;   //string[]表示是一个字符串数组，里面只能存放字符串
        selectedTags: string[] = [];

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
            this.$emit('update:value',this.selectedTags)
        }

        create() {
            const name = window.prompt("请输入标签名");
            if (name === "") {
                window.alert("标签名不能为空！");
            } else if (this.dataSource) {
                // this.dataSource.push(name!);   //不能直接改外部数据！不推荐!
                this.$emit("update:dataSource",
                    [...this.dataSource, name]);
            }


        }

    }
</script>

<style lang="scss" scoped>
    .tags {
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 1; /*占满*/
        font-size: 14px;
        padding: 16px;
        background: white;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                $h: 24px;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                line-height: $h;
                margin-top: 4px;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;

                }
            }

        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;

            }
        }
    }
</style>