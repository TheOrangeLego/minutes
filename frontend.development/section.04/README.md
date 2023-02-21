# Section 4 - Advanced Topics in CSS

*This section covers more advanced topics in CSS, from identifiers, containers, and the usage of flex.*

We have seen how we can set different style properties to each element in a page. This presents a problem, however, when
we want to have different instances of the same element to have their own styles. Imagine if all the `p` elements *had*
to use the same style. This might not seem like a problem at first, but it severly limits how much customization we can
apply to even a single page. In order to address this issue, we will introduce the concept of identifiers.

## Identifiers

As the name implies, identifiers allow the web browser to directly identify and classify a specific or group of
elements. There are two types of identifiers, **id** and **class** identifiers. Id identifiers should be seen as unique
to an element. That is to say, one should expect that editing properties to an id should only affect one element in the
page. An element can only be assigned a single id. We can apply an id to an element through the `id` attribute.

```html
<p id="synopsis">
  This story encompasses the themes of betrayal, societal expectations and pressures, and psychological horror expressed
  through drama, action, and comedy, formatted as a four act play.
</p>
```

In CSS, we can address this specific element and add declarations to edit its properties by using the `#` sign followed
by the id name.

```css
#sypnosis {
  font-weight: 600;
  background-color: lightgrey;
}
```

On the other hand, if we wanted to address multiple elements with a shared style, we can use the class identifier.
Unlike ids, classes can, and are expected to, be assigned to multiple elements.

```html
<p class="large-font">
  I am a big paragraph.
</p>

<a class="large-font" href="#">A big link.</a>
```

To assign declarations to classes, we use `.` followed by the class name.

```css
.large-font {
  font-size: 30px;
}
```

Furthermore, elements can have multiple classes assigned to them, where latter assigned classes will cascade over
earlier classes' declarations. This allows us as developers to compose elements with different classes.

```html
<p class="large-font dark-background light-font">
  This is some special text.
</p>
```

## The `div` Element

Suppose you had two `p` elements and wished for them to have their background colors to be changed to a singular color.

```html
<p class="green-background">
  Paragraph 1
</p>

<p class="green-background">
  Paragraph 2
</p>
```

```css
.green-background {
  background-color: green;
}
```

You might notice that there are some spaces in between both elements that are not colored as expected. This is beccause
each element has its own padding, margin, and border arounnd. One method to address this would be to remove all spacing
in between both elements, but this is not guaranteed to behave as expected all of the time. Instead, we could surround
both elements in another element, referred to as their parent element, and changing its background color property. This
would also be applied to both children elements, as elements inherit their parents' properties by default. Choosing
which element to use as the parent element might be difficult with what we have learnt so far, as each have their own
purpose. Thus, we should use the `div` element, which has direct effect on our website, but instead grammatically groups
elements together. Thus, we can update the above HTML code to be the following.


```html
<div class="green-background">
  <p>
    Paragraph 1
  </p>

  <p>
    Paragraph 2
  </p>
</div>
```

## Flex

Ever seen how some websites tend to resize and dynamically adjust the position of elements throughout the page depending
on how big your browser window is? This is the power of flex. We have gotten used to how elements are rendered in
segments or blocks. If we happen to have a `div` with a `p` element within in, and we change the background color, note
how even if we do not have much text to render, the entire right ( or left ) side is also colored. Any following
element will now instead go below it.  This is because both `p` element is rendered as a block within its parent.

```html
<div class="container">
  <p class="container-text">First sentence.</p>

  <p class="container-text">Second sentence.</p>
</div>
```

```css
.container {
  background-color: lightblue;
}

.container-text {
  font-size: 14px;
}
```

What what if we wanted to have more elements rendered across, like columns within a table? To do this, we will have to
call upon two properties, `display` and `flex`. Firstly, we must indicate which element will encompass all other
elements that will be dynamically sized and positioned. This is referred to as the parent or container element. Most
often this happens to be a `div` element. We will add a declaration, setting its display property with the `flex` value.

```css
.container {
  display: flex;
}
```

This indicates to the web browser that all of the container's children should be rendered dynamically, i.e. with flex.
If we want the children to be rendered in a single row, i.e. as columns, we can further add a declaration with the
`flex-direction` property and value of `row`. If we instead wanted to render them in a single column, we would set the
value of the property to `column`.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Each child within a flex element has a flex value. This flex value indicates how much of a container's width or height
it should take, depending if the flex direction is set to `row` or `column`, respectively. If one element were to have a
higher flex value, then it will maintain a higher portion of the screen whenever it is resized. Thus, if all elements
within a container have the same flex value, they will share an equal amount of screen size.

```css
.container-text {
  flex: 1;
}
```

Compare this to if each `p` element had different flex values. We can easily test this by using an id instead of a class
for both elements.


```html
<div class="container">
  <p id="first">First sentence.</p>

  <p id="second">Second sentence.</p>
</div>
```

