# Contributing and editing

If you want to edit the css you will need to install.

- gulp
- gulp-autoprefixer
- gulp-clean-css (if you want to minify the output css)
- gulp-rename (if you want to minify the output css)
- gulp-sass
- gulp-sourcemaps
- backstopjs (if would want to send pull request)
- and is good to have support of the sass syntax in your editor

To run the preprocessor, open console, go into the directory with the *grid-css-framework* repository and run "gulp" task. This will run the gulp watch task and the first compilation.

## Contributing - coding standard
- The file must be indented by 4 spaces
- There must a blank line on the end of the file
- There must be one blank line before each definition of selector derived from **&** or before the first one after component mixin
- There must be two blank lines before each definition of selector (except the first one) that is not derived from **&**
- There must be one blank line before else or else if statement
- There must be a file header followed by one blank line
- Each definition of mixin or function must be commented. The comment must start by \\\\\
- Each definition of variable in variables.sass must contain information in comment where is used
- The SASS syntax is prefered before the SCSS
- There must be two blank lines before mixin or function definition
- Css selectors, variables, mixins etc. must be declared only in the English language
