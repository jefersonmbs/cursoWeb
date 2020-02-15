DEBUG = (mensagem) => console.log(mensagem);

let comprareComThis = function (param) {
    DEBUG(this === param);
}

comprareComThis(global);

const obj = {};
comprareComThis = comprareComThis.bind(obj);
comprareComThis(global);
comprareComThis(obj);


let compareComThisArrow = param => DEBUG(this === param);
compareComThisArrow(global);
compareComThisArrow(module.exports);

compareComThisArrow = compareComThisArrow.bind(obj);
compareComThisArrow(obj)