const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
//const { config } = require('vue/types/umd')
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
    return path.join(__dirname, dir)
}
const proxyTargetMap = {
    //for product mod
    //TODO
    prod: "",
    //for local mod
    local: 'http://localhost:3000/',
}

let proxyTarget = proxyTargetMap[process.env.API_TYPE] || proxyTargetMap.prod
let publicPath = process.env.NODE_ENV === 'production' ? '/' : '/'
let dllPublishPath = '/vendor'


module.exports = {
    publicPath: publicPath,
    outputDir: 'dist',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        //before: app => { }
    },

    chainWebpack: config => {
        config.plugins.delete('prefetch');


        //resolve svgIcon
        config.module
            .rule('svgIcon')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .tap(options => {
                options = {
                    symbolId: 'icon-[name]'
                }
                return options
            });
        config.module.rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
    },

    // eslint-disable-next-line no-dupe-keys
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.plugins.push(
                new webpack.DllReferencePlugin({
                    context: process.cwd(),
                    manifest: require('./public/vendor/vendor-manifest.json')
                }),
                // 将 dll 注入到 生成的 html 模板中
                new AddAssetHtmlPlugin({
                    // dll文件位置
                    filepath: path.resolve(__dirname, './public/vendor/*.js'),
                    // dll 引用路径
                    publicPath: dllPublishPath,
                    // dll最终输出的目录
                    outputPath: './vendor'
                }),
                // 开启压缩
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
            if (process.env.npm_lifecycle_event === 'analyze') {
                config.plugins.push(new BundleAnalyzerPlugin())
            }
        } else {
            // 为开发环境修改配置...
        }
    },
}
