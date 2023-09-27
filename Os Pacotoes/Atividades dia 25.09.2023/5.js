"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var numeros = [];
function adicionarNumeros() {
    var numero = leitor.questionFloat("Qual numero deseja adicionar?");
    numeros.push(numero);
    menu();
}
function descrescente() {
    if (numeros.length > 1) {
        console.log("Array ordenada em decrescente ".concat(numeros.sort(function (n1, n2) { return n2 - n1; })));
        menu();
    }
    else {
        console.log("Nao ha 2 elemento ou mais para ordenar");
        menu();
    }
}
function crescente() {
    if (numeros.length > 1) {
        console.log("Array ordenada em crescente ".concat(numeros.sort(function (n1, n2) { return n1 - n2; })));
        menu();
    }
    else {
        console.log("Nao ha 2 elemento ou mais para ordenar");
        menu();
    }
}
menu();
function menu() {
    var opcao = leitor.questionFloat("Qual opcao deseja?\n1-Adicionar Números para ordenar \n2-Ver a ordem crescente dos numeros\n3-Ver a ordem descrescente dos numeros\n4-Encerrar ");
    switch (opcao) {
        case 1:
            adicionarNumeros();
            break;
        case 2:
            crescente();
            break;
        case 3:
            descrescente();
            break;
        case 4:
            break;
    }
}
