document.getElementById("outer-div").addEventListener('click', function() {
    alert("This is from outer Div");
}, true);


document.getElementById("inner-div").addEventListener('click', function() {
    alert("This is from inner Div");
}, true);




document.getElementById("outer-div").addEventListener('click', function() {
    alert("This is from outer Div");
});


document.getElementById("inner-div").addEventListener('click', function() {
    alert("This is from inner Div");
});

