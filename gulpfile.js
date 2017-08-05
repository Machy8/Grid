// This file is a part of Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.

"use strict";

const

	// Modules
	autoprefixer = require('gulp-autoprefixer'),
	cleanCss = require('gulp-clean-css'),
	gulp = require('gulp'),
	pipe_if = require('gulp-if'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	sassLint = require('gulp-sass-lint'),
	sourcemaps = require('gulp-sourcemaps'),
	fs = require('fs'),

	// Setup
	directories = {
		dist: './dist',
		src: './src',
		tests: './tests',
		watch: './src/**/*.sass',
		sourcemaps: './',
		ampTestParts: './tests/amp-test-parts'
	},

	targetFiles = {
		grid: directories.src + '/grid.sass',
		gridMobile: directories.src + '/grid.mobile.sass',
		testsHelpers: directories.tests + '/helpers/tests-helpers.sass'
	},

	autoprefixerPrefixes = {
		mobile: ['iOS >= 6', 'Android >= 4.1', 'UCAndroid >= 11', 'ExplorerMobile >= 11'],
		desktop: ['> 5%', 'last 2 versions', 'IE 10'],
	},

	autoprefixerSettings = autoprefixerPrefixes.desktop.concat(autoprefixerPrefixes.desktop),
	minVersionSuffix = 'min',
	defaultFileType = 'css',

	tasks = {
		grid: null,

		gridMin: {
			minify: true
		},

		gridDev: {
			noPrefixes: true,
			cssMap: false,
			fileType: 'scss'
		},

		gridMobile: {
			targetFile: targetFiles.gridMobile,
			prefixes: autoprefixerPrefixes.mobile
		},

		gridMobileMin: {
			targetFile: targetFiles.gridMobile,
			minify: true
		},

		gridMobileDev: {
			targetFile: targetFiles.gridMobile,
			noPrefixes: true,
			cssMap: false,
			fileType: 'scss'
		}
	};

// Watch and default tasks
gulp
	.task('compile', compile)

	.task('watch', function() {
		gulp.watch(directories.watch, ['compile']);
	})

	.task('default', ['compile', 'watch'])

	.task('generateAmpTestFile', generateAmpTestFile)

	.task('checkSassCodingStandard', checkSassCodingStandard);


/**
 * @param {object} settings
 * @param {string} settingsOption
 * @param {string} settingsType
 * @returns {boolean}
 */
function settingsExist(settings, settingsOption, settingsType) {
	return settingsOption in settings && typeof settings[settingsOption] === settingsType;
}


function compile() {
	for (var task in tasks) {
		var minify = false,
			targetFile = targetFiles.grid,
			prefixes = autoprefixerSettings,
			prefixesAllowed = true,
			fileType = defaultFileType,
			fileSuffix = minVersionSuffix,
			outputDir = directories.dist,
			cssMap = true,

			taskSettings = tasks[task];

		if (taskSettings && typeof taskSettings === 'object') {
			if (settingsExist(taskSettings, 'minify', 'boolean')) minify = taskSettings.minify;
			if (settingsExist(taskSettings, 'targetFile', 'string')) targetFile = taskSettings.targetFile;
			if (settingsExist(taskSettings, 'cssMap', 'boolean')) cssMap = taskSettings.cssMap;
			if (settingsExist(taskSettings, 'fileType', 'string')) fileType = taskSettings.fileType;
			if (settingsExist(taskSettings, 'noPrefixes', 'boolean')) prefixesAllowed = ! taskSettings.noPrefixes;
			if (settingsExist(taskSettings, 'prefixes', 'object')) prefixes = taskSettings.prefixes;
			if (settingsExist(taskSettings, 'outputDir', 'string')) outputDir = taskSettings.outputDir;
		}

		gulp.src(targetFile)
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
			.pipe(pipe_if(cssMap, sourcemaps.write(directories.sourcemaps)))
			.pipe(gulp.dest(outputDir));
	}

}


function checkSassCodingStandard() {
	gulp.src(directories.watch)
		.pipe(sassLint())
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());
}


function generateAmpTestFile() {
	var
		partBeforeStyle = fs.readFileSync(directories.ampTestParts + "/before-style.txt", 'utf8'),
		partAfterStyle = fs.readFileSync(directories.ampTestParts + "/after-style.txt", 'utf8'),
		gridCss = fs.readFileSync(directories.dist + "/grid.css", 'utf8'),
		fileContent = partBeforeStyle + gridCss + partAfterStyle;

	fs.writeFile(directories.tests + '/amp-test.html', fileContent, function () {
		console.log ('Amp test file successfully generated')
	});
}
