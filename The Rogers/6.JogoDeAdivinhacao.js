// Desenvolva um jogo em que o computador escolhe um número aleatório e o jogador deve adivinhar qual é. 
// Forneça dicas para o jogador, como "maior" ou "menor", até que ele acerte o número.

const rl = require("readline-sync");

let para = false;
let tentativas = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function perguntaNumero() {

  while (para === false) {
    let chute = rl.questionInt(`Digite o numero inteiro correto(entre 1 e 100): `);
    if (chute < 1 || chute > 100) {
      throw new Error(`Numero invalido! O numero deve ser inteiro e positivo entre 1 e 100`);
    } else {
      console.log(`O numero chutado foi ${chute}`);
      if (chute == numero) {
        console.log(`\nACERTOU!!`);
        para = true;
      } else if (chute > numero) {
        console.log(`\nERRRROU! é menor que ${chute}`);
      } else if (chute < numero) {
        console.log(`\nERRRROU! é maior que ${chute}`);
      }
      tentativas++;
    }
  }
}

const numero = getRandomInt(1, 100);

console.log(`Vamos Jogar!`);
console.log(`OBS: Se o numero informado for decimal, as casas apos a virgula serao ignoradas. Boa sorte!`)
perguntaNumero();
console.log(`\nO numero de tentativas foi ${tentativas}`);
