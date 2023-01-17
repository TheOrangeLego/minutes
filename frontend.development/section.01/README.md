# Section 1 - Introduction to HTML

*This secion provides an introduction to HTML, covering its basic syntax, and writing our first web page.*

## How the Internet Works

Prior to writing our first website, let us take a look at what exactly our web browser is doing, and how each file type
contributes to the overall user experience.

1. We specify what website and page we wish to visit
2. The web browser, and by extension the computer, jumps into the world wide web, communicating with other computers to
find the server that hosts our targeted website
3. Once found, the server will provide our computer with multiple files, which the web browser will use to render the
site
4. Some of these provided files include:
    * HTML - specifies the contents of the page
    * CSS - specifies styles used on the page
    * JavaScript - provides additional interactibility functions for the page
    * media - these files can be images, videos, or sound clips, amongst many, that can be shown throughout the page
5. When we leave to another page or website, this process is repeated

It should be noted that different files can also be provided by servers that specify how user input should be handled
and how to communicate with other servers. These, however, are beyond the scope for a pure frontend developer and thus
will not be covered in the future.

## Building a Site From Scratch

Now that the purpose of each file is clearer, let us build our first website.

To do so, we will begin by creating an HTML file, which we will traditionally name `index.html`. In order for the web
browser to know that this file will use HTML 5 and take advantage of its features, we begin the file by adding

```html
<!DOCTYPE html>
```
### A Note on HTML Notation

Unlike other programming languages, HTML utilizes elements, which are surrounded by angle brackets and usually come in
pairs, referred to as the opening and closing tags, with the closing tag beginning with a forward slash '/'. For
example, the `p` element is used to write text in the format of a paragraph ( that is what the 'p' represents ). To
render the sentence 'Pineapples' onto the page, we would use the element in the following format

```html
<p>Pineapples</p>
```

Furthermore, HTML ignores most whitespaces. This will be covered further in this section, but that implies that the
above code could also be written as

```html
<p>
  Pineapples
</p>
```

and would be rendered the exact same way. This is instead useful for us, the developers, as it can declutter our code
and thus make debugging easier.

Many elements also support additional properties, referred to as attributes. These are specified in the opening tag
within the enclosing of the angle brackets. For example, the `video` element allows us to render videos onto a page

```html
<video>
  ...
</video>
```

We can specify the width of the video player to be 300 pixels, for example, by utilizing the `width` attribute, updating
our previous code to the following

```html
<video width="300">
  ...
</video>
```

Note that some attributes require a value to be assigned to them, where `width` is assigned to `300` in the example
above. Some attributes, on the other hand, do not require assigned values, and instead only need to be declared.
Continuing with our previous example, we can use the `controls` attribute to enable control buttons for our video
player.

```html
<video controls width="300">
  ...
</video>
```

If this attribute is not present, then, as expected, the video player will not provide control buttons for the user to
use.

Some elements do not require a closing tag. For example, the `source` element is used to specify a source for a video.

```html
<source src="..." type="...">
```

One final note on elements is that some of them, in particular those with closing tags, can nest other elements. What
this does in effect is to group content based on their nature and have the nested elements inherit the style of their
parent elements. This second note will be explored further in the next section. For example, consider the `video`
element we have been using. A video should have different sources, in the possibility that one of the sources is not
reachable for any reason. As such, we nest `source` within `video` in the following manner

```html
<video controls>
  <source src="videos/video_source_1.mp4">

  <source src="videos/video_source_2.mp4">

  <source src="videos/video_source_3.mp4">
</video>
```

There is no limit as to how deep elements can be nested. For example, if we wish to have the above video be embedded
within a paragraph, we would do the following

```html
<p>
  Refer to the video below.

  <video controls>
    <source src="videos/video_source_1.mp4">

    <source src="videos/video_source_2.mp4">

    <source src="videos/video_source_3.mp4">
  </video>
</p>
```

### Hello World

Now that we are familiar with the concept of elements, we can start to write messages onto our website.

Continuing from where we left off in our `index.html`, we will inform the web browser that what follows is HTML code. To
do so, we use the `html` element. Within this element, we divide our page into two segments, the head and the body, with
the appropriately named elements `head` and `body` elements, respectively.

Any data that is useful for the web browser and other computers to understand goes is encapsulated in the `head`
element. This is usually not visible to users who visit our page. On the other hand, everything that we want to show
belong in the `body` element. Our entire file should now look like the following

```html
<!DOCTYPE html>

<html>
  <head>
  </head>

  <body>
  </body>
</html>
```

Let us quickly write something to show onto our website, and as a tradition, let us write 'Hello world!'. To do so, we
utilize the paragraph element `p` to denote any basic text, placing this within the `body` element.

```html
<body>
  <p>Hello world!</p>
</body>
```

To view our website, open our `index.html` file through your web browser of choice. We should see a nearly empty page,
aside from our expected paragraph. Congratulations, you have written your first web page! This may not look like much,
but this is the first step before we can develop a fully fledged, interactive website.

Before we continue on, we should do two tasks, crediting ourselves as the author of this page, and specify a title.
Recall that the `head` element usually contains data that is not usually displayed to the user. This is where we will
insert both at. Firstly, we will specify the title of the page. This title is usually seen as the text that is shown in
the tab within the web browser. We do this by using the `title` element. For our page, let us name it
`My First Web Page`.

```html
<title>My First Web Page</title>
```

Refresh the page if you still have it open in your web browser, otherwise open the file again. Notice the text present
in the tab. Setting titles is useful to let users know what they should expect from the page they are at, in the
shortest way possible.

Next, to specify the author, we will introduce the `meta` element. In particular, this element has the attributes `name`
and `content`. If we set the value of `name` to `author`, we can specify the author of the page in the `content`
attribute. So, if the page author was Joel Barish, our `meta` element would be

```html
<meta name="author" content="Joel Barish">
```

Furthermore, we can similarly specify the description of the page by assigning `description` as the `name` attribute.

```html
<meta name="description" content="This is a website dedicated to my love to Clementine Kruczynski.">
```

Page descriptions allow for other websites and search engines to easily discover your website, and thus appear in
relevant searches on the world wide web. Note that if we were to refresh our page, nothing seems to have changed after
adding both page author and description. This is because these are hidden from users and instead primarily used by
other computers and servers.

To see the complete code for this page, take a look at `examples/index.html`.

In the next section, we will introduce more ways of writing text onto the screen by taking advantage of additional text
elements and adding media of different types.
