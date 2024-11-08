let alunos =
    [
        {
        nome: "Ana"
        , idade:17
        , nota: 8
        , ano: '2ºB'
        },

    {
        nome:'Bruno'
        , idade: 16
        , nota:6
        , ano:'2ºC'
    },

    {
        nome:'Veronica'
        , idade:16
        , nota:6
        , ano:'2ºC'
    },
    {
        nome:'Marta'
        , idade:15
        , nota:5
        , ano:'3ºC'
    },
    {
        nome:'Brenno'
        , idade:19
        , nota:6
        , ano:'3ºC'
    },
    {
        nome:'Maria'
        , idade:14
        , nota:4
        , ano:'1ºF'
    }
    ]


    console.log(aluno)//todo objt
    console.log(aluno[1])//aluno especifico
    console.log(aluno[5].nota)//somente a nota


    //JSON > OBJ = parse // OBJ > JSON = Stringfy

     let JsonAluno = JSON.stringify(aluno) //transformar em JSON
     console.log(JsonAluno) //