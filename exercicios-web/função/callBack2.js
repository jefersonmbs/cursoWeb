DEBUG = (mensagem) => console.log(mensagem);

const notas = [7.7,7.8,4,4.5,5.3,9,10,8.5];

//Sem CallBack
let notasMenor = [];
for(let i in notas){
    if(notas[i]< 7){
        notasMenor.push(notas[i])
    }
}
DEBUG(notasMenor);

//Com CallBack
/*notasMenor = notas.filter(function (notas){
     return notas < 7
});*/
const notasMenor2 = notas.filter(notas =>notas<7);
DEBUG(notasMenor2);