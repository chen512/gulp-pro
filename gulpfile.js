var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


/**
 * @ 检查脚本
 * @ author matt
 * */

gulp.task('lint', function () {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/**
 * 编译sass
 * */

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});


/**
 * 合并，压缩文件
 * */
gulp.task('scripts', function () {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});


/**
 * 默认任务
 * */

gulp.task('default', function () {
    gulp.run('lint', 'sass', 'scripts');
    gulp.watch('./js/*.js', function () {
        gulp.run('lint', 'sass', 'scripts');
    });
});