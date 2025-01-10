const faturamentoEstados = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

// Calcular o total de faturamento
const totalFaturamentoEstados = faturamentoEstados.reduce(
  (total, item) => total + item.valor,
  0
);

// Calcular o percentual de cada estado
faturamentoEstados.forEach((item) => {
  const percentual = (item.valor / totalFaturamentoEstados) * 100;
  console.log(`${item.estado}: ${percentual.toFixed(2)}%`);
});
