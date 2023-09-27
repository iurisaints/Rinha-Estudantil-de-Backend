import * as readline from 'readline-sync';

function converterQuilometrosParaMilhas(quilometros: number): number {
  return quilometros * 0.621371;
}

function converterLitrosParaGaloes(litros: number): number {
  return litros * 0.264172;
}

function converterCentimetrosParaPolegadas(centimetros: number): number {
  return centimetros * 0.393701;
}

function main() {
  console.log("Bem-vindo ao Conversor de Unidades!");

  const escolha = readline.question("Selecione a conversão que deseja realizar:\n" +
    "1. Quilômetros para Milhas\n" +
    "2. Litros para Galões\n" +
    "3. Centímetros para Polegadas\n");

  const opcao = parseInt(escolha);

  if (isNaN(opcao) || opcao < 1 || opcao > 3) {
    console.log("Opção inválida. Por favor, selecione uma opção válida.");
    return;
  }

  const valorEntrada = parseFloat(readline.question("Digite o valor que deseja converter: "));

  if (isNaN(valorEntrada) || valorEntrada <= 0) {
    console.log("Valor de entrada inválido. Por favor, insira um valor numérico positivo.");
    return;
  }

  let resultado: number;

  switch (opcao) {
    case 1:
      resultado = converterQuilometrosParaMilhas(valorEntrada);
      console.log(`${valorEntrada} quilômetros equivalem a ${resultado} milhas.`);
      break;
    case 2:
      resultado = converterLitrosParaGaloes(valorEntrada);
      console.log(`${valorEntrada} litros equivalem a ${resultado} galões.`);
      break;
    case 3:
      resultado = converterCentimetrosParaPolegadas(valorEntrada);
      console.log(`${valorEntrada} centímetros equivalem a ${resultado} polegadas.`);
      break;
    default:
      console.log("Opção inválida.");
  }
}

main();