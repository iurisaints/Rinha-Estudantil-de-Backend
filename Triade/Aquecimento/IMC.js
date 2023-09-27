"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function main() {
    console.log("Calculadora de Índice de Massa Corporal (IMC)");
    var peso = parseFloat(readline.question("Digite seu peso (em quilogramas): "));
    var altura = parseFloat(readline.question("Digite sua altura (em metros): "));
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Por favor, insira valores numéricos válidos para peso e altura.");
        return;
    }
    var imc = calcularIMC(peso, altura);
    console.log("Seu IMC \u00E9: ".concat(imc.toFixed(2)));
}
main();
