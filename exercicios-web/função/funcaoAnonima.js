DEBUG = (mensagem) => console.log(mensagem);

const somar = function (x , y) {
    return  x + y;
}

const subtrair = (x , y) => x - y;

const multiplicar = (x , y) => x * y;

const imprimirResultado = ( a, b, operador = somar) => DEBUG(operador(a,b));

imprimirResultado(9,2 , multiplicar);
imprimirResultado(9,2,subtrair);
imprimirResultado(9,2);