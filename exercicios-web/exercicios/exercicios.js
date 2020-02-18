/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.*/
DEBUG = (mensagem) => console.log(mensagem)
const operacao = function (a ,b) {
    DEBUG('Soma = ' + (a + b));
    DEBUG('Subtração = ' + (a - b));
    DEBUG('multiplicação = ' + (a * b));
    DEBUG('divisão = ' + (a / b));
};
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

/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará
o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */
 const jurosSimples = function (capini , txJuros , tempo ){
   return capini + (capini * txJuros * tempo)
}
const jurosxomposto = function(capini , txJuros , tempo ) {
     return capini * (1 + txJuros) ** tempo
}
DEBUG(jurosSimples(1500,10/100,2).toFixed(2));
DEBUG(jurosxomposto(1500,10/100,2).toFixed(2));

/*
07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros,
“ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
 */
const baskara = function(ax2 , bx , c) {
    let delta = (bx ** 2) - (4 * ax2 * c);
        if(delta < 0){
            return 'Delta é negativo'
        }
     let x1 = (-bx + Math.sqrt(delta))/2*ax2;
     let x2 = (-bx - Math.sqrt(delta))/2*ax2;
     let x1EX2 = []
    x1EX2.push('X1: ' + x1)
    x1EX2.push('X2: ' + x2)
     return x1EX2
}
DEBUG(baskara(3,-5,12))
DEBUG(baskara(1,3,2))

// 08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo,
// ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere
// se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”,
// escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele
// bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:  String: “10 20 20 8 25 3 0 30 1” Retorno: [3, 7] (Significa que ele bateu três vezes seu
// recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)
let historicoDeJogos = [10,50,60,80,15,55,5,9,45,78,62,81,3,5,84,8,7];

const calcularrogresso = function ( historico ) {

    let jogoPior = 1;
    let records = 0;
    let maiorPontuacao = [0];
    let menorPontuacao = [0];

    for (let i = 1; i < historico.length; i++) {
        if(historico[i] > maiorPontuacao) {
            maiorPontuacao = historico[i];
            records++;
        }else if (historico[i] < menorPontuacao) {
            menorPontuacao = historico[i];
            jogoPior = i+1;
        }
    }
    return [records, jogoPior]
}
DEBUG(calcularrogresso(historicoDeJogos))