/*# Conversor de Moedas
Implemente um programa que converta valores entre diferentes moedas. O usuário deve inserir o valor, a moeda de origem e a moeda de destino.
As moedas deverão ser: Won sul-coreano, Dirham marroquino, Dólar e Real.*/

function conversorDeMoedas(valor, moedaOrigem, moedaDestino) {
    const taxasDeCambio = {
      "WON": 0.00086,    // Taxa de câmbio do Won sul-coreano para Dólar
      "MAD": 0.110,      // Taxa de câmbio do Dirham marroquino para Dólar
      "USD": 1.0,        // Dólar Americano (taxa de câmbio 1:1)
      "BRL": 5.24,       // Taxa de câmbio do Real para Dólar
    };
  
    if (moedaOrigem in taxasDeCambio && moedaDestino in taxasDeCambio) {
      const taxaOrigemParaDolar = taxasDeCambio[moedaOrigem];
      const taxaDolarParaDestino = taxasDeCambio[moedaDestino];
      const valorEmDolar = valor * taxaOrigemParaDolar;
      const valorConvertido = valorEmDolar / taxaDolarParaDestino;
      return valorConvertido.toFixed(2); // Arredonda para 2 casas decimais
    } else {
      return "Moeda não suportada.";
    }
  }
  
  const valor = parseFloat(prompt("Digite o valor a ser convertido:"));
  const moedaOrigem = prompt("Digite a moeda de origem (WON, MAD, USD, BRL):").toUpperCase();
  const moedaDestino = prompt("Digite a moeda de destino (WON, MAD, USD, BRL):").toUpperCase();
  
  const resultado = conversorDeMoedas(valor, moedaOrigem, moedaDestino);
  console.log(`O valor convertido é: ${resultado} ${moedaDestino}`);
  