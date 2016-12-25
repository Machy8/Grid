// This file is a part of Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.

var
	// Modules
	gulp  = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer  = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),

	// Setup
	distDir = "./dist",
	srcDir 	= "./src",
	gulpWatchDir = srcDir + '/**/*.sass',
	targetFile = srcDir + '/grid.sass',
	autoprefixerSettings =['> 5%', 'IE 8', 'IE 9'],
	minVersionSuffix = '.min';

// Tasks
gulp
	.task('sass', function() {
		gulp.src(targetFile)
			.pipe(sass())
			.pipe(autoprefixer({
				browsers: autoprefixerSettings
			}))
			.pipe(gulp.dest(distDir))

			// Minified version
			.pipe(minifyCss())
			.pipe(rename({
				suffix: minVersionSuffix
			}))
			.pipe(gulp.dest(distDir))
	})

	.task('watch', function() {
		gulp.watch(gulpWatchDir, ['sass']);
	})

	.task('default', ['sass', 'watch']);
