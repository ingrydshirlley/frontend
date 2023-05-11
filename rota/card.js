'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.breed = 'raça animal'
        this.origin = 'origem animal'
        this.foto = null
    }

    static get observedAttributes() {
        return ['breed', 'origin', 'foto']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        ul,
        ol {
            text-decoration: none;
        }

        .card{
            background-color: #FFD8B4;
            width: 200px;
            height: 300px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        
        .card-image{
            background-color: #F47107;
            border-radius: 10px;
            height: 65%;
            width: 90%;
            background-image: url(${this.foto})
        }
        
        .card-geral{
            text-align: end;
            gap: 5%;
            width: 90%;
        }

        .card:hover{
            background-color: aliceblue;
            transition: .8s;
        } 
        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.createElement('div')
        imagem.classList.add('card-image')

        const img = document.createElement('img')
        img.textContent = this.foto

        const card_geral = document.createElement('div')
        card_geral.classList.add('card-geral')

        const card_breed = document.createElement('div')
        card_breed.classList.add('card-breed')
        card_breed.textContent = this.breed

        const card_origin = document.createElement('div')
        card_origin.classList.add('card-origin')
        card_origin.textContent = this.origin

        imagem.append (img)
        card_geral.append(card_breed, card_origin)
        card.append(imagem, card_geral)
        return card
    }
}
customElements.define('card-ingryd', card)