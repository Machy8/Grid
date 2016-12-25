# Grid system

Grid system is mobile first. Thanks to *SASS* you can modify the variables *$widthMax, $widthMin, $widthIncreasedBy* in *helpers => variables* and create how many columns grid you want.
 
| Screen      | Prefix |   Size   |   Device  |
|-------------|:------:|:--------:|:---------:|
|    Small    |    s   |  < 641px |   Phone   |
|    Medium   |    m   |  > 641px |   Tablet  |
|    Large    |    l   | > 1025px |  Desktop  |
| Extra large |   xl   | > 1441px | > Desktop |

## Columns
**There are columns with fixed size where each size means max-width in percentages**
 - 20 column fluid grid (affects self)
 - sizes are from 5 to 100 increased by 5: 5, 10, 15..., 90, 95, 100

**And also auto sizes which works like "reset"**
 - *-auto for auto max-width

## Examples
````Html
<div class="s-95 m-40 l-auto">
 Some content here
</div>
````
