var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var del = require('del');
var babelify = require('babelify');


gulp.task('clear', function () {
    del(['./build/'])
})
gulp.task('default',['clear'], function() {
    return browserify('./js/app.js')
        .transform(
            ['babelify', {'presets': ['es2015']}]
        )
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});
