import * as echarts from 'echarts';

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

//获取屏幕宽度设置在div容器上,宽高比是1：1.2
const width = document.documentElement.clientWidth
main.style.width = `${width}px`
main.style.height = `${width * 1.2}px`

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main);

const xData = ['1月', '2月', '3月', '4月', '5月', '6月']
const values = [150, 230, 224, 218, 135, 260]

// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
    //baseOption PC和移动端共享的option
    baseOption: {
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
            data: xData
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            //线条颜色
            lineStyle: {
                color: 'blue'
            },
            //圆点样式
            itemStyle: {
                borderWidth: 10
            },
            name: '销量',
            data: values,
            type: 'line'
        }]
    },
    //媒体查询
    media: [{
        query: {
            maxWidth: 500   //手机的宽度
        },
        option: {
            series: [{
                lineStyle: {
                    color: 'red'
                }
            }]
        }
    }]
})


loadMoreButton.addEventListener('click', () => {
    myChart.showLoading()
    setTimeout(() => {
        const key = '7月'
        const value = 231
        myChart.setOption({
            xAxis: {
                data: [...xData, key]
            },
            series: [{
                data: [...values, value]

            }]
        })
        myChart.hideLoading()
    }, 3000)

})

myChart.on('click', (e) => {
    console.log(e);
    console.log(e.dataIndex);
    console.log(e.name);
    console.log(e.data);
    window.open(`https://www.baidu.com/?wd=${e.name}`)
})