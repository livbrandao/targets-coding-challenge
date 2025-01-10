let faturamentoMensal = [
  { dia: 1, faturamento: 200 },
  { dia: 2, faturamento: 400 },
  { dia: 3, faturamento: 0 },
  { dia: 4, faturamento: 500 },
  { dia: 5, faturamento: 300 },
  { dia: 6, faturamento: 100 },
  { dia: 7, faturamento: 0 },
];

let totalFaturamento = 0;
let diasComFaturamento = 0;
let menorFaturamento = Infinity;
let maiorFaturamento = -Infinity;

faturamentoMensal.forEach((dia) => {
  if (dia.faturamento > 0) {
    totalFaturamento += dia.faturamento;
    diasComFaturamento++;
    if (dia.faturamento < menorFaturamento) menorFaturamento = dia.faturamento;
    if (dia.faturamento > maiorFaturamento) maiorFaturamento = dia.faturamento;
  }
});

let mediaFaturamento = totalFaturamento / diasComFaturamento;

let diasAcimaDaMedia = faturamentoMensal.filter(
  (dia) => dia.faturamento > mediaFaturamento
).length;

console.log(`Menor Faturamento: R$${menorFaturamento}`);
console.log(`Maior Faturamento: R$${maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
