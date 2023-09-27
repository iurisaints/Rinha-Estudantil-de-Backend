"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function calcular() {
    var ano = leitor.questionInt("QUal o respectivo ano de nascimento?");
    var idade = (2023 - ano);
    console.log("A pessoa nascida no ano de ".concat(ano, ", atualmente ter\u00E1 ").concat(idade, " anos"));
    menu();
}
menu();
function menu() {
    var opcao = leitor.questionInt("Qual opcao deseja?\n1-Calcular nova idade\n2-Encerrar");
    switch (opcao) {
        case 1:
            calcular();
            break;
        case 2:
            break;
    }
}
