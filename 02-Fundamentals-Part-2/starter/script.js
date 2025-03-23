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

// if ( retirement > 0 ) {
//     return retirement;
//     console.log( `${firstName} retires in ${retirement} years` );
// } else {
//     return -1;
//     console.log( `${firstName} has already retired 🎉` );
// }
// }

// console.log( yearsUntilRetirement( 1996, 'ryan' ) );
// console.log( yearsUntilRetirement( 1950, 'jonas' ) );

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log( mark.bmi, john.bmi );

// if ( mark.bmi > john.bmi ) {
//     console.log( `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})` );
// } else if ( john.bmi > mark.bmi ) {
//     console.log( `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})` );
// }

for ( let rep = 0; rep <= 10; rep++ ) {
    console.log( `Lifting weights repetition ${rep}` );
}

// let rows1 = 6; // Jumlah baris piramida

// for ( let i = 1; i <= rows1; i++ ) {
//     let spaces = ' '.repeat( rows1 - i ); // Spasi di kiri
//     let stars = '*'.repeat( 2 * i - 1 ); // Bintang yang bertambah ganjil
//     console.log( spaces + stars ); // Gabung spasi dan bintang
// }



// let rows2 = 6; // Jumlah baris piramida

// for ( let i = rows2; i >= 1; i-- ) { // Loop dari 6 ke 1
//     let spaces = ' '.repeat( rows2 - i ); // Spasi tetap sama
//     let stars = '*'.repeat( 2 * i - 1 ); // Bintang mengecil
//     console.log( spaces + stars ); // Gabung spasi + bintang
// }

const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1991,
    'teacher',
    ['michael', 'peter', 'steven']
];
