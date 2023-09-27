import * as leitor from "readline-sync";

class JogoDaForca {
private palavraSecreta: string;
private letrasCorretas: string[] = [];
private tentativasRestantes: number;
    static tentativasRestantes: any;
    constructor(palavraSecreta: string, tentativasMaximas: number) {
        this.palavraSecreta = palavraSecreta.toUpperCase();
        this.tentativasRestantes = tentativasMaximas;
    }

    tentativa(letra: string): void {
    letra = letra.toUpperCase();

        if (this.palavraSecreta.includes(letra)) {
            this.letrasCorretas.push(letra);
        } else {
        this.tentativasRestantes--;
        }
    }

    getPalavraAtual(): string {
    let palavraAtual = '';


    for (const letra of this.palavraSecreta) {
        if (this.letrasCorretas.includes(letra)) {
            palavraAtual += letra;
        } else {
            palavraAtual += '_';
        }
    }
        return palavraAtual;
}

    isJogoTerminado(): boolean {
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
} else {
console.log(`Parabéns! Você venceu. A palavra era "${palavraSecreta}".`);
}