// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

var src  = './_build/';
var dest = './';

module.exports = {

    scss: {
        src: src + 'scss/**/*.scss',
        settings: {
            outputStyle: 'compressed'
        },
        cssDest: src + 'css/',
        jekyllCssDes: dest + '_site/css/',
        prefix: [
            'last 3 versions',
            'ios 8',
            'android 4',
            'ie > 9'
        ]
    },

    vendor: {
        src : [  // source js file
          src + 'vendor/waypoints/lib/jquery.waypoints.min.js',
          src + 'vendor/typed.js/dist/typed.min.js',
          src + 'vendor/slick-carousel/slick/slick.min.js'
        ],
        concatFilename: 'vendor.js', // result filename
        jekyllJsDest: dest + '_site/js/',
        jsDest: src + 'js/'
    },

    js: {
        src: src + 'js/**/*.js',
        // concatFilename: 'scripts.min.js', // result filename
        jekyllJsDest: dest + '_site/js/',
        // jsDest: src + 'js/'
    },

    jekyll: {
        buildMessage: '<span style="color: grey">Building</span> jekyll'
    },

    browsersync: {
        server: {
            baseDir: dest + '_site',
            reloadDelay: 2000,
            debounce: 200,
            notify: true,
            ghostMode: {
                clicks: true,
                location: true,
                forms: true,
                scroll: false
            }
        }
    },

    watch: {
        jekyllSource: [    // Files that trigger a Jekyll rebuild
            src + 'images/**/*.png',
            src + 'images/**/*.jpg',
            src + 'images/**/*.svg',
            src + '_posts/*.md',
            src + '_posts/*.markdown',
            src + '_data/*.yml',
            src + '**/*.html',
            '!' + dest + '_site/**/*.*'
        ]
    }

};
