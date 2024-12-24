retorna = function(newURL){
    opener.Conteudo.document.location=newURL;
    }

    let menuHover = document.querySelector('.menu-hover'); 
    let hoverBackground = document.querySelector('#fundo-menu'); 

function menuHover1(){
    menuHover.classList.remove('display-none');
    menuHover.classList.add('inline-block');
    hoverBackground.classList.remove('display-none');
    hoverBackground.classList.add('inline-block');
}
hoverBackground.addEventListener('click', setInterval( ()=>{   
    hoverBackground.classList.add('display-none');
    hoverBackground.classList.remove('inline-block');
    menuHover.classList.add('display-none');
    menuHover.classList.remove('inline-block');}, 1500))

function remMenuHover(){
    menuHover.classList.remove('display-block');
    menuHover.classList.add('class', 'display-none');
}