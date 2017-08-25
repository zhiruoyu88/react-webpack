require('react-hot-loader/patch')
var path = require('path');
var OpenBrowserPlugin  = require('open-browser-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    devtool:'eval-source-map',
    entry:{
        app:[
            'react-hot-loader/patch',
            'eventsource-polyfill',   //necessary for hot reloading with IE
            './app/main.js'
        ]
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js',
        // publicPath:'./dist'
    },
    module:{
        loaders:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:['react-hot-loader/webpack', 'babel-loader']
        },
        {
            test:/\.css$/,
            loader:'style-loader!css-loader!postcss-loader'
        },{
            test:/\.less$/,
            loader:'style-loader!css-loader!postcss-loader!less-loader'
        }
        ]
    },
    plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
        title:'webpack app',
        template:'./index.html',
        inject:true,
        hash:true,
    }),
    new OpenBrowserPlugin({url:'http://localhost:8080'})
    ],
    devServer:{
        contentBase:'./dist',
        historyApiFallback:true,
        inline:true,
        hot:true,
    }
}