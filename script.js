class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(arma) {
        console.log(`O ${this.tipo} atacou usando ${arma}`)
    }
}

let heroi1 = new heroi("pedro", "18", "guerreiro")
let heroi2 = new heroi("tiago", "19", "mago")
let heroi3 = new heroi("joao", "65", "monge")
let heroi4 = new heroi("barquinho", "30", "shuriken")

heroi1.atacar("espada")
heroi2.atacar("magia")
heroi3.atacar("artes marciais")
heroi4.atacar("shuriken")

