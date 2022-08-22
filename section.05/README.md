# Section 5 - Introduction to JavaScript

*This section functions as an introduction to JavaScript, setting up NodeJS, understanding how programs are run, and
utilizing some of the language's core functionalities with numbers, strings, variables, and console printing.*

## What is JavaScript?

Before we begin utilzing JavaScript, we should begin by understanding what it is, and why it is used throughout the
world as the programming language of the web.

JavaScript is an imperative programming language, enriching websites through the integration of more dynamic and complex
behavior and functionality. Unlike HTML ( or even CSS ), JavaScript ( hereby shortened as JS ) is executed line by line,
that is to say, programmers write commands into a file, and an engine reads this file line by line, executing each
written instruction as it makes its way to the bottom of the file. This is what we mean by JS being imperative. Now,
that was quite a heavy explanation, so let us use an example to solidify our understanding.

Suppose you encounter a recipe book. Each recipe in this book is written in a language, say English, and provides single
sentences to make a meal. In this scenario, JS is the language in which our recipe book is written in ( English ). A JS
file is like a singular recipe, and the meal we are trying to make is a program. Whoever has the book and reads this
book can then read the recipe's instructions. Similarly, a JS engine can read a JS file, and execute each instruction.
This implies, as expected, that there are different engines that can read and execute JS files. Of course, recipes can
be written in different languages, it just so happens to be that our recipes will be written in JS and the meals we are
trying to prepare are programs that add functionality to our website.

But why is JS so popular and the de-facto language of the web? Well, it was the proposed solution by NetScape to create
dynamic web pages, a move away from static pages which we have been developing so far. Some may criticize how loose and
inconsistent the language can be, but it cannot be denied that this has allowed development and usage to grow
exponentially. At the moment of this writing, there are proposed replacements to JS as the language of the web, but it
is undeniable that JS has engraved itself deep enough into the Internet that it is here to stay.

## Running JS

Unike our previous workflow with HTML and CSS where we used the web browser to render our website, in order for us to
experiment and use JS, we will be utilizing NodeJS. By going to the
[NodeJS download page](https://nodejs.org/en/download/) and installing Node for our system of choice ( Linux users
should install Node through their package manager based on their distro ), we will begin exploring JS. Once it has
finished installing, we can run the `node` command on PowerShell ( Windows ), Terminal ( iOS ), or some form of terminal
( Linux ). By running this command, we have entered the REPL ( Read-Eval-Print Loop ) environment, which allows us to
execute individual JS lines, and where we will begin playing with the language.

## Basics

Computers are really all about numbers, so let us start our journey into JS with some basic numbers and number
operations. If we were to write just a single number and hit the return key, we should be seeing the same number right
after.

```js
> 5
5
```

Now, that may not be so exciting, so let us do some complex calculcation.

```js
> 60 * 13 - ( 12 / 4 ) * 13
741
```

Quite handy, isn't it? Say we wanted to square the result of the last operation. We could repeat the same equation twice
and multiply them.

```js
> ( 60 * 13 - ( 12 / 4 ) * 13 ) * ( 60 * 13 - ( 12 / 4 ) * 13 )
549081
```

While it was not as bad for this occassion, imagine how bad it could be if the original formula was significantly longer
or we wanted to raise the original value to the 7th value. Instead, what we could do is save the result of the original
formula and simply multiply it by itself as many times as we need to. To do this, we will save the value into a variable
named `x`.

```js
> let x = 60 * 13 - ( 12 / 4 ) * 13
undefined
```

For now we can ignore the `undefined` that was returned. We can see that our value has been stored into the variable `x`
by simply writing out our variable. This is because whenever there is an `x`, JS will substitute it with what we stored
in it, in this case it being the result of our equation.

```js
> x
741
```

Finding the square of our original value is now much easier to write!

```js
> x * x
549081
```

Even better and more concise, we can use the `**` operator in JS, where `x ** y` signifies `x raised to the power of y`.
Thus, finding the 7th power of our original value can be found with the following statement.

```js
> x ** 7
122666918584878330000
```

Now that is a **big** number!

