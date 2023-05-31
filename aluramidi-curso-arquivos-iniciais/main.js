//selecionando um elemento do arquivo HTML
//document = referencia a origem do documento (arquivo HTML)
//querySelector = busca o elemento, sempre em aspas simples
//document.querySelector('.tecla_pom');

//selecionando a tecla pom
//document.querySelector('#som_tecla_pom');

//reproduzindo o áudio da tag audio com a função play
//irá apresentar erro pq não utilizamos uma função
//document.querySelector('#som_tecla_pom').play();

//criando uma função para tocar o som da tecla pom
/*function tocaSom_pom () {
    document.querySelector('#som_tecla_pom').play();
}*/

/*
//criando uma função para tocar o som da tecla clap
function tocaSom_clap () {
    document.querySelector('#som_tecla_clap').play();
}

//inserindo a funçào na ação de clicar no botão
//inserimos sem o parenteses para o código não rodar a função automaticamente e gerar erro
document.querySelector('.tecla_pom').onclick = tocaSom_pom;

//fazendo o mesmo para a tecla clap
document.querySelector('.tecla_clap').onclick = tocaSom_clap;*/

//selecionando toda a lista de elementos para otimizar código
//document.querySelectorAll('.tecla');

//criando uma constante para armazenar a seleção de todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//selecionando o primeiro elemento e atribuindo sua função
//listaDeTeclas[0].onclick = tocaSom_pom;

//alterando a função para ser genérica
function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}

//criando o contador
//let contador = 0;

//acessando as classes dos elementos da lista
//listaDeTeclas[0].classList; apresenta todas as classes desse elemento

//acessando a classe necessária para associarmos o som ao elemento
//listaDeTeclas[0].classList[1]; apresenta a classe tecla_pom

//percorrendo a lista com while
//while(contador < listaDeTeclas.length ){

//percorrendo a lista com for para otimização
for(let contador = 0; contador < listaDeTeclas.length; contador +=1){
    const tecla = listaDeTeclas[contador];
    //armazenando as classes em uma constante
    const instrumento = tecla.classList[1];

    //armazenando o id dos elementos de audio com as classes obtidas
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    //contador += 1;

    //console.log(contador);
}