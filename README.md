#Grid
![version 1.4.0](https://img.shields.io/badge/version-1.4.0-blue.svg)
[![License](https://img.shields.io/badge/license-New%20BSD-blue.svg)](https://github.com/Machy8/Macdom/blob/master/license.md)
- CSS framework based on Flexbox.
- Contains: [Normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css) + Grid

**Navigation**

* [Grid system](#grid-system)
* [Alignment](#alignment)
* [Ordering](#ordering)
* [Sizes](#sizes)
* [Display types](#display-types)
* [Visibility](#visibility)
* [Text formatting](#text-formatting)
* [List formatting](#list-formatting)
* [Element radius](#element-radius)
* [Overflow](#overflow)
* [Cursor](#cursor)
* [Clearfix](#clearfix)

##Grid system

- Flex - **flex** class
- 4 sizes
	- Small - **s** | < 641px | Tablet
	- Medium - **m** | > 641px | Desktop
	- Large - **l** | > 1025px | Desktop HD
	- Extra large - **xl** | > 1441px | > Desktop HD
- 20 column fluid grid (affects self)
	- sizes: 5, 10, 15..., 90, 95, 100
	- example: s-95, m-50
	- each size means width in percentages

##Alignment
###Self

- **Float**
	- **Left:** float-left
	- **Right:** float-right
- **Clear**
	- **Left:** clear-left
	- **Right:** clear-right
	- **Both:** clear-both
- **Align self**
	- **Top:** self-top
	- **Bottom:** self-bottom
	- **Center:** self-centered
	- **Baseline:** self-baseline
	- **Stretched:** self-stretched
	- **Horizontally centered:** x-centered

###Content

- **Float**
	- **Left:** content-float-left
	- **Right:** content-float-right
- **Clear**
	- **Left:** content-clear-left
	- **Right:** content-clear-right
	- **Both:** content-clear-both
- **Justify content**
	- **Left:** content-left
	- **Right:** content-right
	- **Centered:** content-centered
	- **Space around:** content-wrapped
	- **Space between:** content-apart
- **Direction and orientation**
	- Use prefixes - s, m, l, xl
	- **Row:** *-row
	- **Reversed row:** *-reversed-row
	- **Column:** *-column
	- **Reversed column:** *-reversed-column
- **Wrap**
	- **Wrap:** wrap
	- **Reverse:** wrap-reverse
- **Grow:** grow


###Items

- **Top:** items-top
- **Bottom:** items-bottom
- **Centered:** items-centered
- **Baseline:** items-baseline
- **Stretched:** items-stretched

###Lines

- **Top:** lines-top
- **Bottom:** lines-bottom
- **Centered:** lines-centered
- **Stretched:** lines-stretched
- **Space around:** lines-wrapped
- **Space between:** lines-apart

##Ordering
- The parent element display property must be set to flex (use flex class)
- Use prefixes s, m, l, xl
- *-order-(1-5)

##Display types

- Use prefixes - s, m, l, xl
- **Inline:** *-inline
- **Inline block:** *-inline-block
- **Block:** *-block

##Visibility

- **Display**
	- Use prefixes - s, m, l, xl
	- **Show** - *-(inline | inline-block | flex)-show
	- **Hide** - *-hidden
- **Opacity**
	- **Transparent:** transparent
	- **Transparency:** transparency-(1-4 always increased by 0.2)
	- **Opacity 1:** opaque

##Text formatting

- **Alignment**
	- **Centered:** text-centered
	- **Left:** text-left
	- **Right:** text-right
	- **Justify:** text-justify
- **Weight**
	- **Bold:** text-bold
	- **Lighter:** text-lighter
	- **Normal:** text-normal-weight
- **Style**
	- **Underline:** text-underline
	- **Overline:** text-overline
	- **Line through:** text-baseline
	- **None:** text-none-decoration
- **Transform**
	- **Uppercase:** text-uppercase
	- **Lowercase:** text-lowercase
	- **Capitalize:** text-capitalize
	- **None:** text-none-transform
- **Words**
	- **No wrap:** text-nowrap
	- **Break:** break-words
	- **Break all:** break-all
	- **Keep all:** keep-all
- **Cutted text (dots at the end):** cutted-text
- **Normal text (clear text):** text-normal

##List formatting

- **Style**
	- **No style:** list-none-style
	- **Disc:** list-disc
	- **Square:** list-square
	- **Decimal:** list-decimal
- **Position**
	- **Inside:** list-inside
	- **Outside:** list-outside

##Element radius

- **No radius:** square
- **Rounded:** rounded-(1-4 always increased by 2)
- **Circle:** circle

##Overflow

- **Auto:** overflow-auto
- **Hidden:** overflow-hidden

##Cursor

- **Auto:** cursor-auto
- **Default:** cursor-default
- **Pointer:** cursor-pointer
- **Wait:** cursor-wait

##Clearfix
Grid contains micro clearfix:  **clearfix** class.
