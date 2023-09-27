# Jogo da Forca

#Implemente o clássico jogo da forca em que um jogador escolhe uma palavra secreta e outro jogador tenta adivinhar as letras. Limite o número de tentativas.*/

def jogo_da_forca(palavra_secreta, max_tentativas):
    palavra_secreta = palavra_secreta.upper()
    palavra_adivinhada = ["_"] * len(palavra_secreta)
    tentativas_restantes = max_tentativas

    while tentativas_restantes > 0:
        print(f'Palavra: {" ".join(palavra_adivinhada)}')
        print(f'Tentativas restantes: {tentativas_restantes}')
        letra = input("Digite uma letra: ").upper()

        if len(letra) != 1 or not letra.isalpha():
            print("Por favor, insira uma letra válida.")
            continue

        if letra in palavra_secreta:
            for i in range(len(palavra_secreta)):
                if palavra_secreta[i] == letra:
                    palavra_adivinhada[i] = letra
            if "_" not in palavra_adivinhada:
                print("Parabéns! Você adivinhou a palavra.")
                print(f'Palavra: {" ".join(palavra_adivinhada)}')
                break
        else:
            print("Letra incorreta.")
            tentativas_restantes -= 1

    if tentativas_restantes == 0:
        print(f'Você perdeu. A palavra secreta era: {palavra_secreta}')

palavra_secreta = "PROGRAMACAO"  # Substitua pela palavra desejada
max_tentativas = 6  # Escolha o número máximo de tentativas
jogo_da_forca(palavra_secreta, max_tentativas)
