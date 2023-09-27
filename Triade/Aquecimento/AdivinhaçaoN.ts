import * as readline from 'readline-sync';

function gerarNumeroAleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
  
  console.log("Tente adivinhar o número escolhido pelo computador.");
  console.log("Você tem até 6 tentativas.");

  const numeroAleatorio = gerarNumeroAleatorio(1, 100);
  let tentativas = 0;

  while (tentativas < 6) {
    const palpite = parseInt(readline.question(`Tentativa ${tentativas + 1}: Digite um número entre 1 e 100: `));

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      console.log("Por favor, insira um número válido entre 1 e 100.");
      continue;
    }

    if (palpite < numeroAleatorio) {
      console.log("O número é maior.");
    } else if (palpite > numeroAleatorio) {
      console.log("O número é menor.");
    } else {
      console.log(`Parabéns! Você acertou. O número era ${numeroAleatorio}.`);
      return;
    }

    tentativas++;
  }

  console.log("Suas tentativas acabaram. O número correto era " + numeroAleatorio + ".");
}

main();