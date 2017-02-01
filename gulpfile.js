// This file is a part of Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.

var
	// Modules
	autoprefixer  = require('gulp-autoprefixer'),
	cleanCss = require('gulp-clean-css'),
	gulp  = require('gulp'),
	pipe_if = require('gulp-if'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),

	// Setup
	distDir = "./dist",
	srcDir 	= "./src",
	gulpWatchDir = srcDir + '/**/*.sass',
	targetFile = srcDir + '/grid.sass',
	sourcemapsDir = '/',
	autoprefixerSettings = ['> 5%', 'last 2 versions', 'IE 8', 'IE 9', 'Safari >= 4'],
	defaultTasks = ['grid', 'grid.min', 'gridWatch'],
	minVersionSuffix = '.min';

/**
 * @param {boolean} minify
 * @returns {*}
 */
function compileCss(minify){

	minify = typeof minify !== 'undefined' && minify;

	return gulp.src(targetFile)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: autoprefixerSettings
		}))
		.pipe(pipe_if(minify, cleanCss()))
		.pipe(pipe_if(minify, rename({
			suffix: minVersionSuffix
		})))
		.pipe(sourcemaps.write(sourcemapsDir))
		.pipe(gulp.dest(distDir));
}

// Tasks
gulp
	.task('grid', function(){
		compileCss();
	})
	.task('grid.min', function(){
		compileCss(true);
	})
	.task('gridWatch', function() {
		gulp.watch(gulpWatchDir, ['grid', 'grid.min']);
	})
	.task('default', defaultTasks);
