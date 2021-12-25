//5th section of JS

//introducing ECMA-Script 6 (2015s)




//***let vs const vs var: basically var and let both work same way (var=let)

// var polyname = "somik";
// let polyname = "somik";
// console.log(polyname);

// polyname = "sunny";
// console.log(polyname);

// const polyname = "sunny";
// console.log(polyname);



//but..but..but....but.... (var is "function scope")
// (let & const are "block scope")
// its mean that if you are using let and const keyword, you can use a
// variable in 'child scope{}' which is defined in 'parent scope{}'. But
// you can't use a variable outside the 'child scope' if it this varaible
// somehow defined in 'child scope{}'. 
//just as....

/* function nickname(){// 'parent scope'
    let firstName = "Asfake";
    console.log(firstName);

    if(true){ //'child scope'
        let lastName = "Sunny";
        console.log('inner '+ lastName);
        console.log('inner ' + firstName);
    }

    console.log('inner '+ lastName);
    console.log('inner ' + firstName);

}

nickname(); */




/* //but in var that thing hadn't exist
function nickname(){// 'parent scope'
    var firstName = "Asfake";
    console.log(firstName);

    if(true){ //'child scope'
        var lastName = "Sunny";
        console.log('inner '+ lastName);
        console.log('inner ' + firstName);
    }

    console.log('inner '+ lastName);
    console.log('inner ' + firstName);

}

nickname();

*/












//***Templates literal: (template string is ``)
//time to say goodbye to concatenation "+", yesshhhhh!!!! thats right.

    //instead of using this:
    //console.log(valueof + " * " + num + " = " + valueof * num);
    //we should nowon use..........
    
/* for(num = 1; num <= 10; num++){
    let valueof = 12;
    console.log(`${valueof} * ${num} = ${valueof * num} `);
} */












//***Default Parameters:
//default function parameter allow named parameter(a,b) to be initialized
//with default values, if no value passed in that paramerter or its undefined.

/* function mul(a,b=5){ //b=5 is a default parameter
    return a*b;
}
console.log(mul(4)); */











//***Fat Arrow Function: (symbol "=>"")
//structure : const sum = () => {}

//converting of a normal way of writed function to arrow function:

/* console.log(math());

function math(){
    let a = 5; b = 6;
    let sum = a+b;
    return `Sum is ${sum}`
} */

/* const math = () => { //Fat Arrow function
    let a = 5; b = 6;
    let sum = a+b;

    return `Sum is ${sum}`
} 

console.log(math()); */

//in fat arrow function, first defined the variable and than call. 













//checking the difference between traditional function and ecma-script6
//1st check:
/* const math = () => {
    let a = 5; b = 6;
    return `Sum is ${a+b}`
} 
console.log(math()); */


//2nd check:
/* const math = () => { let a = 5; b = 6;  `Sum is ${a+b}` } 
console.log(math()); */


//3rd check
/* const math = () => `Sum is ${(a=5) + (b=7)}`
console.log(math()); */










//***Destructuring in ES6:
//the destructuring assignment syntax is a JS expression, that makes it possible to
//unpack values from arrays, or properties from objects, into distinct variable.
//it means we have to broke array in so many more pieces.
//let's see how:

//Array destructuring:
/* const myData = ['Ariful', 'Asfake', 'Sunny', '21'];

//noob way:
// let myFname = myData [0];
// let myMname = myData [1];
// let myLname = myData [2];
//console.log(myLname);

//array destruct way:
// let [myFname, myMname, myLname, myAge] = myData; 
//in array destructuring position/index matters.
//console.log(myData);
//console.log(myFname);

//we can add values too
let [myFname, myMname, myLname, myAge, myDegree = "Diploma"] = myData;
console.log(myDegree); */



//Object destructuring:
/* const myData2 = {
    myFname : 'Ariful',
    myLname : 'Sunny',
    age : 21
}

//noob way:
// let Myage = myData2.age;
// console.log(Myage);

//object destruct way:
//same as array destruct, just we have to use calli braces {} in replacement of []
let {myFname, myLname, age, myDegree = "Diploma"} = myData2;
console.log(age);
console.log(myLname); */








//*** Object Properties:
//we can now use dynamic properties, like:

/* let myName = "Sunny";
let friend = "Siam"

const MyData = {
    [myName] : "hello how are you?",
    [friend] : "Fine",
    [20+2*1] : "is my age."
}
console.log(MyData); */


//no need to write key and value, if both name are same
/* let myName = "Sunny";
let friend = "Siam";

//same name of key and value like:
// const MyData = {
//     myName : myName,
//     friend : friend
// }

const MyData = {myName, friend}
console.log(MyData); */ 









//*** Spread operator: (3 dot and defined class name = "...class_name")

