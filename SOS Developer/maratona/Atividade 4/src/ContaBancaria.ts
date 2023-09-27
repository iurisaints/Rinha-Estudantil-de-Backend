export class ContaBancaria {
    private id_conta: number;
    private numeroConta: string;
    private saldo: number;
  
    constructor(numeroConta: string, saldo: number = 0) {
      this.id_conta = 0; 
      this.numeroConta = numeroConta;
      this.saldo = saldo;
    }
  
    getIdConta(): number {
      return this.id_conta;
    }
  
    getNumeroConta(): string {
      return this.numeroConta;
    }
  
    getSaldo(): number {
      return this.saldo;
    }

    depositar(valorDeposito: number): void {
        this.saldo += valorDeposito;
        console.log('Depósito realizado com sucesso!');
        console.log(`Saldo atualizado: R$ ${this.saldo} reais`)
    }

    sacar(valorSaque: number): void {
        if (valorSaque > this.saldo) {
          console.log('Saldo insuficiente para realizar o saque.');
          return;
        }
    
        this.saldo -= valorSaque;
            console.log('Saque realizado com sucesso!');
            console.log(`Saldo atualizado: R$ ${this.saldo} reais`)
    }
}

