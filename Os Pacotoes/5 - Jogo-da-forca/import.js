"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forca_1 = require("./forca");
var leitor = require("readline-sync");
var user = new forca_1.forca;
var tentativas = 0;
var palavra = leitor.question("Fale uma palavra:");
user.palavraEscolida(palavra);
while (tentativas < 6) {
    var letra = leitor.question("fale um letra:");
    user.jogado(letra);
    tentativas++;
}
console.log("acabou o jogo");
