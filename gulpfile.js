
'use strict';

var gulp = require('gulp'),
    sassCompiler = require('sass'),
    sass = require('gulp-sass')(sassCompiler),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function () {
	return gulp.src('assets/scss/style.scss')
		.pipe(sass({
            outputStyle: 'compressed'
        }).on('error', function (e) {
			this.emit('end');
			console.log('SCSS error', e);
        }))
        .pipe(autoprefixer({
            cascade: false,
            flexbox: true
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts_common', function () {
    return gulp.src([
            // Namespace
            'assets/js/namespace/app.js',
            
            // Loader
            'assets/js/components/loader.js', 

            // Core utils & theme
            'assets/js/components/utils.js', 
            'assets/js/components/theme.js',

            // Functionality order matters
            'assets/js/components/slider.js', 
            'assets/js/components/header.js', 

            // Section-specific files
            'assets/js/components/sections/*.js',

            // Final boot-up
            'assets/js/main.js', 
        ])
        .pipe(concat('common.js'))
        .pipe(uglify().on('error', function (e) {
            this.emit('end');
            console.error('JS Uglify error - common: ', e);
        }))
        .pipe(gulp.dest('assets/build'));
});

gulp.task('scripts', function () {
    return gulp.src('assets/js/custom/**/*.js')
        .pipe(uglify().on('error', function (e) {
            this.emit('end');
            console.error('JS Uglify error - scripts: ', e);
        }))
        .pipe(gulp.dest('assets/build'));
});

gulp.task('watch', function () {
	gulp.watch('assets/scss/**/*.scss', gulp.series('scss'));
    gulp.watch([
        // Namespace
        'assets/js/namespace/app.js',

        // Loader
        'assets/js/components/loader.js', 

        // Core utils & theme
        'assets/js/components/utils.js', 
        'assets/js/components/theme.js',

        // Functionality order matters
        'assets/js/components/slider.js', 
        'assets/js/components/header.js', 

        // Section-specific files
        'assets/js/components/sections/*.js',

        // Final boot-up
        'assets/js/main.js', 
    ], gulp.series('scripts_common'));
    gulp.watch(['assets/js/custom/**/*.js'], gulp.series('scripts'));
});

gulp.task('default', gulp.parallel('scss', 'scripts_common', 'scripts', 'watch'));