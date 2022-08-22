# Section 2 - Additional Topics in HTML

*This section covers the remaining common elements found in HTML.*

We shall continue from where we left off, and cover more commonly used elements in HTML.

## Headings and Paragraphs

By now, the paragraph `p` element is familiar to us, but we should take a closer look to its function and behavior, and,
in particular, how it handles whitespaces. In the already present paragraph, let us add many spaces and lines between
the 'Hello' and 'world!' words

```html
<p>Hello


world!
</p>
```

If we refresh our page, notice that our words are actually not that separated! This is because in HTML, whitespaces are
generally ignored. Imagine if the paragraph we wish to write was 1000 words long, and we noticed that there was a
grammatical error somewhere in the middle. By adding some whitespaces in our HTML code, we can easily manage these types
of paragraphs. This is useful for the web developer, and is completely hidden to users visitng our website. Instead, if
we wish to add some spacing between our text, we have multiple options.

Let us revert back our paragraph and add an additional sentence.

```html
<p>
  Hello world! This is a sentence used for spacing examples.
</p>
```

If we wish to add a single space width worth in our text, we can use `&nbsp;`. Recall that HTML will ignore what it
considers 'additional' whitespace, so if we try to add another space between the words 'spacing' and 'examples' on our
paragraph and refresh our page, we will only get one single space. Instead, we can add `&nbsp;` anywhere between the two
words, as such

```html
<p>
  Hello world! This is a sentence used for spacing&nbsp; examples.
</p>
```

Once we refresh the page, notice how there are two spaces in between the words. In fact, we can add as many `&nbsp;` as
we wish, and even replace all of our spaces between words with this format, although that would be more difficult for
other developers to understand our code. In a similar implementation, if we wish to insert two spaces in our text,
instead of writing two (2) `&nbsp;`s one after the other, as `&nbsp;&nbsp;`, we can use `&ensp;`. Taking this a bit
further, we can use `&emsp;` to insert four (4) spaces.

For those wondering what these words mean, and how they relate to spaces, here are some definitions --

* nbsp - non-breaking space, a space that should not be ignored/collapsed by HTML, collapsing here being synonymous with
'breaking'
* ensp - en space; en is a measurement used in typography used to represent half the width of an em, another
measurement. This is usually the same width to an uppercase 'N', which is 2 spaces on our case.
* emsp - em space; as mentioned above, since an en is half of an em, and en is worth two (2) spaces wide, one em would
be equivalent to four (4) spaces wide, usually the width of an uppercase 'M'. This is also equivalent to rendering a
tab, which is utually inserted at the beginning of a paragraph.

We have only discussed in-text spacing. Next we will discuss line spacing, which is usually represented as new or empty
lines. Remember how we tried to add multiple lines between our words at the beginning of this section, but none of them
were rendered? If we wish to start at a new line, we can use the `br` element, short for the word 'break'. If we wish to
separate the first and second sentences, we can insert `<br>` between them, and after some formatting, we should have

```html
<p>
  Hello world!

  <br>

  This is a sentence used for spacing&nbsp; examples.
</p>
```

Once we refresh the page, notice that the second sentence begins in a new line, making the overall paragraph easier to
read! What if, however, we wanted to have some spacing between our two sentences? One might consider using two `br`
elements, writing `<br><br>`. While this is not wrong, and does in fact accomplish our goal, we need to consider what it
means syntatically for there to be space between two sentences. In this situation, it does not sound like we have a
single paragraph with two sentences, but instead two paragraphs, with a sentence in each. As such, we should updated our
body to contain the following

```html
<p>Hello world!</p>

<p>This is a sentence used for spacing&nbsp; examples.</p>
```

Notice how this accomplishes what we sought out for, while remaining syntatically correct; perfect!

## Emphasis

As social creatures, we more than often tend to place emphasis when communicating with others. This is slightly harder,
as our traditional means of emphasis tend to be through change in tones, loudness, or gestures, all of which cannot be
communicated with text. However, we can mimic emphasis by rendering our text in different ways. For example, when we
want to show importance or heavy emphasis on certain words, we may **bolden** our words. To do this, we can use either
the `b` or `strong` elements, as such

```html
<p>This sentence is used to show how we can <strong>bolden</strong> our words.</p>

<p>Notice how <b>your</b> mind interprets bold words.</p>
```

Another form of emphasis is known as *italics*, which can imply additional meaning to words. To accomplish this, we can
use either the `em` or `i` elements.

