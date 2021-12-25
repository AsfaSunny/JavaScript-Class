//11th section of JS

//Events in JS:

//HTML events are "things" that actually happens to HTML elements or pages.
//When JS is used in HTML pages, JS can "react" on these events.
//For example:
//1. clicking a button in a website is an event.
//2. if we visit a website than we can do so many things in that website. And these are also events.

//HTML events can be something the browser does or something a user does.
//an web page has finished loading,
//an input field was changed,
//an button was clicked etc etc all are HTML events

//Often, when events happen, you may want to do something.
//and Java Script lets you execute code when events are detected.
//***HTML allows event handler attributes, with the JS code to be added to
//a HTML element.





//********* 4 ways of writing events in JS:

//1: using inline events alert():
// (simple event and less use)

//2: my calling a function (common way of writing function)
// calling and declar by a function

//3: using Inline events (HTML onclick="" property and element.onclick)
//4: using Event Listeners (addEventListener and IE's attachEvent)
//(go to Event>eventTypes.html file location for discussion)







//********* What is Event Object?
//Event Object is the parent object of any kind event/object(which is connected to event)
//For Example: MouseEvent, focusEvent, KeyboardEvent etc.
////(go to Event>eventObj.html file location for discussion)








//********* What is mouse event in JS?
//The MouseEvent Object
//Event that occur when the mouse interacts with the document
//belongs to the MouseEvent Object.







//********* KeyboardEvent in JS:
//Event that occur when user presses a key on the keyboard, belongs to the
//KeyboardEvent Object.






//********* InputEvents in JS:
// The onchange event occurs when the value of an element/ field has been changed.
//like,
//for radiobuttons and checkboxs, the onchange event occurs when the checked state has been changed.
//checkout in Event/Onchangeevent.html








//test:
//Q: Difference between 'onclick'/'inline' and 'addEventListener'?
//checkout Event/test.html











//******** Timing Based Events in JS:

//The window object allows execution of code at specified time interval.
//and these time intervals are called timing events.
//1.setTimeout()
//2.clearTimeout()
//3.setInterval()
//4.clearInterval()


//the most important 2 key methods to use with JS are:

//setTimeout(function, milliseconds)
//it executes a function, after waiting for a specified number of milliseconds.
//Syntax:
        //function setTimeout(handler: TimerHandler (our fat arrow function), 
        //timeout?: number, (our milliseconds: 1000)
        //...arguments: any[]): number

//&
//setInterval(function, milliseconds)
//same as setTimeout(), but repeats the execution of the function.

//for more details go to TimingEvents file.




//test:
//Q: Difference between setTimeout() and setInterval() ?

//setTimeout() call a function and the function return after some specific time and by returning
//function it ends the operation.
//&
//and we use setInterval() when we want to see a thing on repeat.