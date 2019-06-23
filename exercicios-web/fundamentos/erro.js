function tratarerroELanca(erro) {
    throw new Error('....')

}

function  imprimirNomegritado(obj) {
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }catch (e) {
        tratarerroELanca(e)
    }


}
const obj = {nome : 'jeferson'}
imprimirNomegritado(obj)