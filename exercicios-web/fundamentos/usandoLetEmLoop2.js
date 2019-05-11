const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
}
funcs[2]()
funcs[8]()

const funcsVar = []
for (var i = 0; i < 10; i++) {
    funcsVar.push(function () {
        console.log(i);
    })
}
console.log('-------VAR------')
funcsVar[2]()
funcsVar[8]()