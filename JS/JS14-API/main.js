let URL = 'https://dog.ceo/api/breeds/image/random' //link esterno guardei dentro de uma variavel

const DogAPI = async () => {
    //Faço a consulta na API e retorno o json na variavel resp.
    await fetch(URL).then((response) => {
        //transformar o JSON recebido pelo fetch em obj
        return response.json();
    }).then((response) =>{
        //Apresentar as informações para o usuario
        //transformando novamente o OBJ em JSON
        document.getElementById('mostrarJSON').innerText = JSON.stringify(response);

        let image = `
        <img style = "width: 200px"; heigth="200px"src="${response.message}" alt="Imagens de doguinhos">
        `
        document.getElementById('mostrarIMG').innerHTML = image;
    })


}
DogAPI()