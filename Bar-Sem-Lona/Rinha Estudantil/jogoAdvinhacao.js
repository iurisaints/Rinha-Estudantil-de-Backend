const leitor = require("readline-sync")
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1
        let tentativas = 0

function jogoAdvinhacao() {
    const advinhar = leitor.questionInt(`Começando! Adivinhe o número (entre 1 e 100): `)
        if (isNaN(advinhar) || advinhar < 1 || advinhar > 100) {
            console.log(`Ops! Insira um número válido entre 1 e 100.`)
                return
}
tentativas++
    if (advinhar === numeroAleatorio) {
        console.log(`Partida concluída!\n- Número sorteado: ${numeroAleatorio} \n- Tentativas: ${tentativas}`)
} else {
    const dica = advinhar < numeroAleatorio ? 'maior' : 'menor'
        console.log(`DICA: O numero é "${dica}"!`)
            jogoAdvinhacao()
    }
}
jogoAdvinhacao()

// 6) Desenvolva um jogo em que o computador escolhe um número aleatório e o jogador deve adivinhar qual é. 
//    Forneça dicas para o jogador, como "maior" ou "menor", até que ele acerte o número.