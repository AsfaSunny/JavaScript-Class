//function defenation: means creation of a function and why we we create a function??
//structure: function function_name() {statement} function_name();
/* function sum()
{
    var a = 10, b = 20;
    var total = a+b;
    console.log(total);
}

sum(); */ 
//function call: we have to use our define function. such sum();
//cause without calling function you can't print function statement.








//function parameter vs function arguments:
//function parameter are the name listed in the function defenation. sum(a,b)
//function arguments are the real values passed to the function. 
//passed to 'parameter' sum(a,b) by 'arguments' sum(30,20);

/* function sum(a,b) //parameter
{
    var total = a+b;
    console.log(total);
}

sum(40,30); //arguments
sum(40,50); */ //arguments








//function expression and 'return' keyword:
//'return':when js reaches a return value the function will stop executing.
//function actually often compute a return value, 
//and this return value returned back to the caller:"var funexp = sum(40,30);"

/* function sum(a,b) 
{
    return total = a+b;
}

var funexp = sum(20,30);
console.log("the sum is "+ funexp); */





//anonymous function: function without a name is called anonymous function.
//in anonymous function complete code is called "anonymous expression".
//put the full nameless function in a variable and its called anonymous.

var funexp = function (a,b) //see their is no name in function
{
    return total = a+b;
}

var sum = funexp(40, 40);
var sum2 = funexp(30, 40);
console.log("the sum is "+ sum);
console.log(sum > sum2);





//IQ: why function??
//its reusable.
//define code once and use it many times.
//You can reuse code, use same code many times with different arguments