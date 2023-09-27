# Simulador de Banco
#Crie um sistema simples de banco em que os clientes possam abrir contas, depositar e sacar dinheiro. Mantenha o saldo atualizado e permita consultar o saldo.*/

class ContaBancaria:
    def __init__(self, nome_titular):
        self.nome_titular = nome_titular
        self.saldo = 0

    def depositar(self, valor):
        if valor > 0:
            self.saldo += valor
            print(f'Depósito de {valor} realizado. Saldo atual: {self.saldo}')
        else:
            print('Valor de depósito inválido.')

    def sacar(self, valor):
        if valor > 0 and valor <= self.saldo:
            self.saldo -= valor
            print(f'Saque de {valor} realizado. Saldo atual: {self.saldo}')
        else:
            print('Saque não permitido. Saldo insuficiente ou valor inválido.')

    def consultar_saldo(self):
        print(f'Saldo atual da conta de {self.nome_titular}: {self.saldo}')

conta = ContaBancaria("João")
conta.depositar(100)
conta.sacar(30)
conta.consultar_saldo()
