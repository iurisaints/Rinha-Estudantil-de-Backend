"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _4_SimuladorDeBanco_1 = require("./4.SimuladorDeBanco");
var rl = require("readline-sync");
var contas = [];
var op = 99;
var _loop_1 = function () {
    op = rl.questionInt("\"Escolha a op\u00E7\u00E3o:\n1 - Criar Conta\n2 - Depositar\n3 - Sacar\n4 - Extrato\n5 - Sair\n\"");
    switch (op) {
        case 1:
            var nomeConta = rl.question("Digite o nome do proprier\u00E1rio da conta: ");
            var numeroConta = rl.question("Digite o numero da conta: ");
            var novaConta = new _4_SimuladorDeBanco_1.ContaBancaria(numeroConta);
            contas.push(novaConta);
            console.log("A conta n\u00FAmero ".concat(numeroConta, " foi criada com sucesso!\n"));
            break;
        case 2:
            var contaDeposito_1 = rl.question("Digite o número da conta: ");
            var contaEncontrarDeposito = contas.find(function (conta) { return conta.numeroConta === contaDeposito_1; });
            if (contaEncontrarDeposito) {
                var deposito = rl.questionFloat("Ok, conta encontrada, digite o valor a depositar: ");
                contaEncontrarDeposito.depositar(deposito);
            }
            else {
                console.log("Conta não encontrada :/\n");
            }
            break;
        case 3:
            var contaSaque_1 = rl.question("Digite o número da conta: ");
            var contaEncontrarSaque = contas.find(function (conta) { return conta.numeroConta === contaSaque_1; });
            if (contaEncontrarSaque) {
                var saque = rl.questionFloat("Conta encontrada! Digite o valor do saque: ");
                contaEncontrarSaque.sacar(saque);
            }
            else {
                console.log("Conta não encontrada :/\n");
            }
            break;
        case 4:
            var contaExtrato_1 = rl.question("Digite o número da conta: ");
            var contaEncontrarExtrato = contas.find(function (conta) { return conta.numeroConta === contaExtrato_1; });
            if (contaEncontrarExtrato) {
                contaEncontrarExtrato.verificarSaldo();
            }
            else {
                console.log("Conta não encontrada :/\n");
            }
            break;
        case 5:
            console.log("Saindo...");
            op = 0;
            break;
        default:
            console.log("Opera\u00E7\u00E3o inv\u00E1lida!\n");
    }
};
while (op != 0) {
    _loop_1();
}
