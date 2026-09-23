// o código modifica o contexto original porque o método splice modifica o próprio array


// fazendo com spread
const lista = [4, 8, 12, 16];
const spread = [...lista];
const r = spread.splice(1, 2);
console.log(lista, r);

// com filter
const filtro = lista.filter((numero, index) => index == 1 || index == 2);
console.log(lista, filtro);
