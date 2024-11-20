let salario = document.querySelector(".salario")
let botao = document.querySelector("button")
let exibir = document.querySelector(".novo-salario")


let Calcular = () => {

    let pegaSalario = salario.value;
    alert('SALARIO: '+ pegaSalario)

    let aumento = pegaSalario * 0.17
    alert('AUMENTO: '+ aumento.toFixed(2))

    let novoSalario = pegaSalario + (aumento + 215)
    alert('NOVO SALARIO: '+ novoSalario.toFixed(2))

   
}
