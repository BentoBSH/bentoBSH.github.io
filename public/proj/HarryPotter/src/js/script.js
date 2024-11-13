
function removerAtivo(){
    let atv = document.querySelector('.ativo');
    atv.classList.remove('ativo');
};

function alterarNome(nome){
    let personagem = document.getElementById('personagem');
personagem.innerHTML=nome; 
}
function alterarClasse(classePropria){
    let casa = document.querySelector('.casa'); 
    casa.innerHTML=classePropria;
}

function alterarImagem(img_src){
    let img = document.querySelector('.imagem'); 
    img.innerHTML=''; 
    let imagem = document.createElement('img'); 
    imagem.setAttribute('src', img_src);
    img.appendChild(imagem);
}

function alterarDescricao(texto){
    let textoNaPagina = document.querySelector('.descricao');
    let tagDescricao = document.createElement('h3');
    let palavraDescricao = document.createTextNode('Descrição');
    tagDescricao.appendChild(palavraDescricao);
    let tagTextoDescricao = document.createElement('p');
    let textoDescricao = document.createTextNode(texto);
    tagTextoDescricao.appendChild(textoDescricao); 
    textoNaPagina.innerHTML = "";
    textoNaPagina.appendChild(tagDescricao);
    textoNaPagina.appendChild(tagTextoDescricao); 
}; 

function alterarClasseCartao(classePropria){
    let cartaoTopo = document.getElementById('mudarCor'); 
    var listaDeClasses = cartaoTopo.classList;
    while (listaDeClasses.length > 0) {
       listaDeClasses.remove(listaDeClasses.item(0));
    }
    cartaoTopo.classList.add('cartao');
    cartaoTopo.classList.add('topo');
    cartaoTopo.classList.add(classePropria);

}

function Personagens (n, i, d, c) {
    let nomeCompleto = n;
    let imagemVector = i;
    let descricao = d;
    let classe = c;

    this.imprimir = function(){
        alterarNome(nomeCompleto);
        alterarClasse(classe);
        alterarImagem(imagemVector);
        alterarDescricao(descricao);
    }

};

const Hermione = new Personagens ('Hermione Granger', './src/img/Hermione-Granger.png', 'Nascimento: 19 de setembro de 1979 Casa de Hogwarts: Grifinória Primeira aparição: Harry Potter e a Pedra Filosofal (Livro 1) Hermione Jean Granger nasceu de pais trouxas, o que fez com que sofresse um pesado preconceito de alguns dos alunos que valorizavam a "pureza de sangue dos bruxos" e se referiam a ela como "sangue sujo". Provavelmente a aluna mais brilhante que já passou por Hogwarts, Hermione é apaixonada por livros e estuda tudo que puder, o que faz dela peça fundamental na luta contra Voldemort. E sejamos sinceros, Harry e Rony estariam em grandes problemas sem a ajuda da garota', 'Grifinória');

const Dumbledor = new Personagens ('Albus Dumbledore', './src/img/Albus-Dumbledor.png', 'Nascimento: agosto de 1881 Casa de Hogwarts: Grifinória Primeira aparição: Harry Potter e a Pedra Filosofal (Livro 1) Cargo em Hogwarts: Professor de Defesa Contra a Artes das Trevas (passado) e diretor Albus Percival Wulfric Brian Dumbledore é o diretor da Escola de Magia e Bruxaria de Hogwarts. Além de ser um dos melhores diretores que a escola já teve, é o único bruxo que Voldemort temia. Já negou o cargo de Ministro da Magia algumas vezes, motivo pelo qual o atual ministro se sente ameaçado por ele.', 'Diretor');

const Harry = new Personagens ('Harry Potter', './src/img/Harry-Potter.png', 'Nascimento: 31 de julho de 1980; Casa de Hogwarts: Grifinória; Primeira aparição: Harry Potter e a Pedra Filosofal (Livro 1) Filho de Tiago (James) e Lily Potter, Harry Tiago Potter perdeu seus pais quando tinha apenas 1 ano. Após assassinar friamente os Potter, o temido bruxo das trevas Voldemort tentou matar o pequeno Harry, mas, por algum motivo, o feitiço recocheteou e praticamente destruiu Voldemort, que desapareceu. Harry não se machucou, ficando apenas com uma pequena cicatriz em forma de raio em sua testa.', 'Grifinória');

