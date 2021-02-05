<template>
    <div ref="container">
        vue echarts
    </div>
</template>

<script>
    import * as echarts from 'echarts';

    export default {
        props: ['option','loading'],
        mounted() {
            //this.$refs.container就是我们的div容器
            console.log(this.$refs.container);
            //获取屏幕宽度设置在div容器上,宽高比是1：1.2
            const width = document.documentElement.clientWidth
            this.$refs.container.style.width = `${width - 20}px`
            this.$refs.container.style.height = `${(width - 20) * 1.2}px`
            // 基于准备好的dom，初始化echarts实例
            this.chart = echarts.init(this.$refs.container, 'dark');

            // 使用刚指定的配置项和数据显示图表。
            this.chart.setOption(this.option)
        },
        watch: {
            //监听option的变化
            option() {
                this.chart.setOption(this.option)

            },
            //监听loading的变化
            loading(){
                if(this.loading===true){
                    this.chart.showLoading()
                }else{
                    this.chart.hideLoading()
                }
            }

        }
    }
</script>