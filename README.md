# Barebones Shopify Starter Theme

This is a very bare bones Shopify theme intended as a basis for custom Shopify theme development. This project is set up to allow one or more developers to work on a custom Shopify theme, while using their own text editor and local development environment. 

Once you've cloned this repo to your computer, you'll want to rename the repo's directory and delete the git folder inside (This directory will become your new repo for your project).

##Global Dependencies

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](http://bundler.io/)
* [Node](https://nodejs.org/en/)
* [Gulp](http://gulpjs.com/)

##How to use this project
1. Rename the `custom-theme-name` directory to the name of your new custom theme.
2. Change the value of the `themePath` variable on line #3 of the `constants.js` file to your new theme's name.
3. `cd` into the project directory and run `npm install` to download all dev dependancies/node-modules
4. Now we need to create an API key in our Shopify Store. Go to: https://your_store_name.myshopify.com/admin/apps/private and create a private app. You can name it whatever you want, we're only interested in the credentials it creates for us. 
5. Make a copy of `config_SAMPLE.json` and call it —> `config.json`
6. Make a copy of `/custom-theme-name/config_SAMPLE.yml` and call it —> `config.yml`
7. Copy the API key, Password, and store URL to those files. The Store URL should be in this format `yourstorename.myshopify.com`
8. Now we're going to use the [shopify_theme gem](https://github.com/Shopify/shopify_theme) to upload a copy of our theme to our Shopify store. 	
 	1. `cd` into your `/custom-theme-name/` directory and run: `theme replace`. This will replace the current/default theme with your theme.
	2. Now we need to grab our `theme_id` number for the master theme.  You can find that by clicking on the 'Customize theme' button. You'll be redirected to a URL with the following structure:
	`https://<your-shop-name>.myshopify.com/admin/themes/theme_id WILL_BE_HERE/editor`
9. Add the theme id number to your `config.json` & `/custom-theme-name/config.yml` files.

#Shopify Multi-Dev Theme Development Workflow

**Set up the new feature-branch & feature-branch theme:**

+ Pull from master and checkout a new branch ie. `git clone -b "feature-branch"`
+ Log into Shopify store admin
+ Duplicate the live/published theme
+ Rename the duplicated theme to the name of your branch. ie. `feature-branch Theme`
+ Click “Customize Theme” to grab the theme ID for the `Feature-Branch Theme` in the URL (example: .../admin/themes/9542224/settings)
+ Add the theme_id number to `config.json` & `/custom-theme-name/config_.yml` files to point to your `Feature-Branch Theme` (**very** *important step*)

**Work locally on your feature:**

+ run `gulp` and start your work
+ Preview your work by navigating to that theme in Shopify admin and clicking preview

**Add compleated Feature to Master Theme:**

+ When you're ready to add your changes/feature to the master theme —> Make a pull request to master
+ Code is reviewed and accepted —> Then merged into master
+ Ensuring that the local copy of `config.json` & `/custom-theme-name/config_.yml` have been changed to the master theme's theme_id number - the shopify_theme gem is used to push the master theme to Shopify
	+ `cd` into the `custom-theme-name` directory and run: `theme replace`.
	
### Multi-Dev Gotchas
* You'll need to create your own `config.json` and `/custom-theme-name/config_.yml` files for every branch/branch-theme relationship you make. Don't forget to add your feature-branch-theme theme_id number to those files.

**Always** try to remember to stop gulp if you are checking out another branch. If you don't, your changes will be pushed to the last theme you were working on. Let's assume you were working on `test-branch` and you then checked out `foo-branch` without stopping gulp first. You make some changes to `foo-branch` but since gulp wasn't stopped, it's still pushing changes to the `test-branch`. 

Here's what to do:

    1. Commit your changes to `foo-branch`
    2. Stop gulp
    3. Restart gulp (this will actually push the changes to the Foo-Branch Theme)
    4. Stop gulp & checkout `test-branch`
    5. Restart gulp (this will push the correct files to the Test-Branch Theme)



### Naming Conventions

Just like the [TWG front-end scaffolding](https://github.com/twg/frontend-scaffolding) this project follows a variation of the BEM naming convention. BEM stands for Block Element Modifier. Blocks, are reusable components that together make up the various views of a web application or site. Elements are the components within a block. Modifiers are classes that can be applied to blocks or elements to alter their default appearance. More info on BEM in general can be found here:  [http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). Our version of BEM follows a slightly different syntax as it uses dash exclusively instead of a combination of dashes and underscores.

```
.block
.block-element
.block--modifier
.u-utility
```

Since dashes indicate BEM structure they should **not** be used for multi-word names, instead camel case should be used.

### Breakpoints

This project comes with some predefined default breakpoints, though you can easily override them as you see fit. 

They include:

* `desk` - 1024px and greater
* `large` - greater than 480px
* `portable` - less than 1024px
* `lap` - greater than 480px and less than 1024px
* `palm` - 480px and down

### Container

There is a generic `.container` element that can be used to provide your site with a maximum width. If the browser goes beyond the container's maximum width, container will horizontally centre itself. By default, the container's max-width is set to 1024px.

### Grid

The grid system is inspired by the [CSS Wizardry Grid](https://github.com/csswizardry/csswizardry-grids). The following changes have been made:

- adheres to the TWG BEM naming convention (single and double dashes, no underscores, camelCase)
- variable gutter sizes based on breakpoints
- no markup or word spacing fix needed
- includes an extra `large` breakpoint by default
- more granularity - `.grid-3of11` is now possible
- variable number of columns - 12 columns is the default

##### General Usage

There are two required elements to work with the grid. The first being `.grid` itself which will house one or more grid items (cells). Grid items follow the syntax `.grid-xofy` where `x` is the number of columns this grid item should span out of a total of `y` columns. The general structure will resemble this:

```
<body>
    <div class="grid">
        <div class="grid-1of2"></div>
        <div class="grid-1of2"></div>
    </div>
</body>
```

##### Changing Grid Based-on Breakpoint

As the scaffolding grid is responsive, you'll likeley need to alter the grid based on a particular breakpoint. To do this, simply append the name of the breakpoint to the grid item class like so: `.grid-1of4.grid-1of1--palm`.

##### Grid Modifiers

The grid supports a number of optional modifiers that can be applied to `.grid` to adjust the formatting of the grid. These include:

- `.grid.grid--middle` - vertically centres the grid items
- `.grid.grid--bottom` - bottom align the grid items
- `.grid.grid--narrow` - halves the gutter value
- `.grid.grid--wide` - doubles the gutter value
- `.grid.grid--full` - removes the gutter
- `.grid.grid--rev` - reverse the order of the grid items

Any of these modifiers can also be applied at a specific breakpoint, rather than across all breakpoints. To do this, simply append the breakpoint name to the modifier. For example: `.grid.grid--middle--desk` would only vertically centre the grid items at the desk breakpoint.


### Combo

The Combo element is inspired by [Stubbornella's media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/). Combos are like a grid that always contains exactly two columns By default, the first column will consume as much width as it's content requires and the last column will consume all remaining width.

##### General Usage

There are three required elements to implement a combo. They are:

- `.combo` - the wrapper that will house the combo elements
- `.combo-first` - the left element of the combo
- `.combo-last` - the right element of the combo

The general structure looks like:

```
<body>
    <div class="combo">
        <div class="combo-first"></div>
        <div class="combo-last"></div>
    </div>
</body>
```

##### Combo Modifiers

Like the grid the combo supports a number of modifiers, these include:

- `.combo.combo--middle` - vetically centers the combo items
- `.combo.combo--bottom` - bottom align the combo items
- `.combo.combo--narrow` - halves the gutter value
- `.combo.combo--wide` - doubles the gutter value
- `.combo.combo--full` - removes the gutter
- `.combo.combo--rev` - reverse the the way `.combo-first` and `.combo-last` work

Any of these modifiers can also be applied at a specific breakpoint, rather than across all breakpoints. To do this, simply append the breakpoint name to the modifier. For example: `.combo.combo--middle--desk` would only vertically center the combo items at the desk breakpoint.

#### Show/Hide Utility Class

This project provides generic show and hide classes to all you to display specific content or elements at specific breakpoints.

- `.u-show` - Always show element
- `.u-show--palm` - Show element only at the palm breakpoint
- `.u-show--lap` - Show element only at the lap breakpoint
- `.u-show--desk` - Show element only at the desk breakpoint
- `.u-show--portable` - Show element only at the portable breakpoint
- `.u-show--large` - Show element only at the large breakpoint
- `.u-hide` - Always hide element
- `.u-hide--palm` - Hide element only at the palm breakpoint
- `.u-hide--lap` - Hide element only at the lap breakpoint
- `.u-hide--desk` - Hide element only at the desk breakpoint
- `.u-hide--portable` - Hide element only at the portable breakpoint
- `.u-hide--large` - Hide element only at the large breakpoint


### Sticky Footer

A sticky footer is a footer that sits at the bottom of the browser window unless the content on the page is taller than the height of the browser, in which case the sticky footer simply sits below the content. To implement the sticky footer simply ensure your project's DOM follows this basic structure:

```
<body>
    <div class="stickyWrapper">
        <div class="stickyBody"></div>
        <div class="stickyFooter"></div>
    </div>
</body>
```

## Acknowledgements
This starter theme has elements taken from:

* [This Blog Article](http://anunexpectedcoder.com/blog/2015/12/03/dont-fence-me-in-how-to-use-gulp-with-shopify-and-timber-to-gain-control-of-your-front-end/)
* [Shopify Birthday Suit](https://github.com/tutsplus/* shopify-birthday-suit) by [Keir Whitaker](http://keirwhitaker.com)
* [TWG's frontend-scaffolding](https://github.com/twg/frontend-scaffolding)
* [Timber](https://shopify.github.io/Timber/)


## References
* [shopify_theme gem](https://github.com/Shopify/shopify_theme)
* [Shopify Theme Development](https://robots.thoughtbot.com/shopify-theme-development)

