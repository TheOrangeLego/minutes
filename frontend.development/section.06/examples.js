/* booleans */
console.log( "Booleans and conditiona statements --" );
console.log( "1 < 2 is ", 1 < 2 );
console.log( "5 == 5 is ", 5 == 5 );

let firstRelation = 5 == 5;
console.log( firstRelation );

console.log( "true AND true is ", true && true );
console.log( "false AND true is ", false && true );
console.log( "false OR true is ", false || true );

/* conditionals */
if ( 3 > 1 ) {
  console.log( "3 > 1. All is right with the world." );
} else {
  console.log( "3 <= 1. How did this happen!?" );
}

let x = 1;

console.log( "\nUnnested conditionals --" );

if ( x < 2 ) {
  if ( x < 3 ) {
    console.log( "%d < 3", x );
  }

  console.log( "%d < 2", x );
}

console.log( "\nNested conditionals --" );

if ( x < 2 && x < 3 ) {
  console.log( "%d < 2", x );
  console.log( "%d < 3", x );
}

/* loops */
console.log( "\nLet's say hello multiple times!" );

for ( var index = 0; index < 3; index++ ) {
  console.log( "Hello there!" );
}
