// This file is a part of Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.

var
	// Modules
	autoprefixer  = require('gulp-autoprefixer'),
	cleanCss = require('gulp-clean-css'),
	gulp  = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),

	// Setup
	distDir = "./dist",
	srcDir 	= "./src",
	gulpWatchDir = srcDir + '/**/*.sass',
	targetFile = srcDir + '/grid.sass',
	sourcemapsDir = '/',
	autoprefixerSettings = ['> 5%', 'IE 8', 'IE 9', 'Safari >= 4'],
	gulpTasks = ['sass', 'sass-min'],
	minVersionSuffix = '.min';

// Tasks
gulp
	.task('sass', function() {
		return gulp.src(targetFile)
			.pipe(sourcemaps.init())
				.pipe(sass())
				.pipe(autoprefixer({
					browsers: autoprefixerSettings
				}))
			.pipe(sourcemaps.write(sourcemapsDir))
			.pipe(gulp.dest(distDir));
	})

	.task('sass-min', function() {
		return gulp.src(targetFile)
			.pipe(sourcemaps.init())
				.pipe(sass())
				.pipe(autoprefixer({
					browsers: autoprefixerSettings
				}))
				.pipe(cleanCss())
			.pipe(rename({
					suffix: minVersionSuffix
				}))
			.pipe(sourcemaps.write(sourcemapsDir))
			.pipe(gulp.dest(distDir));
	})

	.task('watch', function() {
		gulp.watch(gulpWatchDir, gulpTasks);
	});

gulpTasks.push('watch');
gulp.task('default', gulpTasks);
