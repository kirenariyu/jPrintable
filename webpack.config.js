const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        lib: 'jquery',
        main: './js/main.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Responsive Print',
            meta: {
                charset: 'UTF-8',
                author: 'Yumi Takuma',
                description: 'Responsive Print',
                viewport: 'width=device-width, initial-scale=1.0'
            },
            showErrors: true
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'app')
    }
};