const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 独立加载css文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dirname } = require('path');
const { DefinePlugin } = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {

    // 色湖之模式
    // development 开发阶段, 会设置development
    // production 准备打包上线的时候
    mode: 'development',

    // 设置 source-map , 建立js映射文件, 方便调试代码和错误
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'img/[hash:8][name][ext][query]'
    },
    plugins: [
        new MiniCssExtractPlugin({
            attributes: {
                // 指定属性
                id: 'target'
            },
            // linkType: 'text/css',
            // 开启禁用生成css 仍将被提取, 并可用自定义加载方法
            runtime: false
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 这个插件会自动将bundle.js 注入到 html 文件中 
            // 呢么 在index.html 中就不用自己引入 了
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            // 设置注入位置
            inject: 'head',
            title: '王小王',
            minify: {
                removeComments: true
            }
        }), new DefinePlugin({
            BASE_URL: "'./'"
        }), new CopyWebpackPlugin({
            patterns: [{
                from: 'public',
                // 当前目录是 output 中设置的 path
                to: './img/',
                globOptions: {
                    ignore: [
                        '**/index.html'
                    ]
                }
            }]
        })
    ],
    module: {
        // css sass less 文件改变了不光需要重新打包, 在这之前还要重新'挂载'到内存
        // webpack ./src/css/* -o ./dist
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            test: /\.(jpg|png|gif|svg)$/i,
            type: 'asset/resource'
        }, {
            test: /\.(eot|ttf|woff2?)/,
            type: 'asset/resource',
            generator: {
                filename: 'iconFont/[hash:8]_[name][ext][query]'
            }
        }],
    }
}