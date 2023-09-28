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