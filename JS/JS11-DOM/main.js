document.body.style.backgroundColor = "Black"
document.title = "Socorro Dom"
document.documentElement.lang = "pt-br"
//criando elementos com js


let campoNovo = document.createElement('button')
// informar em qual elemento queremos inserir o botao

document.body.appendChild(campoNovo).innerHTML = "ENVIAR"
campoNovo.style.backgroundColor = `red`
campoNovo.style.borderRadius = `5px`


document.createElement('section')