"use strict";
//Crie um programa em que seja possível cadastrar alunos, armazenando nome, idade e 3 notas. Em seguida, exiba a média das notas dos alunos cadastrados.
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro = void 0;
var cadastro = /** @class */ (function () {
    function cadastro() {
        this.nomes = [];
        this.idades = [];
        this.notas = [];
    }
    cadastro.prototype.cadastrar = function (nome, idade, media) {
        this.nomes.push(nome);
        this.idades.push(idade);
        this.notas.push(media);
        //colocando as informações no array
    };
    cadastro.prototype.listarNotas = function () {
        var i = 0;
        while (i < this.notas.length) {
            console.log(this.nomes[i], "-", this.notas[i]);
            i++;
        }
        //listando as arrays com while
        console.log("\n");
    };
    return cadastro;
}());
exports.cadastro = cadastro;
