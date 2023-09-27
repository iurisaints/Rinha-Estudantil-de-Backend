"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function main() {
    
    console.log("Tente adivinhar o número escolhido pelo computador.");
    console.log("Você tem até 6 tentativas.");
    var numeroAleatorio = gerarNumeroAleatorio(1, 100);
    var tentativas = 0;
    while (tentativas < 6) {
        var palpite = parseInt(readline.question("Tentativa ".concat(tentativas + 1, ": Digite um n\u00FAmero entre 1 e 100: ")));
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, insira um número válido entre 1 e 100.");
            continue;
        }
        if (palpite < numeroAleatorio) {
            console.log("O número é maior.");
        }
        else if (palpite > numeroAleatorio) {
            console.log("O número é menor.");
        }
        else {
            console.log("Parab\u00E9ns! Voc\u00EA acertou. O n\u00FAmero era ".concat(numeroAleatorio, "."));
            return;
        }
        tentativas++;
    }
    console.log("Suas tentativas acabaram. O número correto era " + numeroAleatorio + ".");
}
main();
