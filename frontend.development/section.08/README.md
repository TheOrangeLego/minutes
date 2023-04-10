# Section 8 - JavaScript Review Section

*This section is not meant to introduce new concepts, and instead aims to reinforce all JS topics covered so far.*

We have covered a multitude of core JS concepts, from variables, loops, to functions. Before continuing on, we should do
our due diligence on familiarizing and mastering said topics. To accomplish this, let us complete various exercises,
some reviewing what we have seen, and others building up to new, but yet relevant, concepts.

## Exercises

* play a single game of rock, paper, scissors. Each user inputs their option, and the program determines who has won, or
  if it was a tie. Make sure that the user inputs are valid.

* ask the user for an input sentence. Calculate the 'string value' of the input, where
  * a vowel is worth 2 points, regardless of case
  * a lower case consonant is worth 1, unless the previous character was also a consonant, then it is worth '2' points
  * an upper case consonant is the negative equivalent to lower case consonants, i.e. -1 per, and -3 if it follows
    another consonant
  * all other characters are worth 0 points

* a number guessing game! Have the program think of a number between 1 to 100. Let the user guess, where the responses
  are either higher (if they guessed too low), lower (if they guess too high), and correct (if they guessed correctly).
  The game continues until the user has guessed the number correctly.

* let's turbo charge our original game of rock, paper, scissors by having the computer be one of the players. At the end
  of a match, the computer should ask if the player wants to play again. Once they decide not to, show the total scores
  for both the user and computer, and indicate the winner.

* are you ready for a doozy? Let's solve the infamous Towers of Hanoi! Your function should take four arguments,
  * the disk we are moving
  * which stack we are moving from
  * which stack we are moving to
  * which stack is a helper stack

  This is a challenging question, often used to explain the power of recursion, and as an interview question, so be sure
  to ask as many questions as necessary, and do not feel desuaded! This is meant to be challenging but fun. :)

Some files have been prepared for your convenience and to support some necessary functionality. Add as much as you need
and see fit. We can run our programs by executing the following command in our terminals

```bash
node <file.js>
```

where `file.js` is any of the exercise files.