/* const Favcolor = ['red', 'green', 'blue', 'yellow'];

//const Favcolor = ['red', 'green', 'blue', 'yellow', 'oxy'];
//const MyColor = ['red', 'green', 'blue', 'yellow', 'white', 'pink'];
//2nd time, if we add oxy in "Favcolor" or one more color to spread the array,
//and its tell us we need to write oxy again in bigarray "MyColor".

//that's why,
const MyfavColor = [...Favcolor, 'black', 'pink', 'oxy'];
console.log(MyfavColor); */







//********************* EcmaScript 7 (2016s) ******************
//features


//1. Array includes

/* const Favcolor = ['red', 'green', 'blue', 'yellow'];
//const present = Favcolor.includes('green');
const present = Favcolor.includes('orange');
console.log(present); */



//2.Exponentiation operator: (**)
// console.log(2**2); //2*2
// console.log(2**3); //2*2*2









//********************* EcmaScript 8 (2017s) ********************
//feature:


//String padding: (including space in our running result)
/* let MyName = "sunny";
let printName = MyName.padStart(8);
let printName = MyName.padEnd(8);
console.log(printName); */ //go to browser and open inspect and watch result

//1. padding example chart:
//padStart(7) = '  sunny'
//padStart(6) = ' sunny'
//padStart(5) = 'sunny'
//padEnd(7) = 'sunny  '
//padEnd(6) = 'sunny '
//padEnd(5) = 'sunny'




//2. Object.values(): return only value of object, but no key.
/* const Person = {name : 'Sunny', age : 21};
console.log(Object.values(Person)); */




//3. Object.entries(): transform an object to an array, but according to their key.
/* const Person = {name : 'Sunny', age : 21};
console.log(Object.entries(Person)); */








//********************* EcmaScript 9 (2018s) ********************

//ES6 introduces the concept of rest and spread element for array destruction
//ES9-2018 introduce the same but for object:

//rest:
/* const {first, second, ...others} = {first: 1, second: 2, third: 3, fourth: 4};
console.log(others); */



//spread:
/* const {first, second, ...others} = {first: 1, second: 2, third: 3, fourth: 4};

const items = {first, second, ...others}
console.log(items); */

/* const person = {name : 'Sunny', age : 21};
const Secperson = {...person}
console.log(person);
console.log(Secperson); */









//********************* EcmaScript 10 (2019s) ********************

//1. Array.prototype.{flat, flatmap}:
//flat() is a new array instance method that can create a one-dimensional array
//from a multidimensional array.
//example:
/* const Fiarr = ['dog', 'cat', ['sheap', 'wolf']];
console.log(Fiarr.flat()); */

//by default it only 'flats' up to one level, but you can add a parameter(1,2,3 etc)
//to set the number of levels you want to flat the array to.
/* const Fiarr = ['hen', ['dog', 'cat', ['rabbit'], ['sheap', 'cow', ['wolf', 'tiger']]]];
//console.log(Fiarr.flat());
//console.log(Fiarr.flat(2));
//console.log(Fiarr.flat(3));

//or, Set the Infinity to have unlimited levels:
//console.log(Fiarr.flat(Infinity)); */




//2. Object.fromEntries():
//undo mode Object.entries() to main object, like:
/* const person = {Name: "Sunny", Age: 21}

const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj)); */











//********************* EcmaScript 11 (2020s) ********************

//1. BigInt:
//BigInt one the anticipated features in JS, is finally here.
//It actually allows developers to have much greater integer representation in
//their JS code for data processing for data handling.

//Currently the maximum nuber you can store as an integer in JS is pow(2, 53).
//but BigInt actually allows you to go even beyond that.

// let oldnum = Number.MAX_SAFE_INTEGER;
//console.log(oldnum);
//console.log(oldnum+1);
//console.log(oldnum + 12); (of course output is false)

//fixing the bug with adding 'n' in both BigInt and operand:
//console.log(9007199254740991n + 12n);
// const binum = 9007199254740991n + 12n;
// console.log(typeof(binum));





//2. Nullish Coalescing: ??
//it adds the ability to truly check "nullish" values instead of "falsey" values.

//now, what is the difference between nullish and falsey values??
//In JS, a lot of values are falsey. 
//Like empty strings, the numbers(), undefined, null, false, NaN and so on.

//the nusllish coalescing operator(??) is a logical operator that returns its
//right-hand side operand when its left-hand side operand is null or undefined,
//and otherwise returns its left-hand side operand.

//Example:
/* const foo = null ?? 'default string';
console.log(foo); */

// const foo = false ?? 'default string';
// console.log(foo);

// const foo = 5 ?? 'default string';
// console.log(foo);

// const foo = undefined ?? 'default string';
// console.log(foo);

// const foo = NaN ?? 'default string';
// console.log(foo);













//********************* EcmaScript 5 (2014s) ********************
//1. "use strict":
//its give us a advice about using traditional style of JS,
//doesn't matther is it string, integer or any datatype.

//like 2nd data, it tell us, "first declear the data in right", so it won't
//work untill we write any var, const, let.


// x = 3.1416;
// console.log(x);

// "use strict"
// x = 3.1416;
// console.log(x);

// "use strict"
// let x = 3.1416;
// console.log(x);