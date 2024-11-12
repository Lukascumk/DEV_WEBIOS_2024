function Contador(){
   let imparPar;
   let numero = 4;

   for(numero; numero<= 50; numero++){
    if(numero % 2 === 1){
        console.log(numero)
    }
   } 
       for(numero; numero<= 50; numero++){
           if(numero % 2 ===0){
               console.log(numero)
            }
        } 
}

console.log(Contador())
console.clear()


let BoasVindas = () => {
    return 'Welcome Sofrendo com JS / TCC'
}

console.log (BoasVindas());

let soma = ( num1, num2) => {
    return num1 + num2;
}
console.log(soma(7,5))

console.clear()

function Clique(){
    let cliques = 0;

    console.log( cliques = cliques + 1)
}

console.log(Clique());


console.clear();

let ChamaPopUp = () =>{
    alert('Parabéns você me chamou, descompensado!')
}

console.clear();

let PasseMouse = () =>{
 alert(`O maninho passo o mouse em mim!`)
}