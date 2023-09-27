"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var tarefas = [];
function removerTarefa() {
    var remover = leitor.questionInt("Qual o índice da tarefa que deseja remover?");
    if (remover > 0) {
        tarefas.splice(remover - 1, 1);
        menu();
    }
    else if (remover == 0) {
        tarefas.splice(0, 1);
        menu();
    }
}
function adicionarTarefa() {
    var tarefa = leitor.question("Qual tarefa deseja adiciona?");
    tarefas.push("".concat(tarefa));
    menu();
}
function listarTarefas() {
    var i = 0;
    if (tarefas.length > 0) {
        console.log("Indice");
        while (i < tarefas.length) {
            console.log("".concat(i, " ---- ").concat(tarefas[i]));
            i++;
        }
        menu();
    }
}
menu();
function menu() {
    var opcao = leitor.questionFloat("Qual opcao deseja?\n1-Adicionar Tarefa\n2-Remover Tarefa\n3-Listar Tarefas\n4-Encerrar");
    switch (opcao) {
        case 1:
            adicionarTarefa();
            break;
        case 2:
            removerTarefa();
            break;
        case 3:
            listarTarefas();
            break;
    }
}
