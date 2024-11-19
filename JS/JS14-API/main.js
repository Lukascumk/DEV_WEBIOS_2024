let URL = 'https://dog.ceo/api/breeds/image/random' //link esterno guardei dentro de uma variavel

const DogAPI = async () => {
    //Faço a consulta na API e retorno o json na variavel resp.
    let resp = await fetch(URL);

    let exemplo = resp.json()
    console.log(exemplo)
}

DogAPI()