const Minerva = new Personagens ('Minerva McGonagall', './src/img/Minerva.png', 'Nascimento: 4 de outubro de 1935 Casa de Hogwarts: Grifinória Primeira aparição: Harry Potter e a Pedra Filosofal (Livro 1) Cargo em Hogwarts: Professora de Transfiguração, diretora da Casa Grifinória e vice-diretora de Hogwarts Professora de Transfiguração, animaga registrada (pode se transformar em um animal, em seu caso, em um gato), diretora da Casa da Grifinória e vice-diretora de Hogwarts, Minerva McGonagall é uma professora exigente, mas justa. Braço direito de Dumbledore, esteve a seu lado e ao lado da escola na Batalha de Hogwarts, contra Voldemort e seu exército. Na ocasião, inclusive, defendeu Harry mais de uma vez.', 'Professora');

const Hagrid = new Personagens ('Rubeus Hagrid', './src/img/Rubeo-Hagrid.png', 'Nascimento: 6 de dezembro de 1928 Casa de Hogwarts: Grifinória Primeira aparição: Harry Potter e a Pedra Filosofal (Livro 1) Cargo em Hogwarts: Guarda-chaves, professora de Trato de Criaturas Mágicas Conhecemos Hagrid como o atrapalhado Guardador de Chaves e Protetor das Terras de Hogwarts. Meio humano e meio gigante, é ele que leva o bebê Harry para a casa de seus tios, logo após a morte dos Potter, encontrando Dumbledore e Minerva ao chegar lá. É ele também que entrega a Harry sua carta de Hogwarts, revela que ele é um bruxo e o leva para fazer as compras para a escola no Beco Diagonal.', 'Domador');

const Severus = new Personagens ('Severo Snape', './src/img/Severus-sneep.png', 'Nascimento: 9 de janeiro de 1960 Casa de Hogwarts: Sonserina Primeira aparição: Harry Potter e a Pedra Filosofal (Livro 1) Cargo em Hogwarts: Professor de Poções, diretor da casa Sonserina Snape é um dos professores de Hogwarts. Amargo, sempre sério, pegando no pé de todos os estudantes e sempre tentando proteger os alunos de sua própria casa, ele não é exatamente querido por todos. Mas com Harry a antipatia foi ainda maior. Desde a primeira aula com Potter, Snape deixou bem claro que sentia uma misteriosa raiva por ele.', 'Professor');

const Sirius = new Personagens ('Sirius Black', './src/img/Sirius-black.png', 'Nascimento: 3 de novembro de 1959 Casa de Hogwarts: Grifinória Primeira aparição: Harry Potter e o Prisioneiro de Askaban (Livro 3) Embora Sirius tenha sido rapidamente mencionado em Harry Potter e a Pedra Filosofal (Livro 1), é apenas em Harry Potter e o Prisioneiro de Askaban (Livro 3) que conhecemos de fato o antigo amigo de Tiago Potter, Remus Lupin e Peter Pettigrew.', 'Amigo');

function listener (){
    const listaMagos = document.querySelectorAll('.magos');
    listaMagos.forEach(magos =>{
        magos.addEventListener('click',function(){
            removerAtivo();
            let naoAtivo = this; //define o não ativo como sendo o elemento clicado
            function colocarAtivo(){
                naoAtivo.classList.add('ativo');
            }; //função para coloca o elemento clicado como ativo 
            colocarAtivo(this.id); 
            alterarClasseCartao(this.id); // altera a classe para ser executada a mudança de cor do topo do cartão 
            let alvo = this.id;

            //console.log(alvo);
            if (alvo == 'Harry') {
                
                Harry.imprimir();
            } if (alvo == 'Hermione') {
                Hermione.imprimir();
            } if (alvo == 'Rubeo') {
                Hagrid.imprimir();
            } if (alvo == 'Sirius') {
                Sirius.imprimir();
            } if (alvo == 'Severus') {
                Severus.imprimir();
            } if (alvo == 'Dumbledor') {
                Dumbledor.imprimir();
            };

        });
        });
};

listener(); 

