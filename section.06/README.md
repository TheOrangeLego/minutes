# Section 6 - Additional Introduction to JavaScript

*This section continues the introduction to JavaScript, covering the concept of booleans, flow control, and loops.*

## Booleans

We have seen two different tyoes of values that we can store in JS, numbers ( like `1`, `2.4`, `-50` ), and strings
( like `hello` ). We will now introduce another data type, the boolean. Unlike the other types which can store either
any number or combination of letters, a boolean can only store two different types of values, `True` and `False`. This
may not seem very interesting, but we will see how this will empower the capabilities of our programs and enhance user
experience when incorporated to our websites. For now, let us consider the following statement

```js
let myNumber = 3;

let isLessThanFive = myNumber < 5;
```

We begin with a simple statement, assigning our variable `myNumber` to the value 3. Then, we create another variable,
where this time we determine whether the statement `myNumber < 5`, i.e. `3 < 5`. Since this statement is true, our new
variable `isLessThanFive` will hold the boolean value `True`. If instead of the first variable were to hold the value
`100`, then the statement `100 < 5` would be false, and thus `isLessThanFalse` would be assigned to the boolean value of
`False`. We can take this a step further by introducing boolean operators. Just like numbers have multiple operators,
e.g. `+`, `-`, `*`, and so do strings, primarily the `+` operator, booleans also have operators that can be used to
create complext statements. Some of these operators include

* `&&` - read as AND, given two boolean values, `b1` and `b2`, `b1 && b2` is `True` if and only if both values are also
`True`
* `||` - read as OR, given two boolean values, `b1` and `b2`, `b1 || b2` is `True` if at least one of the values is
`True`
* `^` - read as X-OR, given two boolean values, `b1` and `b2`, `b1 ^ b2` is `True` if and only if both values do not
have the same value
`!` - read as NOT, given a boolean value, `b1`, `!b1` returns the opposite value

These operators expect boolean values as its operands, i.e. inputs. If instead we want to derive a boolean value from
numbers or strings, we can use any form of relation quantifiers, such as `<`, `>`, or `==` ( here meaning equality ), If
we wish to determine if two values are equal, we use the `==` operator, such as `3 == 4`. This statement would return
`False`. On the other hand, if we wish to check for inequality, we use the `!=` operator, read as NOT EQUAL, and use it
as `7 != 10`, which returns `True`. Lastly, we can combine both equality and relation quantifiers, such as less than or
equals to ( `<=` ), and greater than or equals to ( `>=` ).

## Flow Control

As hinted earlier, booleans would allow us to enhance the capabilities of our programs. We will begin with one use case,
flow control. Suppose that wish to display a message if a certain criteria is met, say a number is greater than 10,
otherwise we want to show another message. To do this, we can use the `if else` statements. These statements take in a
predicate, which if it is true, then will execute the code block that follows our predicate. Otherwise, it will execute
the code block following the `else` keyword. Codifying our example above, we write the implementation

```js
let someNumber = 17;

if (someNumber > 10) {
  console.log("This number is greater than 10!!");
} else {
  console.log("This number is less than or equal to 10!!");
}
```

If we were to run the following program, we would see the first message, that our number is greater than 10. However, if
we changed the value of our number variable to be 5, for example, we will only end up seeing the second message. Using
flow control allows us to only execute certain instructions under certain conditions. Do note that the `else {...}`
statement is optional, i.e. was could only have an `if` statement, executing its codeblock only if we meet the specified
condition, while also executing what following statements.

```js
let aNumber = 100;

if (aNumber < 1000) {
  console.log("Our number is less than 1000.");
}

console.log("Its product with 0 is always 0.");
```

Note how no matter which number we set `aNumber` to be, the second message will always be printed onto the screen.

Let us take this a step further, by adding another conditional statement in the inside of the first code block.

```js
let x = 55;

if (x > 0) {
  if (x < 100) {
    console.log("This number is less than 100.");
  }

  console.log("This number is greater than 0.");
}
```

Just like how we had to be wary of our use of nested `div`s in HTML, we should be extra careful when using nested `if`
statements or even the logic it is trying to represent. One may be tempted to reduce the code above as

```js
if (x > 0 && x < 100) {
  console.log("This number is less than 100.");
  console.log("This number is greater than 0.");
}
```

While both implementations will behave similarly for any `x` between 0 and 100, they will behave differently when a
number is chosen outside of the specified range. This becomes more difficult when dealing with larger and more complex
programs, ones where running through each written step to be deemed inneficient. As such, when designing code, we should
design our solution and evaluate its correctness rigorously to minimize our time spent debugging.

## Loops

Booleans can also be used to dealing with repetitive logic. Let us say that we wish to print out ten ( 10 ) messages,
where each print out the current message count. A simple implementation could be the following

```js
console.log("This is message 1.");
console.log("This is message 2.");
console.log("This is message 3.");
console.log("This is message 4.");
console.log("This is message 5.");
console.log("This is message 6.");
console.log("This is message 7.");
console.log("This is message 8.");
console.log("This is message 9.");
console.log("This is message 10.");
```

While this works for our situation mentioend above, imagine if we need to do this for one hundred messages, or even ten
thousand messages. We use the concept of loops to do this repetitive work for us. In particular, we will be using a
`for loop`, which is useful for when we need to repeat something for a specific number of times. For example, we can
repeatedly print the message `"hello world"` ten times by writing the following

```js
for (var x = 0; x < 10; x++ ) {
  console.log("hello world");
}
```

Taking a closer look at the content inside the parenthesis, notice there are three parts. In the first part, we
initialize a variable `x` with the initial value of 0. This is the starting value or state of our for loop. The second
part is the conditional. As long as this conditional is true, we will be repeating the instructions specified inside the
code block for this loop. Lastly, the third part is a statement that is executed after running the code block below.
Once this is executed, the conditional from the previous part is checked. If the conditional is still true, we loop will
repeat the loop. Otherwise, we exit out of our loop and continue onwards. Thus, the overall flow for a `for loop` is as
follows

1. execute the initialization of the loop
2. check the conditional, if true move to the next step, otherwise we exit the loop
3. execute all instructions inside the code block below
4. execute the step statement
5. go back to step 2

Some things to note, we can also use the variable we used for the initialization statement within our code block.

```js
for (var index = 0; index < 10; index++) {
  console.log("This is message " + ( index + 1 ) + ".");
}
```

Pay attention to the index's starting value, the conditional statement, and the fact that we add `1` to the value of
index before printing it out to the screen. This is known as an off by one index. Due to some context not explained at
this point, we generally begin our loops with 0. This does not mean that we cannot start our index at a different value,
but we should be aware of how our conditional should be updated to match our expected logic.

```js
for (var index = 111; index <= 120; index++ ) {
  console.log("This is message " + ( index - 110 ) + ".");
}
```
