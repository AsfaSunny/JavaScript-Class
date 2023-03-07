var newElement = document.createElement("p");
var newText = document.createTextNode("This is from Javascript");

newElement.appendChild(newText);

var div = document.getElementById("d_element");
div.appendChild(newElement);

console.log(newElement);
// console.log(newText);



var newElement2 = document.createElement("h2");
var newText2 = document.createTextNode("Heading by JavaScript");

newElement2.appendChild(newText2);

var div2 = document.getElementById("d_element");
div2.insertBefore(newElement2, div2.childNodes[0]);

console.log(newElement);