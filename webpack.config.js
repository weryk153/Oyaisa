const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./App.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
};