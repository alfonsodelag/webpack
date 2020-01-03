const path= require("path");
const webpack= require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    module: {
        rules: 
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jp(e*g)|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]',
                        esModule: false,
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'file-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}