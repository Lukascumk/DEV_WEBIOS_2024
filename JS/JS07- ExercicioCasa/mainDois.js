Metodo = oque pode fazer
Entidade = objeto
Propriedades = caracteristicas

let aluno = {
    nome: 'lukas',
    idade: 28,
    altura: 1.85,
    isCracha: true,
    isCamisa: true,
    isPaciencia: true,
    isChora: true,
    cor: 'café com leite',
    notas: [10, 8, 9, 7, 8.5]
}

let IOS = [
    {
        nome: 'duda',
        idade: 18,
        altura: 1.76,
        isCracha: true,
        isCamisa: true,
        isPaciencia: true,
        isChora: true,
        cor: 'rosa',
        notas: [10, 8, 9, 7, 8.5]
    },

    {
        nome: 'outro',
        idade: 18,
        altura: 1.76,
        isCracha: false,
        isCamisa: false,
        isPaciencia: true,
        isChora: true,
        cor: 'branco',
        notas: [10, 8, 9, 7, 8.5]
    },

    {
        nome: 'outro',
        idade: 18,
        altura: 1.76,
        isCracha: false,
        isCamisa: true,
        isPaciencia: true,
        isChora: true,
        cor: 'branco',
        notas: [10, 8, 9, 7, 8.5]
    }

]

console.log('camisa:' + IOS[0].isCamisa + ' chora:' + IOS[1].isChora)

for (let i = 0; i < IOS.length; i++) {
    let camisa = IOS[i]
    if (camisa.isCamisa == true) {
        console.log(' tem camisa')
    }
    else {
        console.log(' nao tem camisa')
    }
}