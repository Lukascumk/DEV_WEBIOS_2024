let salario = recebimento = 1200;
class contaBancaria {

    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    calcularAumentoPoupanca() {
        return salario * 0.015;
    }

    calcularAumentoCorrente() {
        return salario * 0.036;
    }

    calcularAumentoEstudante() {
        return salario * 0.012;
    }

    depositarAumentoPoupanca() {
        const aumento = this.calcularAumentoPoupanca();
        this.saldo += aumento;
        return aumento;
    }

    depositarAumentoCorrente() {
        const aumento = this.calcularAumentoCorrente();
        this.saldo += aumento;
        return aumento;
    }

    depositarAumentoEstudante() {
        const aumento = this.calcularAumentoEstudante();
        this.saldo += aumento;
        return aumento;
    }
}

const poupanca = new ContaBancaria("Lukas", 27, 'masculino', 6909, 243149, 123);
const estudante = new ContaBancaria("Lukas", 27, 'masculino', 6909, 243149, 123);
const correntista = new ContaBancaria("Lukas", 27, 'masculino', 6909, 243149, 123);


console.log(estudante);
console.log(contaEstudante())
console.log(correntista);
console.log(contaCorrente())
console.log(poupanca);
console.log(contaPoupanca())

poupanca.depositarAumentoPoupanca();
estudante.depositarAumentoEstudante();
correntista.depositarAumentoCorrente();

console.log("Conta Poupança:", poupanca, "Saldo:", poupanca.getSaldo());
console.log("Conta Estudante:", estudante, "Saldo:", estudante.getSaldo());
console.log("Conta Corrente:", correntista, "Saldo:", correntista.getSaldo());