# Section 2 - Additional Topics in HTML

*This section covers the remaining common elements found in HTML.*

We shall continue from where we left off, and cover more commonly used elements in HTML.

### Headings and Paragraphs

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

If we wish to add a single space width worth in our text, we can use `$nbsp;`. Recall that HTML will ignore what it
considers 'additional' whitespace, so if we try to add another space between the words 'spacing' and 'examples' on our
paragraph and refresh our page, we will only get one single space. Instead, we can add `$nbsp;` anywhere between the two
words, as such

```html
<p>
  Hello world! This is a sentence used for spacing$nbsp; examples.
</p>
```

Once we refresh the page, notice how there are two spaces in between the words. In fact, we can add as many `$nbsp;` as
we wish, and even replace all of our spaces between words with this format, although that would be more difficult for
other developers to understand our code. In a similar implementation, if we wish to insert two spaces in our text,
instead of writing two (2) `$nbsp;`s one after the other, as `$nbsp;$nbsp;`, we can use `$ensp;`. Taking this a bit
further, we can use `$emsp;` to insert four (4) spaces.

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

  This is a sentence used for spacing$nbsp; examples.
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

<p>This is a sentence used for spacing$nbsp; examples.</p>
```

Notice how this accomplishes what we sought out for, while remaining syntatically correct; perfect!

### Emphasis

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

### Lists and Tables

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

### Hyperlinks

### Media

### Paradigms and Closing Words
