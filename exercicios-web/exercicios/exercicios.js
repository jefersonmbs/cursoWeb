/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.*/
DEBUG = (mensagem) => console.log(mensagem)
const operacao = function (a ,b) {
    DEBUG('Soma = ' + (a + b));
    DEBUG('Subtração = ' + (a - b));
    DEBUG('multiplicação = ' + (a * b));
    DEBUG('divisão = ' + (a / b));
}
operacao(2,10);

/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/
const verificarTriangulo = function (a , b ,c) {
    if((a == b) && (b == c)){
        DEBUG('Equilátero')
    }else if((a != b) &&(a != c) && (b != c)){
        DEBUG('Escaleno')
    }else{
        DEBUG('Isósceles')
    }
};
verificarTriangulo( 1,1,1);
verificarTriangulo(1,2,3);
verificarTriangulo(2,8,2);

/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/
const espoenete = function ( b , e) {
    DEBUG(Math.pow(b , e))
}
espoenete(1,2);

/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */
function divisao(x , y) {
    DEBUG( x / y + ' Resultado');
    DEBUG(x % y + ' Resto');
}
divisao(10,2);

/*
05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/
const formatarValor = function (valor) {
    let formatarValorReal =  `R$ ${valor.toFixed(2).toString().replace(".", ",")}`;
    DEBUG(formatarValorReal);
}
formatarValor(0.1 + 0.2);