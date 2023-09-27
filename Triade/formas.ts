//Implemente uma classe que calcula a área de diferentes formas geométricas, 
//como círculos, triângulos e quadrados. Permita ao usuário escolher a forma e inserir os dados necessários.
import * as leitor from 'readline-sync'
import { Circulo,Triangulo,Quadrado } from './formasGoemetricas'


let verde = true
while(verde){
    const opcao = leitor.questionInt("Qual forma desja calcular\n1-Circulo\n2-Triangulo\n3-Quadrado\n0-Sair")
    switch(opcao){
        case 1:
            const circulo = leitor.questionInt("Qual o riao do circulo? ")
            const novoCirculo = new Circulo(circulo)
            novoCirculo.Circulo(circulo)
            console.log(novoCirculo.Circulo(circulo))
            break;
        case 2:
            const base = leitor.questionInt("Qual a base do triangulo? ")
            const altura = leitor.questionInt("Qual a altura do triangulo? ")
            const novoTriangulo = new Triangulo(base,altura)
            console.log(novoTriangulo.Triangulo(base,altura))
            break;
        case 3:
            const lado1 = leitor.questionInt("Qual o primeiro lado do quadrado? ")
            const lado2 = leitor.questionInt("Qual o seguno lado do quadrado? ")
            const novoQuadrado = new Quadrado(lado1,lado2)
            console.log(novoQuadrado.Quadrado(lado1,lado2))
            break;
        case 0:
            console.log("Saindo...")
            verde = false;
            break;


    }
}
