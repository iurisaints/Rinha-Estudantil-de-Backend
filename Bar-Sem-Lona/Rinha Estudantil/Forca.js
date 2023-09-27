const leitor = require('readline-sync')
const palavraSecreta = leitor.question('Insira a palavra secreta:')
for(let i = 1; i <= 5;) {
    let palavra = leitor.question('Tente adivinhar a palavra, insira uma letra:');
    }if(palavraSecreta.includes(palavra)){
        console.log('A palavra contem está letra');
    }else{
        i+
        console.log(`Errouu, tente novamente\nnumero de tentativas:${i}`)  
    }
//implemente o clássico jogo da forca em que um jogador escolhe uma palavra secreta e outro jogador tenta adivinhar as letras. Limite o número de tentativas.

