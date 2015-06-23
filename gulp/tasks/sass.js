var gulp= require('gulp'),
	gulpIf= require('gulp-if'),
	plumber= require('gulp-plumber'),
	sass= require('gulp-ruby-sass'),
	pleeease= require('gulp-pleeease'),
	config= require('../config').sass;

gulp.task('sass', function(){
	return gulp.src(config.src)
		.pipe(plumber())
		.pipe(sass(config.sass))
		.pipe(pleeease(config.pleeease))
		.pipe(gulp.dest(config.dest))
});
