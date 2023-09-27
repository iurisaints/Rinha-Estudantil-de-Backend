"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Simulador de Banco
//Crie um sistema simples de banco em que os clientes possam abrir contas, 
//depositar e sacar dinheiro. Mantenha o saldo atualizado e permita consultar o saldo.
var leitor = require("readline-sync");
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nomeCliente) {
        this.nomeCliente = nomeCliente;
        this.saldo = 0;
    }
    ContaBancaria.prototype.depositar = function () {
        var valor = parseFloat(leitor.question("Ol\u00E1, ".concat(this.nomeCliente, "! Quanto voc\u00EA deseja depositar?\n ")));
        if (!isNaN(valor) && valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado com sucesso."));
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    };
    ContaBancaria.prototype.sacar = function () {
        var valor = parseFloat(leitor.question("Ol\u00E1, ".concat(this.nomeCliente, "! Quanto voc\u00EA deseja sacar? \n")));
        if (!isNaN(valor) && valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor.toFixed(2), " realizado com sucesso."));
        }
        else {
            console.log("Saldo insuficiente ou valor de saque inválido.\n");
        }
    };
    ContaBancaria.prototype.consultarSaldo = function () {
        console.log("Saldo da conta de ".concat(this.nomeCliente, ": R$").concat(this.saldo.toFixed(2)));
    };
    return ContaBancaria;
}());
var nomeCliente = leitor.question("Por favor, digite o seu nome:\n ");
var cliente = new ContaBancaria(nomeCliente);
while (true) {
    var escolha = leitor.question("Ol\u00E1, ".concat(cliente.nomeCliente, "! Escolha uma op\u00E7\u00E3o:\n1 - Depositar\n2 - Sacar\n3 - Consultar Saldo\n4 - Sair\n "));
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
