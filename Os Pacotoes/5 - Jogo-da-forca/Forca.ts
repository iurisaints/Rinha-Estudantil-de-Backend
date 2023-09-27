//Implemente o clássico jogo da forca em que um jogador escolhe uma palavra secreta e outro jogador tenta adivinhar as letras. Limite o número de tentativas.

export class forca {

    jogo: string[] = []
    emJogo: string[] = []
    i: number = 0
    tentativas: number = 0
    palavraEscolida(palavra: string) {
        this.jogo = palavra.split("");
    }

    jogado(letra: string) {
        for (this.i = 0; this.i < this.jogo.length; this.i++) {
            if (this.jogo[this.i] === letra) {
                this.emJogo[this.i] = letra
            } 
        }
        console.log(this.emJogo)
    }
}