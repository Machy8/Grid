#Grid
- CSS framework based on Flexbox.
- Contains: [Normalize](https://github.com/necolas/normalize.css/blob/master/normalize.css) + Grid

* Main
	* [Grid system](#grid-system)
	* [Alignment](#alignment)
	* [Ordering](#ordering)
* Extra
	* [Sizes](#sizes)
	* [Display types](#display-types)
	* [Visibility](#visibility)
	* [Text formatting](#text-formatting)
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
Is available for Default, Extra small, Small and Medium devices and all you need to do is
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
	- Use prefixes for devices and for landscape. Portrait orientation affects the landscape orientation.
	- Example: 
		- xs-content-left // Extra small, content left, portrait
		- xs-ls-content-left // Extra small, content left, landscape
	- **Left:** content-left
	- **Right:** content-right
	- **Centered:** content-centered
	- **Space around:** content-wrapped
	- **Space between:** content-apart
- **Direction and orientation**
	- Use prefixes for devices.
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

##Extra
###Display types

- **Content**
	- **Inline:** inline-content
	- **Inline block:** inline-block-content
	- **Block:** block-content
- **Self**
	- **Inline:** inline
	- **Inline block:** inline-block
	- **Block:** block

###Visibility

For *hide* and *visible* for landscape orientation use landscape selector

- **Hide**
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
	- Visible display types
		- -inline
		- -inline-block
		- -flex
		- **Example:** xs-visible-flex // visible with display: flex
- **Opacity**
	- **Transparent:** transparent
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



###Element radius

- **No radius:** square
- **Circle:** circle

###Clearfix
Grid is using micro clearfix:  **clearfix** class.
