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
const NumeroAleatório = Math.floor(Math.random());
const primeiraTentativa = leitor.questionInt("Adivinhe o Numero: ");
if (NumeroAleatório == primeiraTentativa) {
    console.log("Parabéns Você Acertou em cheio!");
}
else if (NumeroAleatório < primeiraTentativa) {
    console.log("Não foi desta vez! Tente Novamente.");
    console.log(`Uma Dica: O número é maior do que ${primeiraTentativa}.`);
    const segundaTentativa = leitor.questionInt("Adivinhe o Numero: ");
    if (NumeroAleatório == segundaTentativa) {
        console.log("Parabéns Você Acertou!");
    }
    else {
        console.log("Infelizmente, você perdeu!");
        console.log(`O número aleatório é ${NumeroAleatório}`);
    }
}
else {
    console.log("Não foi desta vez! Tente Novamente.");
    console.log(`Uma Dica: O número é menor do que ${primeiraTentativa}.`);
    const segundaTentativa = leitor.questionInt("Adivinhe o Numero: ");
    if (NumeroAleatório == segundaTentativa) {
        console.log("Parabéns Você Acertou!");
    }
    else {
        console.log("Infelizmente, você perdeu!");
        console.log(`O número aleatório é ${NumeroAleatório}`);
    }
}
//# sourceMappingURL=Index.js.map