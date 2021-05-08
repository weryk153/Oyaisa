const path = require('path');
module.exports = {
    entry: ['./App.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
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
    }
};