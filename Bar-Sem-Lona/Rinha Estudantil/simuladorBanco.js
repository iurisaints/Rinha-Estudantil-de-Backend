const leitor = require("readline-sync")

class ContaBancaria {
  constructor(nomeUsuario, saldoDeInicio) {
    this.nomeUsuario = nomeUsuario
      this.saldo = saldoDeInicio
    }

sistemaDepositar(valor) {
  if (valor > 0) {
    this.saldo += valor
      console.log(`]---- Depósito feito com sucesso! \n]---- Valor solicitado: ${valor} \n]---- Saldo atual: R$ ${this.saldo}\n`)
  } else {
    console.log(`Houve um erro! Valor indisponível.\n`)
  }
}

sacar(valor) {
  if (valor > 0 && valor <= this.saldo) {
    this.saldo -= valor
      console.log(`]---- Saque feito com sucesso! \n]----Valor solicitado: ${valor} \n]---- Saldo atual: R$ ${this.saldo}\n`)
  } else {
    console.log("Houve um erro! Saldo indisponível.\n")
  }
}

  verExtrato() {
    console.log(`]---- ${this.nomeUsuario}, seu saldo atual e: \n]---- Extrato: R$ ${this.saldo}\n`)
  }
}

function simularBanco() {

  const nomeUsuario = leitor.question("}- Seja bem-vindo, qual seu nome?\n- ")
    console.clear()
      const saldoDeInicio = leitor.questionFloat("}- Para continuar, qual seu saldo atual?\nR$  ")
        console.clear()
          const contaSimulada = new ContaBancaria(nomeUsuario, saldoDeInicio)

  while (true) {
    const opcao = leitor.question(`{-} Selecione uma opcao:\n\n1 - Ver Extrato;\n2 - Depósito;\n3 - Sacar;\n4 - Sair;\n\n{-} `)
    console.clear()

  switch (opcao) {
    case "1":
      contaSimulada.verExtrato()
        break

  case "2":
    const valorDeposito = leitor.questionFloat("{-} DEPOSITO: Qual e o valor?\nR$ ")
      contaSimulada.sistemaDepositar(valorDeposito)
        break

  case "3":
    const valorSaque = leitor.questionFloat(`{-} SAQUE: Qual e o valor?\nR$ `)
      contaSimulada.sacar(valorSaque)
        break

  case "4":
    console.log(`Saindo...`)
      return

  default:
    console.log(`Ops... Houve um erro!`)
    }
  }
}

simularBanco()

// 4) Crie um sistema simples de banco em que os clientes possam abrir contas, depositar e sacar dinheiro. 
//    Mantenha o saldo atualizado e permita consultar o saldo.