# Full sizes

- Element with one of the full size (width, height) class inherits the parent size
- You can use the *content-* prefix in order to affect parent first children

- **Grow**: grow | content-grow
- **Grow none (reset flexbox grow):** grow-none | content-grow-none
- **Full window width:** full-window-width
- **Full window height:** full-window-height
- **Full element width:** full-width | content-full-width
- **Full element height:** full-height | content-full-height

## Example
````Html
<div style="width: 200px; height: 50px">
	<div class="full-width"></div>
</div>

<div class="content-full-width" style="width: 200px; height: 50px">
	<div></div>
</div>
````
