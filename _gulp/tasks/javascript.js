// ---
// COMPRESSJS TASK
// (puts files together, minifies and saves as 'scripts.min.js')
// ---

// plugins
// var gulp = require('gulp'),
//     uglyfly = require('gulp-uglyfly');
//
// var config = require('../config').compressjs;
//
// //task
// gulp.task('compressjs', function() {
//     gulp.src(config.src)
//         .pipe(uglyfly())
//         .pipe(gulp.dest(config.dest));
// });


// plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglyfly = require('gulp-uglyfly');
    concat = require('gulp-concat');

// configfile
var config = require('../config').js;

// tasks
gulp.task('js', function () {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(uglyfly())
        .pipe(concat(config.concatFilename))
        .pipe(gulp.dest(config.jekyllJsDest))
        .pipe(gulp.dest(config.jsDest));
});
