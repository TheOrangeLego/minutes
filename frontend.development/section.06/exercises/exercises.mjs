/* EXERCISE 1 -- arithmetic */
function exercise1() {
  /* apply and group operations to return 76 */
  let result = 22 - 3 * 4 / 2 - 1;

  return result;
}

/* EXERCISE 2 -- conditionals */
function exercise2(input) {
  /*
   * if the input number is divisible by 3, return "fizz",
   * if the input number is divisible by 5, return "buzz",
   * if the input number is divisible by 15, return "fizzbuzz",
   * otherwise, return "nothing",
   */

  return "nothing";
}

/* EXERCISE 3 -- loops */
function exercise3(base, power) {
  /* calculate the result of raising the base to the power specified; asume power is non-negative */

  return 0;
}

/**                           **/
/* DO NOT EDIT BELOW THIS LINE */
/**                           **/

/* testing all exercises */
export var exercises = [
  () => exercise1(),
  () => exercise2(1),
  () => exercise2(3),
  () => exercise2(5),
  () => exercise2(15),
  () => exercise2(30),
  () => exercise2(-1),
  () => exercise3(2, 3),
  () => exercise3(4, 2),
  () => exercise3(10, 1),
  () => exercise3(10, 0),
];

/* expected results per exercise, in order */
export var answers = [
  76, 'nothing', 'fizz', 'buzz', 'fizzbuzz', 'fizzbuzz', 'nothing', 8, 16, 10, 1,
];
