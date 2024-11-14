let valor = document.getElementById("receberValor");
let botaoEnviar = document.getElementsByClassName('botaoEnviar');
let resultado = document.getElementsByName('resultado');

// Função que gera a tabuada
const Tabuada = () => {
    let guardaValor = valor.value;

    // Verifica se o valor inserido é válido
    if (guardaValor === '' || guardaValor === null) {
        resultado[0].innerHTML = "Insira um valor válido";
        resultado[0].style.color = 'red';
    } else {
        resultado[0].style.color = 'black';
        resultado[0].innerHTML = '';  // Limpa o conteúdo da área de resultado antes de exibir a nova tabuada

        // Gera e exibe a tabuada
        for (let i = 1; i <= 10; i++) {
            let resultadoTabuada = guardaValor * i;
            resultado[0].innerHTML += `${guardaValor} x ${i} = ${resultadoTabuada} <br/>`;
        }
    }
}

// Função para limpar os campos
let botaoLimpar = document.getElementsByClassName('Limpar');
const Limpar = () => {
    valor.value = '';  // Limpa o campo de entrada
    resultado[0].innerHTML = '';  // Limpa a área de resultado
}
