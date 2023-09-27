// Implemente um programa que converta valores entre diferentes moedas. 
// O usuário deve inserir o valor, a moeda de origem e a moeda de destino. 
// As moedas deverão ser: Won sul-coreano, Dirham marroquino, Dólar e Real.

const leitor = require("readline-sync")

let resultado = 0

const valor = leitor.questionFloat(`Digite o valor que deseja converter: `)
if (valor < 0) {
    throw new Error(`O valor deve ser um numero positivo!`)
}
const moedaOrigem = leitor.question(`Digite a moeda que voce deseja converter: (Won sul-coreano, Dirham marroquino, Dolar ou Real.): `)
if (moedaOrigem === `Won sul-coreano` || moedaOrigem === `Dirham marroquino` || moedaOrigem === `Dolar` || moedaOrigem === `Real`) {

    const moedaDestino = leitor.question(`Digite a moeda de destino: (Won sul-coreano, Dirham marroquino, Dolar e Real.): `)
    if (moedaDestino === `Won sul-coreano` || moedaDestino === `Dirham marroquino` || moedaDestino === `Dolar` || moedaDestino === `Real`) {
        if (moedaOrigem === moedaDestino) {
            throw new Error(`Não é possível converter uma moeda para ela mesma!`)
        }
        if (moedaOrigem == "Won sul-coreano" && moedaDestino == "Dirham marroquino") {
            resultado = valor * 0.0076
        } else if (moedaOrigem == "Dirham marroquino" && moedaDestino == "Won sul-coreano") {
            resultado = valor * 131.52
        } else if (moedaOrigem == "Dolar" && moedaDestino == "Real") {
            resultado = valor * 4.99
        } else if (moedaOrigem == "Real" && moedaDestino == "Dolar") {
            resultado = valor / 0.20
        } else if (moedaOrigem == "Won sul-coreano" && moedaDestino == "Dolar") {
            resultado = valor * 0.00074
        } else if (moedaOrigem == "Dolar" && moedaDestino == "Won sul-coreano") {
            resultado = valor * 1.352
        } else if (moedaOrigem == "Won sul-coreano" && moedaDestino == "Real") {
            resultado = valor * 0.074
        } else if (moedaOrigem == "Real" && moedaDestino == "Won sul-coreano") {
            resultado = valor * 271.30
        } else if (moedaOrigem == "Dirham marroquino" && moedaDestino == "Wolar") {
            resultado = valor * 0.097
        } else if (moedaOrigem == "Dolar" && moedaDestino == "Dirham marroquino") {
            resultado = valor * 10.27
        } else if (moedaOrigem == "Dirham marroquino" && moedaDestino == "Real") {
            resultado = valor * 0.49
        } else if (moedaOrigem == "Real" && moedaDestino == "Dirham marroquino") {
            resultado = valor * 2.06
        }
    } else {
        throw new Error(`Moeda de destino invalida!`)
    }
} else {
    throw new Error(`Moeda de origem invalida!`)
}

console.log(`\nResultado da conversão: ${resultado.toFixed(2)}`)
