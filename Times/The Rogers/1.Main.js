"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_CadastroDeAluno_1 = require("./1.CadastroDeAluno");
var leitor = require("readline-sync");
var nome = leitor.question("Digite o nome do aluno: ");
var novoAluno = new _1_CadastroDeAluno_1.Aluno(nome);
var notas = [];
var nota1 = leitor.questionInt("Digite a primeira nota: ");
notas.push(nota1);
var nota2 = leitor.questionInt("Digite a segunda nota: ");
notas.push(nota2);
var nota3 = leitor.questionInt("Digite a terceira nota: ");
notas.push(nota3);
for (var i = 0; i < notas.length; i++) {
    novoAluno.adicionarNota(notas[i]);
}
novoAluno.calcularMedia();
