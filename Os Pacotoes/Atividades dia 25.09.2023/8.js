"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function CalcIMC(pesoKG, alturaM) {
    return pesoKG / (alturaM * alturaM);
}
var pesoKG = leitor.questionFloat("Qual seu peso?");
var alturaM = leitor.questionFloat("Qual sua altura?");
var imc = CalcIMC(pesoKG, alturaM);
console.log("Seu IMC é: ", imc.toFixed(2));
