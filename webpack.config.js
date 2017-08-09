var path = require('path');
var ROOTPATH = path.resolve(__dirname,'./');
console.log(ROOTPATH)
var OpenBrowserPlugin  = require('open-browser-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    devtool:'source-map',
    entry:'./app/main.js',
    output:{
        path:ROOTPATH+'/dist',
        filename:'bundle.js'
    },
    module:{
        loaders:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        },
        {
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },{
            test:/\.less$/,
            loader:'style-loader!css-loader!less-loader'
        }
        ]
    },
    plugins:[
    // new HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url:'http://localhost:8080'})
    ],
    devServer:{
        historyApiFallback:true,
        inline:true,
    }
}