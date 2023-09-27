"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leia = require("readline-sync");
var atividade2_1 = require("./atividade2");
var continuar = "";
var menu = true;
var aluno = new atividade2_1.Aluno("", 1, 1, 1, 1);
var alunos = [];
var ID = -1;
while (menu) {
    console.clear();
    console.log("\n     -Menu lendario part two");
    console.log("1- Cadastrar aluno(a)");
    console.log("2- Mostrar media");
    console.log("3- Mostrar informacoes gerais");
    console.log("4- Selecionar aluno(a)");
    console.log("5- Mostrar alunos(as) cadastrados(as)");
    console.log("6- Sair");
    console.log("ID selecionado: ".concat(ID));
    var resposta = leia.questionInt("\nR: ");
    switch (resposta) {
        case 1:
            console.clear();
            CadastrarAluno();
            continuar = leia.question("\nDigite qualquer tecla para continuar... ");
            break;
        case 2:
            console.clear();
            if (ID == -1) {
                console.log("\nCadastre o(a) aluno(a) primeiro!");
            }
            else {
                console.log("\nMedia do(a) aluno(a) ".concat(alunos[ID].getNome(), ": ").concat(alunos[ID].getMediaNota()));
            }
            continuar = leia.question("\nDigite qualquer tecla para continuar... ");
            break;
        case 3:
            console.clear();
            if (ID == -1) {
                console.log("\nCadastre o(a) aluno(a) primeiro!");
            }
            else {
                MostrarInformacoes();
            }
            continuar = leia.question("\nDigite qualquer tecla para continuar... ");
            break;
        case 4:
            console.clear();
            var pergunta = leia.questionInt("\nQual o ID do aluno?\nR: ");
            if (alunos[pergunta] == null || undefined) {
                console.log("Aluno inexistente!");
            }
            else {
                ID = pergunta;
                console.log("\nID selecionado com sucesso!");
            }
            continuar = leia.question("\nDigite qualquer tecla para continuar... ");
            break;
        case 5:
            console.clear();
            if (ID == -1) {
                console.log("\nCadastre o(a) aluno(a) primeiro!");
            }
            else {
                MostrarCadastros();
            }
            continuar = leia.question("\nDigite qualquer tecla para continuar... ");
            break;
        case 6:
            console.clear();
            menu = false;
            console.log("\nSayonara");
            break;
        default:
            console.clear();
            console.log("Escolha uma das opcoes dadas!");
            continuar = leia.question("\nDigite qualquer tecla para continuar... ");
            break;
    }
}
function CadastrarAluno() {
    var nome = leia.question("\nQual o nome do(a) aluno(a)?\nR: ");
    console.clear();
    var idade = leia.questionInt("\nQual a idade do(a) aluno(a)?\nR: ");
    console.clear();
    var nota1 = leia.questionInt("\nQual a nota da primeira avaliacao?\nR: ");
    console.log("");
    var nota2 = leia.questionInt("\nQual a nota da segunda avaliacao?\nR: ");
    console.log("");
    var nota3 = leia.questionInt("\nQual a nota da terceira avaliacao?\nR: ");
    console.clear();
    aluno = new atividade2_1.Aluno(nome, idade, nota1, nota2, nota3);
    ID++;
    alunos.push(aluno);
    console.log("\nAluno(a) ".concat(aluno.getNome(), " cadastrado(a)!"));
    console.log("ID do aluno(a) criado: ".concat(ID));
}
function MostrarInformacoes() {
    console.log("\nNome aluno(a): ".concat(alunos[ID].getNome()));
    console.log("Idade: ".concat(alunos[ID].getIdade()));
    console.log("ID do aluno(a): ".concat(ID));
    console.log("\nNotas:");
    console.log("\n-Nota 1: ".concat(alunos[ID].nota1));
    console.log("-Nota 2: ".concat(alunos[ID].nota2));
    console.log("-Nota 3: ".concat(alunos[ID].nota3));
}
function MostrarCadastros() {
    for (var i = 0; i < alunos.length; i++) {
        console.log("Aluno ".concat(i + 1, ":"));
        console.log("Nome: ".concat(alunos[i].getNome(), ". ID: ").concat(i, ".\n"));
    }
}
