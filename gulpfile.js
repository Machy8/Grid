// This file is a part of Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.

// Modules
var gulp  = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer  = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),

	// Setup
	distDir = "./dist",
	srcDir 	= "./src",
	targetFile = srcDir + '/grid.sass';

// Tasks
gulp
	.task('sass', function() {
		gulp.src(targetFile)
			.pipe(sass())
			.pipe(autoprefixer({
				browsers: ['> 5%', 'IE 8', 'IE 9']
			}))
			.pipe(gulp.dest(distDir))
			.pipe(minifyCss())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest(distDir))
	})

	.task('watch', function() {
		gulp.watch(srcDir + '/**/*.sass', ['sass']);
	})

	.task('default', ['sass', 'watch']);
