// let carro = {
//     nome: nome,
//     cor: cor,
//     peso: peso,
//     modelo: modelo,
// }

// let carro1 = carro("Toyota", "Preto", 1235, "Corola");
// console.log (carro1)


class Aluno {
    constructor(nome, ano, altura, isCracha, isCamisa, cor) {
        this.nome = nome;
        this.ano = ano;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
    }

    retornaIdade(ano) {
        let dataCompleta = new Date();
        let pegaAno = dataCompleta.getFullYear() 
        return pegaAno - this.ano


    }
}


// objeto no JS Date -- retorna informações de data de acordo com oque está configurado no seu computador/servidor


//instancia == cópias
let aluno1 = new Aluno("Lukas", 1997, 1.80, true, true, "Papelão molhado");
let aluno2 = new Aluno("Jeff", 2005, 1.75, true, true, "AllWhite")
// console.log(aluno1);
console.log("Segundo Aluno:", aluno1, "Segundo Aluno:", aluno2)
console.log(aluno1.nome, aluno.ano)

console.log(`A idade do aluno${aluno1} é: ${retornaIdade()}`);
