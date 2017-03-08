var AotPlugin = require("@ngtools/webpack").AotPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",

    entry: {
        "polyfills": "./src/polyfills.ts",
        "resources": "./src/resources.ts",
        "app": "./src/main.prod.ts"
    },

    output: {
        path: "../webapp",
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].chunk.js"
    },

    resolve: {
        extensions: [".js", ".ts"]
    },

    module: {
        rules: [
            { test: /\.ts$/, use: "@ngtools/webpack" },
            { test: /\.html$/, use: "html-loader" },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|otf|ico)(\?.*$|$)/, use: "file-loader?name=assets/[name].[hash].[ext]" },
            { test: /\.css$/, exclude: path.resolve("src/app"), use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader?sourceMap" }) },
            { test: /\.css$/, include: path.resolve("src/app"), use: "raw-loader" }
        ]
    },

    plugins: [
        new AotPlugin({
            entryModule: process.cwd() + "/src/app/app.module#AppModule",
            tsConfigPath: "./tsconfig.json"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "resources", "polyfills"]
        }),
        new ExtractTextPlugin("[name].[hash].css"),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            sourceMap: true
        })
    ]
};