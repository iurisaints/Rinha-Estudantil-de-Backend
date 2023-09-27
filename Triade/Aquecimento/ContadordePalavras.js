"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function contarPalavras(texto) {
    var palavras = texto.split(/\s+/);
    var palavrasFiltradas = palavras.filter(function (palavra) { return palavra !== ''; });
    return palavrasFiltradas.length;
}
function main() {
    rl.question('Eu so quero ser feliz: ', function (texto) {
        var numeroDePalavras = contarPalavras(texto);
        console.log("N\u00FAmero de palavras na frase/texto: ".concat(numeroDePalavras));
        rl.close();
    });
}
main();
