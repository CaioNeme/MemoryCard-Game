let QtdCartas = Number(prompt('Digite a quantidade de cartas: (4-14)'));
let par = QtdCartas % 2;
let i = 0;
let listCard;
const carta = 
    `<li class="carta">
        <div class="frente lado">
            <img src="imagens/back.png">
        </div>
        <div class="verso lado">
            Verso   
        </div>    
    </li>`
//! ver se a QtdCartas é maior que 14 se for reseta o codigo
//! ver se a QtdCartas é par se nao for reseta o codigo

while(par !== 0 || QtdCartas > 14 || QtdCartas == 0 || QtdCartas < 4){
    //reseta o codigo
    QtdCartas = Number(prompt('Digite a quantidade de cartas: (4-14)'));
    par = QtdCartas % 2;
}

//! se for par e for menor ou igual a 14 add cartas igual a QtdCartas
while(i < QtdCartas){
    //?add cartas + 1
    let a = document.querySelector(".baralho")
    a.innerHTML += carta;
    console.log(a);
    //listCard.innerHTML = listCard.innerHTML + carta;
    i++;
}