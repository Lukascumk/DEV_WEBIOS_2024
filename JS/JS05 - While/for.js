// let sala = ['Lukas', 'Giovane', 'Caio', 'Nico'];


//declarar a variavel
//teste lógico 
//incremento
//length para array
// for (let contador = 0; contador <= 5 ; contador++ )
// {
//     console.log(`Valor: ${contador}`);
// }


// for (let i = 0; i < sala.length; i++ )
// {
//     console.log(`Olá, Tudo bem? ${sala[i]}  Seja bem vindo!\n\n`);
// }



//0.1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584




let n = 2584;
let a = 0;
let b = 1;

console.log(`Primeiro número da sequência: ${a}`);

for (; b<=n;)
{
    console.log(`Sequencia de fibonacci é ${b}`);
    let next = a+b;
    a=b;
    b=next;
}