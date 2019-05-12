//par nome/valot
const saudacao = 'ola'

function exec() {
    const saudacao = 'Falaaaaa'
    return saudacao
}

console.log(saudacao)
console.log(exec())

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: '24',
    endereco: {
        logradouro: 'Servisão Catarina Muller',
        numero: 1077,
        tipo:'casa'
    }
}
console.log(cliente.nome)
console.log(cliente.idade)
console.log(cliente.endereco.logradouro)
console.log(cliente.endereco.numero)