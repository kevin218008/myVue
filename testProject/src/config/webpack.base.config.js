/**
 * Created by SHL on 2017/3/22.
 */

module.exports = (function () {
    var webpack = require("webpack");
    var htmlWebpackPlugin = require("html-webpack-plugin");
    var webpackMd5Hash = require('webpack-md5-hash');
    var path = require("path");
    var fs = require("fs");

    var distDir = path.resolve(process.cwd(), 'outFile/static');
    var srcDir = path.resolve(process.cwd(), 'src');

    (function clearFolderRecursive(dir) {
        if (fs.existsSync(dir)) {
            var files = fs.readdirSync(dir);
            files.forEach(function (file) {
                var cur = path.resolve(dir, file);

                if (fs.statSync(cur).isDirectory()) {
                    clearFolderRecursive(cur);
                } else {
                    fs.unlinkSync(cur);
                }
            });
            if (dir != distDir)
                fs.rmdirSync(dir);
        }
    })(distDir);

    return {
        devtool: 'eval',
        entry: {
            app: [
                'src/app/index/entry.js',
                'bootstrap/dist/css/bootstrap.css',
                'bootstrap/dist/css/bootstrap-theme.css',
                'src/app/pages/content-web/css/style.css',
                'jquery/dist/jquery.js',
                'bootstrap/dist/js/bootstrap.js'
            ]
        },
        output: {
            path: distDir,
            publicPath: '/qkwVue/outFile/static/',  // webstream中直接调试html时需要加上目录名
            filename: '[name].bundle.[chunkhash].js'
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new webpack.ProvidePlugin({
                moment: 'moment'
            }),
            new webpack.ProvidePlugin({
                _: 'lodash'
            }),
            new webpackMd5Hash(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                chunks: ['app', 'lib']
            }),
            new htmlWebpackPlugin({
                filename: path.resolve(distDir, '../index.html'),
                template: 'src/app/index/index.html',
                inject: 'false',
                chunksSortMode: function (a, b) {
                    var index = {'lib': 9, 'common': 10, 'app': 2, 'style': 1}, //排序字段，不能为0，越大约靠前
                        ai = index[a.names[0]],
                        bi = index[b.names[0]];
                    return ai && bi ? bi - ai : -1;
                },
                hash: false
            })
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    // make sure to exclude 3rd party code in node_modules
                    exclude: /node_modules/
                },
                {
                    // root: 对于在html中的img相对路径(以"/"开头)，这里可以配置根路径，以保证node编译时可以找到，默认情况是对此类url不做处理
                    // attrs: 对img标签编译时的属性名，默认只有img:src，需要编译其他的属性时，需在这里设置
                    test: /\.html$/,
                    loader: 'html-loader',

                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    loader: 'url-loader',
                    query: {
                        // inline files smaller then 1kb as base64 dataURL
                        limit: 1000,
                        // fallback to file-loader with this naming schemenpmn
                        //这里最好以[path]开头，或者使用hash，防止原先不同目录中存在同名文件导致合并后冲突
                        name: 'resource/images/[name].[hash].[ext]'// name: '[path][name].[hash].[ext]'
                    }
                },
                {
                    test: /\.css$/,
                    //loader: extractTextPlugin.extract('style-loader', 'css-loader')
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.(svg|woff|woff2|ttf|eot)$/,
                    loader: 'file-loader',
                    query: {
                        name: 'resource/files/[name].[hash].[ext]',
                        // name:'[name].[ext]'
                        // &publicPath=assets/foo/
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    // query: {
                    //     root: path.resolve(srcDir, '/pages'),
                    //     attrs: ['img:src', 'img:data-src']
                    // }
                }
            ]
        },
        resolve: {
            alias: {
                vue: 'vue/dist/vue',
                vueRoute: 'vue-router/dist/vue-router',
                src: srcDir,
            },
            extensions: ['.js', '.html']
        },
        watch: true
    }
})();

