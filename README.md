#Grid
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
* [Clearfix](#clearfix)

##Grid system

- Container - **container** class
- Border box - **border-box** class
- Flex - **flex** class
- 4 sizes
	- Small - **s** | < 641px | Tablet
	- Medium - **m** | > 641px | Desktop
	- Large - **l** | > 1025px | Desktop HD
	- Extra large - **xl** | > 1441px | > Desktop HD
- 20 column fluid grid (affects self)
	- sizes: 5, 10, 15..., 90, 95, 100
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
	- Example: s-content-left // Extra small, content left, portrait
	- **Left:** content-left
	- **Right:** content-right
	- **Centered:** content-centered
	- **Space around:** content-wrapped
	- **Space between:** content-apart
- **Direction and orientation**
	- Use prefixes for devices.
	- **Row:** row
	- **Reversed row:** reversed-row
	- **Column:** column
	- **Reversed column:** reversed-column
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
- Values from 1-10

**Example:**

- **s-order-1:** Small, order 1
- **l-order-10:** Large, order 10

##Sizes

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
	- **Small device:** s-hidden
	- **Medium device:** m-hidden
	- **Large device:** l-hidden
	- **Extra large device:** xl-hidden
- **Visible**
	- **Small device:** s-visible
	- **Medium device:** m-visible
	- **Large device:** l-visible
	- **Extra large device:** xl-visible
	- Visible display types
		- -inline
		- -inline-block
		- -flex
		- **Example:** s-visible-flex // visible with display: flex
- **Opacity**
	- **Transparent:** transparent
	- **Transparency:** transparency-(1-4 always increased by 0.2)
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
- **Rounded:** rounded-(1-4 always increased by 2)
- **Circle:** circle

###Clearfix
Grid contains micro clearfix:  **clearfix** class.
