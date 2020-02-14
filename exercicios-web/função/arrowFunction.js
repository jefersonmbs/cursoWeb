DEBUG = (mensagem) => console.log(mensagem);

let dobro = function (a) {
    return 2 * a;
};

dobro = (a) => {
    return 2 * a;
};
//Return Implicito
dobro = a => 2 * a;
DEBUG(dobro(Math.PI));

let ola = function () {
    return 'Olá!';
};
ola = () => {
    return "Olá!";
};

ola = () => "Olá!";
DEBUG(ola());