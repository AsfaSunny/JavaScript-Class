var docs_element;

// docs_element = document.all;
// docs_element = document.head;
// docs_element = document.getElementById('menu').innerHTML;
// docs_element = document.getElementsByClassName('list');

// docs_element = document.getElementsByTagName('ul');


//get
// docs_element = document.getElementById('header').getAttribute('class');
// docs_element = document.getElementById('header').getAttribute('style');
// docs_element = document.getElementById('header').getAttributeNode('class');
// docs_element = document.getElementById('header').getAttributeNode('style').value;
// docs_element = document.getElementById('header').attributes[2].value;
// docs_element = document.getElementById('header').attributes[2].name;





//set
document.getElementById('header').innerHTML = "<h1>All DOM operations</h1>";
docs_element = document.getElementById('header').innerHTML;

// document.getElementById('header').setAttribute("class", "main-header");
// docs_element = document.getElementById('header').getAttribute('class');
// console.log(docs_element);

document.getElementById('header').setAttribute("class", "main-header");
docs_element = document.getElementById('header').getAttribute('class');
console.log(docs_element);

document.getElementById('header').setAttribute("style", "border: 10px dotted green;");
docs_element = document.getElementById('header').getAttribute('style');
console.log(docs_element);

document.getElementById('header').attributes[2].value = "gameOn()";
docs_element = document.getElementById('header').getAttribute('onclick');
console.log(docs_element);



//removing attributes
// document.getElementById('header').removeAttribute('style');