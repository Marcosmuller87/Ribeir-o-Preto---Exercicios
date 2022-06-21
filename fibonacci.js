function fibonacci() {
  // Captura o valor do input
  let numero = Number(document.getElementById("numero").value);
  let sequencia = [0, 1];
  let proximo = 0;
  // Bucle para calcular a sequencia de fibonacci e armazenar no array
  for (let i = 2; i <= numero; i++) {
    proximo = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(proximo);
  }
  // Dispara a alerta se o numero estiver dentro do array
  if (sequencia.indexOf(numero) > -1) {
    alert(`${numero} pertence à sequência de Fibonacci.`);
    // Dispara a alerta se o numero não estiver dentro do array
  } else {
    alert(`${numero} não pertence à sequência de Fibonacci.`);
  }
}
