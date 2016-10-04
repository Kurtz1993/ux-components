var gulp = require('gulp');
var npm = require('global-npm');
var sass = require('gulp-sass');

var paths = {
    sass: 'src/**/*.scss',
    ts: 'src/**/*.ts',
    html: 'src/**/*.html'
};

gulp.task('build', ['sass'], function (done) {
    npm.load({}, function () {
        npm.commands.run(['build'], done);
    });
});

gulp.task('sass', ['copy-fonts'], function () {
    return gulp.src('./src/components.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./www/css'));
});

gulp.task('copy-fonts', function () {
    return gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('./www/fonts'));
});

gulp.task('build-dist', function () {
    return gulp.src('./src/cards.ts')
        .pipe(webpackStream(webpackConf))
        .pipe(gulp.dest('dist'));
});
// Watches for changes in application's SASS files.
gulp.task('watch', ['build'], function () {
    gulp.watch([paths.ts, paths.html], ['build']);
    gulp.watch(paths.sass, ['sass']);
});