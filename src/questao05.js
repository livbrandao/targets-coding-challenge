function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

let minhaString = "Exemplo de string"; // Pode ser alterado
console.log(inverterString(minhaString));
