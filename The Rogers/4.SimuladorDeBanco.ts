// Crie um sistema simples de banco em que os clientes possam abrir contas, depositar e sacar dinheiro.
// Mantenha o saldo atualizado e permita consultar o saldo.

export class ContaBancaria {
    numeroConta: string
    saldo: number
    constructor(numeroConta: string) {
        this.numeroConta = numeroConta
        this.saldo = 0
    }
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor
            console.log(`Você depositou R$ ${valor.toFixed(2)}\n`)
        } else {
            console.log(`O valor depositado deve ser maior que zero.\n`)
        }
    }
    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Você sacou R$ ${valor.toFixed(2)}\n`)
        } else {
            console.log(`Saldo insuficiente!\n`)
        }
    }
    verificarSaldo(): void {
        console.log(`Seu saldo atual é de R$ ${this.saldo.toFixed(2)}\n`)
    }
}