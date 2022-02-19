const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 独立加载css文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dirname } = require('path');
const { DefinePlugin } = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
    target: 'web',
    // 色湖之模式
    // development 开发阶段, 会设置development
    // production 准备打包上线的时候
    mode: 'development',

    // 设置 source-map , 建立js映射文件, 方便调试代码和错误
    devtool: 'source-map',
    entry: "./src/index.js",
    // 监听依赖变化, 有变化就自动编译
    // watch:true,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'img/[hash:8][name][ext][query]'
    },
    resolve: {
        // 这里写了扩展名后 引入的文件就不用写扩展名了
        extensions: [
            '.js', '.json'
        ],
        alias: {
            // "js": path.resolve(__dirname, './src/js')
            "@": path.resolve(__dirname, './src')
        }
    },
    devServer: {
        open: true,
        // port: 8088,
        static: {
            directory: path.resolve(__dirname, './public')
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
        },

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
            BASE_URL: "'./'",
            // 开启 对 options_api 的支持
            __VUE_OPTIONS_API__: true,
            // 关闭对调试工具 devTools 的支持
            __VUE_PROD_DEVTOOLS__: false
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
        }), new VueLoaderPlugin()
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
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            }, {
                test: /\.(eot|ttf|woff2?)/,
                type: 'asset/resource',
                generator: {
                    filename: 'iconFont/[hash:8]_[name][ext][query]'
                }
            },
            //{
            // test: /\.js$/,
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //         // plugins: [
            //         //     '@babel/plugin-transform-arrow-functions',
            //         //     '@babel/plugin-transform-block-scoping'
            //         // ]

            //         presets: [
            //             '@babel/preset-env'
            //         ]
            //     }
            // }
            // }
            {
                test: /\.js$/,
                use: 'babel-loader'
            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ],
    }
}