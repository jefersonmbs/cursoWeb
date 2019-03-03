const nome = 'Jeferson'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao)
console.log(template)

//Expressões com template
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

console.log(`Eu vamos ${up('vamos')} fazer alguma ${up('coisa?')}`)