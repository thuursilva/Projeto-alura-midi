const listaDeTeclas = document.querySelectorAll('.tecla');

//Adiiconando validação condicional do elemento selecionado
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

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

    //Inserir opção para as funções do teclado ativarem a cor do botão
    tecla.onkeydown = function (evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
        }

    //Inserir opção para retirar o ativo após ativar a cor
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
        }
}