var element;

document.getElementById('header').addEventListener('click', def);

// function def() {
//     document.getElementById('header').classList.add('indigo', 'chartreuse');
// }

// document.getElementById('header').addEventListener('mouseleave', function() {
//     document.getElementById('header').classList.remove('chartreuse');
// });


function def() {
        document.getElementById('header').classList.toggle('indigo');

        var a = document.getElementById('header').classList.item(0);
        console.log(a);
    }