```css
.container {
  display: flex;
  flex-direction: row;
}

#first {
  flex: 1;
  background-color: lightblue;
}

#second {
  flex: 3;
  background-color: lightgreen;
}
```

Notice how each text element takes a different amount of space, and, if we were to resize the web browser's window size,
they maintain the ratio of their sizes. Just like text, sometimes we will end up with more elements than can be fit
into our container, especially when dealing with `column` flex items. To avoid this, we can take advantage of the
`flex-wrap` property, set to the `wrap` value. If we wish to have each flex item be of at least a certain width, instead
of just having each element's flex property be a unitless value, we can also add a unit value.

```css
.container-text {
  flex: 1 150px;
}
```

The declaration above indicates to the web browser that elements with this class will first take 150px of size, then
grow proportionally with the other children.

Growth proportion is only the beginning for playing with flex. Another set of powerful properties are those related to
alignment. Ever seen a centered title on a website or article? Previously could have a website be composed of a title
and some paragraphs along with their header titles.

```html
<div class="container">
  <h1 id="title">Welcome to my Website!</h1>

  <p id="summary">This is the website's summary.</p>

  <h3 class="subtitle">First Subtitle</h3>

  <p class="text">Some text.</p>

  <h3 class="subtitle">Second Subtitle</h3>

  <p class="text">Some more text.</p>
</div>
```

If we were to have a page as shown above, both title and subtitles in the page are rendered on the left side. This makes
them difficult to distinguish from regular paragraphs, especially if they happen to also be short in length. We can set
the alignment for all of the container's children by first setting its `display` and `align-items` properties.

```css
#container {
  display: flex;
  align-items: flex-end;
}
```

## Transitions and Transforms

Our final, but exciting, properties to cover for this section are both `transition` and `transform`. Let us cover
`transition` first. Recall that CSS is able to specify certain properties on elements and identifiers the moment they
are rendered on screen. Additionally, CSS allows us to specify new styles when we interact with them too! For example,
suppose that we had some text at some specified font size.

```html
<p class="some-text">Hover over me!</p>
```

```css
.some-text {
  font-size: 12px;
}
```

We can then change this font size to something larger when we hover over it, say like how we would use a magnifying
glass. To accomplish this, we utilize a selector, in this case the `:hover` selector.

```css
.some-text:hover {
  font-size: 20px;
}
```

Notice, however, this change is abrupt. Can we make this smoother? Why, yes! This is where `transition` comes into play.
`transition` utilizes four (4) different component, `delay`, `duration`, `property`, and `timing-function`. Going back
to our previous text example, suppose we wanted to have the font get bigger within 1.5 seconds, we can then add to the
original selector-less class definition the `transition` property, as such

```css
.some-text {
  font-size: 12px;
  transition: font-size 1.5s;
}
```

After refreshing the page, notice how smoother the change in property is! If we wished to have some sort of delay, say a
total of 1 second, we can edit the property to be as follows:

```css
.some-text {
  font-size: 12px;
  transition: font-size 1.5s 1s;
}
```

The first number in the property will be taken as the `duration` of the transition, while the second the `delay`. You
would then correctly guess `font-size` is the property we wished to transition. Notice if we changed the selector-ful
property to have more declarations, such as

```css
.some-text:hover {
  font-size: 20px;
  color: red;
}
```

our text color changes immediately. If we wished for color to also be part of this transition, we can specify them in
the `transition` property as comma separated values.

```css
.some-text {
  font-size: 12px;
  transition: font-size, color 1.5s 1s;
}
```

Otherwise, if we wish to apply transition to all properties, we can instead write `all`.

The final component, `timing-function`, requires a more in-depth explanation and additional experimentation which will
not be covered in this section nor guide. Instead, a thorough explanation can be found in
[this Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function), with
additional [visualizations](https://easings.net), [tests](https://codepen.io/tortoise10h/pen/Owpqey), and
[tools](https://matthewlein.com/tools/ceaser).

Transitions are not only used with changing properties. Instead, we can incorporate them with the `transform` property.
The `transform` property does exactly what it is called, it transforms elements visually. This allows us to `rotate`,
`scale`, `skew`, and more! The list of available transformation functions can be found in
[this document](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function). In the meantime, we can play
around with the `rotate` transformation function.

Suppose we had some text we wished to rotate ninety (90) degrees around. We can accomplish this with the following:

```html
<p class="spin-text">I am rotating!</p>
```

```css
.spin-text {
  transform: rotate(90deg);
}
```

Once we refresh the page, our text is rotated! By combining what was discussed earlier about transitions, we can combine
both properties to rotate when we hover over our text.

```css
.spin-text {
  font-size: 14px;
  transition: transform 1.2s;
}

.spin-text:hover {
  transform: rotate(90deg);
}
```

Nifty, isn't it? Likewise, we can combine multiple transformation functions per element or identifier, we simply space
them out in the `transform` declaration. Note that transformations will be applied left to right, so be careful when
combining effects, as they can get difficult to debug.

```css
.spin-text:hover {
  transform: rotate(90deg) scale(1.5);
}
```
