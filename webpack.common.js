const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/app.js',
        admin: './src/admin.js',
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './dist'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator:  {
                    filename: 'fonts/[name].[contenthash][ext]',
                }
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.scss', '.css'],
        alias: {
            "@": path.resolve(__dirname, "../src/"),
        }
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {from: './src/assets/favicon.ico'},
                {from: './src/assets/robots.txt'},
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/views/app.html',
            filename: 'index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/views/admin.html',
            filename: 'admin.html',
            chunks: ['admin']
        }),
    ],
};