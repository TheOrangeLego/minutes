# Section 0 - Introduction and Orientation

*This section introduces the role of a Frontend web developer and provides an overview of course flow, tools to utilize,
and what to expect to complete by the end.*

## Being a Frontend Developer

When someone mentions building a website, what does that entail? There are different type of sites, whether they are
purely visual, interactive, adaptive, a shopping site, or even a content site. Regardless of its nature, all sites
require one thing, a style of presentation. This is the role of a frontend ( FE ) developer, deciding how to represent
information to those who visit the site. Backend ( BE ) developers, on the other hand, decide how to store and process
data and information.

Knowing how to present something can actually be a challenging problem: how should things be shown? Should they be
grouped? Is it too much? Too few? Does it have a natural flow? Is it accessible to everyone? These are the kinds of
questions where, while to some degree it is subjective, there are objectively minimum requirements or expectations,
especially as the internet continues to mature and everyone collectively decides what works and what does not.

This might then be a good time to mention what makes a good FE developer. Personally, I always mention having two
attributes: willing to try things out, and being open minded. Sometimes things will make sense intuitively, and
sometimes they will not. And that's okay. What matters is to be willing to try it out, even if it means that it will not
be perfect the first time. Trying something out and not getting it correct is not failure, giving up without trying
something else is. On the same note, being tunneled into thinking one way and not considering other approaches will
hinder chances on learning new things. To be close minded means to proclaim to know more than others, but reality tells
otherwise; nobody knows everything.

One last thing to consider, which is often true for any kind of software engineering or programming in general, is to
practice. This means that you should try using anything learnt, as that reinforces one's own understanding of a topic.

## Sections Overview

These sections aim to introduce HTML, CSS, JavaScript, and more related tools and concepts necessary for FE developers,
assuming no prior knowledge nor experience with either the languages, tools, or programming. In general, each section
will have a directory in the style of one of the following two, depending whether they are based on general web design
or are only related to JavaScript, respectively:

```
styles/         -> all CSS files go here
  ...
media/          -> all media files ( e.g. pictures, sounds, videos ) go here
  ...
index.html      -> landing page
other_page.html -> other pages also belong in the same directory level
```

```
src/
  tests/     -> files to test understanding go here
    ...
  exercises/ -> files to understand new topics go here
    ...
  Makefile   -> file to run all tests
```

More information on how to fully manage and utilize certain files will be provided in the actual section READMEs.

## Necessary Tools

Luckily, all tools that will be required to go through these sections are available for free and are as follows:

* editor - VSCode, vim, notepad, generally any text editor; personally I prefer VSCode for its code completion
functionalities
* web browser - Google Chrome, Mozilla Firefox, Edge, Safari, or any modern web browser
* JS framework runner - nodeJS, which can be downloaded [here](https://nodejs.org/en/download/) for Windows and Mac,
while Linux users should install it through their package manager
