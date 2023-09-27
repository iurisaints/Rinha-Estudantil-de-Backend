/*# Simulador de Banco
Crie um sistema simples de banco em que os clientes possam abrir contas, depositar e sacar dinheiro. Mantenha o saldo atualizado e permita consultar o saldo.*/

class ContaBancaria {
    constructor(nomeTitular) {
      this.nomeTitular = nomeTitular;
      this.saldo = 0;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
      } else {
        console.log("Saque não permitido. Saldo insuficiente ou valor inválido.");
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual da conta de ${this.nomeTitular}: ${this.saldo}`);
    }
  }
  
  const conta = new ContaBancaria("João");
  conta.depositar(100);
  conta.sacar(30);
  conta.consultarSaldo();
  