"use strict";
// Crie um sistema simples de banco em que os clientes possam abrir contas, depositar e sacar dinheiro.
// Mantenha o saldo atualizado e permita consultar o saldo.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numeroConta) {
        this.numeroConta = numeroConta;
        this.saldo = 0;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Voc\u00EA depositou R$ ".concat(valor.toFixed(2), "\n"));
        }
        else {
            console.log("O valor depositado deve ser maior que zero.\n");
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Voc\u00EA sacou R$ ".concat(valor.toFixed(2), "\n"));
        }
        else {
            console.log("Saldo insuficiente!\n");
        }
    };
    ContaBancaria.prototype.verificarSaldo = function () {
        console.log("Seu saldo atual \u00E9 de R$ ".concat(this.saldo.toFixed(2), "\n"));
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
