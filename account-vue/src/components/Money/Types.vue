<template>
    <div>
        <ul class="types">
            <li :class="value==='-' && 'selected'"
                @click="selectType('-')">支出
            </li>
            <li :class="value==='+' && 'selected' "
                @click="selectType('+')">收入
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";

    @Component
    export default class Types extends Vue {
        //type = "-";   //'-'表示支出； '+'表示收入；
        @Prop() readonly value!:string;    //value!  加!后，不管有没有初始值，不报错了

        selectType(type: string) {
            if (type !== "-" && type !== "+") {
                throw new Error("type is unknown");
            }
           // this.type = type;
            this.$emit('update:value',type)
        }
        //监听type 发生变化时触发
        // @Watch('type')
        // onTypeChanged(value:String){
        //     this.$emit('update:value',value)
        // }

    }
</script>

<style lang="scss" scoped>
    .types {
        background: #C4C4C4;
        display: flex;
        text-align: center;
        font-size: 24px;

        li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;

            &.selected { /*&表示当前元素*/
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: #333333;
                }

            }
        }

    }
</style>