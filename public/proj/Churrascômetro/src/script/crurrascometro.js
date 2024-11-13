let iptAdultos = document.getElementById('adultos'); 
let iptCriancas = document.getElementById('criancas'); 
let iptDuracao = document.getElementById('duracao'); 
let btnCalcular = document.getElementById('calcular'); 
let divResultado = document.getElementById('result'); 





function render(){
    let qtdCarne = (iptAdultos.value * carneHora(iptDuracao.value) + (carneHora(iptDuracao.value)/2) * iptCriancas.value ); 

    function carneHora(duracao){
        if (duracao <= 5){
            return 400
        } else { return 650}
    }

    let qtdBebidasAlc = iptAdultos.value * alcoolHora(iptDuracao.value);
    function alcoolHora(duracao){
        if (duracao <= 5){
            return 1200
        } else { return 2000}
    }

    let qtdBedidasSemAlc = iptAdultos.value * bebidasSemAlcoolHora(iptDuracao.value) + iptCriancas.value * bebidasSemAlcoolHora(iptDuracao.value); 
    function bebidasSemAlcoolHora(duracao){
        if (duracao <= 5){
            return 1000
        } else { return 1500}
    }

    divResultado.innerHTML = `<p>${qtdCarne/1000} kg de carne diversa</p>`; 
    divResultado.innerHTML += `<p>${Math.ceil(qtdBebidasAlc/355)} unidades (latas) de bebidas álcoolicas </p>`;
    divResultado.innerHTML += `<p>${Math.ceil(qtdBedidasSemAlc/2000)} unidades (garrafas de 2 litros) de bebidas sem álcool</p>`;
}







btnCalcular.addEventListener('click', render);

/*
 

*/