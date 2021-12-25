//8th section of JS

//Date and Time in JS

//JavaScript Date objects represent a single moment in time in a 
//platform-independent format.
//Data objects contain a Number that represents since "1 January 1970" UTC.

//Creating Date Objects:
//There are 4 ways to create a new date objects:
//Way No.1: new Date()
//Way No.2: new Date(year, month, day, hours, minutes, seconds, milliseconds)
//Ah, BTW No.2 takes 7 arguments or less. But no more than 7.

//Way No.3: new Date(milliseconds)
// we can't avoid month section.
//Way No.4: new Date(date string)



//new Date():
//Date objects are created with the new Date() constructor.(new is our constructor)

// let curtime = new Date();
// console.log(curtime);
// console.log(new Date());

// console.log(new Date().toLocaleString()); //local time.
// console.log(new Date().toString()); //Time with local location name.




//Date.now() //{extra}
//returns the numeric value corresponding to the current time,
//only the number of milliseconds elapsed since "1 January 1970 00:00:00 UTC".
// console.log(Date.now());




//new Date(year, month, day, hours, minutes, seconds, milliseconds):
//we mention 7 arguments at the beginning. 7 arguments specify year, month,
//day, hour, minute, second, and millisecond (in that order)

//NOTE: JS counts months from 0 to 11. That means January is 0 and December
//is 11, middle months are in that order.

// var releaseday = new Date(2021, 2, 12, 13, 51, 44, 0);
// console.log(releaseday.toLocaleString());

// var releaseday = new Date(); //current time
/* var releaseday = new Date(2021, 2);
console.log(releaseday.toLocaleString()); */
//adding month is must do job in Date() method




//new Date(datestring) creates a new date objects from a date string.
// var todate = new Date("2021, 2 october, 23:11:00");
// console.log(todate.toLocaleString());





//new Date(milliseconds):
//new Date(milliseconds) creates a new date object as zero time 
//plus/with the help of millisecond in the date.
/* //var d = new Date(0);
//var d = new Date(40934590834502);
var d = new Date(8600000*2);
console.log(d.toLocaleString()); */









//***Date Method: (get and set)

//GET //how to get a individual date:
/* const curdate = new Date();
console.log(curdate.toLocaleString());
console.log(curdate.getFullYear());
console.log(curdate.getMonth()); //count from 0-11(jan to dec)
console.log(curdate.getDate());
console.log(curdate.getDay()); */



//SET //how to set the individual date:
/* let curdate = new Date();
// let latyear = curdate.setFullYear(2022);
// console.log(latyear);
console.log(curdate.setFullYear(2022));
console.log(curdate.setMonth(10));
console.log(curdate.setFullYear(2021, 2, 4));
console.log(curdate.toLocaleString()); */









//***Time Method: (get and set)

//GET //How to get individul time:
/* let curTime = new Date()

console.log(curTime.getTime());
//This method returns the number of milliseconds since January 1, 1970.

console.log(curTime.getHours());
//this method returns the hours of number (0-23)

console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds()); */ 






//SET //how to set the individual time:
/* let curTime = new Date()

// console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(6));
console.log(curTime.setSeconds(45));
console.log(curTime.setMilliseconds(320));
console.log(curTime.toLocaleString()); */





//keep in knowledge:
//new Date().toLocaleTimeString();
//brings a time like 11:40:44 AM

//new Date().toLocaleDateString();
//brings a date like 2/6/2021

//new Date().toLocaleString();
//brings both time and date at the same time.









//***TEST & PROJECT BEGINS:
//how to set a time in our website?
//ans is right below:

/* (function myfunc() {
    setInterval(()=> {
        var watch = new Date();
        console.log(watch.toLocaleTimeString());
    }, 1000)
})(); */