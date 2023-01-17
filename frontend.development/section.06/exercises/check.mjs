import { exercises, answers } from './exercises.mjs';

/* prints out whether the give and expected results match, with color coded text */
function assert( entryNumber, result, answer ) {
  if ( result === answer ) {
    console.log( '#%d. Your solution is \x1b[32m%s\x1b[0m', entryNumber, 'CORRECT' );
  } else {
    console.log( '#%d. Your solution is \x1b[31m%s\x1b[0m', entryNumber, 'INCORRECT' );
  }
}

/* parse through each exercise and check if its result matches the expected value */
for ( var index = 0; index < answers.length; index++ ) {
  assert( index + 1, exercises[index](), answers[index] );
}
