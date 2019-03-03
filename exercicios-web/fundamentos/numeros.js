const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliscao2 = 6.871

const total = avaliacao1 * peso1 + avaliscao2 * peso2
const media = total /(peso2 + peso1)

console.log(media.toFixed(2)) //Defini 2 casas decimais sem alterar o valor da constante
console.log(media.toString(2))// Trasnformar em binario
console.log(typeof media)