const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
require('babel-register')


module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  
}