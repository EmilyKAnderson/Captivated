// ---
// DEFAULT TASK (when calling gulp)
// ---

// plugins
var gulp = require('gulp');

// task
gulp.task('default', [
    'scss',
    'vendor',
    'js',
    'jekyll--build'
]);
