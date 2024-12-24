// variaveis globais 
let square = document.querySelectorAll('.square');
let nomes = [];
let arrayPlacar = [0,0];
let arrayPlacar2 = [1];
let vencedor = document.getElementById('vencedorId');
let placarj1 = document.getElementById('placar-j1');
let placarj2 = document.getElementById('placar-j2');

// listener 
square.forEach((x) => {
    x.addEventListener('click', clicou)
});

function clicou(event){
    let square1 = event.target;

    if (!gameOver){
        if (board[square1.id-1] == ''){
            handleMove(square1.id);
            square1.innerHTML= `<div class=${board[square1.id-1]}></div>`;
        }else{
            console.log('já jogou ali');
        }
    }else{
        alertar();
    }

}

function recuperarNomes(){

    let nome1 = document.getElementById('j1').value;
    let nome2 = document.getElementById('j2').value;
    let divNomes = document.getElementById('nomes');
    let table = document.getElementById('table');
    let capa = document.getElementById('capa');
    
    // verifica se os nomes foram preenchidos e os coloca no array
    if (nome1 !== '' && nome2 !==''){
        nomes[0]=nome1; 
    nomes[1]=nome2; 


        // muda os nomes na tela
    let nomej1 = document.getElementById('nome-j1');
    let nomej2 = document.getElementById('nome-j2');
    
    nomej1.innerText=nome1;
    nomej2.innerText=nome2;

        //reseta os nomes para vazio 
    document.getElementById('j1').value = '';
    document.getElementById('j2').value = '';

    //remove os inputs para nomes da tela e coloca o jogo ao invés da imagem 
    divNomes.style.display='none';
    table.style.display='inline-block';
    capa.style.display='none';


    }else{
        return
    }

}

// alerta quem é o vencedor e imprime a pontuação atualizada na tela
function alertar(x){
    if (x < 1){
        vencedor.innerText=`O jogador ${nomes[0]} ganhou`;
        arrayPlacar[0] = arrayPlacar[0] + arrayPlacar2[0];
        placarj1.innerText=arrayPlacar[0];
    return
    }if (x > 0){
        vencedor.innerText=`O jogador ${nomes[1]} ganhou`;
        arrayPlacar[1] = arrayPlacar[1] + arrayPlacar2[0];
        placarj2.innerText=arrayPlacar[1];
        return
}
}