```html
<p>The rules don't <em>technically</em> say that you're late.</p>

<p>I'm sure he's going to be <i>happy</i> with the outcome.</p>
```
One final form of emphasis, albeit seldom used, is through underlined words. This can be achieved with the `u` element,
but note that underlining words is often reserved for links. As such, it is highly discouraged for words to be
underlined, unless they are part of a link.

One thing to note how there are two different methods to bolden or italicize words. This is due to how `b`, `i`, and `u`
are considered presentational elements. What this means is that while they are rendered and easily distinguished
visually, accessibility tools, such as screen readers, do not recognize them to be any different to regular text. Thus,
whenever possible, it is best to stick with `strong` and `em` for our websites to be accessible friendly.

## Headers

We have seen constant use of the `p` element, and now that we have covered emphasizing text, one would wonder how should
one create titles. While some are tempted in combining both `p` and emphasis elements, we should stick to grammatically
correct implementations, and instead use the header elements. These headers are used to mark titles for the entire page
or for sections or chapters, just like how some books do. There are six (6) different levels or categories for headers,
each denoted as `h1`, `h2`, `h3`, `h4`, `h5`, and `h6`. The lower the number, the bigger the significance, i.e. `h1` is
used as the title for the entire page, while `h3` would be used to title subsections. We should add a title to our page,
while also introducing a new secion and title it accordingly. Let us place the following at the beginning of our body
element

```html
<h1>My First Website</h1>
```

We cna then add the following to the end of the body section, to show how subsections generally function.

```html
<h3>New Subsection</h3>

<p>We have now begun a new subsection on our page. Topics discussed here are often delved deeper within.</p>
```

## Lists and Tables

There are times in which we wish to display list-like information. Think about a grocery list. We could denote it in a
single sentence separated by commas

```html
<p>The groceries to get this week: 1 lb. of potatoes, 3 large tomatoes, 1 medium onion, 1 cabbage head, 2 apples. </p>
```

This approach makes it hard to distinguish items due to the small size of commas, and one could see how this would
worsen if our list were to get longer. Luckily, HTML has a built in method of rendering lists, and that is with the
`ul` ( unordered list ) element. Within each `ul` element, we can insert an `li` ( list item ) element for each item we
wish to list. Therefore, we can re-write the above list as

```html
<p>
  The groceries to get this week:
</p>

<ul>
  <li>1 lb. of potatoes</li>
  <li>3 large tomatoes</li>
  <li>1 medium onion</li>
  <li>1 cabbage head</li>
  <li>2 apples</li>
</ul>
```

Much easier to read and maintain, right? Two things to note here: notice how the `ul` element has been taken outside of
the `p` element. This is because `ul` is syntatically different than a paragraph. That is to say, we should keep
paragraph text within paragraphs, and list text inside lists! You might have also noticed that your browser
automatically chose to use a dot at the start of each list item. While this can be changed and further customized, that
will be a topic for another section.

Not all lists should be denoted through bullet points. Think of steps in a cooking recipe, where the order of steps is a
necessity to obtain our desired cooked meal. To enforce this ordered property, we can instead use the `ol` ( ordered
list ) element. This element also takes `li` elements to denote each listed item, so we could denote a recipe in the
following manner

```html
<p>
  To cook rice in a rice cooker:
</p>

<ol>
  <li>put as many cups of rice as desired, using the cup provided by your rice cooker manufacturer</li>
  <li>wash the rice by hand or with a wisk, lightly scrubbing it with water</li>
  <li>drain all water used when washing the rice</li>
  <li>repeat steps 2 and 3 until the drained water is not misty from the rice</li>
  <li>place the washed rice in the rice cooker, with as many regular cups of water as you have cups of rice</li>
</ol>
```

Notice how we did not have to specify the numbers in the list, instead our web browser did it automatically.

Another type of information we might want to display are tables. Tables are useful when some data is measured in two
dimensions. To start drawing a table, we use the `table` element. Now consider what a tabke is: a table is composed of
rows, where each row has a data entry. Likewise, within our `table` element, we insert `tr` ( table row ) elements, for
each row we wish to append to our table. Within each `tr` element, we use a `td` ( table data ) element to denote an
entry or box within that row. Following our theme for the last few examples, let us render a table that shows
conversions between different measurements used in cooking.

