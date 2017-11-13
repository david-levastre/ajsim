let gulp               = require('gulp');
let fs                 = require('fs');
let es                 = require('event-stream');
let path               = require('path');
let uglify             = require('gulp-uglify');
let sass               = require('gulp-sass');
let cleanCSS             = require('gulp-clean-css');
let rename             = require('gulp-rename');
let autoprefixer       = require('gulp-autoprefixer');
let include            = require('gulp-include');
let notify             = require("gulp-notify");
let imagemin           = require("gulp-imagemin");
let browserSync        = require('browser-sync');
let sourcemaps         = require('gulp-sourcemaps');

let srcPath            = 'templates/src/';            // Path to the source files
let distPath           = 'templates/dist/';            // Path to the distribution files
let reload             = browserSync.reload;

// Paths that gulp should watch
let watchPaths        = {
    scripts:     [
        srcPath+'assets/js/*.js',
        srcPath+'assets/js/**/*.js'
    ],
    images:     [
        srcPath+'assets/img/**'
    ],
    sass:         [
        srcPath+'assets/sass/*.scss',
        srcPath+'assets/sass/**/*.scss'
    ],
    fonts:      [
        srcPath+'assets/fonts/**'
    ],
    html:          [
        srcPath+'**/*.html',
        srcPath+'**/*.php'
    ]
};

// Task for sass files
gulp.task('sass', () => {
    return gulp
        .src(srcPath + 'assets/sass/styles.scss')
        .pipe(include())
        .pipe(sass())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running sass task" }))
        .pipe(autoprefixer({ browsers: ['> 1%', 'last 2 versions'], cascade: false }))
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running sass task" }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running sass task" }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(distPath + 'assets/css'));
});

// Javscript task
gulp.task('scripts', function(){
    return gulp
        .src(srcPath + 'assets/js/*.js')
        .pipe(include())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running scripts task" }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(distPath + 'assets/js'));
});

// Font task
gulp.task('fonts', () => {
    return gulp
        .src([srcPath + 'assets/fonts/**'])
        .pipe(gulp.dest(distPath + 'assets/fonts'));
});

// HTML task
gulp.task('html', () => {
    return gulp
        .src([srcPath + '*.html'])
        .pipe(include())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running html task" }))
        .pipe(gulp.dest(distPath));
});

// Images task
gulp.task('images', () => {
    return gulp
        .src(srcPath + 'assets/img/**')
        .pipe(imagemin())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running image task" }))
        .pipe(gulp.dest(distPath + 'assets/img'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(watchPaths.scripts, ['scripts']);
    gulp.watch(watchPaths.images, ['images']);
    gulp.watch(watchPaths.sass, ['sass']);
    gulp.watch(watchPaths.html, ['html']);
    gulp.watch(watchPaths.fonts, ['fonts']);
});

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: distPath
    }
  });
  gulp.watch(distPath + '**').on('change', reload);
});

// Default task
gulp.task('default', ['scripts', 'images', 'sass', 'fonts', 'html', 'watch', 'serve']);
