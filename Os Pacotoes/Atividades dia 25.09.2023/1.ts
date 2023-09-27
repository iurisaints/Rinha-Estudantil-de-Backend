import * as leitor from "readline-sync"

function calcular():void{
    
    let ano = leitor.questionInt("QUal o respectivo ano de nascimento?")
    const idade = (2023 - ano)
    console.log(`A pessoa nascida no ano de ${ano}, atualmente terá ${idade} anos`)
    menu()
}
menu()
function menu():void{
    const opcao = leitor.questionInt("Qual opcao deseja?\n1-Calcular nova idade\n2-Encerrar")
    switch(opcao){
        case 1:
            calcular()
            break
        case 2:
            break
    }
}

