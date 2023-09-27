/*# Jogo de Adivinhação
Desenvolva um jogo em que o computador escolhe um número aleatório e o jogador deve adivinhar qual é. Forneça dicas para o jogador, como "maior" ou "menor", até que ele acerte o número.*/

function jogoDeAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;
  
    while (true) {
      const palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
  
      if (isNaN(palpite)) {
        alert("Por favor, insira um número válido.");
      } else {
        tentativas++;
  
        if (palpite === numeroSecreto) {
          alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
          break;
        } else if (palpite < numeroSecreto) {
          alert("Tente um número maior.");
        } else {
          alert("Tente um número menor.");
        }
      }
    }
  }
  
  jogoDeAdivinhacao();
  