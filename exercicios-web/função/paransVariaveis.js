function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1,2.2,3.3,6.6,56.25,254.5))