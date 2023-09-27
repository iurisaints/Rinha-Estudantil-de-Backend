export class Aluno {
    nome: string
    notas: Array<number> = []

    constructor(nome: string) {
        this.nome = nome
    }

    adicionarNota(nota: number): void {
        if(nota < 0 || nota > 10) {
            throw new Error(`Alguma das notas inseridas foi invalida! A nota deve ser um numero positivo entre 0 e 10.`)
        } else {
        this.notas.push(nota)
    }
}

    calcularMedia(): number {
        let soma = 0
        for (let i = 0; i < this.notas.length; i++) {
            const nota = this.notas[i]
            soma += nota
        }
        const media = soma / this.notas.length
        console.log(`\nA média das notas é: ${media.toFixed(2)}`)
        return media
    }
}
