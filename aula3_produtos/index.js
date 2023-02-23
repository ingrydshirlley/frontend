'use strict'

/* array:
const nome = [true, 24, gata]

objeto:
const aluno = { nome: 'gata', nota: 24, aprovado: true }

objeto de um array:
const aluno = [
{ nome: 'gata', nota: 10, aprovado: true },
{ nome: 'gato', nota: 2, aprovado: false }
] 

DESESTRUTURAÇÃO
const [nota1, nota2, nota3, nota4] = [10, 4, 2, 6]
*/

import { produtos } from "./produtos.js"

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card_img')
    img.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card_title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card_description')
    descricao.textContent = produto.description

    const preco = document.createElement('p')
    preco.classList.add('card_price')
    preco.textContent = produto.price

    card.append(img, titulo, descricao, preco)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()

/* const precos = [10, 23, 51, 90]*/

//MANEIRA CALCULAR FRETE 1
/* const limite = precos.length
const precosFrete = []
for (let i = 0; i < limite; i++) {
    precosFrete[i] = precos[i] + 2
} */

//MANEIRA CALCULAR FRETE 2
/* const limite = precos.length
const precosFrete = []
let i = 0
while (i < limite) {
    precosFrete[i] = precos[i] + 2
    i++
} */

//MANEIRA CALCULAR FRETE 3
/* const adicionarFrete = (preco) => preco + 2
const precosFrete = precos.map(adicionarFrete) //map pega item por item e manda pra um callback

console.log(adicionarFrete(5)) */