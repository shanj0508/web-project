<template>
    <div>
        <h1>在Vue里使用Echarts</h1>
        <vue-echarts :option="option" :loading="loading"></vue-echarts>
        <button @click="loadMore">加载更多</button>
    </div>
</template>

<script>
    import VueEcharts from './vue-echarts.vue'

    export default {
        data() {
            return {
                loading: false,
                option: {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    //悬浮提示
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月'],
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '销量',
                        data: [150, 230, 224],
                        type: 'line'
                    }]
                }
            }
        },
        components: {VueEcharts},
        methods: {
            loadMore() {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.option = {
                        xAxis: {
                            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
                        },
                        series: [{
                            data: [150, 230, 224, 218, 135, 260],

                        }]
                    }
                }, 3000)

            }
        }

    }
</script>