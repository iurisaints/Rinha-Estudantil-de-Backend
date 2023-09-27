/* Crie um programa em que seja possível cadastrar alunos, armazenando nome, 
idade e 3 notas. Em seguida, exiba a média das notas dos alunos cadastrados. */

import * as leitor from 'readline-sync';
class Aluno {
    constructor(
        public nome: string,
        public idade: number,
        public notas: number[]
    ) {}
    Media(): number {
        const soma = this.notas.reduce((total, nota) => total + nota, 0)
        return soma / this.notas.length
    }
}

function CadastroAluno(): Aluno {
    const nomeAluno = leitor.question("Informe o nome do aluno: ")
    const idadeAluno = leitor.questionInt("Informe a idade do aluno: ")
    const Notas: number[] = [];
    for (let i = 0; i < 3; i++) {
        const Nota = leitor.questionFloat(`OBS: nota max. = 10 \n Informe a nota ${i + 1} do aluno: \n `)
        if(Nota <= 10){
            Notas.push(Nota)
        } else {
            console.log("Nota inválida.Tente novamente.")
            break
        }
       
    }

    return new Aluno(nomeAluno, idadeAluno, Notas)
}

function main() {
    const Alunos: Aluno[] = []
    
    while (true) {
        const aluno = CadastroAluno()
        Alunos.push(aluno)

        const cadastrarNovamente = leitor.questionInt("Cadastrar aluno? \n1-Sim  \n2-Nao \n ")
        if(cadastrarNovamente !== 1) {
            break
        } else {
            console.log("Opção inválida. Digite 1 ou 2 ")
        }
    }

    console.log("Média das notas dos alunos cadastrados: ")
    for (const aluno of Alunos) {
        const media = aluno.Media()
        console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`)
    }
}

main()