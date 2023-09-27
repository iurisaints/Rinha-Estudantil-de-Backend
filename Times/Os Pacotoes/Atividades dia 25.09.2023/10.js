"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function ConverterAll(valor, tipoConversao) {
    switch (tipoConversao) {
        case "Km para Mi":
            return valor * 0.62;
        case "Litros para Galoes":
            return valor * 0.264;
        case "Cm para Inches":
            return valor * 0.39;
        default:
            console.log("Escolha inválida, meu bom!");
            return valor;
    }
}
var ValorOf = leitor.questionInt("Qual o valor? ");
var TipoConversao = leitor.question("Escolha o tipo de conversão:\n1 - Km para Milhas\n2 - Litros para Galões\n3 - Cm para Polegadas\n");
var resultado;
switch (TipoConversao) {
    case "1":
        resultado = ConverterAll(ValorOf, "Km para Mi");
        console.log("".concat(ValorOf, " Km \u00E9 igual a ").concat(resultado, " Milhas."));
        break;
    case "2":
        resultado = ConverterAll(ValorOf, "Litros para Galoes");
        console.log("".concat(ValorOf, " Litros \u00E9 igual a ").concat(resultado, " Gal\u00F5es."));
        break;
    case "3":
        resultado = ConverterAll(ValorOf, "Cm para Inches");
        console.log("".concat(ValorOf, " Cm \u00E9 igual a ").concat(resultado, " Polegadas."));
        break;
    default:
        console.log("Escolha inválida, meu bom!");
        break;
}
