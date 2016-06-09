<?php
/* Just a simple script for composing css components */
$components = [
	"normalize",
	"dependency/viewport",
	"dependency/border-box",
	"html-body",
	"float-clear",
	"x-centered",
	"grow",
	"wrap",
	"text",
	"shapes",
	"list",
	"visibility",
	"cursor",
	"alignment/align-self",
	"alignment/align-items",
	"alignment/align-content",
	"grid-system/small",
	"grid-system/medium",
	"grid-system/large",
	"grid-system/extra-large",
	"dependency/display",
	"clearfix"
];

$composed = "";
const HEADER = '/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css | Grid - Copyright (c) 2016 Vladimír Macháček | For the full copyright and license information, please view the file license.md that was distributed with this source code.*/';

foreach ($components as $component) {
	$composed .= getContent($component);
}
$composed = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $composed);
$composed = trim(preg_replace('/\n+/', "\n", $composed));
putContent($composed . "\n");
$composed = preg_replace('/\n/', '', $composed);
$composed = trim(preg_replace('/(?:  |\t)/', '', $composed));
putContent($composed, TRUE);
echo "Done ";

function getContent($file)
{
	return "\n" . trim(file_get_contents(__DIR__ . '/components/' . $file . ".css"));
}

function putContent($content, $min = FALSE)
{
	$content = HEADER . "\n" . $content;
	$version = 'grid';
	$version .= $min ? '.min' : '';
	file_put_contents(__DIR__ . '/dist/' . $version . '.css', $content);
}
