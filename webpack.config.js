module.exports = {
    entry: './src/components.ts',
    devtool: 'source-map',
    output: {
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
            },
            {
                test: /\.scss$/, // Only .scss files
                loader: 'style!css!sass' // Run css and style loader
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run css and style loader
            }
        ]
    }
}