function tocaSom (selectorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localname === 'audio') {
        elemento.play();
    }
    else {
        //alert('elemento não encontrado');
        console.log('Elemento não encontrado ou seletor invalido');
    }

    
}
 const ListaDeTeclas = document.querySelectorAll('.tecla');

 //para
 for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const intrumento = tecla.classList[1];
    const idAudio = '#som_${instrumento}';// template string

    tecla.oncliclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space || evneto.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () { tecla.classList.remove('ativa')
}
