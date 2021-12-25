//7th section of JS

//String in JavaScript:
//First things first: JS string are used for storing and manipulating text.
//We can use single or double quotes.
//And yes, String can be created as primitives from string literals or as object,
//using String() constructor.

// let MyName = "Sunny";
// console.log(MyName);

//create a string with String() constructor:
// let FullName = new String("Ariful Asfake");
// console.log(FullName);




//***Finding length of a string: means reflect the length of the string
//Structure: String.prototype.length (length is property)
// let MyName = "Sunny";
// console.log(MyName.length);




//***Escape Character: "\\"
// let speech = "He said \"Hello Peter\" to me "
// console.log(speech);

//If you don't want any mess, try this:
// let speech2 = 'He said \"Hello Peter\" to me '
// console.log(speech2);




//***Finding String in a string: 
//string.prototype.indexOf(): it will return string's position number.
//we use indexOf() method same as we used that method in array.
//The result will also be same as array.
/* const mydata = "I am another Sunny";
console.log(mydata.indexOf("S")); */
// console.log(mydata.indexOf("a", 3));


//***string.prototype.lastindexOf():
//we use lastIndexOf() method same as we used that method in array.
//The result will also be same as array.
/* const mydata = "I am another Sunny";
 console.log(mydata.lastIndexOf("S", 3)); */





 //***Searching for a string in a string:
 //String.prototype.search()
 //The search() method searches a string for a specified value and returns the 
 //position of the match. (another method which returned index/position no.)
 //btw, this method can't take a second start position argument.Like, "mydata.search("another", 7)"

 /* const mydata = "I am another Sunny";
 const Exdata = mydata.search("another");
 console.log(Exdata); */








 //***Extracting String Parts:
 //there are 3 methods for extracting a part of a string:
//1. slice(start, end)
//2. substring(start, end)
//3. substr(start, length)



//slice() method:
//this method extracts a part of a string and 
//returns the extracted part in a new string.
//The method takes 2 parameters: the start position and the end position.
//(it is okey to not included end position)

//And another point is slice() method selects the elements from the 
//starting by the given number argument at the start position, but does not
//include the given argument of the end position. Means It will stop at 1 position
//ahead of end argument.

/* let firstr = "Apple, Kiwi, Banana";
//let exstr = firstr.slice(0, 4); //as you can see it didn't return e from 'Apple'
// let exstr = firstr.slice(0, 5);

// let exstr = firstr.slice(7, -3); //what's happend here, hmmm? something strange?
//Actually what is happend here is like this, it start counting from Kiwi 
//and didn't stop till the end. But for -3 argument, it didn't get the chance to
//count last 3 position of the array/string. 
//So it removed last 3 charcter in a new string.

let exstr = firstr.slice(7);
console.log(exstr); */




//substring() method:
//substring() is similar to slice(). Just a difference is that substring() can't
//accept negative indexes.

/* let firstr = "Apple, Kiwi, Banana";
// let res = firstr.substring(0, 10);
let res = firstr.substring(8, -2);
//If we give negative value then characters are counted from the 0th position
//and stop count till the reach of "start" argument's job.
console.log(res); */




//substr() method:
//substr() is similar to slice(). Main difference is that second parameter 
//specifies the length of the extracted part.

/* var thrstr = "Apple, Kiwi, Banana";
// let response = thrstr.substr(4, 9);
let response = thrstr.substr(-6); //if want to extract back word theory, than it can be useful.
console.log(response); */













//*** Replacing String Content()

//Structure: String.prototype.replace(searchFor, replaceWith)
//The replace() method replaces a specified value with another value in a string.

/* let Biodata = "I am another sunny from Asfake sunny decent";
let DataUpd = Biodata.replace('sunny', 'Sunny');
let DataUpd2 = DataUpd.replace('Sunny', 'SUNNY');
// let DataUpd = Biodata.replace('sunny', 'Sunny');
console.log(DataUpd);
console.log(DataUpd2);
// console.log(Biodata); (parent string) */


//Point to remember in replace() method:
//1. The replace() method does not change the string it is called on. 
// It returns a new string.
//2. By default, this method replaces only the first matach. (if same name value exist)
//3. This method is also a case sensitive method.
// writing SUNNY(uppercase) won't work.











//*** Extracting String Characters

//There are 3 Methods for extracting string characters:

//charAt(position)
//charCodeAt(position)
//Property access [ ]



//charAt() method:
//The charAt() method returns the character at a specified index/position in a string.
/* let oldstr = "HELLO WORLD";
console.log(oldstr.charAt(4)); */

//We can use this to create a guessing game.




//charCodeAt():
//The charCodeAt() method returns the unicode of the character 
// at a specified index in a string.
//This method returns a UTF-16 code (an integer between 0 and 65535).

//The Unicode Standard provides a unique number for every character,
//no matter the platform, device, application, or language, 
//UTF-8 is a popular Unicode encoding which has 88-bit code units.

/* let oldstr = "HELLO WORLD";
console.log(oldstr.charCodeAt(2));
console.log(oldstr.charCodeAt(4)); */




//Property access [ ]:
//ECMA Script-5 allows property [ ] on strings
//Remember this sign "[]" we used in array, yeah these sign only used in array.
//but we can use these to extract our string by the laws of ECMAs-5.

/* let oldstr = "HELLO WORLD";
console.log(oldstr[7]); */










//*** Other/Extra and Useful Method for string:


//toUpperCase() and toLowerCase() method:
/* let myInfo = 'Ariful Asfake Sunny';
console.log(myInfo.toUpperCase());
console.log(myInfo.toLowerCase()); */




//String.prototype.concat() method:
//concat or add two strings:
/* let fName = "Asfake";
let lName = "Sunny";

console.log(fName +" "+ lName);
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName)); //no space
console.log(fName.concat(" ",lName)); */




//string.trim() method:
//This method actually removes whitespaces from both sides of a string.

/* var str = "            Hello World             ";
var str2 = "            Hello       World             ";
console.log(str.trim());
console.log(str);
console.log(str2.trim()); //but no middle spaces. */




//String.prototype.split():
//A string can be converted to an array with the split() method.
var txt = "a, b, c, d, e, f";

console.log(txt.split()); // into array
console.log(txt.split(",")); // split on commas, creating single quotes.
console.log(txt.split(" ")); // split on spaces, for remoiving spaces.
console.log(txt.split("|")); //split on pipe, creating whole new array.

/* var txt2 = "a, b, c | d, e, f";
console.log(txt2.split("|")); */
























//TEST:

//Q.1: Display only 280 characters of a string like the one used in Twitter?
/* let twit = "Lorem Ipsum kfksjfkjskfjsd jfopsdfosjdop sdjfopdsjfopsdjfjdsopfjposdjf sdjfpsdjfpojsdpf sdpjfopdsjofjd sjfopsjfopsjopfj dspmnfkiopdsjfg dokdjfiosjdhifojsd fisdjifjisd fsdjikono ojfiosdjifj dsfijdsifjios fiksjdi osdjfoidsjfj sdfjpsdjfpoksdj fpsdjkpfj jfposjfopjvkv lkjokfjsdikfji ksjfisdj fsfjisj"
let twitrule = twit.slice(0, 280);

console.log(twitrule);
console.log(twitrule.length); */



//Q.2: Return the Unicode of the last character in a string.
/* let examstr = "HELLO WORLD!";
let lastChar = examstr.length-1;
console.log(lastChar);
console.log(examstr.charCodeAt(lastChar)); */