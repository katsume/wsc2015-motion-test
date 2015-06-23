var gulp= require('gulp'),
	named= require('vinyl-named'),
	webpack= require('webpack-stream'),
	gulpIf= require('gulp-if'),
	uglify= require('gulp-uglify'),
	config= require('../config').webpack

gulp.task('webpack', function(){
	return gulp.src(config.webpack.entry)
		.pipe(named())
		.pipe(webpack())
		.pipe(gulpIf(config.uglify, uglify()))
		.pipe(gulp.dest(config.dest));
});
