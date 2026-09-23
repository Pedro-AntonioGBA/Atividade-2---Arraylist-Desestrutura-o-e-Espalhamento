const valores = [5, 8, 12, 8, 3];
// o find irá achar o primeiro número 8 e irá retorná-lo
const a = valores.find(v => v === 8);
// o filter vai procurar todos os números 8 e adicionar em uma nova lista
const b = valores.filter(v => v === 8);
// o some irá achar o primeiro 8 e retornar um True
const c = valores.some(v => v === 8);
console.log(a, b, c);
