# Cadastro de Alunos
# Crie um programa em que seja possível cadastrar alunos, armazenando nome, idade e nota. Em seguida, exiba a média das notas dos alunos cadastrados.*/

class Aluno:
    def __init__(self, nome, idade, nota):
        self.nome = nome
        self.idade = idade
        self.nota = nota

def calcular_media_alunos(alunos):
    soma_notas = sum(aluno.nota for aluno in alunos)
    media = soma_notas / len(alunos)
    return media

alunos = []
alunos.append(Aluno("João", 18, 8.5))
alunos.append(Aluno("Maria", 19, 9.0))
alunos.append(Aluno("Pedro", 20, 7.5))

media_das_notas = calcular_media_alunos(alunos)
print(f'A média das notas dos alunos é: {media_das_notas}')
