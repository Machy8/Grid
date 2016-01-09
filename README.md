#Grid
- Responsive Boilerplate based on flexbox
- Contains: [Normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css) + Grid

* Main
	* [Grid system](#grid-system)
	* [Alignment](#alignment)
	* [Ordering](#ordering)
* Extra
	* [Sizes](#sizes)
	* [Positioning](#positioning)
	* [Display types](#display-types)
	* [Visibility](#visibility)
	* [Text formatting](#text-formatting)
	* [Scrollbar and overflow](#scrollbar-and-overflow)
	* [Background formatting](#background-formatting)
	* [Element radius](#element-radius)
	* [Clearfix](#clearfix)

##Grid system

- Container - **container** class
- Flex - **flex** class
- 6 sizes
	- Default - **d** | < 400px | Phone
	- Extra small - **xs** | > 400px | Phablet
	- Small - **s** | > 550px | Tablet
	- Medium - **m** | > 750px | Desktop
	- Large - **l** | > 1000px | Desktop HD
	- Extra large - **xl** | > 1200px | > Desktop HD
- portrait orientation (default)
- landscape orientation (optionable)
	- selector - **ls-**
- 20 column fluid grid (affects self)
	- sizes: 5, 10, 15... 85, 90, 95, 100
	- each size means width in percentages
- 10 inner columns fluid grid (affects children elements)
	- suffix - **c**

###Landscape orientation
Is available for Mobile, Extra small, Small and Medium devices and all you need to do is
add **ls-** selector for landscape orientation.

###Examples

- Inner columns fluid grid
	- **xs-2c**  - Extra small, 2 columns inside, portrait
	- **xs-ls-2c** -  Extra small, 2 columns inside, landscape
- Self width definition
	- **xs-5** - Extra small, width 5%, portrait
	- **xs-ls-5** - Extra small, width 5%, landscape


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
	- **Horizontally centered:** h-centered

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
	- **Row:** row
	- **Reversed row:** reversed-row
	- **Columns:** columns
	- **Reversed columns:** reversed-columns
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
- Is available for all devices only for portrait orientation (portrait orientation also sets order in landscape orientation).
- The parent element display property must be set to flex (use flex class)
- Values from 1-20

**Example:**

- **xs-order-1:** Extra small, order 1
- **l-order-17:** Large, order 17

##Sizes
###Viewport

- **Total size**
	- **100%:** viewport-100
	- **75%:** viewport-75
	- **50%:** viewport-50
	- **25%:** viewport-25
- **Only height**
	- **100%:** vh-100
	- **75%:** vh-75
	- **50%:** vh-50
	- **25%:** vh-25
- **Only width**
	- **100%:** vw-100
	- **75%:** vw-75
	- **50%:** vw-50
	- **25%:** vw-25


###Normal

- **Total size**
	- **100%:** size-10
	- **90%:** size-9
	- **80%:** size-8
	- **70%:** size-7
	- **60%:** size-6
	- **50%:** size-5
	- **40%:** size-4
	- **30%:** size-3
	- **20%:** size-2
	- **10%:** size-1
- **Only height**
	- **100%:** h-100
	- **95%:** h-95
	- **95%:** h-90
	- ...
	- **10%:** h-10
	- **5%:** h-5
- **Only width**
	- **100%:** w-100
	- **95%:** w-95
	- **95%:** w-90
	- ...
	- **10%:** w-10
	- **5%:** w-5


##Extra
###Positioning

- **Types**
	- **Static:** static-position
	- **Relative:** relative-position
	- **Absolute:** absolute-position
	- **Fixed:** fixed-position
- **Position**
	- **Left:** left
	- **Right:** right
	- **Top:** top
	- **Bottom:** bottom

###Display types

- **Content**
	- **Inline:** inline-content
	- **Inline block:** inline-block-content
	- **Block:** block-content
	- **Table:** table-content
- **Self**
	- **Inline:** inline
	- **Inline block:** inline-block
	- **Block:** block
	- **Table:** table

###Visibility

For landscape use selector

- **Disappearing**
	- **Top:** disappear-top
	- **Bottom:** disappear-bottom
	- **Left:** disappear-left 
	- **Right:** disappear-right
- **Hiding**
	- **Mobile:** hidden
	- **Extra small device:** xs-hidden
	- **Small device:** s-hidden
	- **Medium device:** m-hidden
	- **Large device:** l-hidden
	- **Extra large device:** xl-hidden
- **Visible**
	- **Extra small device:** xs-visible
	- **Small device:** s-visible
	- **Medium device:** m-visible
	- **Large device:** l-visible
	- **Extra large device:** xl-visible
- **Opacity**
	- **Transparent:** transparent
	- **Opacity 0.1:** opacity-1
	- **Opacity 0.2:** opacity-2
	- ...
	- **Opacity 0.8:** opacity-8
	- **Opacity 0.9:** opacity-9
	- **Opacity 1:** opaque



###Text formatting

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

###Scrollbar and overflow

- **Scrollable**
	- **X:** scrollable-x
	- **Y:** scrollable-y
	- **X+Y:** scrollable
- **Scrollbar**
	- **Visible X:** scrollbar-visible-x
	- **Visible Y:** scrollbar-visible-y
	- **Visible:** scrollbar-visible
- **Overflow**
	- **Hidden X:** overflow-hidden-x
	- **Hidden Y:** overflow-hidden-y
	- **Hidden:** overflow-hidden
	- **Visible:** overflow-visible

###Background formatting

- **Repeat**
	- **X:** bg-repeat-x
	- **Y:** bg-repeat-y
	- **Repeat:** bg-repeat
	- **No repeat:** bg-norepeat
- **Position**
	- **Left**
		- **Top:** bg-left-top
		- **Center:** bg-left-center
		- **Bottom:** bg-left-bottom
	- **Center**
		- **Top:** bg-center-top
		- **Center:** bg-centered
		- **Bottom:** bg-center-bottom
	- **Right**
		- **Top:** bg-right-top
		- **Center:** bg-right-center
		- **Bottom:** bg-right-bottom
- **Position type**
	- **Fixed:** bg-fixed
	- **Scroll:** bg-scroll
- **Sizes**
	- **Cover:** bg-cover
	- **100%:**	bg-100
	- **75%:** bg-75
	- **50%:** bg-50
	- **25%:** bg-25

###Element radius

- **No radius 1:** no-radius
- **Radius 1:** radius-1
- **Radius 2:** radius-2
- **Radius 3:** radius-3
- **Radius 4:** radius-4
- **Radius 5:** radius-5
- **Radius 6:** radius-6
- **Radius 7:** radius-7
- **Radius 8:** radius-8
- **Radius 9:** radius-9
- **Radius 10:** radius-10
- **Circle:** circle

###Clearfix
Grid is using micro clearfix:  **clearfix** class.