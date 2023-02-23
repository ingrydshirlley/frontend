'use scrict'

const adicionar = document.getElementById('add')
let novaDiv;

const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')
    novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.classList.add('nota')
    novaDiv.innerHTML = `<p class="aluno__title">${aluno}</p>
                        <h1 class="nota__title">${nota}</h1>`

    container.appendChild(novaDiv)
    return 'teste'
}

const handleClick = () => {
    const nomeAluno = prompt('nome')
    const notaAluno = prompt('nota')
    adicionarCard(nomeAluno, notaAluno)

    if (notaAluno < 5) {
        novaDiv.classList.add('vermelho')
    } else if (notaAluno > 5 && notaAluno <= 10) {
        novaDiv.classList.add('verde')
    } else if (notaAluno > 10) {
        alert("nota invalida")
    } else if (notaAluno(isNaN)) {
        alert("digite apenas numeros")
    }
}



adicionar.addEventListener('click', handleClick)