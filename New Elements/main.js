var target = document.getElementById("d_element");


var newElement = document.createElement("h2");
var newText = document.createTextNode("Heading by JavaScript");
newElement.appendChild(newText);

// target.insertAdjacentElement("beforebegin", newElement);
// target.insertAdjacentElement("afterbegin", newElement);
// target.insertAdjacentElement("afterend", newElement);
target.insertAdjacentElement("beforeend", newElement);
console.log(newElement);




var ElementHtml = "<strong>This is A text with a html tag</strong>";
target.insertAdjacentHTML("afterbegin", ElementHtml);
console.log(ElementHtml);




var onlyText = "This is only text without any kind of formating";
target.insertAdjacentHTML("afterend", onlyText);
console.log(onlyText);