# Section 7 - Functions

*This section introduces the topic of functions, defining and utilizing them.*

### Motivation

Imagine a program had to indicate to the user whether a number was even or odd through a message. We could implement the
following on a single variable.

```js
var number_1 = 1;

if (number_1 % 2 == 0) {
  console.log("1 is an even number.");
} else {
  console.log("1 is an odd number.");
}
```

*Recall that a number is even if the remainder after being divided by 2 is 0, otherwise it is odd.*

If we wanted to do this again, but for another number, we would have to copy-paste most of what we wrote. Doing this
everytime is not only cumbersome, but would cause our code to be cluttered, making its readability significantly more
difficult.

```js
var number_1 = 1;

if (number_1 % 2 == 0) {
  console.log("1 is an even number.");
} else {
  console.log("1 is an odd number.");
}

var number_2 = 12;

if (number_2 % 2 == 0) {
  console.log("12 is an even number.");
} else {
  console.log("12 is an odd number.");
}

var number_3 = 133;

if (number_3 % 2 == 0) {
  console.log("133 is an even number.");
} else {
  console.log("133 is an odd number.");
}

...
```

Notice how each check is very similar, the only main difference is the number which is being tested and how it is shown
in the message to the user. This is where functions come in handy. Functions aim more towards the behavior and
functionality of the program, and influence how we write code and design solutions. They act as templates of logic,
where we can easily re-utilize them with various inputs.

To create a function in JavaScript, follow the following template:

```js
function function_name(input_1, input_2, ...) {
  // template logic goes here
}
```

So, how would this work for our even-odd example? Consider how we said that the only change between all of its usages is
the number. Because this is the only thing that changes, this should be the input to our function. Wherever we see this
number being used, we can then replace it in the repeated logic. We can then give our function a meaningful name, say
something along the lines of `check_even_or_odd`.

```js
function check_even_or_odd(number) {
  if (number % 2 == 0) {
    console.log(number + " is an even number.");
  } else {
    console.log(number + " is an odd number.");
  }
}
```

Now that we have defined our function, how can we use it? Simple! Just write the name of the function followed by a set
of parenthesis. Anything between these parenthesis are the arguments that need to be passed in, and in our case that
should be the number we are trying to determine whether is even or odd.

```js
var number_4 = 191;

check_even_or_odd(number_4);
```

Simple as that! If we needed to repeat this multiple times, instead of having to copy that big chunk of code over and
over, we just have to call our function with the new number. This greatly reduces our code length, and, with a
meaningful function name, we can easily understand what the program is meant to do, even without reading what the
function logic is. This is a key point to keep in mind when naming anything within our programs. If names are direct to
their purpose and short, we can easily and quickly understand the program without spending too much time reading
everything.

Functions are generally used to hide away some complex calculation or logic to simplify and make the overall code easier
to understand, referred to as 'black-boxing' logic away. Thus, functions can end up returning a single value by using
the `return `keyword. Once `return` is encountered within a function, the program exits the function, regardless whether
more logic follows. Consider the following:

```js
function square(x) {
  return x*x;

  console.log("I am never reached!");
  return x + x;
}

square(3);
```

Notice how neither the message nor the second return statement are ever executed. We can use this fact to our advantage,
which we will see later in this lesson.

You might notice that this format is very similar to something we have used multiple times in our lesson,
`console.log()`! All this time we have been using functions, and this one shows how great they can be. Imagine having
had to write all of the logic to `console.log` whenever we wanted to print a message, that would require us to learn
even more to do such a simple task! Instead, without being exposed to what it does under the hood, we can simply use the
function and accomplish what we aim to do.

Following the theme of programming, it should be no surprise that we can also encompass functions within other
functions, like how if-else statements could nest within each other.

```js
function print_is_even(number) {
  console.log(number + " is even.");
}

function print_is_odd(number) {
  console.log(number + " is odd.");
}

function check_even_or_odd(number) {
  if (number % 2 == 0) {
    print_is_even(number);
  } else {
    print_is_odd(number);
  }
}
```

This requires us to discuss complexity in code design. Sure, what is written above is syntactically and behaviorally
correct, but notice how annoying it can become having to read that a function is used within `check_even_or_odd` and
having to jump to that function definition. Once done, we jump back to where we left off and notice another function
call. This pattern of having to dive deeper and deeper into code is detrimental to software engineers, especially when
it comes to testing. As such, we should refrain from 'encapsulating' logic too often when it is not necessary to do so.
The amount of encapsulation varies per person and company, but it should be easy to see when it reaches beyond readable.

### Recursion

If functions can call other functions, would it be possible for a function to call itself? Why, yes! Consider the
following function definition:

```js
function reverse_count(number) {
  console.log(number);

  if (number > 0) {
    reverse_count(number - 1);
  }
}
```

If we were to call this function, we should be getting a result along the lines of

```js
> reverse_count(5);
5
4
3
2
1
```

Let's see what this function does, step by step. We begin with the input of 5, which we print out as the first step.
Then, we check if the number is greater than 0, which is true, as `5 > 0`. This causes us to fall into the if-block,
where we call our function again, but with `5 - 1`, which is `4`, as the input. We repeat this process until our input
is `1`. After printing this number, however, notice that we do not meet the conditional, since `0 > 0` is false. Thus,
we end here. This kind of function where it calls itself is called a recursive function. If our function did not have a
way to end, then it would be called an infinitely recursive function. Careful, however, when defining and using
recursive functions. If there is no method of stopping the recursion, the program will continue to run until it
eventually runs out of memory, causing it to crash. Thus, it is best to first define a 'base case', the minimal
situation where the recursion does not continue. For example, consider defining a function to compute the n-th
number in the Fibonacci sequence. Recall that the Fibonacci sequence is defined as:

```
  F_0 := 0
  F_1 := 1
  F_2 := 1
  F_3 := 2
     ...
  F_n := F_(n - 1) + F_(n - 2)
```

In this case we have two base cases, where the 0th element is 0, and the 1st element is 1. For all other elements, we
can use recursiveness to find their value, as such:

```js
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
