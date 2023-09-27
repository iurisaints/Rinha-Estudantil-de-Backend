import * as leitor from "readline-sync"

let tarefas:string[]= []

function removerTarefa():void{
    let remover = leitor.questionInt("Qual o índice da tarefa que deseja remover?")
    if(remover>0){
    tarefas.splice(remover-1,1)
    menu()}else if(remover == 0){
        tarefas.splice(0,1)
    menu()
    }
}

function adicionarTarefa():void{
    
    let tarefa = leitor.question("Qual tarefa deseja adiciona?")
    tarefas.push(`${tarefa}`)
    menu()
}

function listarTarefas():void{
    let i = 0
    if(tarefas.length>0){

    console.log("Indice")
    while(i<tarefas.length){
        console.log(`${i} ---- ${tarefas[i]}`)
        i++
    }
menu()}
}

menu()
function menu():void{
    const opcao = leitor.questionFloat("Qual opcao deseja?\n1-Adicionar Tarefa\n2-Remover Tarefa\n3-Listar Tarefas\n4-Encerrar")
    switch(opcao){
        case 1:
            adicionarTarefa()
            break
        case 2:
            removerTarefa()
            break
        case 3:
            listarTarefas()
            break
    }
}

