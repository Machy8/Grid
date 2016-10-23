// This file is a part of Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.

// Modules
var gulp  = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer  = require('gulp-autoprefixer'),
	rename = require('gulp-rename');

// Setup
var distDir = "./dist",
	srcDir 	= "./src",
	targetFile = srcDir + '/grid.sass',
	gulpTasks = ['sass', 'sass-min'];

// Tasks
gulp.task('sass', function() {
	gulp.src(targetFile)
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 version']
		}))
		.pipe(gulp.dest(distDir))
});

gulp.task('sass-min', function() {
	gulp.src(targetFile)
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 version']
		}))
		.pipe(minifyCss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(distDir))
});

gulp.task('watch', function() {
	gulp.watch(srcDir + '/**/*.sass', gulpTasks);
});

gulpTasks.push('watch');
gulp.task('default', gulpTasks);
