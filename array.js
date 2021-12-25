//6th section of JS

//introduction of Arrays

//When we use var, we can stored only one value at a time. such as...
// var ele = 'book';
// var ele2 = 'diary';

//but array is here to solve the problem. When we feel like storing multiple
//values in one variable, then instead of var we will use an Array.
//In JS, we have an "array class" and arrays are prototype of this class.

//structure: var name =['string','string',number, bulean]
//var name =[lower index ,'string',number, upper index]
// in array first element is called lower index and last is called upper index
// we represent these element by a index number, start from 0,1,2.......n








//***No.1| Traversal in Array:
//means navigate through an array

//or it means if we one to get the single data at a time and
// if we want to change the data

//var myposition = ['Poet', 'Historian', 'Designer', 'Manager'];
//console.log(myposition[0]);

//if want to check the length of an array element we will use 'length' property
//console.log(myposition.length);

//and finally if we want to call our last element of an array we should follow
// this way:
//console.log(myposition[myposition.length - 1]);








//For...In & For...Of loop: (both release in ecma script 6)

//we had use for loop to navigate. such as
/* var myposition = ['Poet', 'Historian', 'Designer', 'Manager'];
//traditional for loop be like:
 for (var i=0; i<myposition.length; i++)
{
    console.log(myposition[i]);
} */


//now lets introduce with "for..in" loop, and its structure:
//for (let elements in array_name) { console.log(elements) }

/*var myposition = ['Poet', 'Historian', 'Designer', 'Manager'];
 for(let elements in myposition)
 {
     console.log(elements);
 } */
//sad story, right???? its shows no element but shows element's index number :(



//no need to worry and sad cause we have "For...of" loop:
//This structure is same as "For...in" loop:
// for(let elements of array_name) { console.log(elements) }
/* var myposition = ['Poet', 'Historian', 'Designer', 'Manager'];
for(let elements of myposition)
{
    console.log(elements);
} */



//Don't say goodbye to "for" yet, we have another one

//array.prototype.forEach()
//structure: array_name.forEach(function(element, index, array) {}); 
//of course that function will be a annoymous function
//it actually calls a function for each element in the array. such as.....
 var myposition = ['Poet', 'Historian', 'Designer', 'Manager'];
/* myposition.forEach(function(element, index, array)
{
    console.log(`${element} ${index} of ${ array}`);
}); */

//or can be in fat arrow function:
 myposition.forEach((element, index, array) =>
{
    console.log(`${element} ${index} of ${ array}`);
});  //for better result traditional function is best.

//forEach do For...In and For...of loop' work at the same time.
//actually forEach print both index number and element in the same time.


















                    //***2 Searching and Filter in Array:

//***Searching:

//Structure: Array.prototype.indexOf()
/* var myposition = ['Poet', 'Historian', 'Designer', 'Manager', 'Doctor'];
// console.log(myposition.indexOf('Historian', 1)); //it always do forward search
//[it means it start searching from the 'Historian' and avoid touching 'Poet']
//if searching 'position index' element is our data than it will print only index number.

console.log(myposition.indexOf('Manager', 2)); */ 
//it returns index number (least) of that element of the array if our
//searching element exist or else show -1. (if our data doesn't exist)





//Structure: Array.prototype.lastIndexOf()
//its start searching from the backward, and returns index number that element
//which is exist in array's condition area. if it can't find data than returns -1.
/* var myposition = ['Poet', 'Historian', 'Designer', 'Manager', 'Doctor'];
console.log(myposition.lastIndexOf('Historian', 2)); */




//Structure: Array.prototype.includes()
//its start searching from the forward,
//determines wether the array contains a value or not and return boolean values(true/false).
/* var myposition = ['Poet', 'Historian', 'Designer', 'Manager', 'Doctor'];
//console.log(myposition.includes("Designer"));
console.log(myposition.includes("Designer", 3)); */






//***filteration:

//Structure: Array.prototype.find(), its actually a callback function
//means, arr.find(callback(element, index, array)[, thisArg]) 
//Returns the found elements in the array, if some element in the array
//satiesfies the testing function or undefined if not.
//Problem: returns only one element

/* const prices = [200, 220, 250, 300, 400, 500, 600];

// const findElm = prices.find((CurVal) => {
    return CurVal < 300;
});

console.log(prices.find((CurVal) => CurVal < 300)); */





//Structure: Array.prototype.findIndex()
//returns the found index in the array, if the element in array satisfies
//the testing function or -1 if not found.
/* const prices = [200, 220, 250, 300, 400, 500, 600];

console.log(prices.findIndex((CurVal) => CurVal > 300));
//console.log(prices.findIndex((CurVal) => CurVal > 1300)); */




