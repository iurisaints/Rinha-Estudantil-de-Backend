// Cadastro de Alunos:
// Crie um programa em que seja possível cadastrar alunos, armazenando nome, 
// idade e 3 notas. Em seguida, exiba a média das notas dos alunos cadastrados.

import * as leia from 'readline-sync'
import { Aluno } from './atividade2'

let continuar: string = ""
let menu: boolean = true
let aluno= new Aluno("", 1, 1, 1, 1)
let alunos: Array<Aluno>=[]
let ID: number = -1

while(menu){
    console.clear()
    console.log(`\n     -Menu lendario part two`)
    console.log(`1- Cadastrar aluno(a)`)
    console.log(`2- Mostrar media`)
    console.log(`3- Mostrar informacoes gerais`)
    console.log(`4- Selecionar aluno(a)`)
    console.log(`5- Mostrar alunos(as) cadastrados(as)`)
    console.log(`6- Sair`)
    console.log(`ID selecionado: ${ID}`)
    let resposta: number = leia.questionInt(`\nR: `)

    switch(resposta){
        case 1:
            console.clear()
            CadastrarAluno()
            continuar = leia.question(`\nDigite qualquer tecla para continuar... `)
        break
        case 2:
            console.clear()
            if(ID==-1){
                console.log(`\nCadastre o(a) aluno(a) primeiro!`)
            } else {
            console.log(`\nMedia do(a) aluno(a) ${alunos[ID].getNome()}: ${alunos[ID].getMediaNota()}`)
            }
            continuar = leia.question(`\nDigite qualquer tecla para continuar... `)
        break
        case 3:
            console.clear()
            if(ID==-1){
                console.log(`\nCadastre o(a) aluno(a) primeiro!`)
            } else {
            MostrarInformacoes()
            }
            continuar = leia.question(`\nDigite qualquer tecla para continuar... `)
        break
        case 4:
            console.clear()
            let pergunta: number = leia.questionInt(`\nQual o ID do aluno?\nR: `)
            if(alunos[pergunta]==null || undefined){
                console.log(`Aluno inexistente!`)
            } else {
                ID=pergunta
                console.log(`\nID selecionado com sucesso!`)
            }
            continuar = leia.question(`\nDigite qualquer tecla para continuar... `)
        break
        case 5:
            console.clear()
            if(ID==-1){
                console.log(`\nCadastre o(a) aluno(a) primeiro!`)
            } else {
            MostrarCadastros()
            }
            continuar = leia.question(`\nDigite qualquer tecla para continuar... `)
        break
        case 6:
            console.clear()
            menu=false
            console.log(`\nSayonara`)
        break
        default:
            console.clear()
            console.log(`Escolha uma das opcoes dadas!`)
            continuar = leia.question(`\nDigite qualquer tecla para continuar... `)
        break
    }
}

function CadastrarAluno(): void{
    let nome: string = leia.question(`\nQual o nome do(a) aluno(a)?\nR: `)
    console.clear()
    let idade: number = leia.questionInt(`\nQual a idade do(a) aluno(a)?\nR: `)
    console.clear()
    let nota1: number = leia.questionInt(`\nQual a nota da primeira avaliacao?\nR: `)
    console.log(``)
    let nota2: number = leia.questionInt(`\nQual a nota da segunda avaliacao?\nR: `)
    console.log(``)
    let nota3: number = leia.questionInt(`\nQual a nota da terceira avaliacao?\nR: `)
    console.clear()
    aluno = new Aluno(nome, idade, nota1, nota2, nota3)
    ID++
    alunos.push(aluno)
    console.log(`\nAluno(a) ${aluno.getNome()} cadastrado(a)!`)
    console.log(`ID do aluno(a) criado: ${ID}`)
}

function MostrarInformacoes(): void{
    console.log(`\nNome aluno(a): ${alunos[ID].getNome()}`)
    console.log(`Idade: ${alunos[ID].getIdade()}`)
    console.log(`ID do aluno(a): ${ID}`)
    console.log(`\nNotas:`)
    console.log(`\n-Nota 1: ${alunos[ID].nota1}`)
    console.log(`-Nota 2: ${alunos[ID].nota2}`)
    console.log(`-Nota 3: ${alunos[ID].nota3}`)
}

function MostrarCadastros(): void{
    for(let i = 0; i<alunos.length; i++){
        console.log(`Aluno ${i+1}:`)
        console.log(`Nome: ${alunos[i].getNome()}. ID: ${i}.\n`)
    }
}