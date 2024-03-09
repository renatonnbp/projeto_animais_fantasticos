// testes com eventos

const img = document.querySelector('img');

img.addEventListener('click', () => {
    console.log('Você clicou na imagem!');
});

// 2º forma: Boa prática!

const ph1 = document.querySelector('h1');
function callback() {
    console.log('Você clicou no h1');
}

ph1.addEventListener('click', callback);

//

const aniLista = document.querySelector('.animais-lista');

function callback(event) {
    console.log(event.target);
}

aniLista.addEventListener('click', callback);

//


const linkExterno = document.querySelector('a[href^="http"]');

function noactivelink(event) {
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', noactivelink);

//

const p1 = document.querySelector('p');

function p1event() {
    console.log('Você passou o mouse no parágrafo da Raposa!')
}

p1.addEventListener('mouseenter', p1event);

window.addEventListener('scroll', p1event);

//

function handleKeyboard(event) {
    if(event.key === 'f') {
        document.body.classLista.toggle('fs')
    }
}

// O método 'addEventListener' é adicionado à um único elemento. Então podemos utilizar o 'forEach' para passar por cada item da lista e ativar o evento. Segue o exemplo abaixo:

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});

//

// ex001


const linkIn = document.querySelectorAll('a[href^="#"]');

function linkEvent(event) {
    event.preventDefault();
    linkIn.forEach((item) => {
        item.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}

linkIn.forEach((item) => {
    item.addEventListener('click', linkEvent)
});

// ex002

const allElements = document.querySelectorAll('body *');
function showMe(event) {
    console.log(event.currentTarget);
}

allElements.forEach((item) => {
    item.addEventListener('click', showMe);
});

// ex003 

/*
function clickT(event) {
    console.log(event.key)
    if(event.key === 't') {

    }
}

window.addEventListener('keydown', clickT);
*/