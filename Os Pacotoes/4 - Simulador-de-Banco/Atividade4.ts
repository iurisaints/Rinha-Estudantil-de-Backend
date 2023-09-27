//Simulador de Banco
//Crie um sistema simples de banco em que os clientes possam abrir contas, 
//depositar e sacar dinheiro. Mantenha o saldo atualizado e permita consultar o saldo.
import * as leitor from "readline-sync"
class ContaBancaria {
    public saldo: number = 0;

    constructor(public nomeCliente: string) {}

    depositar(): void {
        const valor = parseFloat(leitor.question(`Olá, ${this.nomeCliente}! Quanto você deseja depositar?\n `));
        if (!isNaN(valor) && valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    sacar(): void {
        const valor = parseFloat(leitor.question(`Olá, ${this.nomeCliente}! Quanto você deseja sacar? \n`));
        if (!isNaN(valor) && valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente ou valor de saque inválido.\n");
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo da conta de ${this.nomeCliente}: R$${this.saldo.toFixed(2)}`);
    }
}


const nomeCliente = leitor.question("Por favor, digite o seu nome:\n ");
const cliente = new ContaBancaria(nomeCliente);

while (true) {
    const escolha = leitor.question(`Olá, ${cliente.nomeCliente}! Escolha uma opção:\n1 - Depositar\n2 - Sacar\n3 - Consultar Saldo\n4 - Sair\n `);
    switch (escolha) {
        case "1":
            cliente.depositar();
            break;
        case "2":
            cliente.sacar();
            break;
        case "3":
            cliente.consultarSaldo();
            break;
        case "4":
            console.log("Obrigado por usar nosso serviço. Adeus!\n");
            process.exit(0);
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.\n");
    }
}