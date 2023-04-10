let QtdCartas = Number(prompt('Digite a quantidade de cartas: (4-14)'));
let par = QtdCartas % 2;
let i = 0;
let listCard = document.querySelector(".baralho");
let versos = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let carta;
let baralho = [];
let c = 0;
let verso = document.querySelector(".verso");
let frente = document.querySelector(".frente");
let jogadas = 0;
let contador = 0;




//! ver se a QtdCartas é maior que 14 se for reseta o codigo
//! ver se a QtdCartas é par se nao for reseta o codigo
while (par !== 0 || QtdCartas > 14 || QtdCartas == 0 || QtdCartas < 4) {
    //?'reseta' o codigo
    QtdCartas = Number(prompt('Digite a quantidade de cartas: (4-14)'));
    par = QtdCartas % 2;
}

//! randomizar o indice dos verso
function randomizar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let aleatotio = Math.floor(Math.random() * (max - min + 1)) + min;
    return aleatotio;
}

//! fazer as cartas terem verso aleatorios mas tem que ter 2 iguais
while (i < QtdCartas / 2) {
    //?add cartas + 1
    let indice = randomizar(0, versos.length - 1);
    carta =
        `<li  data-test="card" onclick="ehPar(this)" class="carta">
        <div class="frente lado">
            <img data-test="face-down-image" src="imagens/back.png">
        </div>
        <div class="verso lado Nver">
            <img data-test="face-up-image" src="imagens/${versos[indice]}"> 
        </div>    
    </li>`

    baralho.push(carta);
    baralho.push(carta);
    versos.splice(indice, 1);
    i++;
}


//!embaralhar as cartas
function comparador() {
    return Math.random() - 0.5;
}
baralho.sort(comparador);
while (c < QtdCartas) {
    listCard.innerHTML += baralho[c];
    c++
}

function desvirar(a, b, c, d) {
    a.classList.remove('ver');
    a.classList.add('Nver');
    b.classList.remove('ver');
    b.classList.add('Nver');
    c.classList.remove('Nver');
    c.classList.add('ver');
    d.classList.remove('Nver');
    d.classList.add('ver');
    e = [];

}

function ehPar(clicado) {
    jogadas++
    let cartasViradas = [];
    let verso = document.querySelector(".verso");


    let cartasSempreVer = document.querySelectorAll('.sempreVer');
    cartasSempreVer.forEach(carta => {carta.onclick = null;});


    verso = clicado.querySelector(".verso");
    verso.classList.remove("Nver");
    verso.classList.add("ver");

    frente = clicado.querySelector(".frente");

    cartasViradas = document.querySelectorAll('.ver');
    let cartasDesviradas = document.querySelectorAll('.frente')
    let carta1 = cartasViradas[0].querySelector('img')
    let carta2 = cartasViradas[1].querySelector('img')
    
    console.log(cartasViradas[0]);
    console.log(cartasViradas[1]);

    if (carta1.src === carta2.src && cartasViradas[0] !== cartasViradas[1] && carta1.src !== null) {
        console.log('é igual');
        cartasViradas[0].classList.add('sempreVer');
        cartasViradas[1].classList.add('sempreVer');
        cartasViradas[1].classList.remove('ver');
        cartasViradas[0].classList.remove('ver');
        cartasViradas = [];
        contador ++;
    }
    else if (carta1.src !== carta2.src) {
        console.log('é diferente');
        setTimeout(desvirar, 1000, cartasViradas[1], cartasViradas[0], cartasDesviradas[1], cartasDesviradas[0], cartasViradas);
    }

    if (QtdCartas / 2 == contador) {
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
    
}
