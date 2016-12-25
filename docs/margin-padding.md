# Margin & padding

Margin and padding component are used for small indentation. You can customize the max size for both of them in variables.sass. Margin and padding components are commented and not compiled in default settings. Default max size is 50 increased from 5 by 5.

- **Whole frame:** margin|padding-(2-50)
- **Frame by side:** margin|padding-top|left|right|bottom-(2-50|none)
- **Frame by axis:** margin|padding-x|y-(2-50|none)

## Examples
````Html
<div class="margin-20 padding-top-50">
Some content
</div>

<div class="padding-15 margin-x-5">
Some content
</div>
````
