{
    {
        {
            {
                var sera = 'Será??'
            }
        }
    }
}
//Por conte de ser um VAR ela sera vista fora do seu bloco
//Por esse motivo ela é mostrada no console
console.log(sera);

//Quando se declara uma Var dentro de uma função, o scopo dessa vaviavél estará visivél só dentro da função
function teste() {
    var local = 123

}
//Var ou será Global ou será no scopo de função
teste();
console.log(local);
