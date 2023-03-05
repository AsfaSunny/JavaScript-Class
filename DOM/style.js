var element;


element = document.querySelector("#header").style.backgroundColor = "brown";
element = document.querySelector("#header").style.color = "tan";





// document.getElementById("menu").onclick = abc;
document.getElementById("menu").addEventListener("click", abc);
function abc() {
    // document.getElementById("menu").style.background = "goldenrod";
    this.style.background = "darkorange";
}

document.getElementById("menu").addEventListener("mouseenter", function() {
    this.style.background = "aqua";
});




// document.querySelector("#menu").className = "coral";
// element = document.querySelector("#menu").classList.add("colspy");
element = document.querySelector("#menu").classList.remove('yero');
element = document.querySelector("#menu").classList;

console.log(element);