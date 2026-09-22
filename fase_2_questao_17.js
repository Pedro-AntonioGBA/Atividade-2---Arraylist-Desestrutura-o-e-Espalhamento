const arr = [10, 15, 22, 34, 45, 60];
const processado = arr.filter(n => n % 3 === 0).map(n => ({ original: n, metade: n / 2 
})).reduce((acc, obj) => acc + obj.metade, 0);
console.log(processado);

let novaLista1 = [];
for (let numero of arr){
  if(numero % 3 ===0){
    novaLista1.push(numero);
  }
}
let obj = {};

for (let numero of novaLista1){
  obj[numero] = {
    original: numero,
    metade: numero / 2
  }
}
console.log(obj)
