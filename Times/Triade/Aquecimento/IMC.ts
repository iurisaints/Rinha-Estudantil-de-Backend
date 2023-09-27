import * as readline from 'readline-sync';

function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function main() {
  console.log("Calculadora de Índice de Massa Corporal (IMC)");

  const peso = parseFloat(readline.question("Digite seu peso (em quilogramas): "));
  const altura = parseFloat(readline.question("Digite sua altura (em metros): "));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Por favor, insira valores numéricos válidos para peso e altura.");
    return;
  }

  const imc = calcularIMC(peso, altura);
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
}


main();

