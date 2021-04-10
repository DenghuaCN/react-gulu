const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, './lib/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        library: 'DUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    }
}