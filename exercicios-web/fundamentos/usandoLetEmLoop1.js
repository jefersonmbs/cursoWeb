for(let i = 0; i < 10; i++){ //Scopo de Bloco
    console.log('Dentro Let = ',i)
}

console.log(i)//tentando Imprimir Fora do Bloco
for(var i =0 ; i< 10; i++){
    console.log('Dentro Var = ',i)
}
console.log(i, 'Fora')