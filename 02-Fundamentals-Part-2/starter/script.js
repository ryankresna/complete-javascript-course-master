// // 'use strict';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if ( passTest ) hasDriversLicense = true;
// // if ( hasDriversLicense ) console.log( "I can drive" );

// // function logger() {
// //     console.log( 'My name is ryan' );
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor( apples, oranges ) {
// //     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const appleJuice = fruitProcessor( 5, 0 );
// // console.log( appleJuice );
// // // console.log( fruitProcessor( 5, 2 ) );

// // const appleOrangeJuice = fruitProcessor( 2, 5 );
// // console.log( appleOrangeJuice );


// // function declaration
// function calcAge1( birthYear ) {
//     return 2030 - birthYear;
// }
// const age1 = calcAge1( 1996 );

// // funtion expression
// const calcAge2 = function ( birthYear ) {
//     return 2030 - birthYear;
// }
// const age2 = calcAge2( 1996 );

// console.log( age1, age2 );

// const age3 = ( birthYear ) => 2030 - birthYear;
// console.log( age3( 2019 ) )

// const calcAge2 = function ( birthYear ) {
//     return 2037 - birthYear;
// }

// arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3( 1991 );
// console.log( age3 );

// const yearsUntilRetirement = ( birthYear, firstName ) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log( yearsUntilRetirement( 1996, 'Ryan' ) );
// console.log( yearsUntilRetirement( 1980, 'Jonas' ) );


// function cutFruitPieces( fruit ) {
//     return fruit * 4;
// }

// function fruitProcessor( apples, oranges ) {
//     const applePieces = cutFruitPieces( apples );
//     const orangePieces = cutFruitPieces( oranges );

//     const juice = `juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//     return juice;
// }

// console.log( fruitProcessor( 2, 3 ) );


// const calcAge = function ( birthYear ) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function ( birthYear, firstName ) {
//     const age = calcAge( birthYear );
//     const retirement = 65 - age;

//     if ( retirement > 0 ) {
//         console.log( `${firstName} retires in ${retirement} years` );
//         return retirement;
//     } else {
//         console.log( `${firstName} has already retired 🎉` );
//         return -1;
//     }
// }

// console.log( yearsUntilRetirement( 1996, 'ryan' ) );
// console.log( yearsUntilRetirement( 1950, 'jonas' ) );


// const calcAverage = ( a, b, c ) => ( a + b + c ) / 3;
// console.log( calcAverage( 3, 4, 5 ) );

// test 1
// let scoreDolphins = calcAverage( 44, 23, 71 );
// let scoreKoalas = calcAverage( 65, 54, 49 );
// console.log( scoreDolphins, scoreKoalas );

// const checkWinner = function ( avgDolphins, avgKoalas ) {
//     if ( avgDolphins >= 2 * avgKoalas ) {
//         console.log( `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})` );
//     } else if ( avgKoalas >= 2 * avgDolphins ) {
//         console.log( `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})` );
//     } else {
//         console.log( 'No team wins.' );
//     }
// }
// checkWinner( scoreDolphins, scoreKoalas );

// checkWinner( 333, 101 );

// test 2
// scoreDolphins = calcAverage( 85, 54, 41 );
// scoreKoalas = calcAverage( 23, 34, 27 );
// console.log( scoreDolphins, scoreKoalas );
// checkWinner( scoreDolphins, scoreKoalas );

// const friends = ['michael', 'steven', 'peter', 'joshua'];
// console.log( friends );

// const y = new Array( 2001, 2002, 2003 );

// console.log( friends[0] );
// console.log( friends[2] );
// console.log( friends.length );
// console.log( friends[friends.length - 1] );

// friends[2] = 'jay';
// console.log( friends );

// const firstName = 'ryan';
// const ryan = [firstName, 'kresna', 2037 - 1996, 'worker', friends];
// console.log( ryan );
// console.log( ryan.length );

// exercise
// const calcAge = function ( birthYear ) {
//     return 2037 - birthYear;
// }
// const years = [1996, 1999, 2001, 2010, 2020];

// const age1 = calcAge( years[0] );
// const age2 = calcAge( years[1] );
// const age3 = calcAge( years[years.length - 1] );
// console.log( age1, age2, age3 );

// const ages = [calcAge( years[0] ), calcAge( years[1] ), calcAge( years[years.length - 1] )];
// console.log( ages );

// const friends = ['michael', 'steven', 'peter'];

// add element
// const newLength = friends.push( 'jay' );
// console.log( friends );
// console.log( newLength );

// friends.unshift( 'john' );
// console.log( friends );

// remove element
// friends.pop(); // last
// const popped = friends.pop();
// console.log( popped );
// console.log( friends );

// friends.shift(); // first
// console.log( friends );

// console.log( friends.indexOf( 'steven' ) );
// console.log( friends.indexOf( 'jonas' ) );

// friends.push( 23 );
// console.log( friends.includes( 'steven' ) );
// console.log( friends.includes( 'jonas' ) );
// console.log( friends.includes( 23 ) );

// const calcTip = function ( bill ) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip( bills[0] ), calcTip( bills[1] ), calcTip( bills[2] )];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log( bills, tips, totals );