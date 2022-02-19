const path = require('path')

// 独立加载css文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
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