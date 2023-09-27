"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function calcularCelsius() {
    var grausC = leitor.questionInt("Você quer saber o equivalente de quantos graus Celsius?");
    var grausF = ((grausC * 1.8) + 32);
    console.log("".concat(grausC, "\u00B0 Celsius equivalem a ").concat(grausF, "\u00B0 Farenheit"));
    menu();
}
function calcularFarenheit() {
    var grausFa = leitor.questionFloat("Você quer saber o equivalente de quantos graus Farenheit?");
    var grausCe = ((grausFa - 32) / 1.8);
    console.log("".concat(grausFa, "\u00B0 Farenheit equivalem a ").concat(grausCe, "\u00B0 graus Celsius"));
    menu();
}
menu();
function menu() {
    var opcao = leitor.questionFloat("Qual opcao deseja?\n1-Converter Celsius para Farenheit\n2-Converter Farenheit para Celsius\n3-Encerrar");
    switch (opcao) {
        case 1:
            calcularCelsius();
            break;
        case 2:
            calcularFarenheit();
            break;
        case 3:
            break;
    }
}
