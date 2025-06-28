
let btn = document.getElementById('btn-calc');
let cambio = document.querySelector('#cambio');
let preco = document.querySelector('#preco');
let divResultado = document.querySelector('.div-resultado')


// variáveis globais 
let colocar_no_visa = '';
let pagar_no_link = '';
let preco_no_cambio_de_hj = '';
let total_gasto_em_kz = '';
let margem_de_erro = '';


//comissões 
/*let comissao_sobre_carregamento = 2.287%;
let comissao_compra_e_iva = 3.43%;
let comissao_recebimento = 1.75%;
let margem_de_erro = 1%;
*/


function calcular(){
    let produtoEmKz = Number(preco.value) * Number(cambio.value); 

    preco_no_cambio_de_hj = produtoEmKz;

    let comissaoBAI = produtoEmKz * 3.47/100; // comissão BAI

    let comissaoStripe = produtoEmKz * 1.75/100 // comissão stripe 

    colocar_no_visa = produtoEmKz + comissaoBAI + comissaoStripe + ((produtoEmKz + comissaoBAI + comissaoStripe) * 1/100);

    let comissaoStripeEUR = Number(preco.value) * 1.75/100; 
    pagar_no_link = Number(preco.value) + comissaoStripeEUR; 


    margem_de_erro =  colocar_no_visa * 1/100;

    total_gasto_em_kz = colocar_no_visa - margem_de_erro + (colocar_no_visa * 2.287/100);

    divResultado.classList.remove('display-none')

    imprimir_resultado()
}

function imprimir_resultado(){
    divResultado.innerHTML = `<p> Quanto devo colocar na conta VISA? ${colocar_no_visa.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}Kz </p>`; 
    
    divResultado.innerHTML += `<p> Quanto devo pagar no link? ${pagar_no_link.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })} € </p><br><br>`; 

    divResultado.innerHTML += `<p> Preço do produto no câmbio de hoje: ${preco_no_cambio_de_hj.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}Kz </p>`; 

    divResultado.innerHTML += `<p> Margem de erro: ${margem_de_erro.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })} Kz - este é o valor que sobrará como saldo no cartão VISA</p> <br><br>`; 
    divResultado.innerHTML += `<p> Total gasto em kz: ${total_gasto_em_kz.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })} Kz</p>`; 
}

btn.onclick = calcular;