let URL = "https://viacep.com.br/ws/01001000/json/"
let cep = document.getElementById('cep')

async function BuscaCep() {
    await fetch(URL).then((response) => {
        //transformar JSON em OBJ
        return response.json();
    }).then((response) =>{
      cep.value = response.cep
      logradouro.value = response.logradouro
      complemento.value = response.complemento

      //outra maneira
      document.getElementById('bairro').value = 
      response.bairro
      document.getElementById('estado').value = response.estado
    })
    
}
  



BuscaCep()