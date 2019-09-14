function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(soma1(), 'SOMA', soma1(3));

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments
    c = c !== undefined ? c : 1
}