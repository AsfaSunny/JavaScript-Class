//10th section of JS

//Window vs Document in JS:

//1. 
//Window: 
//window is the main container or we can say the global object and 
//any operation related to entire browser-window can be a part of window object.

//Document:
//Whereas the DOM is just a child of window object.



//2.
//Window: 
//If all the members like objects, methods, peoperties etc are part of
//window object then we don't need refer the window object.

//Document:
//In the DOM we need to refer the document,
//if we want to use the document object, methods or properties.



//3.
//Window:
//window has methods, properties and object. Example: setTimeout()/setInterval()
//are the methods, where as Document is a object of the window and it also
//has a screen object with properties describing the physical display.

//Document:
//DOM is just an object of the global object and that is "Window",
//which deals with the document, the HTML elements themeselves.




//We have seen methods and object of the global object that is window.
//But what about it propeties?
//for example windows properties are:
//innerheight, innerwidth (these return size of the tab where our websites has been shown)
//and a huge list of more like these.






// ******************* DOM vs BOM ********************

//DOM(Document Object Model) is the document object model, which deals with the document, the HTML
//elements themeselves, for example: document and all traversal you 
//would do in it, events, etc.
//just like:
//changing bg color to red: document.body.style.background = "red";


//BOM(Browser Object Model), which deas with browser components 
//aside from the document, like history, location, navigator and screen as
//well as some others that vary by browser.
//In simple meaning all the window operations which comes under BOM,
//are performed using BOM.





//BOM History Object:

//1: history trucker
/* function backhis() {
    window.history.back();
} */ //to goback to the previous page of browser using by html page.


//2:
//Function alert/confirm/prompt are also part of BOM:
//they are directly not related to the document but represent pure browser
//methods of communication with the user.

/* alert(location.href)//shows current URL
if(confirm("Want to visit Wore?"))
{
    location.href= "https://www.youtube.com";
} */










// ******************* DOM Navigation ********************
//try these in html file

//1: document.documentElement:
//return the Element that is the root element of the document. (root- html, css etc)

//2: document.head: return the element that exist in head tag.

//3: document.body.childNodes 
//NodeList like text, div-class, div-id, card-id, card-class, script, text
//(text means/include tab, enter and whitSpace)

//4: document.body: return the element that exist in body.

//5: document.children: returns main children suppose that is html.

//6: document.body.children: 
//returns all the children (include id, class) under body.

//7: document.body.children.length: 
//returns number of children under the body.

//8: document.body.hasChildNodes():
//returns is it true or false that body has children.






//*Focus and Practice =

//document.body.firstChild vs document.body.firstElementChild

//document.body.firstElementChild and document.body.firstElementChild.firstElementChild:
//returns children of children/children under children or in one word body's grand-children.




//******CSS x DOM:

//Child:
//If we want to change style of any class/id we can called that class by releasing under
//"const fisrtChild = document.body.firstElementChild.firstElementChild"
//or,
//const childtwo = document.querySelector('.child-two');
//we can check them out on browser>inspect's console panel.



//Parents:
//document.body.parentNode vs document.body.parentElement
//and
//document.head.parentNode vs document.head.parentElement:
//all four of them are same,
//who returns their parent code 'HTML' with all of their siblings
//(html is the parent of body and head)
//(body and head both are siblings to each other.)



//Siblings:
//document.body.previousSibling vs document.body.previousElementSibling:
//"document.body.previousSibling" return its previous siblings of previous line
//but text(if we use tab, enter and whitSpace)
//"document.body.previousElementSibling" return its own blood-line sibling "head"
//cause we always use head before body tag.



//document.head.nextSibling vs document.head.nextElementSibling:
//"document.head.nextSibling" return its next siblings of next line
//but text(if we use tab, enter and whitSpace)
//"document.head.nextElementSibling" return its own blood-line sibling "body"
//cause we always use body after using of head.









//******How to search the elements and the references:
//(go to domsearch.html file's script location)







//Test:
//What is the difference between getElementById() and querySelector()?

//getElementById:
//Syntax: element = document.getElementById(idname)
//Returns a reference to the element by its ID. If the element with the
//specified ID is not in the document, it will returns null.


//querySelector():
//Syntax: element = document.querySelector(selectors) [selectors = #id/.class/p etc]
//Returns the first element within the document that matches the specified
//group of selectors, or returns null if no matches are found.

//between getElementById() and querySelector(), getElementById() is fast and best.



//What is the similarities between getElementById() and querySelector()?
//Both of them will returns 'id' if we call them by ID's name. Just we have
//to add and extra '#' for Id in querySelector()
//like, querySelector(#idname)
