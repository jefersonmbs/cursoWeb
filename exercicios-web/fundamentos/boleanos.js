let isAtivos = false
console.log(isAtivos)
console.log(typeof isAtivos)

isAtivos = true
console.log(isAtivos)

isAtivos = 1
console.log(!!isAtivos)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivos = true))

console.log('Os Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivos = false))

let nome = ''
console.log(nome || 'Desconhecido') // Nome não preenchido
nome ='SteelSeries'
console.log(nome || 'Desconhecido') // Nome Preenchido
