import * as leitor from "readline-sync"


function contarPalavras():void{
    
    let mensagem = leitor.question("Escreva\n")
    let palavras:string[]= mensagem.split(" ")
    console.log(`Existem ${palavras.length} palavras na mensagem`)
    menu()
}
menu()
function menu():void{
    const opcao = leitor.questionInt("Qual opcao deseja?\n1-Contar Palavras de texto ou frase\n2-Encerrar")
    switch(opcao){
        case 1:
            contarPalavras()
            break
        case 2:
            break
    }
}

