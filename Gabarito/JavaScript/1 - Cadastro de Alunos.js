/*# Cadastro de Alunos
Crie um programa em que seja possível cadastrar alunos, armazenando nome, idade e nota. Em seguida, exiba a média das notas dos alunos cadastrados.*/

class Aluno {
    constructor(nome, idade, nota) {
      this.nome = nome;
      this.idade = idade;
      this.nota = nota;
    }
  }
  
  function calcularMediaAlunos(alunos) {
    let somaNotas = 0;
    for (let aluno of alunos) {
      somaNotas += aluno.nota;
    }
    const media = somaNotas / alunos.length;
    return media;
  }
  
  const alunos = [];
  alunos.push(new Aluno("João", 18, 8.5));
  alunos.push(new Aluno("Maria", 19, 9.0));
  alunos.push(new Aluno("Pedro", 20, 7.5));
  
  const mediaDasNotas = calcularMediaAlunos(alunos);
  console.log(`A média das notas dos alunos é: ${mediaDasNotas}`);
  