document.getElementById('boton-verde').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

document.getElementById('boton-celeste').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

document.getElementById('boton-restablecer').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});

document.getElementById('boton-oscuro').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.body.style.fontFamily = listValue;
}