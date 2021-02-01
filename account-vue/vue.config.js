const path = require('path');  //引入path模块

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/account-website/'
        : '/',
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')  //__dirname表示当前目录
        //配置loader
        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)    //以.svg结尾的
            .include.add(dir).end()  //只包含icons目录 才匹配上面的规则
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()  //extract:false 表示不需要解析出文件
        //svgo-loader 批量删除svg文件的fill属性
            .use('svgo-loader').loader('svgo-loader')
            .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
        //配置插件
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir)  //其他svg loader排除icons目录
    }
}
