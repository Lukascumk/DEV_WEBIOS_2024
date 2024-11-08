let frutas = [ 
    "maça", 
    "banana", 
    "abacaxi", 
    "manga", 
    "melancia", 
    "uva", 
    "kiwi", 
    "amora",
]

// for (i = 0; i <= frutas.length ; i++){

    //      console.log(i) //numero da posição
    //     console.log(frutas[i]); //valor da posição
// }

frutas.forEach(Percorrer)
//primeiro é referente ao valor do conteudo
//segundo parametro é referente ao indice
function Percorrer(valor, indice){
    console.log(valor);
    console.log(indice);
}