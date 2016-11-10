'use strict';

var config = require('./config'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	gulpif = require('gulp-if'),
	minifyHTML = require('gulp-htmlmin'),
	compass = require('gulp-compass'),
	browserSync = require('browser-sync');

gulp.task('default', ['serve']);

// browserSync 작업
gulp.task('serve', ['html','compass'],function(){
	browserSync.init(config.browserSync);
	gulp.start('watch');
});
gulp.task('watch', function(){
	gulp.watch(config.dir.html, ['html']);
	gulp.watch(config.compass.src, ['compass']);
});
// Sass - Compass
gulp.task('compass', function(){
	gulp.src(config.compass.src)
		.pipe(compass(config.compass.options))
		.on('error', gutil.log)
		.pipe(browserSync.stream());
});
// HTML
gulp.task('html', function() {
	gulp.src( config.dir.html )
		.pipe( minifyHTML( config.minifyHTML ) )
		.pipe( gulp.dest( config.dir.build ) )
		.pipe( browserSync.stream() );
});