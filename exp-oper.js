//3rd section of JS

// assignment operator
/* var x = 5;
var y = 5;

console.log("Both x and y are equal"+ x == y);
console.log(x == y); */






//arithmetic operator
//console.log("Remainder operator " + 80%9);









//increament and decreament operator

//prefix = x++ & x--

 /* var num = 15;
 var NEwnum = num++;
 console.log(num);
 console.log(NEwnum); 


 var num = 15;
 var NEwnum = num-- - 4;
 console.log(num);
 console.log(NEwnum); */




 //postfix = ++x & --x

 /* var num = 15;
 var NEwnum = ++num +7 ;
 console.log(num);
 console.log(NEwnum); 


 var num = 15;
 var NEwnum = --num;
 console.log(num);
 console.log(NEwnum);*/






 //comparison operator 
/* var a = 25;
var b = 10;

//console.log(a == b);
//console.log(a != b);
//console.log(a > b);
//console.log(a >= b);
console.log(a < b); 
console.log(a <= b); */






//logical operator
// var c = 30;
// var d = -10;

//console.log(c > d && d < 0); [conjunction/ AND]
//console.log((c > d) || (d > 0) || (d > 0)); [disconjunction/ OR]
//console.log(!(c > d)); [NOT]








//String Concatenation operator (+ means concatenation)
/* console.log("Hello world");
console.log("HELLO WORLD &" + " MARS");

var myjs = "Sunny";
console.log(myjs + " only"); */














//                    test

//sol-1:
//console.log(3**3); [power]
//console.log(5**5); [5 to the power 5]
//console.log(10 ** -1); //[1/10]


//sol-2:
//console.log(5 + "five");


//sol-3: (swapping number)
/* var a = 5;
var b = 10;

var c = b; //now c = 10
b = a; //now b = 5 aka varriable a's value
a = c; //now a = 10
console.log("value a = " + a);
console.log("value b = " + b); */




//sol-4: (swapping number without using third variable)
/* var a = 5;
var b = 10;

// a = a+b // now a=15
// b = a-b // if a=15, b=10 than b = 5
// a = a-b
//or
// b= b-a;
// a= a+b;

console.log(a);
console.log(b); */

/*failed
a = a+a; //a = 10
b = b-a; //b = 0 */





//sol-5 : (difference between == and ===)
//var a = 5;
//var b ='5';

var a = 5;
var b = '5';

//console.log(a == b); [== works with datatype of variable]
console.log(a === b); //=== works with both variable and datatype