# Section 3 - Introduction to CSS

*This section covers the introduction to CSS and some basic and commonly used properties.*

We have happily created a basic website, capable of showing text, images, videos, and more. While it is not a big issue
that our website is rather black and white, image if **all** websites on the wide web were like that? It would be rather
nice if we could add some more color, change spacings, and more! Luckily, CSS will allow us to do just that, and more.

## Stylizing the Web

One should view CSS ( Cascading Style Sheet ) as an additive layer on top of HTML, that is to say, we can always have
HTML only files and we would still have a website, but the same cannot be said if there was only CSS. Furthermore, in
order to stylize our site, just like HTML, we should generally create a CSS file per page, and link each page's HTML
file to their respective CSS file. To do so, we will go back to the `head` section of our page and use the `link`
element. With this element, we can specify two attributes, the `rel` ( relationship ) attribute, and the `href`
attribute. Create a CSS file in the same directory as our `index.html` file, with the name `index.css`. Generally CSS
files share the same name as their associated HTML file. Then, to link our files together, in the `head` section of our
`index.html` file, we add the following

```html
<link href="index.css" rel="stylesheet">
```

And that is it! Once we begin populating our CSS file, we will see our page come to life with additional styles and
colors!

## A Note on CSS Notation

Before we begin learning some our first set of features, let us discuss the general syntax and familiarize ourselves
with how CSS works.

Firstly, how CSS interacts with HTML. As discussed earlier, CSS is an additive layer to our webpage, enhancing the
user's experience. To do this, CSS allows us to choose elements and edit their visual properties, such as making our
text color red or entire background green. As an example, see the CSS code segment below.

```css
p {
  color: red;
}
```

The block above selects the `p` element found in throughout the page and sets its font color to the color red. We say
the single **declaration** affects the font color **property** by setting it to the red **value**. Each element block
can contain multiple declarations, each ending with a semi-colon ( ; ). This explains the style part of CSS. What about
the cascading part? Well, in a CSS file, we can have duplicate selectors, each with their own declarations. When the
page is rendered, our web browser begins with a "blank" state for all properties, and goes down the page's associated
style file from top to bottom, applying each declaration. Thus, if we had the following CSS file

```css
p {
  color: red;
  font-size: 20px;
}

p {
  color: green;
}
```

our web browser would conclude that our `p` font would be green and of font size of 20px. This is because the second
declaration overwrites the first declaration of coloring our font red. The font size declaration, however, remains as it
is not overwritten in the second block. We say that the newer or later styles cascade over the the older or first
styles.  

## Colors

Let us give a small color lift to our page with our first property by changing some background colors! Using the
provided `index.html` page, change the title background color to gray by adding the following in our linked CSS file.

```css
h1 {
  background-color: gray;
}
```

Once we refresh our page, notice how the section around the title is now gray! That is one step towards having a more
vibrant page. Let us continue styling this page by setting the `h3` sub-titles within this page to have a light blue
background color.

```css
h3 {
  background-color: lightblue;
}
```

You might have noticed that we use words to descrive our choice of color. What if, however, we wanted to have a color
that was close to but not exactly to the named colors available? We have two different options, but both have the same
meaning. Computers represent colors by specifying three color values from 0 to 255. These three values correlate to the
amount of color red, green, and blue present in the color, often denoted as RGB. If we wanted only red, we would write
`255, 0, 0`. Yellow, meanwhile, would be `255, 255, 0`, and aqua would be represented as `0, 255, 255`. This is one of
the methods mentioned earlier to specify colors. Instead of setting a color name as the `background-color` value, we
would express it as

```css
h3 {
  background-color: rgb(0, 255, 255);
}
```

Note that each of these values are denoted in decimal notation. We could write a equivalently simpler notation in the
hexadecimal format, as these values are now from 0 to FF, appending a `#` at the front and concatenating all values
together, yielding the following notation

```css
h3 {
  background-color: #00FFFF;
}
```

With this, let us set the background color of the entire page to `darkgray`. To accomplish this, we can edit the CSS
properties of the `body` element!

```css
body {
  background-color: darkgray;
}
```

This is not limited to only color, we can also set many different declarations, and each of them will propagate
throughout the entire page. But, we are getting ahead of ourselves. Let us first cover some interesting text and font
properties.

## Text and Fonts

Many of the following declarations are generally straight forward, so their introduction and explanation will be rather
brief. This, however, should not stop us from experimenting and getting really familiar with how they work, thus it is
highly recommended to experiment with different values per property, and, of course, be sure to visite the Mozilla MDN
documentation for more examples!

We saw that we could change the color of backgrounds. Well, the same can be done with the `color` property.

```css
h1 {
  color: purple;
}
```

Not only color, but we can change the size of our text with the `font-size` property.

```css
p {
  font-size: 29px;
}
```

To change the thickness or weight of our font, we use the `font-weight` property, which takes a value from 100 to 900 on
increments of 100.

```css
a {
  font-weight: 700;
}
```

