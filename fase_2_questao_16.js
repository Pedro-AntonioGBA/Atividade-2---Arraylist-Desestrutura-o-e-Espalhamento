const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);
console.log(resultado);

// o método filter dentro da variável resultado irá retornar uma nova lista com os números ímpares do array "arr"

// o método map irá percorrer esta nova lista e irá multipliar os elementos da nova lista por 3

// o reduce irá somar os elementos da lista resultante do map começando por 10, dando 15+9+3+10
