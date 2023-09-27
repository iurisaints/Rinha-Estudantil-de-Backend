"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function adivinharNumero(numeroEscolhido, palpite) {
    if (palpite < numeroEscolhido) {
        return "Maior";
    }
    else if (palpite > numeroEscolhido) {
        return "Menor";
    }
    else {
        return "Acertou!";
    }
}
var numeroSorteado = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;
while (true) {
    var palpite = leitor.questionInt("Qual seu palpite? ");
    var resultado = adivinharNumero(numeroSorteado, palpite);
    console.log("Palpite: ".concat(palpite, ", Resultado: ").concat(resultado));
    if (resultado === "Acertou!") {
        console.log("N\u00FAmero sorteado: ".concat(numeroSorteado));
        break;
    }
    tentativas++;
}
console.log("Tentativas necess\u00E1rias: ".concat(tentativas));