We can also change the alignment of our text by using `text-align`, whether it should be left, right, centered, or
justified.

```css
h3 {
  text-align: right;
}
```

We saw in a previous section that we could add some spacing through the use of `&nbsp;`, `&emsp;`, et. al. However, if
you wanted to use this for all paragraphs, we can instead use the `text-indent` property to specify our indentation per
starting line.

```css
p {
  text-indent: 1em;
}
```

Finding our text to be too close to each other and wanting to space things out? Luckily, there are many different
options and properties. Firstly, the most common, `line-height`, providing additional space between lines in the same
context.

```css
p {
  line-height: 1.5;
}
```

If instead you would want some spacing in between words, we can take advantage of the `word-spacing` property.

```css
p {
  word-spacing: 5px;
}
```

Lastly, if spacing between words is not enough, and we want to go deeper by adding spacing between letters, we can use
the `letter-spacing` property.

```css
p {
  letter-spacing: 10px;
}
```

Time to explore some more complex but wacky properties! Recall that the `u` element allowed us to underline our text.
While this is discouraged as underlined words tend to imply them being links, that does not stop us from using
overline or strike-through decorations. The `text-decoration` property gives us this option, and further allows us to
choose its color, style ( wavy, solid, dashed, etc. ), and thickness. If, on the other hand, we wish to remove the
default decoration of any text, we can set the property to the `none` value. Note, however, that this does not apply if
the parent of an element has set its text deocration property.

```css
h3 {
  text-decoration: overline green wavy 3px;
}
```

Another property allows us to transform text, whether it is to capitalize, change each letter to upper case or lower
case, or setting it to take on full width. This is the `text-transform` property.

```css
h1 {
  text-transform: uppercase;
}
```

Lastly, we can not only use the default font, but even our own! First, let us load other available fonts. The benefit of
using these is that they are confirmed to render in most devices through most web browsers. To set a new font, we use
the `font-family` property. This property not only allows us to set our desired font family, but also letting us to
provide additional fonts in case the previous font failed to load. Thus, often you will find three ( 3 ) or four ( 4 )
fonts specified in a `font-family` declaration.

```css
p {
  font-family: Georgia serif monospace;
}
```

As hinted earlier, we can load our own font family. To do this, we first must have a font file available, usually in the
`*.ttf` or `*.woff` formats. We then use the `@font-face` **at-rule** feature in CSS, which allows us to load the font
file and provide it with a name. We place this at the beginning of the CSS file.

```css
@font-face {
  font-family: "my personal font";
  src: url("media/fonts/my_font.ttf");
}
```

With this, we can now update our paragraphs can utilize this font.

```css
p {
  font-family: "my personal font" monospace;
}
```

## Spacings

When changing the background color of any element, we might have noticed that other regions were also affected, in
particular the regions surrounding the element. This is because each element contains a set amount of spacing
that dictates how much space lays around the "edge" of the element to where, say text, should start rendering. Broken
down, this space includes

* margin - this is the space away from the edge where text or images should start rendering
* border - this is the spacing directly surrounding the content being rendered
* padding - this is the space between the edge of the element to the content being rendered

We will take a look at each one of these in detail, with margin being the first one. To have a better understanding of
these properties, let us have a `p` element with a non-default background color.

```html
<p>This will be a our CSS play element.</p>
```

```css
p {
  background-color: lightgray;
}
```

Notice how much space surrounds the paragraph text. We can edit the margin of this element by using the `margin`
property.

```css
  margin: 5px;
```

Notice how the space surrounding our text is now smaller! This is because setting the margin to a higher value causes
HTML to start rendering the element "further" away. We can also do this in the opposite direction, i.e. setting margin
to a negative value.

```css
  margin: -5px;
```

The margin property, just like the other two properties, is in fact a shorthand notation, which affects the margin to
the top, right, bottom, and left sides. Thus, we can set the margin to a specific side of the element, with properties
such as `margin-left` and `margin-bottom`.

```css
  margin-top: -5px;
  margin-right: -5px;
  margin-bottom: -5px;
  margin-left: -5px;
```

Instead of having four (4) declarations, we can write them all in a single declaration.

```css
  margin: 5px 10px 5px 10px;
```

The above declaration is equivalent to setting the top margin to be 5px, the right to 10px, the bottom to 5px, and left
to 10px. Another format that represents the same values as the declaration above is the following

```css
  margin: 5px 10px;
```

The first value sets both top and bottom margin values to 5px, while the second value sets the right and left margin
values to 10px.

The next property to try experiment with is the border. We can set the border of an element with the `border` property.

```css
  border: 3px dash green;
```

The border declaration also uses a shorthand notation, with the first value being the thickness of the border, the
second value being the style of the border, and the last value being the color of the border. We can specify these
separately with the `border-width`, `border-style`, and `border-color`, respectively.

Lastly, let us take a look at padding. Padding is the space between the border and what is being rendered from the
element.

```css
  padding: 3px;
```

One thing to note, however, is that having a larger margin value will limit the allowed value for padding.
