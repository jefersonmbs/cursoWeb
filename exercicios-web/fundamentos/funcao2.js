//Armazenando uma função em uma variavel

const imprimirSoma = function (a,b) {

    console.log(a+b)
}

imprimirSoma(2, 4)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(4,5))

//Retorno implicito
const subtracao = (a,b) => a - b

console.log(subtracao(4,1))
console.log(subtracao(4,10))

