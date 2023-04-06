let QtdCartas = Number(prompt('Digite a quantidade de cartas: (4-14)'));
let par = QtdCartas % 2;
let i = 0;
let listCard;
let versos = ['bobrossparrot.gif' ,'explodyparrot.gif' ,'fiestaparrot.gif' ,'metalparrot.gif' ,'revertitparrot.gif' ,'tripletsparrot.gif' ,'unicornparrot.gif'];
let carta;
let baralho = [];
let c = 0;

//! ver se a QtdCartas é maior que 14 se for reseta o codigo
//! ver se a QtdCartas é par se nao for reseta o codigo
while(par !== 0 || QtdCartas > 14 || QtdCartas == 0 || QtdCartas < 4){
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
while(i < QtdCartas/2){
    //?add cartas + 1
    listCard = document.querySelector(".baralho")
    let indice = randomizar(0,versos.length-1);
    carta = 
    `<li onclick="virarCarta(this)" class="carta">
        <div class="frente lado ver">
            <img src="imagens/back.png">
        </div>
        <div class="verso lado Nver">
            <img src="imagens/${versos[indice]}"> 
        </div>    
    </li>`
    
    baralho.push(carta);
    baralho.push(carta);
    versos.splice(indice,1);
    i++;
}


//!embaralhar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}
baralho.sort(comparador);
while(c<QtdCartas){
    listCard.innerHTML += baralho[c];
    c++
}

//! quando clicado troca a face da carta
function virarCarta(x){
    const carta1 = x.querySelector(".verso");
    carta1.classList.toggle("Nver");
    carta1.classList.toggle("ver");

    const carta2 = x.querySelector(".frente");
    carta2.classList.toggle("ver");
    carta2.classList.toggle("Nver");

}

//!se os 2 forem iguais par caso nao desvira