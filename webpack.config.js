var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
    entry: { app: "./src/index.tsx" },
    output: {
        path: './dist',
        filename: "[name].bundle.js",
        publishpath: "/",
        sourceMapFilename: '/chunks/[name]/[name].map',
        chunkFilename: '/chunks/[name]/[name].chunk.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            test: path.join(__dirname, 'test.js'),
        }
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            // {
            //     test: /\.js|\.jsx$/,
            //     loaders: ['babel?cacheDirectory=true'], //babel-loader babel-core
            //     exclude: /node_modules/
            // },
            { test: /\.ts|\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('./manifest/vendor-manifest-dev.json'),
            sourceType: 'var'
        }),
        new HtmlWebpackPlugin({
            // filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        //复制静态资源文件
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),
        new webpack.optimize.CommonsChunkPlugin({ name: "commons", filename: "common.js" }),
        new ExtractTextPlugin('[name].css', { allchunks: true }) //[name]
    ]

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //     externals: {
    //         "react": "React",
    //         "react-dom": "ReactDOM"
    //     },
};