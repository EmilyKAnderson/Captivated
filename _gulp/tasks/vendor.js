// ---
// JS TASK &--reload
// ---

// plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat');

// configfile
var config = require('../config').vendor;

// tasks
gulp.task('vendor', function () {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(concat(config.concatFilename))
        .pipe(gulp.dest(config.jekyllJsDest))
        .pipe(gulp.dest(config.jsDest));
});

gulp.task('js--reload', ['js', 'browsersyncReload']);
