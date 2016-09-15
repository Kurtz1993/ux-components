var gulp = require('gulp');
var webpackConf = require('./webpack.config.js');
var webpackStream = require('webpack-stream');

var paths = {
    less: 'src/**/*.less',
    ts: 'src/**/*.ts',
    html: 'src/**/*.html'
};

gulp.task('build', function () {
    return gulp.src('./src/cards.ts')
        .pipe(webpackStream(webpackConf))
        .pipe(gulp.dest('www/dist'));
});

gulp.task('build-dist', function () {
    return gulp.src('./src/cards.ts')
        .pipe(webpackStream(webpackConf))
        .pipe(gulp.dest('dist'));
});
// Watches for changes in application's SASS files.
gulp.task('watch', ['build'], function () {
    gulp.watch([paths.less, paths.ts, paths.html], ['build']);
});