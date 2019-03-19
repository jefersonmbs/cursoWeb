//Função é uma ação defenidas em blocos {} com as sentenças de codigos
//Toda função tera um nome

//Função sem retorno
function imprimirSoma(a, b) {

    console.log( a + b)

}
imprimirSoma(40 , 10)
imprimirSoma(10) //NaN
imprimirSoma(1,2,3,4,5,6,7,8,9)
imprimirSoma()

//Função com renotro

function soma(a = null, b = null) {

    let total = a + b

    return total
}

console.log(soma())
console.log(soma(10, 10))
console.log(soma(50))