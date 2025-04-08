function getElement(id) {
    var element = document.getElementById(id);
    return element;
}
var fondoInput = getElement('color-fondo');
fondoInput.addEventListener('input', function () {
    document.body.style.backgroundColor = fondoInput.value;
});
var textoInput = getElement('color-texto');
textoInput.addEventListener('input', function () {
    document.body.style.color = textoInput.value;
});
getElement('boton-verde').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
});
getElement('boton-celeste').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = 'black';
});
getElement('boton-restablecer').addEventListener('click', function () {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});
getElement('boton-oscuro').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});
function fuentes(selectTag) {
    var valor = selectTag.options[selectTag.selectedIndex].text;
    document.body.style.fontFamily = valor;
}
