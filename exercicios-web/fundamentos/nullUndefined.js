//Passagem de valor por referencia, é passado o valor em memoria do objeto

const a ={nome: 'teste'}

const b = a //Apontamento para o mesmo objeto em memória

console.log(a)
console.log(b)

b.nome = 'Jeferson'

console.log(a)
console.log(b)


//Atribuoção de valores e tipos primitivos é passo o valor para a atribuição
let c = 3
let d = c // Passagem de valor, Varival D recebe valor de C e não a referencia de memória
d++
console.log(d)
console.log(c)


