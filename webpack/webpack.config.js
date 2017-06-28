var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  __dirname + "/myapp/js/mui.min.js",
    output: {
        path: __dirname + "app/build",
        filename: "[name]-[hash].js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
//对css，js，json的处理
    module: {
        /*loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                /!*loader: 'style!css'//添加对样式表的处理*!/
                //CSS module  模块化
                /!*loader: 'style!css?modules!postcss'//跟前面相比就在后面加上了?modules*!/
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
            }
        ]*/
        module: {
            //加载器配置
            loaders: [
                //.css 文件使用 style-loader 和 css-loader 来处理
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                //.js 文件使用 jsx-loader 来编译处理
                { test: /\.js$/, loader: 'jsx-loader?harmony' },
                //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
                //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
                { test: /\.(png|jpg|jpeg|svg)$/, loader: 'url-loader?limit=8192'}
            ]
        }
    },
    //插件配置
    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new ExtractTextPlugin("[name]-[hash].css"),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("[name].css", {allChunks: true}),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    //本地服务器
    devServer: {
        contentBase: "./myapp",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}
