var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "inline-source-map",

    entry: {
        "polyfills": "./src/polyfills.ts",
        "resources": "./src/resources.ts",
        "app": "./src/main.dev.ts"
    },

    output: {
        publicPath: "http://localhost:3000/",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },

    resolve: {
        extensions: [".js", ".ts"]
    },

    module: {
        rules: [
            { test: /\.ts$/, use: ["awesome-typescript-loader?transpileOnly=true", "angular2-template-loader"] },
            { test: /\.html$/, use: "html-loader" },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|otf|ico)(\?.*$|$)/, use: "file-loader?name=assets/[name].[hash].[ext]" },
            { test: /\.css$/, exclude: path.resolve("src/app"), use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader?sourceMap" }) },
            { test: /\.css$/, include: path.resolve("src/app"), use: "raw-loader" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "resources", "polyfills"]
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
};