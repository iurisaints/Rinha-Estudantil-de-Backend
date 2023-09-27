"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function main() {
    console.log("Bem-vindo ao Gerador de Números Aleatórios!");
    var min = parseInt(readline.question("Digite o valor mínimo do intervalo: "));
    var max = parseInt(readline.question("Digite o valor máximo do intervalo: "));
    if (isNaN(min) || isNaN(max)) {
        console.log("Por favor, insira valores numéricos válidos.");
        return;
    }
    if (min >= max) {
        console.log("O valor mínimo deve ser menor que o valor máximo.");
        return;
    }
    var numeroAleatorio = gerarNumeroAleatorio(min, max);
    console.log("O n\u00FAmero aleat\u00F3rio gerado entre ".concat(min, " e ").concat(max, " \u00E9: ").concat(numeroAleatorio));
}
main();
