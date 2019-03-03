const escola = "Cod3r"

console.log(escola.charAt(4))//Pegar a letra no indice 4 que começa em 0
console.log(escola.charAt(5))//Ele retorna vazio caso não ache
console.log(escola.charCodeAt(3))// Pega o valor na tabela Unicode
console.log(escola.indexOf('C')) // Pega o valor do indice de um caracter

console.log(escola.substring(1))//Mostrar a partir do indice 1
console.log(escola.substring(0, 3))// Percorre do indie 0 ao 3 poŕem não mostra o indice 3

console.log('Escola '.concat(escola).concat("!")) // Concatenação de String
console.log(escola.replace(3,'E'))//Subistituir uma parte da String, pode ser usando com regeX

console.log("Jeferson,Jaqueline,Perola".split(','))// Gerando um Array com o .split, informando como separador a Vigurla(,)
