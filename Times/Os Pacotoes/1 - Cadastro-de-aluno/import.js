"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CadastroDeAluno_1 = require("./CadastroDeAluno");
var leitor = require("readline-sync");
var opcao = 10;
var lista = 0;
var user = new CadastroDeAluno_1.cadastro;
while (opcao != 0) {
    opcao = leitor.questionInt("1-Cadastrar\n2-Listar media\n0-Sair\n");
    switch (opcao) {
        case 1:
            var nome = leitor.question("Nome do aluno:");
            var idade = leitor.questionInt("idade do aluno:");
            var nota1 = leitor.questionInt("1 nota do aluno:");
            var nota2 = leitor.questionInt("2 nota do aluno:");
            var nota3 = leitor.questionInt("3 nota do aluno:");
            // atribuindo as informações
            var media = (nota1 + nota2 + nota3) / 3;
            //fazendo a media
            user.cadastrar(nome, idade, media);
            lista++;
            //lista++ para quando for listar saber que já tem pelo menos uma na lista
            break;
        case 2:
            if (lista == 0) {
                console.log("\nSem aluno cadastrado\n");
                //caso não tenha nada na lista
            }
            else if (lista > 0) {
                user.listarNotas();
                //chamanod para listar a lista
            }
            break;
    }
}
