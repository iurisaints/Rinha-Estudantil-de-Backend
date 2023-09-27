import * as leitor from "readline-sync"

let numeros:number[]=[]

function adicionarNumeros():void{
    
    let numero = leitor.questionFloat("Qual numero deseja adicionar?")
    numeros.push(numero)
    menu()
}

function descrescente():void{
    if(numeros.length>1){
        console.log(`Array ordenada em decrescente ${numeros.sort((n1,n2) => n2 - n1)}`)
    menu()
    }else{
        console.log("Nao ha 2 elementos ou mais para ordenar")
        menu()
    }
   
}
function crescente():void{
    if(numeros.length>1){
        console.log(`Array ordenada em crescente ${numeros.sort((n1,n2) => n1 - n2)}`)
    menu()
    }else{
        console.log("Nao ha 2 elemento ou mais para ordenar")
        menu()
    }
}


menu()
function menu():void{
    const opcao = leitor.questionFloat("Qual opcao deseja?\n1-Adicionar Números para ordenar \n2-Ver a ordem crescente dos numeros\n3-Ver a ordem descrescente dos numeros\n4-Encerrar ")
    switch(opcao){
        case 1:
            adicionarNumeros()
            break
        case 2:
            crescente()
            break
        case 3:
            descrescente()
            break
        case 4:
            break
    }
}

