"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const leitor = __importStar(require("readline-sync"));
class JogoDaForca {
    constructor(palavraSecreta, tentativasMaximas) {
        this.letrasCorretas = [];
        this.palavraSecreta = palavraSecreta.toUpperCase();
        this.tentativasRestantes = tentativasMaximas;
    }
    tentativa(letra) {
        letra = letra.toUpperCase();
        if (this.palavraSecreta.includes(letra)) {
            this.letrasCorretas.push(letra);
        }
        else {
            this.tentativasRestantes--;
        }
    }
    getPalavraAtual() {
        let palavraAtual = '';
        for (const letra of this.palavraSecreta) {
            if (this.letrasCorretas.includes(letra)) {
                palavraAtual += letra;
            }
            else {
                palavraAtual += '_';
            }
        }
        return palavraAtual;
    }
    isJogoTerminado() {
        return this.tentativasRestantes <= 0 || !this.getPalavraAtual().includes('_');
    }
}
const palavraSecreta = 'GIRASSOL';
const tentativasMaximas = 6;
const jogo = new JogoDaForca(palavraSecreta, tentativasMaximas);
while (!jogo.isJogoTerminado()) {
    console.log(`Palavra atual: ${jogo.getPalavraAtual()}`);
    console.log(`Tentativas restantes: ${JogoDaForca.tentativasRestantes}`);
    const letra = leitor.question('Digite uma letra: ');
}
if (jogo.getPalavraAtual().includes('_')) {
    console.log(`Você perdeu! A palavra era "${palavraSecreta}".`);
}
else {
    console.log(`Parabéns! Você venceu. A palavra era "${palavraSecreta}".`);
}
//# sourceMappingURL=Index.js.map