const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2); //Math.pow = levado a 2 potencia

function raizQadrada(r) { //Calculo Basico Raiz Quadrada

    let raiz = Math.sqrt(r);

    return raiz
}

console.log(raizQadrada(10).toFixed(2));

console.log("O valor da area é:", area.toFixed(2));
console.log(typeof Math);