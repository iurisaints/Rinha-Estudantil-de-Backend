"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function converterQuilometrosParaMilhas(quilometros) {
    return quilometros * 0.621371;
}
function converterLitrosParaGaloes(litros) {
    return litros * 0.264172;
}
function converterCentimetrosParaPolegadas(centimetros) {
    return centimetros * 0.393701;
}
function main() {
    console.log("Bem-vindo ao Conversor de Unidades!");
    var escolha = readline.question("Selecione a conversão que deseja realizar:\n" +
        "1. Quilômetros para Milhas\n" +
        "2. Litros para Galões\n" +
        "3. Centímetros para Polegadas\n");
    var opcao = parseInt(escolha);
    if (isNaN(opcao) || opcao < 1 || opcao > 3) {
        console.log("Opção inválida. Por favor, selecione uma opção válida.");
        return;
    }
    var valorEntrada = parseFloat(readline.question("Digite o valor que deseja converter: "));
    if (isNaN(valorEntrada) || valorEntrada <= 0) {
        console.log("Valor de entrada inválido. Por favor, insira um valor numérico positivo.");
        return;
    }
    var resultado;
    switch (opcao) {
        case 1:
            resultado = converterQuilometrosParaMilhas(valorEntrada);
            console.log("".concat(valorEntrada, " quil\u00F4metros equivalem a ").concat(resultado, " milhas."));
            break;
        case 2:
            resultado = converterLitrosParaGaloes(valorEntrada);
            console.log("".concat(valorEntrada, " litros equivalem a ").concat(resultado, " gal\u00F5es."));
            break;
        case 3:
            resultado = converterCentimetrosParaPolegadas(valorEntrada);
            console.log("".concat(valorEntrada, " cent\u00EDmetros equivalem a ").concat(resultado, " polegadas."));
            break;
        default:
            console.log("Opção inválida.");
    }
}
main();
