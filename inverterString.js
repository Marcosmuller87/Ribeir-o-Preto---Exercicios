function inverterString() {
  // Captura o valor do input
  let string = document.getElementById("string").value;
  let stringInvertido = "";
  // Bucle para inverter a string
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertido += string[i];
  }
  // Dispara a alerta exibindo a palavra invertida
  return alert(`A palavra invertida é: ${stringInvertido}`);
}
