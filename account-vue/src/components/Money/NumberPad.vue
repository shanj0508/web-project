<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="ok" class="ok">OK</button>
            <button @click="inputContent" class="zero">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class NumberPad extends Vue {
        
        @Prop() readonly value!:number;
        output: string =this.value.toString();

        inputContent(event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);  //强制指定类型：强制指定event.target是一个html的button元素
            const input = button.textContent as string;   //强制指定字符串，不可能为空
            //const input = button.textContent!;     ！与as string 等价  ！表示把为空的情况排除，其他的保留，这样后面不会提示可能为空的报错

            if (this.output.length === 16) {
                return;
            }

            if (this.output === "0") {
                if ("0123456789".indexOf(input) >= 0) {
                    this.output = input;
                } else {
                    this.output += input;
                }
                return;
            }
            if (this.output.indexOf(".") >= 0 && input === ".") {
                return;
            }
            this.output += input;

        }

        remove() {
            if (this.output.length === 1) {
                this.output = "0";
            } else {
                this.output = this.output.slice(0, -1);  //-1表示最后一个，slice(0, -1)表示截取从第0个到最后一个，不包含最后一个
            }
        }

        clear() {
            this.output = '0';

        }

        ok() {
            this.$emit('update:value',this.output)

        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .numberPad {
        .output {
            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 9px 16px;
            text-align: right;
            @extend %innerShadow;
            /*box-shadow: inset 0 -5px 5px -5px fade_out(black,0.6),
                        inset 0 5px 5px -5px fade_out(black,0.6);
            */
            height: 72px;

        }

        .buttons {
            @extend %clearFix;

            > button {
                width: 25%;
                height: 64px;
                float: left;
                background: transparent;
                border: none;

                &.ok {
                    height: 64*2px;
                    float: right;
                }

                &.zero {
                    width: 25*2%;
                }

                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%); /*darken(xxx,4%) 使得xxx的颜色变暗4%*/
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 4*3%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }

                &:nth-child(14) {
                    background: darken($bg, 4*5%);
                }

                &:nth-child(12) {
                    background: darken($bg, 4*6%);
                }

            }

        }

    }
</style>