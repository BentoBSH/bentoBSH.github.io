retorna = function(newURL){
    opener.Conteudo.document.location=newURL;
    }

    let menuHover = document.querySelector('.menu-hover'); 

function menuHover1(){
    menuHover.classList.add('display-block');
    menuHover.classList.remove('display-none');
}

function remMenuHover(){
    menuHover.classList.remove('display-block');
    menuHover.classList.add('class', 'display-none');
}