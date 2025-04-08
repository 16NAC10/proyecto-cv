function getElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);
    return element as T;
}

const fondoInput = getElement<HTMLInputElement>('color-fondo');
fondoInput.addEventListener('input', () => {
    document.body.style.backgroundColor = fondoInput.value;
});

const textoInput = getElement<HTMLInputElement>('color-texto');
textoInput.addEventListener('input', () => {
    document.body.style.color = textoInput.value;
});

getElement('boton-verde').addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
});

getElement('boton-celeste').addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = 'black';
});

getElement('boton-restablecer').addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});

getElement('boton-oscuro').addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

function fuentes(selectTag: HTMLSelectElement): void {
    const valor = selectTag.options[selectTag.selectedIndex].text;
    document.body.style.fontFamily = valor;
}