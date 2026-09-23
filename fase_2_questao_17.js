const arr = [10, 15, 22, 34, 45, 60];

let novaLista1 = [];
for (let numero of arr){
  if(numero % 3 ===0){
    novaLista1.push(numero);
  }
}

let soma = 0;
for (let numero of novaLista1){
  
    const objeto = {original: numero, metade: numero / 2};
    soma += objeto.metade;
}

console.log(soma);