//Structure: Array.prototype.filter()
//returns a new array containing all elements of the calling array for which
//the provided filtering function returns true.
//and if not satisfies returns an 'empty array'
/* const prices = [200, 220, 250, 300, 400, 500, 600];

const newtag = prices.filter((CurVal, index) => {
    return CurVal > 400;
});
console.log(newtag); */
//console.log(prices.filter((CurVal) => CurVal > 1300));















                    //***3 Sort in Array:

//Structure: Array.prototype.sort(), an method who works with string.
//sort() method sorts the elements of an array in place and returns the sorted arrayl.
//one thing we have to keep in mind is the default sort order is ascending,
//built upon converting into strings (like we said works with string)
//and comparing their(elements) sequences of UTF-16 code units values.
/* const months = ['Jan', 'Feb', 'Dec', 'April', 'Sep'];
console.log(months.sort()); */

/* const arraynum = [1, 2, 3, 50, 40, 25, 100];
console.log(arraynum.sort()); */
//if numbers are sorted as strings than "25" is bigger than "100", (what world we are on, right?)
//its because of "2 is bigger than 1" motto.
//thats why, sort() will produce an incorrect result when sorting number.


















                    //***4 Perform CRUD:

//Structure: Array.prototype.push()
//This push() method adds one or more elements to the end of an array,
//and return a new length of the array.

/*const animal = ['cat', 'dog', 'rabbit']
animal.push('beef')
//animal.push('cow', 'goat', 'chicken');
const count = animal.push()

console.log(animal);
console.log(count); */





//Structure: Array.prototype.unshift()
//This unshift() method adds one or more elements to the beginning of
//an array and returns the new length of the array.
/*const dress = ['shirt', 'jeans', 't-shirt']
dress.unshift('underware')

console.log(dress); */





//Structure: Array.prototype.pop()
//This pop() method removes the last element from an array and 
//returns that removed element, also changes the length of the array.

/* const plants = ['broccoli', 'cauliflower', 'tomato', 'cabbage', 'cale']
console.log(plants);
console.log(plants.pop());
console.log(plants); */
// console.log(plants.pop());
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);






//Structure: Array.prototype.shift()
//This pop() method removes the fist/beginning element from an array and 
//returns that removed element, also changes the length of the array.

/* const plants = ['broccoli', 'cauliflower', 'tomato', 'cabbage', 'cale']
console.log(plants);
console.log(plants.shift());
console.log(plants); */
// console.log(plants.shift());
// console.log(plants);
















                    //***5 Map and Reduce method:

//Structure: Array.prototype.map() it is a callback function.
//It returns a new array containing the results of calling a function
//on every element in this array. 
//Also without doing any harm to main array, 
//means it return new array without mutating the original array.

//let newArray = mainarray.map(value: Currentvalue, index_number, array) {
//return element for newArray, after executing something }
//so......

/* const arrayone = [1, 2, 3, 9, 15, 20, 25]
//we need a list of element from the array where 
//we can see the number that are greater than 9....
let newarray = arrayone.map((CurEle,index,arr) => {
    return CurEle>9;
});
console.log(arrayone);
console.log(newarray); */

//end of the confusion:
/* const arrayone = [1, 2, 3, 9, 15, 20, 25];
let newarray = arrayone.map((CurEle,index,arr) => {
    return `Index no = ${index} and the value is ${CurEle} that belong to ${arr}`
});

console.log(arrayone);
console.log(newarray); */






















// Array exam/Test: 

//Q.1 : Adding 'Dec' at the end.
/* const month = ['Feb', 'April', 'June', 'Aug', 'Oct']
//month.splice (5, 0, 'Dec') //for mannuel
month.splice (month.length, 0, 'Nov') //for auto
console.log(month); */

//Q.2:What is the return value of splice method?
/* const month = ['Feb', 'April', 'June', 'Aug', 'Oct'];
const newmonth = month.splice(month.length, 0, 'Nov');
console.log(newmonth); */
//it returns an empty array. right????? reason behind??????
//the reason is, we mostly use splice() method for deleting and it keeps
//it eyes on how much element we do delete in our array. But since the number
//of our deletation is null so it shows us a null array in output.:)


//Q.3: Updating 'march' to 'March'.
//1st way: (manuel)
/* const month = ['Feb', 'march', 'June', 'Aug', 'Oct'];
const updateMonth = month.splice(1,1,'March');
console.log(month); */

//2nd way: (auto)
/* const month = ['Feb', 'march', 'June', 'Aug', 'Oct'];
const indexnum = month.indexOf('march')
if(indexnum != -1){
    const updateMonth= month.splice(indexnum,1, 'March');
    console.log(month);
}
else{
    console.log("no such data found");
} */


//Q.4: Deleting June from an array.
//1st way: (noob) 
/* const month = ['Feb', 'March', 'June', 'Aug', 'Oct'];
const indexnum = month.indexOf('June')
const deleteMonth = month.splice(indexnum,1);
console.log(month); */

