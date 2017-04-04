var BeepPlugin = require('webpack-beep-plugin');

module.exports = {
    entry: {
        ReactHelpers: './helpers/ReactHelpers.js',
        'browser-jasmine-testing': './src/browser-jasmine-testing'
    },
    output: {
        filename: 'lib/[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [/src/, /helpers/],
                query: {
                    presets: ['es2017', 'react']
                }
            },
            { test: [/lib\/jasmine.*\.js/, /source-map-support/], loader: 'raw-loader'},
            { test: /\.css$/,loader: 'style-loader!css-loader'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader'
            }
        ]
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'react/lib/ReactTestUtils.js': 'react/lib/ReactTestUtils.js',

        jquery: true,
        lodash: true
    },
    resolve: {
        alias: {
        }
    },
    node: {
//        global: false,
        fs: "empty"
    },
    plugins: [
        new BeepPlugin()
    ]
};
