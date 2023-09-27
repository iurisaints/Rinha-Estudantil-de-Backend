//Desenvolva um jogo em que o computador escolhe um número aleatório e o 
//jogador deve adivinhar qual é. 
//Forneça dicas para o jogador, como "maior" ou "menor", até que ele acerte o número.

import * as leitor from "readline-sync"

function adivinharNumero(numeroEscolhido: number, palpite: number): string {
    if (palpite < numeroEscolhido) {
        return "Maior";
    } else if (palpite > numeroEscolhido) {
        return "Menor";
    } else {
        return "Acertou!";
    }
}

const numeroSorteado = Math.floor(Math.random() * 100) + 1; 
let tentativas = 0;

while (true) {
    const palpite = leitor.questionInt("Qual seu palpite? ") 
    const resultado = adivinharNumero(numeroSorteado, palpite);
    console.log(`Palpite: ${palpite}, Resultado: ${resultado}`);
    
    if (resultado === "Acertou!") {
        console.log(`Número sorteado: ${numeroSorteado}`);
        break;
    }
    
    tentativas++;
}

console.log(`Tentativas necessárias: ${tentativas}`);   