```html
<p>
  Before we begin cooking, here is a table to 
</p>

<table>
  <tr>
    <td>1/4 cup</td>
    <td>1/2 cup</td>
    <td>1 cup</td>
    <td>2 cups</td>
  </tr>

  <tr>
    <td>2 oz</td>
    <td>4 oz</td>
    <td>8 oz</td>
    <td>16 oz</td>
  </tr>

  <tr>
    <td>59 ml</td>
    <td>118 ml</td>
    <td>240 ml</td>
    <td>480 ml</td>
  </tr>

  <tr>
    <td>4 tbsp</td>
    <td>8 tbsp</td>
    <td>16 tbsp</td>
    <td>32 tbsp</td>
  </tr>
</table>
```

Although this table is helpful and concise, notice how we end up repeating the units of measurements at every entry. To
prevent this, we can instead add a table header as the first row which specifies the units per column. In order to do
so, we utilize the `th` ( table header ) element, which works similar to the `td` element, but is rendered differently
by our web browser. We update our previous table to be the following

```html
<p>
  Before we begin cooking, here is a table to 
</p>

<table>
  <tr>
    <th>Cups</th>
    <th>Ounces</th>
    <th>Milimeters</th>
    <th>Tablespoons</th>
  </tr>
  <tr>
    <td>1/4</td>
    <td>1/2</td>
    <td>1</td>
    <td>2</td>
  </tr>

  <tr>
    <td>2</td>
    <td>4</td>
    <td>8</td>
    <td>16</td>
  </tr>

  <tr>
    <td>59</td>
    <td>118</td>
    <td>240</td>
    <td>480</td>
  </tr>

  <tr>
    <td>4</td>
    <td>8</td>
    <td>16</td>
    <td>32</td>
  </tr>
</table>
```
One final thing that is possible to do with tables is specifying if a cell expands to other columns or rows by using the
`colspan` and `rowspan` attributes, respectively. This is useful in maintaining a nicely formatted table. Take a look at
the following table for a more concrete example

```html
<table>
  <tr>
    <th colspan='2'>Hardware Components</th>
  </tr>

  <tr>
    <th rowspan='2'>CPU</th>
    <td>AMD</td>
  </tr>

  <tr>
    <td>Intel</td>
  </tr>

  <tr>
    <th colspan='2'>RAM</th>
  </tr>
</table>
```

## Hyperlinks

We shall now cover a key principal behind the world wide web, hyperlinks. A hyperlink is a method for a site to refer or
link to another site or page. It would be chaotic if all content on the web was found within a single website, so by
having some content contained within some website and have it refer to others, we can maintain this sense of
connectivity. In order to accomplish this, we will use the `a` ( anchor ) element, which requires the attribute `href`
( hyperlink reference ), which specifies what is our desired destination. Any text found within the element's tags will
function as the link text, where clicking on any part of the text will send the user to the specified address. Let us
try to add a link to a well known website, Google's.

```html
<a href="https://www.google.com">Click me to go to Google!</a>
```

After refreshing our page, notice that if we click on the link, our page will now be that of Google's. It may be useful,
however, to instead open this page on a separate tab, especially if we don't want to lose our position in our site. To
accomplish this, we can use the `target` attribute and assigning it the value `_blank`. Thus, our link should now be
written as

```html
<a href="https://www.google.com" target="_blank">Click me to go to Google!</a>
```

Return back to our site, click the new link, and notice how it opens in a new tab while being able to go back to our
site!

Anchors do not only link to other websites, and instead can link to other pages within ours. To see this at work, create
a new file within the same folder ( directory ) and name it `another.html`. Within it, let us quickly add some text to
indicate that this is another page and not the landing page.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Second page</title>
  </head>

  <body>
    <p>Welcome to the <em>second<em> page!</p>
  </body>
