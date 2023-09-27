import * as readline from 'readline-sync';

function gerarNumeroAleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
  console.log("Bem-vindo ao Gerador de Números Aleatórios!");

  const min = parseInt(readline.question("Digite o valor mínimo do intervalo: "));
  const max = parseInt(readline.question("Digite o valor máximo do intervalo: "));

  if (isNaN(min) || isNaN(max)) {
    console.log("Por favor, insira valores numéricos válidos.");
    return;
  }

  if (min >= max) {
    console.log("O valor mínimo deve ser menor que o valor máximo.");
    return;
  }

  const numeroAleatorio = gerarNumeroAleatorio(min, max);
  console.log(`O número aleatório gerado entre ${min} e ${max} é: ${numeroAleatorio}`);
}

main();