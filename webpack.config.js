module.exports = {
    entry: './src/components.ts',
    devtool: 'source-map',
    output: {
        path: './www/dist',
        filename: 'ux-components.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/, // Only .html files
                loader: 'html' // Run html loader
            }
        ]
    }
}