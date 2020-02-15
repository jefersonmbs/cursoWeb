DEBUG = (mensagem) => console.log(mensagem);

const faricantes = ["Mercedes","Audi","Fiat","BMW"];

function imprimir(nome , indice) {
    console.log(`${indice + 1}. ${nome}`)
}

faricantes.forEach(imprimir);
faricantes.forEach(faricantes => DEBUG(faricantes));