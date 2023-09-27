import { Aluno } from "./1.CadastroDeAluno"
import * as leitor from "readline-sync"

const nome: string = leitor.question(`Digite o nome do aluno: `)

const novoAluno = new Aluno(nome)

const notas: Array<number> = []

const nota1: number = leitor.questionInt(`Digite a primeira nota: `)
notas.push(nota1)

const nota2: number = leitor.questionInt(`Digite a segunda nota: `)
notas.push(nota2)

const nota3: number = leitor.questionInt(`Digite a terceira nota: `)
notas.push(nota3)

for (let i = 0; i < notas.length; i++) {
    novoAluno.adicionarNota(notas[i])
}

novoAluno.calcularMedia()