/* Just a simple script for composing css components */

var component, min,
	fs = require('fs'),
	composed = '',
	normalizeText = '/*! normalize.css v4.2.0 | MIT License | github.com/necolas/normalize.css',
	gridText = 'Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.*/',
	header = normalizeText + ' | ' + gridText,
	components = [
		'normalize',
		'dependency/viewport',
		'dependency/border-box',
		'html-body',
		'text',
		'list',
		'shapes',
		'frames',
		'visibility',
		'overflow',
		'cursor',
		'float-clear',
		'x-centered',
		'vertical-align',
		'grow',
		'wrap',
		'alignment/align-self',
		'alignment/align-items',
		'alignment/align-content',
		'grid-system/small',
		'grid-system/medium',
		'grid-system/large',
		'grid-system/extra-large',
		'dependency/flex-display',
		'clearfix',
		'resets'
		];

for (component of components) {
	composed += getContent(component);
}

composed = composed.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '');
composed = (composed.replace(/\n+/g, '\n')).trim();
putContent(composed + '\n');

composed = composed.replace(/\n/g, '');
composed = (composed.replace(/(?:  |\t)/g, '')).trim();
putContent(composed, true);

console.log('Done!');

function getContent() {
	var file = fs.readFileSync(__dirname + '/components/' + component + '.css', 'utf8');

	return '\n' + file.trim();
}

function putContent(content, min)
{
	var version;

	min = min || false;
	content = header + '\n' + content;
	version = 'grid';
	version += min ? '.min' : '';
	fs.writeFileSync(__dirname + '/dist/' + version + '.css', content);
}