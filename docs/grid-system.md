# Grid system

Grid system is mobile first. Thanks to *SASS* you can modify the variables *$widthMax, $widthMin, $widthIncreasedBy* in *helpers => variables* and create how many columns grid you want.
 
| Screen      | Prefix |   Size   |   Device  |
|-------------|:------:|:--------:|:---------:|
|    Small    |    s   |  < 640px |   Phone   |
|    Medium   |    m   |  > 640px |   Tablet  |
|    Large    |    l   | > 1024px |  Desktop  |
| Extra large |   xl   | > 1440px | > Desktop |

## Columns
**There are columns with fixed size where each size means max-width in percentages**
 - 20 column fluid grid (affects self)
 - Sizes are from 5 to 100 increased by 5: 5, 10, 15..., 90, 95, 100
 - You can use `max-width-*` for small screen.

**And also auto sizes which works like "reset"**
 - *-auto for auto max-width

## Examples
````Html
<div class="s-95 m-40 l-auto">
 Some content here
</div>
````
