const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.comm.config')
const path = require('path')

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        open: true,
        // port: 8088,
        static: {
            directory: path.resolve(__dirname, '../public')
        },
        // 开启下载压缩 --gzip
        compress: true,
        // 默认开启热更新的
        // hot: true

        // websocket
        webSocketServer: 'ws',
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '' },
            },
            secure: false,
            changeOrigin: true
        },

    }
})