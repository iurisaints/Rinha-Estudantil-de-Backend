import * as leitor from "readline-sync"

function calcularCelsius():void{
    
    let grausC = leitor.questionInt("Você quer saber o equivalente de quantos graus Celsius?")
    const grausF = ((grausC * 1.8)+32)
    console.log(`${grausC}° Celsius equivalem a ${grausF}° Farenheit`)
    menu()
}

function calcularFarenheit():void{
    
    let grausFa = leitor.questionFloat("Você quer saber o equivalente de quantos graus Farenheit?")
    const grausCe = ((grausFa - 32)/1.8)
    console.log(`${grausFa}° Farenheit equivalem a ${grausCe}° graus Celsius`)
    menu()
}


menu()
function menu():void{
    const opcao = leitor.questionFloat("Qual opcao deseja?\n1-Converter Celsius para Farenheit\n2-Converter Farenheit para Celsius\n3-Encerrar")
    switch(opcao){
        case 1:
            calcularCelsius()
            break
        case 2:
            calcularFarenheit()
            break
        case 3:
            break
    }
}

