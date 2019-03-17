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


let valor  // Declarada, mas sem ser iniciada
console.log(valor)

valor = null //inicia,mas ausencia de valor
console.log(valor)
// console.log(valor.toString()) // Erro! Ao acessar algo nullo

const produto = {}
console.log(produto.preco) //Preço não esta devinido no objeto produto
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribur undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)


