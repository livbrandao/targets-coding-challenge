function fibonacci(num) {
  let a = 0,
    b = 1;
  while (b < num) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return b === num || num === 0;
}

let numero = 21; // Pode ser alterado para qualquer valor
if (fibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
