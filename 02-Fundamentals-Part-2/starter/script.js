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


const calcAge = function ( birthYear ) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function ( birthYear, firstName ) {
    const age = calcAge( birthYear );
    const retirement = 65 - age;

    if ( retirement > 0 ) {
        return retirement;
        console.log( `${firstName} retires in ${retirement} years` );
    } else {
        return -1;
        console.log( `${firstName} has already retired 🎉` );
    }
}

console.log( yearsUntilRetirement( 1996, 'ryan' ) );
console.log( yearsUntilRetirement( 1950, 'jonas' ) );