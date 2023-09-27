"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function contarPalavras() {
    var mensagem = leitor.question("Escreva\n");
    var palavras = mensagem.split(" ");
    console.log("Existem ".concat(palavras.length, " palavras na mensagem"));
    menu();
}
menu();
function menu() {
    var opcao = leitor.questionInt("Qual opcao deseja?\n1-Contar Palavras de texto ou frase\n2-Encerrar");
    switch (opcao) {
        case 1:
            contarPalavras();
            break;
        case 2:
            break;
    }
}
