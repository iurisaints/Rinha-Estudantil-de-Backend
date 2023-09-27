// Cadastro de Alunos:
// Crie um programa em que seja possível cadastrar alunos, armazenando nome, 
// idade e 3 notas. Em seguida, exiba a média das notas dos alunos cadastrados.

export class Aluno{
    nome: string
    idade: number
    nota1: number
    nota2: number
    nota3: number

    constructor(nome: string, idade: number, nota1: number, nota2: number, nota3: number){
        this.nome=nome
        this.idade=idade
        this.nota1=nota1
        this.nota2=nota2
        this.nota3=nota3
    }

    getMediaNota(): number{
        return (this.nota1+this.nota2+this.nota3)/3
    }

    getNome(): string{
        return this.nome
    }

    getIdade(): number{
        return this.idade
    }

    mostrarNotas(): void{
        console.log(`Nota 1: ${this.nota1}`)
        console.log(`Nota 2: ${this.nota2}`)
        console.log(`Nota 3: ${this.nota3}`)
    }
}