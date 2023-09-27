"use strict";
// Cadastro de Alunos:
// Crie um programa em que seja possível cadastrar alunos, armazenando nome, 
// idade e 3 notas. Em seguida, exiba a média das notas dos alunos cadastrados.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, nota1, nota2, nota3) {
        this.nome = nome;
        this.idade = idade;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    Aluno.prototype.getMediaNota = function () {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    };
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.getIdade = function () {
        return this.idade;
    };
    Aluno.prototype.mostrarNotas = function () {
        console.log("Nota 1: ".concat(this.nota1));
        console.log("Nota 2: ".concat(this.nota2));
        console.log("Nota 3: ".concat(this.nota3));
    };
    return Aluno;
}());
exports.Aluno = Aluno;
