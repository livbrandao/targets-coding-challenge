const fs = require("fs");

// Carregar o arquivo JSON
const faturamento = JSON.parse(fs.readFileSync("dados.json", "utf-8"));

// Filtrar os dias com faturamento (excluindo os dias com 0.0)
const diasComFaturamento = faturamento.filter((item) => item.valor > 0);

// Calcular a média de faturamento
const totalFaturamento = diasComFaturamento.reduce(
  (total, item) => total + item.valor,
  0
);
const mediaFaturamento = totalFaturamento / diasComFaturamento.length;

// Calcular o menor e maior valor de faturamento
const menorFaturamento = Math.min(
  ...diasComFaturamento.map((item) => item.valor)
);
const maiorFaturamento = Math.max(
  ...diasComFaturamento.map((item) => item.valor)
);

// Contar os dias com faturamento superior à média
const diasAcimaDaMedia = diasComFaturamento.filter(
  (item) => item.valor > mediaFaturamento
).length;

console.log(`Menor Faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior Faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com Faturamento Acima da Média: ${diasAcimaDaMedia}`);
