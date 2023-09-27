//Crie um programa em que seja possível cadastrar alunos, armazenando nome, idade e 3 notas. Em seguida, exiba a média das notas dos alunos cadastrados.

export class cadastro {
    nome: string;
    idade: number;
    nota1: number;
    nota2: number;
    nota3: number;
    nomes: string[] = [];
    idades: number[] = [];
    notas: number[] = [];
    media: number;

    cadastrar(nome: string, idade: number, media: number) {
        this.nomes.push(nome);
        this.idades.push(idade);
        this.notas.push(media);
        //colocando as informações no array
    }

    listarNotas() {
        let i = 0
        while (i < this.notas.length) {
            console.log(this.nomes[i], "-", this.notas[i])
            i++

        }
        //listando as arrays com while
        console.log("\n")
    }
}