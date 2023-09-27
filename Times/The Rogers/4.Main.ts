import { ContaBancaria } from "./4.SimuladorDeBanco"
import * as rl from "readline-sync"

const contas: ContaBancaria[] = []

let op: number = 99

while (op != 0) {
    op = rl.questionInt(`"Escolha a opção:\n1 - Criar Conta\n2 - Depositar\n3 - Sacar\n4 - Extrato\n5 - Sair\n"`)
    switch (op) {
        case 1:
            const nomeConta = rl.question(`Digite o nome do proprierário da conta: `)
            const numeroConta = rl.question(`Digite o numero da conta: `)
            const novaConta = new ContaBancaria(numeroConta)
            contas.push(novaConta)
            console.log(`A conta número ${numeroConta} foi criada com sucesso!\n`)
            break
        case 2:
            const contaDeposito = rl.question("Digite o número da conta: ")
            const contaEncontrarDeposito = contas.find(conta => conta.numeroConta === contaDeposito)
            if (contaEncontrarDeposito) {
                const deposito = rl.questionFloat("Ok, conta encontrada, digite o valor a depositar: ")
                contaEncontrarDeposito.depositar(deposito)
            } else {
                console.log("Conta não encontrada :/\n")
            }
            break
        case 3:
            const contaSaque = rl.question("Digite o número da conta: ")
            const contaEncontrarSaque = contas.find(conta => conta.numeroConta === contaSaque)
            if (contaEncontrarSaque) {
                const saque = rl.questionFloat("Conta encontrada! Digite o valor do saque: ")
                contaEncontrarSaque.sacar(saque)
            } else {
                console.log("Conta não encontrada :/\n")
            }
            break
        case 4:
            const contaExtrato = rl.question("Digite o número da conta: ")
            const contaEncontrarExtrato = contas.find(conta => conta.numeroConta === contaExtrato)
            if (contaEncontrarExtrato) {
                contaEncontrarExtrato.verificarSaldo()
            } else {
                console.log("Conta não encontrada :/\n")
            }
            break
        case 5:
            console.log("Saindo...")
            op = 0
            break
        default:
            console.log(`Operação inválida!\n`)



    }
}