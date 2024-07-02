function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if(de >= ate) {
        alert("O campo 'Do número' deve ser menor do que o campo 'Até o número'. Revise as entradas!");
        return;
    }

    if(quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Revise as entradas!');
        return;
      }
    

    let sorteio = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = sortearNumeroAleatorio(de, ate);

        while (sorteio.includes(numero)) {
            numero = sortearNumeroAleatorio(de, ate);
        }

        sorteio.push(numero);
    } 
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteio}</label>`;

    alterarStatusBotao();
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    
    alterarStatusBotao();
}

function sortearNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");

    if(botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}