# Alignment
There are all possible features including flexbox. Some classes are available with prefixes so you can use different value for each device. If so, there is *(prefixes)* in the title of the section. If something is not clear, see the examples.

## Self

**Float**
- **Left:** float-left
- **Right:** float-right
 
**Clear**
- **Left:** clear-left
- **Right:** clear-right
- **Both:** clear-both
 
**Align self**
- **Top:** self-top
- **Bottom:** self-bottom
- **Center:** self-centered
- **Baseline:** self-baseline
- **Stretched:** self-stretched
- **Horizontally centered:** x-centered

## Content

**Float**
- **Left:** content-float-left
- **Right:** content-float-right

**Clear**
- **Left:** content-clear-left
- **Right:** content-clear-right
- **Both:** content-clear-both

**Justify content (prefixes)**
- **Left:** content-left
- **Right:** content-right
- **Centered:** content-centered
- **Space around:** content-wrapped
- **Space between:** content-apart

**Direction and orientation (prefixes)**
- **Row:** direction-row
- **Reversed row:** direction-reversed-row
- **Column:** direction-column
- **Reversed column:** direction-reversed-column


**Wrap**
- **Wrap:** wrap
- **Reverse:** wrap-reverse


- **Grow:** grow
- **Full width:** full-width


**Vertical alignment**
- **Top** content-valign-top
- **Bottom:** content-valign-bottom
- **Middle:** content-valign-middle
- **Baseline:** content-valign-baseline

## Items

- **Top:** items-top
- **Bottom:** items-bottom
- **Centered:** items-centered
- **Baseline:** items-baseline
- **Stretched:** items-stretched

## Lines

- **Top:** lines-top
- **Bottom:** lines-bottom
- **Centered:** lines-centered
- **Stretched:** lines-stretched
- **Space around:** lines-wrapped
- **Space between:** lines-apart

## Vertical alignment

- **Top** valign-top
- **Bottom:** valign-bottom
- **Middle:** valign-middle
- **Baseline:** valign-baseline
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
