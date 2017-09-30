# Full sizes

Element with one of the full size (width, height) class inherits the parent size. You can use the *content-* prefix in order to affect parent first children.

- **Grow**: grow | content-grow
- **Grow none (resets flexbox grow):** grow-none | content-grow-none
- **Full window width:** full-window-width
- **Full window height:** full-window-height
- **Full window sizes:** full-window-sizes (combination of window width and height)
- **Full parent width:** full-width | content-full-width
- **Full parent height:** full-height | content-full-height
- **Full parent sizes:** full-parent-sizes (combination of parent width and height)

## Example
````Html
<div style="width: 200px; height: 50px">
	<div class="full-width"></div>
</div>

<div class="content-full-width" style="width: 200px; height: 50px">
	<div></div>
</div>
````
