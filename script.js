let QtdCartas = Number(prompt('Digite a quantidade de cartas: (4-14)'));
let par = QtdCartas % 2;
let i = 0;
let listCard;
let versos = ['bobrossparrot.gif' ,'explodyparrot.gif' ,'fiestaparrot.gif' ,'metalparrot.gif' ,'revertitparrot.gif' ,'tripletsparrot.gif' ,'unicornparrot.gif'];
let carta;

function randomizar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let aleatotio = Math.floor(Math.random() * (max - min + 1)) + min;
    return aleatotio;
}

//! ver se a QtdCartas é maior que 14 se for reseta o codigo
//! ver se a QtdCartas é par se nao for reseta o codigo
while(par !== 0 || QtdCartas > 14 || QtdCartas == 0 || QtdCartas < 4){
    //?'reseta' o codigo
    QtdCartas = Number(prompt('Digite a quantidade de cartas: (4-14)'));
    par = QtdCartas % 2;
}


//!fazer as cartas terem verso aleatorios mas tem que ter 2 iguais
//! se for par e for menor ou igual a 14 add cartas igual a QtdCartas

while(i < QtdCartas/2){
    //?add cartas + 1
    listCard = document.querySelector(".baralho")
    let b = randomizar(0,versos.length-1);
    carta = 
    `<li class="carta">
        <div class="frente lado">
            <img src="imagens/back.png">
        </div>
        <div class="verso lado">
            <img src="imagens/${versos[b]}"> 
        </div>    
    </li>`
    
    listCard.innerHTML += carta;
    listCard.innerHTML += carta;
    versos.splice(b,1);

    i++;
}


//!se os 2 forem iguais par caso nao desvira
