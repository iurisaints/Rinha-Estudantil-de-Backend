import * as leitor from 'readline-sync';

const NumeroAleatório: number = Math.floor(Math.random())

const primeiraTentativa = leitor.questionInt("Adivinhe o Numero: ")

if(NumeroAleatório == primeiraTentativa){
    console.log("Parabéns Você Acertou em cheio!")
} else if(NumeroAleatório < primeiraTentativa){
    console.log("Não foi desta vez! Tente Novamente.")
    console.log(`Uma Dica: O número é maior do que ${primeiraTentativa}.`)
    const segundaTentativa = leitor.questionInt("Adivinhe o Numero: ")
    if(NumeroAleatório == segundaTentativa){
        console.log("Parabéns Você Acertou!")
    } else {
        console.log("Infelizmente, você perdeu!")
        console.log(`O número aleatório é ${NumeroAleatório}`)
    }
} else {
    console.log("Não foi desta vez! Tente Novamente.")
    console.log(`Uma Dica: O número é menor do que ${primeiraTentativa}.`)
    const segundaTentativa = leitor.questionInt("Adivinhe o Numero: ")
    if(NumeroAleatório == segundaTentativa){
        console.log("Parabéns Você Acertou!")
    } else {
        console.log("Infelizmente, você perdeu!")
        console.log(`O número aleatório é ${NumeroAleatório}`)
    }
}

