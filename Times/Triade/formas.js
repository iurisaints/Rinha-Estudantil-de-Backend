"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var formasGoemetricas_1 = require("./formasGoemetricas");
var verde = true;
while (verde) {
    var opcao = leitor.questionInt("Qual forma desja calcular\n1-Circulo\n2-Triangulo\n3-Quadrado\n0-Sair");
    switch (opcao) {
        case 1:
            var circulo = leitor.questionInt("Qual o riao do circulo? ");
            var novoCirculo = new formasGoemetricas_1.Circulo(circulo);
            novoCirculo.Circulo(circulo);
            console.log(novoCirculo.Circulo(circulo));
            break;
        case 2:
            var base = leitor.questionInt("Qual a base do triangulo? ");
            var altura = leitor.questionInt("Qual a altura do triangulo? ");
            var novoTriangulo = new formasGoemetricas_1.Triangulo(base, altura);
            console.log(novoTriangulo.Triangulo(base, altura));
            break;
        case 3:
            var lado1 = leitor.questionInt("Qual o primeiro lado do quadrado? ");
            var lado2 = leitor.questionInt("Qual o seguno lado do quadrado? ");
            var novoQuadrado = new formasGoemetricas_1.Quadrado(lado1, lado2);
            console.log(novoQuadrado.Quadrado(lado1, lado2));
            break;
        case 0:
            console.log("Saindo...");
            verde = false;
            break;
    }
}
