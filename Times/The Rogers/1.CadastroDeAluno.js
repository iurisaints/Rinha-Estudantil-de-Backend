"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.notas = [];
        this.nome = nome;
    }
    Aluno.prototype.adicionarNota = function (nota) {
        if (nota < 0 || nota > 10) {
            throw new Error("Alguma das notas inseridas foi invalida! A nota deve ser um numero positivo entre 0 e 10.");
        }
        else {
            this.notas.push(nota);
        }
    };
    Aluno.prototype.calcularMedia = function () {
        var soma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            var nota = this.notas[i];
            soma += nota;
        }
        var media = soma / this.notas.length;
        console.log("\nA m\u00E9dia das notas \u00E9: ".concat(media.toFixed(2)));
        return media;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
