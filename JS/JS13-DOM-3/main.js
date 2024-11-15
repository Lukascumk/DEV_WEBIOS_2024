let botao = document.querySelector('button')

let olharNumero = false



if(olharNumero === true){
    botao.style.color="white"
    botao.style.backgroundColor ="blue"
    botao.innerHTML = 'Cadastrar'
}
else{
    botao.style.color = 'white'
    botao.style.backgroundColor ='red'
}

let paragrafo = document.querySelector('#paragrafo')
paragrafo.style.backgroundImage = 'linear-gradient(red, yellow)'