// This file is a part of Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.

const

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
	distDir = './dist',
	srcDir 	= './src',
	testDir = './tests',
	gulpWatchDir = srcDir + '/**/*.sass',
	gridTargetFile = srcDir + '/grid.sass',
	gridMobileTargetFile = srcDir + '/grid.mobile.sass',
	sourcemapsDir = '/',
	autoprefixerMobilePrefixes = ['iOS >= 6', 'Android >= 4.1', 'UCAndroid >= 11', 'ExplorerMobile >= 11'],
	autoprefixerDesktopPrefixes = ['> 5%', 'last 2 versions', 'IE 10'],
	autoprefixerSettings = autoprefixerDesktopPrefixes.concat(autoprefixerMobilePrefixes),
	defaultTasks = [
		'grid', 'grid.min', 'grid.dev',
		'grid.mobile', 'grid.mobile.min', 'grid.mobile.dev',
		'grid.test',
		'watch'
	],
	minVersionSuffix = 'min',
	defaultFileType = 'css';


// Tasks
gulp

	// Clear version
	.task('grid', function(){
		compileCss();
	})
	.task('grid.min', function(){
		compileCss({
			minify: true
		});
	})
	.task('grid.dev', function(){
		compileCss({
			noPrefixes: true,
			cssMap: false,
			fileType: 'scss',
		});
	})

	// Clear version
	.task('grid.mobile', function(){
		compileCss({
			targetFile: gridMobileTargetFile,
			prefixes:  autoprefixerMobilePrefixes
		});
	})
	.task('grid.mobile.min', function(){
		compileCss({
			targetFile: gridMobileTargetFile,
			minify: true
		});
	})
	.task('grid.mobile.dev', function(){
		compileCss({
			targetFile: gridMobileTargetFile,
			noPrefixes: true,
			cssMap: false,
			fileType: 'scss',
		});
	})

	// Version for tests
	.task('grid.test', function(){
		compileCss({
			targetFile: gridTargetFile,
			prefixes: autoprefixerSettings.concat(['Safari >= 4']),
			outputDir: testDir,
			cssMap: false
		});
	})

	// Watch and default tasks
	.task('watch', function() {
		gulp.watch(gulpWatchDir, defaultTasks);
	})
	.task('default', defaultTasks.concat(['watch']));


/**
 * @param {object} settings
 * @param {string} settingsOption
 * @param {string} settingsType
 * @returns {boolean}
 */
function settingsExist(settings, settingsOption, settingsType) {
	return settingsOption in settings && typeof settings[settingsOption] === settingsType;
}


/**
 * @param {object} settings
 * @returns {*}
 */
function compileCss(settings){

	var minify = false,
		targetFile = gridTargetFile,
		prefixes = autoprefixerSettings,
		prefixesAllowed = true,
		fileType = defaultFileType,
		fileSuffix = minVersionSuffix,
		outputDir = distDir,
		cssMap = true;

	if (typeof settings === 'object') {
		if (settingsExist(settings, 'minify', 'boolean')) minify = settings.minify;
		if (settingsExist(settings, 'targetFile', 'string')) targetFile = settings.targetFile;
		if (settingsExist(settings, 'cssMap', 'boolean')) cssMap = settings.cssMap;
		if (settingsExist(settings, 'fileType', 'string')) fileType = settings.fileType;
		if (settingsExist(settings, 'noPrefixes', 'boolean')) prefixesAllowed = ! settings.noPrefixes;
		if (settingsExist(settings, 'prefixes', 'object')) prefixes = settings.prefixes;
		if (settingsExist(settings, 'outputDir', 'string')) outputDir = settings.outputDir;
	}

	return gulp.src(targetFile)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(pipe_if(prefixesAllowed, autoprefixer({
				browsers: prefixes
			})
		))
		.pipe(pipe_if(minify, cleanCss()))
		.pipe(pipe_if(minify, rename({
				suffix: '.' + fileSuffix
			})
		))
		.pipe(rename({
				extname: '.' + fileType
			})
		)
		.pipe(pipe_if(cssMap, sourcemaps.write(sourcemapsDir)))
		.pipe(gulp.dest(outputDir));
}
