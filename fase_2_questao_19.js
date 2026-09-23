const pessoas = [
  { nome: 'Ana', cidade: 'SP' },
  { nome: 'Lucas', cidade: 'RJ' },
  { nome: 'Bruna', cidade: 'SP' },
  { nome: 'Caio', cidade: 'MG' }
];

const Cidade = pessoas.reduce((acc, pessoa) => {
  if (!acc[pessoa.cidade]) {
    acc[pessoa.cidade] = [];
  }
  acc[pessoa.cidade].push(pessoa);
  return acc;
}, {});

console.log(Cidade);
