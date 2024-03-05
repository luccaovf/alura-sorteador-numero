function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de>ate){
        let aux = de;
        de = ate;
        ate = aux;
    }

    if(quantidade > (ate-de+1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    
    let sorteados = [];
    sorteados.push(obterNumeroAleatorio(de, ate));
    let numeroAleatorio;
    
    while(sorteados.length != quantidade){
        numeroAleatorio = obterNumeroAleatorio(de, ate);
        while(sorteados.includes(numeroAleatorio)){
            numeroAleatorio = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numeroAleatorio);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    if(document.getElementById('btn-reiniciar').disabled)
        document.getElementById('btn-reiniciar').toggleAttribute('disabled');
}

function obterNumeroAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function reiniciar(){
    document.getElementById('btn-reiniciar').toggleAttribute('disabled');

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora`;

    let campos = document.querySelectorAll('input.container__input');
    console.log(campos);
    campos.forEach( e => e.value = '');
}