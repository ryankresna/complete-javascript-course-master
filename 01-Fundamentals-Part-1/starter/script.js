
// let js = "amazing";
// console.log( 40 + 8 + 23 + 10 );

// console.log( "Jonas" );
// console.log( 23 );

// let firstName = "Jonas";

// console.log( firstName, js );
// console.log( firstName, js );
// console.log( firstName, js );

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log( myFirstJob );

// let javascriptIsFun = true;
// console.log( javascriptIsFun );

// console.log( typeof true );
// console.log( typeof javascriptIsFun );
// console.log( typeof 23 );
// console.log( typeof "Jonas" );

// javascriptIsFun = 'YES!';
// console.log( typeof javascriptIsFun );

// javascriptIsFun = 100;
// console.log( typeof javascriptIsFun );

// let year;
// console.log( year );
// console.log( typeof year );

// year = 1991;
// console.log( typeof year );

// console.log( typeof null );

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 2001;
// const job;
// console.log( age );

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Schmedtmann';
// console.log( lastName );

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log( ageJonas, ageSarah );

// console.log( ageSarah * 2, ageSarah / 2, 2 ** 3 );
// 2 ** 3 adalah 3 = 2 * 2 * 2

// const firstName = 'Ryan';
// const lastName = 'Kresna';
// console.log( firstName + ' ' + lastName );

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log( x );

// console.log( ageJonas > ageSarah );
// console.log( ageSarah >= 18 );

// const isFullAge = ageSarah >= 18;

// console.log( now - 1991 > now - 2018 );

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log( now - 1991 > now - 2018 );

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log( x, y );

// const averageAge = ageJonas + ageSarah / 2;
// console.log( ageJonas, ageSarah, averageAge );

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / ( heightJohn * heightJohn );
// const markHigherBMI = BMIMark < BMIJohn;

// console.log( BMIMark, BMIJohn, markHigherBMI );

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + ( year - birthYear ) + ' year old ' + job + '!';
// console.log( jonas );

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log( jonasNew );

// console.log( `Just a regular string...` );

// console.log( 'String with \n\
// multiple \n\
// lines' );

// console.log( `string
// multiple
// lines`);

// const age = 10;
// const isOldEnough = age >= 18;

// if ( isOldEnough ) {
//     console.log( 'Sarah can start driving license 🚓' );
// } else {
//     const yearLeft = 18 - age;
//     console.log( `Sarah is too young. Wait another ${yearLeft} years :)` );
// }

// const birthYear = 3301;
// let century;

// if ( birthYear <= 2000 ) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log( century );

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / ( heightJohn * heightJohn );
// console.log( BMIMark, BMIJohn );

// if ( BMIMark > BMIJohn ) {
//     console.log( `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!` );
// } else {
//     console.log( `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!` );
// } 


// type conversion
const inputYear = '1991';
console.log( Number( inputYear ) + 18, inputYear );
console.log( inputYear + 18 );

console.log( Number( 'Jonas' ) );
console.log( typeof NaN );

console.log( String( 23 ), 23 );

// type coercion
console.log( 'I am ' + 29 + ' years old' );
console.log( '23' + '10' + 3 );