// Array = Vetor unilateral de forma linear [1,2,3,4,5], o indeci começa do 0
// Array pode ter String e Numero no mesmo array, e não tem tamanho fixo

const valores = [7.7, 8.9, 6.3, 9.2] //Declarado de forma literal de 4 posições
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push(false, null , 'teste')
console.log(valores)
console.log(valores.length)