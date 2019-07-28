// Função em JS é First-Class Object (Citizens)

// Criar de forma literal
function fun1() {

}

// Armazenar em uma variavel

const fun2 = function () {
}

// armazenar em um Array

const array = [function (a, b) {
    return a + b;
}, fun1, fun2]
console.log(array[0](10, 50))

// Armazenar em um atributi de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

// Passar função como parametros
function run(fun) {
    fun()
}

// Uma função retonar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)

    }
}
soma(2,3)(10)