# Jogo de Adivinhação
# Desenvolva um jogo em que o computador escolhe um número aleatório e o jogador deve adivinhar qual é. Forneça dicas para o jogador, como "maior" ou "menor", até que ele acerte o número.

import random

def jogo_de_adivinhacao():
    numero_secreto = random.randint(1, 100)
    tentativas = 0

    while True:
        try:
            palpite = int(input("Tente adivinhar o número (entre 1 e 100):"))

            if 1 <= palpite <= 100:
                tentativas += 1

                if palpite == numero_secreto:
                    print(f'Parabéns! Você acertou o número em {tentativas} tentativas.')
                    break
                elif palpite < numero_secreto:
                    print("Tente um número maior.")
                else:
                    print("Tente um número menor.")
            else:
                print("Por favor, insira um número válido (entre 1 e 100).")
        except ValueError:
            print("Por favor, insira um número válido.")

jogo_de_adivinhacao()  