
// Modules
var gulp  = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename');

// Setup
var distDir 		= "./dist",
	srcDir 		  = "./src",
	targetFile = srcDir + '/grid.sass',
	defaultTasks = ['sass', 'sass-min'];

// Tasks
gulp.task('sass', function() {
	gulp.src(targetFile)
		.pipe(sass())
		.pipe(gulp.dest(distDir))
});

gulp.task('sass-min', function() {
	gulp.src(targetFile)
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(distDir))
});

gulp.task('default', defaultTasks);