Numbers are not the only thing we can store in variables. We can also store a set of characters or words surrounded by
quotation marks (\"), which we call strings. Let us store our name into a new variable named `name`.

```js
> let name = "TheOrangeLego"
undefined
```

Just like numbers, we can add strings together. What this does is append or concatenate two strings, so if we had the
string `"Hello "` and `"world!"`, we can concatenate them with the `+` operator.

```js
> "Hello " + "world!"
'Hello world!'
```

With this idea, let us have our terminal greet us by creating a greeting message with our previously stored name.

```js
> "Hello " + name + "!"
'Hello TheOrangeLego!'
```

All this time we have been programming through the REPL. This may be handy for executing small instructions, however our
saved data will not be retained once we close our running instance. We can close our program by using the key
combination `Ctrl+D`. After we have closed our program, we can start a new session by simply executing the `node`
command. If we try to use our `name` variable, instead of our name we will get an error.

```js
> name
Uncaught ReferenceError: name is not defined
```

This would really be inneficient if, instead of just a name, we had to do some heavy computations or re-run some complex
instructions. Re-typing everything would be a hassle! Instead of writing our commands into the REPL, we should write
them all into a single file, say `main.js`. If we call `node` and also pass this file as an argument, our JS engine will
execute all instructions line by line, saving us from re-writing them whenever we start up `node`. Let us start by
simply storing our name into our JS file. Note, however, that we will add a semicolon ( `;` ) at the end of each
statement. More on this will be discussed later.

```js
let name = "TheOrangeLego";

name;
```

If we run this file with `node`,

```bash
node main.js
```

we unfortunately do not get anything in return. In fact, the program just finishes! This is due to the fact that the
returned values we saw on the REPL are not shown when the instruction is run when in a file. To print to the screen and
see our name, we need to use the function `console.log(...)`, where `...` is what we want to print out. Thus, we update
our file to be the following

```js
let name = "TheOrangeLego";

console.log(name);
```

Now when we execute our file

```bash
node main.js
```

we see our name on the screen! This function is not limited to only printing characters. Like before, we can not only
print single numbers

```js
console.log(5);
```

but we can also do some calulcations, which will show the final result,

```js
console.log(13 * 4);
```

and variables too.

```js
let foobar = 510 * 5;

console.log(foobar);
```

Something interesting happens, however, when we try to combine a string and a number. Say we want to print out the
message `"The value of x is " along with the value stored in the variable `x`. To do this, we can append the value of
our variable to a string with the `+` operator.

```js
let x = 50;

console.log("The value of x is " + x);
```

Remember that JS is simply substituting our variable with the value we had stored in it, so after substitution, what it
sees is the statement `"The value of x is " + 50`, which is a string on the left and a number on the right. JS then says
that if it sees the addition of a string and a number, then we should assume the number to be of string type, and two
string get concatenated by the `+` operator. This action of making a value type be of another type is called casting.
Note that it is fair to say that we can cast a number to be a string, since the string is simply the number it
represents. The other way around, however, is not possible, per se. How would the string "Hello" be represented as a
number? While it is possible to cast a string of a number to a number, that will be covered in a future section.

One should be aware of order of operations when programming. Note the different outputs between

```js
console.log("Answer: " + 7 + 3);
```

and

```js
console.log("Answer: " + 7 * 3);
```

In the first scenario, we saw that when adding a string to a number, the number is casted into a string, then
concatenated. We say that the `+` operator is left associative, that is to say, if two operators surround an operand, we
first compute the left side, then the right. In our situation, the `7` is surrounded by two `+` operators, which have
the same precedence. Thus, we apply the left `+` operation first, which yields the string `Answer: 7`. Then we simplify
again, which results in the concatenated string `Answer: 73`. Contrast that with the second scenario. Since the `*`
operator has a higher precedence than the `+` operator, we must apply it first, which results in the multiplication of
`7` and `3`, returning `21`. Then, the remaining operation is `+`, which concatenates the string `Answer: ` to the
number `21`. If we instead wanted the first scenario to add our numbers together, we should add a set of paranthesis, as
they have the highest precedence to any operator.

```js
console.log("Answer: " + ( 7 + 3 ) );
```

## Comments

Just like HTML and CSS, we can also make use of comments, which will be completely ignored by our JS engine and instead
are only used by programmers and those taking a look at our source file. In JS, we have to different methods of adding
comments, per line or as a block. Whenever we wish to initiate a comment, we append `//` and anything after it will now
be considered as a comment.

```js
// adds both variables
let result = a + b;
```

What if we wanted to have comments across multiple adjacent lines? We could either begin each line with `//`, or we can
create a block comment, beginning with `/*` and ending with `*/`.

```js
/*
  This is a block comment.

  Notice how these lines do not have to start with // and are still considered as comments.

  We often see block comments when explaining a complex code segment or beginning of functions and or classes to
  describe their purpose.
 */
```
