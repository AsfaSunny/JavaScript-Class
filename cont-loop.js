//4th section of JS

//control and loop statements


//if...else statements
/*var leap = 366;

if(leap == 365){
    console.log("it's a leap year");
} else{
    console.log("not a leap year");
}  */









//conditional(ternary) operator: it's called if...else's sort version
//structure: var = (condition) ? if : else;
//           var = (condition) ? value1 : value2;

/* var age = 17;
console.log((age >= 18) ? "You can vote" : "You can't vote"); */









//switch statements: it's called (nested if...else) if...if else...else's sort version
/* var area = "rectangle";
var PI = 3.142, l=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log("The area of circle is: " + PI*r**2);
        break;
    
    case 'triangle':
        console.log("The area of triangle is: " + (l*b)/2);
        break;

    case 'rectangle':
        console.log("The area of rectangle is: " + (l*b));
        break;

    default:
        console.log("enter the right value");
} */

/* if(area == "circle"){
    console.log("The area of circle is: " + PI*r**2);
}else if(area == "triangle"){
    console.log("The area of triangle is: " + (l*b)/2);
}else if(area == "rectangle"){
    console.log("The area of rectangle is: " + (l*b));
}else{
    console.log("enter the right value");
} */











// while loop statements
//while(){ <<<<<<-------inner statement of while called block scope-------->>>>>>> }

/* var num = 0;
while(num <= 10){
    console.log(num);
    num++;
} */







//do-while loop statements:
//difference between while and do-while loop is, in 'while' its check condition first,
//and in 'do-while' its check block scope expression first.
/* var num = 20;
do{
    console.log(num);
    num++;
} while(num <= 10); */













//for loop: it also known as sorter version of 'while' loop
//structure: "for(intializer; condition; iteration){code execution}"
//initializer = variable initialized,
//condition = rule, such as (num <= 10)
//iteration= till the end or goal of the ending/ iterate time.

/* for(var num = 0; num <= 10; num++)
{
    console.log(num);
} */









//














//                  test

//leap year:
//var year = 2400;

/* if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("The year " + year + " is a leap year");
        }
        else{
            console.log("The year " + year + " isn't a leap year");
        }
    }
    else{
        console.log("The year " + year + " is a leap year" );
    }
}else{
    console.log("The year " + year + " isn't a leap year");
} */



//TRUE-FALSE:
//flasy values in js are: "0, "", undefined, null, NaN, false"

/* if(score = null){
    console.log("We loss the game");
}else{
    console.log("We won the game");
} */



//writing table:(namta) 8/10/12
for(var num = 1; num <= 10; num++)
{
    var cons = 8;
    console.log(cons + " * " + num + " = " + (cons*num));
}