//2nd way: (pro)
/* const month = ['Feb', 'March', 'June', 'Aug', 'Oct'];
const indexnum = month.indexOf('June');
if(indexnum != -1){
    month.splice(indexnum,1,);
    console.log(month);
}
else{
    console.log("no such data exist");
} */


//Q.5: Deleting some number of data in the end.
/* const month = ['Feb', 'March', 'June', 'Aug', 'Oct'];
const indexnum = month.indexOf('June');
if(indexnum != -1){
    const deldata = month.splice(indexnum,Infinity);
    //const deldata = month.splice(indexnum,2);
    console.log(month);
}
else{
    console.log("no such data exist");
} */





            //Note:
//Array.prototype.splice(start: number, deleteCount: number, items: string[])
//In structure, "start: number" means from where/which position(index number) to we want our action to start from
//"deleteCount: number" means if we want to delete any of our element and 
//number represent number of data count from "start: number".
//if the answer is yes, go on put the index no. of that element in that position and
//try to remember that element must need to be exist after "start: number"
//if answer is no that put 0 in "deleteCount: number" position.
//if we want to add any element than we have to write it down in "items: string[]" position.
//that's it :), that's the information we need to got from our slice() method.


















// Array exam/Test-2:

//Q.1 : Find the square root of each element in an array.
/* let sqarray = [9, 16, 25, 36, 49, 64, 81];
let rootarray = sqarray.map((CurElm) => {
    return Math.sqrt(CurElm)
}); //or,
let rootarray = sqarray.map((CurElm) => Math.sqrt(CurElm)); 
//                                      Math.sqrt() = root from math
console.log(rootarray); */



//Q.2 : Multipy each element by 2 and return only those elements
//      which are greater than 10.
/* let numrray = [2, 3, 4, 5, 6, 8];
let exclarray = numrray.map((CurElm) => CurElm * 2).filter((CurElm) => CurElm > 10);
//                                                 (chaining tricks)
console.log(exclarray); */















//***Extra Array: reduce() method (its reduce your element in array)
//Structure: reduce(accumulator, Current_value, Current_Index, Source_Array);

//This method executes a reducer function (that you provide) 
//on each elements of the array, resulting in single output value.

//ANNNNDDDD!!!! reducer function takes four arguments:
//Accumulator: if we want to understand it simply than lets say it means,
//a box of container where we acumulate/store something. 
//1.Because of this 'Accumulator', its being possible to do sum, average, percent etc easily.
//2.In array, if any elemnts comes to 'Current_value'that elements 
//will store at 'Accumulator' and repeat....
//other those three are same as before: Current_value, Current_Index, Array


//let rearray = [3, 5, 7, 9]
//sum:
// let numarray = rearray.reduce((accumulator, CurElm, index, arr) => {
//     return accumulator += CurElm; 
// });

//chaining trick:
//let numarray = rearray.map((CurElm) => CurElm * 2).filter((CurElm) => CurElm >= 10).reduce((accumulator, CurElm) => accumulator += CurElm);

//multiplication:
// let rearray = [3, 5, 7]
// let numarray = rearray.reduce((accumulator, CurElm) => 
//                 accumulator *= CurElm);
// console.log(numarray);


//In reduce(), there is also a EXTRA-ARGUMENTS called 'initialValue' 
//and what is the job of this 'initialValue'?
//Answer is, suppose we have a elements in our array 
//that were mistakenly miss-out when we had been typing. (Than we start to allow ourselve feel bad right?)
//To fix these mistake 'initialValue' will be always there for us.

//Now you can say that, "but we have a unshift() for that work, why we have to worry?"
//My answer will be, "Yes, both are same but what if you would have to do a math operation in your array?
// and how will you going to solve that problem easily? Now, thats where I got you."

//lets get it done:
/* let rearray = [3, 5, 7]
let numarray = rearray.reduce((accumulator, CurElm,) => {
        return accumulator += CurElm; 
    }, 7); //7 will store in accumulator from the beginng of the operation.

console.log(numarray); */








//Bonus:
//"Array of an Array/ Nested Array"

//How to flatten an Array? (merge all Array into a big fat array)
//means converting 2d, 3d array into one dimensional array. Example: No way to home, Dark theory.
//lets get it done:

const dimarray = [
    ['spiderman', 'Avengers'],
    ['spiderman', 'Electro'],
    ['spiderman', 'Greengoblin', 'Dr.Otto']
];

let flatarray = dimarray.reduce((accum, CurEle) => {
        return accum.concat(CurEle) //flatarray = Dr. Strange :p
});
console.log(flatarray);

//And before we go I just want to share a fact and that is 'less use of reduce()'
//ACTUAALLLLLLYYYYYYY,
//Reduce() method becomes a joke for a reason like this:

/* const dimarray = [
    ['spiderman', 'Avengers'],
    ['spiderman', 'Electro'],
    ['spiderman', ['Greengoblin', 'Dr.Otto']]
]; */