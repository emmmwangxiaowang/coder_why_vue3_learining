const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.comm.config')



module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(), new CopyWebpackPlugin({
            patterns: [{
                from: './public',
                // 当前目录是 output 中设置的 path
                // to: '../img/',
                globOptions: {
                    ignore: [
                        '**/index.html'
                    ]
                }
            }]
        }),
    ]
})