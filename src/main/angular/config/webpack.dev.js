var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
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
            { test: /\.ts$/, loader: ["awesome-typescript-loader?transpileOnly=true", "angular2-template-loader"] },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|otf|ico)(\?.*$|$)/, loader: "file-loader?name=assets/[name].[hash].[ext]" },
            { test: /\.css$/, exclude: ["src", "app"], loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader?sourceMap" }) },
            { test: /\.css$/, include: ["src", "app"], loader: "raw-loader" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "resources", "polyfills"]
        }),
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