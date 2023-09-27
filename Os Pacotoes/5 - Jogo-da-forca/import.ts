import { forca } from "./forca";
import * as leitor from 'readline-sync'

let user = new forca
let tentativas = 0
const palavra = leitor.question("Fale uma palavra:")
user.palavraEscolida(palavra)

while(tentativas < 6){
    let letra = leitor.question("fale um letra:")
    user.jogado(letra)
    tentativas++
}
console.log("acabou o jogo")