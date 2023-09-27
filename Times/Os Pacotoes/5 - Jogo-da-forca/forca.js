"use strict";
//Implemente o clássico jogo da forca em que um jogador escolhe uma palavra secreta e outro jogador tenta adivinhar as letras. Limite o número de tentativas.
Object.defineProperty(exports, "__esModule", { value: true });
exports.forca = void 0;
var forca = /** @class */ (function () {
    function forca() {
        this.jogo = [];
        this.emJogo = [];
        this.i = 0;
        this.tentativas = 0;
    }
    forca.prototype.palavraEscolida = function (palavra) {
        this.jogo = palavra.split("");
    };
    forca.prototype.jogado = function (letra) {
        for (this.i = 0; this.i < this.jogo.length; this.i++) {
            if (this.jogo[this.i] === letra) {
                this.emJogo[this.i] = letra;
            }
        }
        console.log(this.emJogo);
    };
    return forca;
}());
exports.forca = forca;
