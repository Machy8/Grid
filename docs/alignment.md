# Alignment

There are all possible features including flexbox. Some classes are available with prefixes so you can use different value for each device. If so, there is *(prefixes)* in the title of the section. If something is not clear, see the examples.

**Float**
- **Left:** float-left | content-float-left
- **Right:** float-right | content-float-right
- **Right:** float-none | content-float-none
 
**Clear**
- **Left:** clear-left | content-clear-left 
- **Right:** clear-right | content-clear-right
- **Both:** clear-both | content-clear-both
- **None:** clear-none | content-clear-none
 
**Flexbox align self**
- **Top:** self-top
- **Bottom:** self-bottom
- **Center:** self-centered
- **Baseline:** self-baseline
- **Stretched:** self-stretched
- **Horizontally centered:** horizontally-centered | x-centered

**Flex justify content (prefixes)**
- **Left:** content-left
- **Right:** content-right
- **Centered:** content-centered
- **Space around:** content-wrapped
- **Space between:** content-apart

**Flexbox direction and orientation (prefixes)**
- **Row:** direction-row
- **Reversed row:** direction-reversed-row
- **Column:** direction-column
- **Reversed column:** direction-reversed-column

**Flexbox wrap**
- **Wrap:** wrap
- **Reverse:** wrap-reverse
- **Nowrap:** nowrap

**Flexbox items**
- **Top:** items-top
- **Bottom:** items-bottom
- **Centered:** items-centered
- **Baseline:** items-baseline
- **Stretched:** items-stretched

**Flexbox lines**
- **Top:** lines-top
- **Bottom:** lines-bottom
- **Centered:** lines-centered
- **Stretched:** lines-stretched
- **Space around:** lines-wrapped
- **Space between:** lines-apart

**Vertical alignment**
- **Top** valign-top | content-valign-top
- **Bottom:** valign-bottom | content-valign-bottom
- **Middle:** valign-middle | content-valign-middle
- **Baseline:** valign-baseline | content-valign-baseline
- **Super:** valign-super | content-valign-super
- **Sub:** valign-sub | content-valign-sub

- **Centered (relative pos.):** vertically-centered | y-centered
- **Centered (absolute pos.):** vertically-centered-absolute | y-centered-absolute


## Examples
````Html
<!-- Alias for s-content-left | Is better to use alias when there will be no change for other devices -->
<div class="content-left">
Some content
</div>

<div class="s-content-centered m-content-left">
Some content
</div>

<!-- Alias for s-row -->
<div class="direction-row">
Some content
</div>

<div class="s-column m-row">
Some content
</div>
````
