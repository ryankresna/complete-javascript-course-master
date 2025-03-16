// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if ( passTest ) hasDriversLicense = true;
// if ( hasDriversLicense ) console.log( "I can drive" );

// function logger() {
//     console.log( 'My name is ryan' );
// }

// logger();
// logger();
// logger();

// function fruitProcessor( apples, oranges ) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor( 5, 0 );
// console.log( appleJuice );
// // console.log( fruitProcessor( 5, 2 ) );

// const appleOrangeJuice = fruitProcessor( 2, 5 );
// console.log( appleOrangeJuice );


// function declaration
function calcAge1( birthYear ) {
    return 2030 - birthYear;
}
const age1 = calcAge1( 1996 );

// funtion expression
const calcAge2 = function ( birthYear ) {
    return 2030 - birthYear;
}
const age2 = calcAge2( 1996 );

console.log( age1, age2 );

// const age3 = ( birthYear ) => 2030 - birthYear;
// console.log( age3( 2019 ) )