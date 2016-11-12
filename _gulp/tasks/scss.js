// ---
// SCSS TASK
// ---

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var filesize = require('gulp-filesize');
var browserSync = require('browser-sync');
var rucksack    = require('gulp-rucksack');

var config = require('../config').scss;

gulp.task('scss', function () {
    gulp.src(config.src)
        .pipe(sass.sync(config.settings)
        .on('error', sass.logError))
        // .pipe(rucksack(config.prefix))
        .pipe(rucksack({autoprefixer: true}))

        // .pipe(autoprefixer(config.prefix))
        .pipe(filesize())
        .pipe(gulp.dest(config.jekyllCssDes))
        .pipe(browserSync.stream({match: '**/*.css'}))
        .pipe(gulp.dest(config.cssDest));
});
