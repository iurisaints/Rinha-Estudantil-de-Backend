/*# Jogo da Forca

Implemente o clássico jogo da forca em que um jogador escolhe uma palavra secreta e outro jogador tenta adivinhar as letras. Limite o número de tentativas.*/

function jogoDaForca(palavraSecreta, maxTentativas) {
  palavraSecreta = palavraSecreta.toUpperCase();
  const palavraAdivinhada = Array(palavraSecreta.length).fill('_');
  let tentativasRestantes = maxTentativas;

  while (tentativasRestantes > 0) {
    console.log(`Palavra: ${palavraAdivinhada.join(' ')}`);
    console.log(`Tentativas restantes: ${tentativasRestantes}`);
    const letra = prompt("Digite uma letra:").toUpperCase();

    if (letra.length !== 1 || !/[A-Z]/.test(letra)) {
      console.log("Por favor, insira uma letra válida.");
      continue;
    }

    if (palavraSecreta.includes(letra)) {
      for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
          palavraAdivinhada[i] = letra;
        }
      }
      if (!palavraAdivinhada.includes('_')) {
        console.log("Parabéns! Você adivinhou a palavra.");
        console.log(`Palavra: ${palavraAdivinhada.join(' ')}`);
        break;
      }
    } else {
      console.log("Letra incorreta.");
      tentativasRestantes--;
    }
  }

  if (tentativasRestantes === 0) {
    console.log("Você perdeu. A palavra secreta era: " + palavraSecreta);
  }
}

const palavraSecreta = "PROGRAMACAO"; 
const maxTentativas = 6;
jogoDaForca(palavraSecreta, maxTentativas);
