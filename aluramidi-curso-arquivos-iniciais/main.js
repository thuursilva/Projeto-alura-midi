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
function tocaSom_pom () {
    document.querySelector('#som_tecla_pom').play();
}

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
listaDeTeclas[0].onclick = tocaSom_pom;