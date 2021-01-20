<template>
    <Layout class-prefix="layout">
        <div class="numberPad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">OK</button>
                <button class="zero">0</button>
                <button>.</button>
            </div>
        </div>
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>
        <div>
            <label class="notes">
                <span class="name">备注</span>
                <input type="text" placeholder="在这里添加备注">
            </label>
        </div>
        <div class="tags">
            <div class="new">
                <button>新增标签</button>
            </div>
            <ul class="current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>

            </ul>

        </div>
    </Layout>

</template>

<script lang="ts">
    export default {
        name: "money",
    };
</script>
<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .tags{
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 1;    /*占满*/
        font-size: 14px;
        padding: 16px;
        > .current{
            display: flex;
            flex-wrap: wrap;
            > li{
                background: #d9d9d9;
                $h: 24px;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                line-height:$h;
                margin-top: 4px;

            }

        }
        > .new{
            padding-top: 16px;
            button{
                background: transparent;
                border: none;
                color:#999;
                border-bottom: 1px solid;
                padding: 0 4px;

            }
        }
    }
    .notes{
        display: flex;
        font-size: 14px;
        background: #E5E5E5;
        padding-left: 16px;
        align-items: center;
        .name{
            padding-right: 16px;
        }
        input{
            height: 64px;
            flex-grow: 1;
            background: transparent;  /*背景色透明*/
            border: none;
            padding-right: 16px;
        }

    }
    .types{
        background: #C4C4C4;
        display: flex;
        text-align: center;
        font-size: 24px;
        li{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
           &.selected{     /*&表示当前元素*/
               position: relative;
               &::after{
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
    .numberPad{
        .output{
            font-size: 36px;
            font-family: Consolas,monospace;
            padding: 9px 16px;
            text-align: right;
            @extend %innerShadow;
            /*box-shadow: inset 0 -5px 5px -5px fade_out(black,0.6),
                        inset 0 5px 5px -5px fade_out(black,0.6);
            */

        }
        .buttons{
            @extend %clearFix;
            > button{
                width: 25%;
                height:64px;
                float: left;
                background: transparent;
                border: none;

                &.ok{
                    height: 64*2px;
                    float: right;
                }
                &.zero{
                    width: 25*2%;
                }

                $bg:#f2f2f2;
                &:nth-child(1){
                    background: $bg;
                }
                &:nth-child(2), &:nth-child(5){
                    background: darken($bg,4%);    /*darken(xxx,4%) 使得xxx的颜色变暗4%*/
                }
                &:nth-child(3), &:nth-child(6), &:nth-child(9){
                    background: darken($bg,4*2%);
                }
                &:nth-child(4), &:nth-child(7), &:nth-child(10){
                    background: darken($bg,4*3%);
                }
                &:nth-child(8), &:nth-child(11), &:nth-child(13){
                    background: darken($bg,4*4%);
                }
                &:nth-child(14){
                    background: darken($bg,4*5%);
                }
                &:nth-child(12){
                    background: darken($bg,4*6%);
                }

            }

        }

    }


</style>