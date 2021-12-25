
//Object Oriented JavaScript:


//***1. What is Object literal?
//Object literal is simply a key:value pair Data Structure.

//Storing variable and functions together in one container, 
//we can refer this container as an object.

//its like a school bag where we can put our book, notebook, tiffen-box etc all together.
//And yes here we can store Different types of properties, DataTypes, methods, variable and function together in one place.




//But first, How to create an object?


//1st way: (Traditional Way)
//rule:
//* If we wnat to refer object JS, than all the element, like properties, function etc
// come under the bracket {}
//* Actually elements are called 'object literals' here in oop JS. &
//* We don't use ; under an object in JS, rather we use comma(,)

/* let biodata = {
    myName : "Sunny", // key: value
    myAge : 21,
    getData : function() { //don't think its an object, function structure are avoid by this rule.
        console.log(`My Name is ${biodata.myName} and My Age is ${biodata.myAge}`);
    }
} //return syntax: object.variable name

//console.log(biodata.myName);
// biodata.getData(); // function already been called under object. */



//2nd way: no need to write a functions after ES6
//all other rules are same as "1st way"

/* let biodata = {
    myName : "Sunny",
    myAge : 21,
    getData () {
        console.log(`My Name is ${biodata.myName} and My Age is ${biodata.myAge}`);
    }
}
biodata.getData(); */





// What if we want object as a value inside an Object: (like array under array)

/* let biodata = { //main object

    myName : { //child object
        realname: "Ariful Asfake Sunny",
        codename: "Slo-Mo3"
    },
    myAge : 21,
    getData () {
        console.log(`My Name is ${biodata.myName} and My Age is ${biodata.myAge}`);
    }
}
//biodata.getData();
// console.log(biodata.myName.realname);
// console.log(biodata.myName); */










//***2 What is 'this' object?
//the definition of "this" object is that it contain the current context. 
//Means current situation of the page. Current context is Window of a browser.
//&
//The 'this' object can have different values depending on where it is placed.

//Example 1:
// console.log(this); //for better info run on browser's console option in the inspect.
// it refers to the current context and that is window global object


//lets see, Example 2:
// function myData() {
//     console.log(this);
// }
// myData();
//again, it tells us that he is refer to window object, not the function he lived in.


//Example 3:
// MyNAME = "Sunny";
// function myname() {
//     console.log(this.MyNAME);
// }
// myname(); //MyNAME is a part of global object here because it is under window.


//Example 4: let's write under an object
// const obj = {
//     MyName : 'Sunny',
//     mydata() {
//         console.log(this);
//     }
// }
// obj.mydata()
//this current context is not window, this time whole object is current context.
//By this mean, we don't need to use our objectname, 
//simply put down the 'this' in the place of objectname.


//Example 5:
// const obj = {
//      MyName : 'Sunny',
//      mydata : () => {
//          console.log(this);
//    }
// }
//  obj.mydata()







//test:
//Q-1: Can object and 'this' work together in the situation of fat arrow function?
//Ans: No, for the using of fat arrow function again 'this' will refer the 
// window as current context. Cause we can't use 'this' in fat arrow function.
//for better checkout "Example 5"



//Q-2: Solve this:
const obj = {
    Myname : {
        realname: "SUNNY",
        codename: "Slo-M03"
    },

        realage: 21,
        getdata () {
            console.log(`My Name is ${this.Myname.realname} and My Age is ${this.realage}`);
        }
}
obj.getdata();