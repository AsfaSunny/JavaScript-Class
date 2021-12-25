//9th section of JS

//Math Object in JavaScript:

//What is JS math object?
//The JS Math Object allows you to perform mathmatical task on numbers.
//Let's get it started............


//Math.PI: (remember 3.1416? feel nostalogic?)
// console.log(Math.PI);




//Math.round():
//returned the value of x rounded to its nearest integer, means 10.43~10/ 10.51~11
//if a number is greater than .50 than this method brings decreament value.
//if a number is less than .50 thab method brings increament value.
/* // let num = 10.48;
let num = 10.50;
console.log(Math.round(num)); */




//Math.pow(): {example: Math.pow(x, y)}
//returns the value of x to the power of y.
// console.log(Math.pow(3, 3));
//similar to logic: 2**3.




//Math.sqrt(): {example: Math.sqrt(x)}
//returns the square root of number like 4,9,16,25.....as well as any other number.
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(70));




//Math.abs(): {example: Math.abs(x)}
//returns the absolute(positive) value of x
// console.log(Math.abs(-35));
// console.log(Math.abs(-60.901));
// console.log(Math.abs(50));
// console.log(4-7);
// console.log(Math.abs(4-7));




//Math.ceil(): {example: Math.ceil(x)}
//first of all, What does ceil word means to you? Up right? like ceiling fan.
//this method returns the value of x rounded up to its nearest integer.
//always brings increament round of any floating number.
// console.log(Math.ceil(50.01)); //returns value greater than 50.01
// console.log(Math.round(50.01)); //returns value less than 50.01
// console.log(Math.ceil(99));
// console.log(Math.ceil(99.51));
// console.log(Math.round(99.51));




//Math.floor():
//floor always means down/ground, right?
//so, this method always try to do the opposite of Math.ceil().
//this method returns the value of x rounded down to its nearest integer.
//always brings the decreament round of any floating number.
// console.log(Math.floor(50.81)); //returns value less than 50.81
// console.log(Math.round(50.81)); //returns value greter than 50.81
// console.log(Math.floor(44));
// console.log(Math.floor(60.101)); 
// console.log(Math.round(60.101));




//Math.min():
//it can be used to find the lowest value in a list of arguments.
// console.log(Math.min(10, 6, 11, 19, -120, -7));




//Math.max():
//can be used to find the highest value in a list of arguments.
// console.log(Math.max(10, 6, 11, 19, -120, -7));




//Math.random():
//returns a random number between 0 to 9. Not same number, anytime any number.
//And returns value will be always a floating number.
//0 is our inclusive
// console.log(Math.random());
// console.log(Math.random()*10);
// //stoping floating number by using:
// console.log(Math.floor(Math.random()*10));
// console.log(Math.round(Math.random()*10));




//Math.trunc():
//returns the integer part of a number.
//Means it always returns the number before the decimal(.) from a floating number.
// console.log(Math.trunc(99.1));
// console.log(Math.trunc(-99.7));
// console.log(Math.trunc(99));
// console.log(Math.trunc(90.7));
// console.log(Math.trunc(-99.60));