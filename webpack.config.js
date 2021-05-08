const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/App.jsx'],
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
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: /styles/,
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: './src/index.html',
        }
    )],
};