</html>
```

Take note of what is currently in our folder. We have to files, `index.html` and `another.html`. In order to link our
**main** page to our second page, we create a new anchor element, where the `href` attribute is the relative position of
our destination file. Since our destination file is on the same folder as our current page file, we would simply use the
full file name.

```html
<a href="another.html">Visit my other page.</a>
```

If, however, our destination file was within some folder that was stored in the same folder as our current page file,
say `another.html` was in the folder `deepest`, which was inside the folder, `deep`, then we would assign `href` with
`deep/deepest/another.html`, as such

```html
<a href="deep/deepest/another.html">Visit my other page.</a>
```

On the other hand, if the file was outside of our current folder, we would use `..` to go out one folder. Suppose that
`index.html` was inside a folder, and another folder contained this folder. Another folder contains that folder and the
destination file `another.html`. For `index.html` to link to `another.html`, we would set `href` to be
`../../another.html`, updating our anchor element to be

```html
<a href="../../another.html">Visit my other page.</a>
```

## Media

How monotone would the Internet be if it was only composed of text? Let us make it more interesting and lively with some
media content, like pictures, songs, and videos!

We can start with one of the most common media types around, pictures. To add images to our page, we use the `img`
( image ) element. This element requires the `src` attribute, which, similar to the `a` elememt, specifies the source
location of the image relative to our current page file. So, suppose we had a file of an image of a robot, aptly named
`robot.png`. To add this image to our page, we would write the following

```html
<img src="robot.png">
```

Some additional attributes we should consider when incorporating images to our page include the `alt` ( alternative ),
`width`, and `height` attributes. Both `width` and `height` attributes are generally self explanatory, as they limit the
width and height of the image. Careful, though, as this can cause images that are not of that original size to either be
stretched if they are smaller than the specified dimensions or "crunchy" if they are significantly larger. The last
attribute, `alt`, is useful as it is often used to describe the image, and is shown if for some reason the web browser
does not render the image. So, let us modify our previous image link to have a width of 150 pixels, a height of 100
pixels, and add some text describing our image.

```html
<img src="robot.png" alt="A robot giving a flower to the viewer." width="150" height="100">
```

Our next media type is audio. While very common in the early days of the commercialized Internet, audio has become less
common, primarily seen only in audio streaming sites. We should be considerate of visiting users. Not everyone is open
to having audio play when surfing the web, and others may not have the bandwith or accessibility to access it. This,
however, does not mean that we cannot add it to our site and play with its features. To add audio, we should use the
`audio` element. Unlike the `img` element, this element does use an opening and closing tag, where the enclosed contenxt
is shown when audio cannot be played by the browser. This is effectively the same as the `alt` attribute we covered when
using the `img` element. As the audio that we play must be sourced from either a file or some other form of source, we
will use the `src` attribute. Furthermore, unlike images, audio can be controlled, which will pause or resume playback,
or adjusting the overall volume. To allow access of these controls to the user, we simply state the `controls`
attribute.

```html
<audio controls src="my_favorite_song.mp4">Your browser does not support audio playback.</audio>
```

Some other attributes to consider are `autoplay`, which dictate whether the audio should play as soon as it is loaded on
the page, `loop`, specifying if the audio should continuously loop, and `muted`, specifying if the audio should start
muted or not. All of these attributes take a boolean value, i.e. `true` or `false` string, and all by default set to
`false`. Putting it all together, if we wish to have our audio clip to autoplay and loop, but also muted, then we would
update our implementation as

```html
<audio controls autoplay="true" loop="true" muted="true" src="my_favorite_song.mp4">
  Your browser does not support audio playback.
</audio>
```

What if we wanted to have different formats to our audio files? One would argue that providing loss-less audio is of
high importance, but should not be the only option for users to experience their site. This is possible, albeit with
some changes to our usage of the `audio` element. Instead of using the `src` attribute to specify the source of our
audio files, we will rely on the `source` element. This element requires two attributes, `src`, which has the same
function as we have seen previously, and `type`, which specifies the type and format of our source. If we wish to load
an MP4 file, we would set `type` to `audio/mp4`. If instead we wish to use an MPEG file, we would set it to
`audio/mpeg`. This `source` element would now be added within the tags of the `audio` element, and we can actually add
multiple `source` elements, as many as there are formats we wish to support. Suppose we had multiple formats of our song
we wished to shared with, we would then update our implementation as

```html
<audio controls autoplay="true" loop="true" muted="true">
  <source src="my_favorite_song.mp4" type="audio/mp4">
  <source src="my_favorite_song.mp3" type="audio/mpeg">
  <source src="my_favorite_song.ogg" type="audio/ogg">
  Your browser does not support audio playback.
</audio>
```

Lastly, we will discuss video or movie types. Luckily, incorporating video is generally similar to how we just
implemented audio to our page. The `video` element encapsulates different `source` elements, each specifying the source
and its source. Attributes such as `controls`, `width`, `height`, and others are also available in the `video` element,
and the only notable changes to `source` is in its `type` attribute. If we wish to load a video of a dog, we can utilize
the `video` element as such

```html
<video controls>
  <source src="dog_playing.mp4" type="video/mp4">
  <source src="dog_playing.webm" type="video/webm">
  Your browser does not support video playback.
</video>
```
