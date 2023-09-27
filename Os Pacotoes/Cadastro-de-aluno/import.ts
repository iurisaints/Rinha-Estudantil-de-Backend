import { cadastro } from "./CadastroDeAluno";
import * as leitor from 'readline-sync'

let opcao = 10;
let lista = 0;
let user = new cadastro


while (opcao != 0) {
    opcao = leitor.questionInt("1-Cadastrar\n2-Listar media\n0-Sair\n")
    switch (opcao) {
        case 1:
            let nome = leitor.question("Nome do aluno:")
            let idade = leitor.questionInt("idade do aluno:")
            let nota1 = leitor.questionInt("1 nota do aluno:")
            let nota2 = leitor.questionInt("2 nota do aluno:")
            let nota3 = leitor.questionInt("3 nota do aluno:")
            // atribuindo as informações
            let media = (nota1 + nota2 + nota3) / 3
            //fazendo a media

            user.cadastrar(nome, idade, media)
            lista++
            //lista++ para quando for listar saber que já tem pelo menos uma na lista
            break;

        case 2:
            if (lista == 0) {
                console.log("\nSem aluno cadastrado\n")
                //caso não tenha nada na lista
            } else if (lista > 0) {
                user.listarNotas()
                //chamanod para listar a lista
            }
            break;

    }
}