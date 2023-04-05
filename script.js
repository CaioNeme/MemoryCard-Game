let QtdCartas = Number(prompt('Digite a quantidade de cartas: (2-14)'));
let par = QtdCartas % 2;
let listCard = [];
//! ver se a QtdCartas é maior que 14 se for reseta o codigo
//! ver se a QtdCartas é par se nao for reseta o codigo

while(par !== 0 || QtdCartas > 14 || QtdCartas == 0){
    //?reseta o codigo
    QtdCartas = Number(prompt('Digite a quantidade de cartas: (2-14)'));
    par = QtdCartas % 2;
}

//! se for par e for menor ou igual a 14 add cartas igual a QtdCartas
while(lisCard.length === QtdCartas){
    //?add cartas + 1
    listCard = document.querySelector(".baralho");
    listCard.innerHTML = 
    listCard = fabricio.push('.carta');
}