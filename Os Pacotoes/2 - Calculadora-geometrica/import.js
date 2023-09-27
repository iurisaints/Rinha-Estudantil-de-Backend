"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalculadoraGeometrica_1 = require("./CalculadoraGeometrica");
var leitor = require("readline-sync");
var calculos = new CalculadoraGeometrica_1.FormaGeometrica();
menu();
function menu() {
    var opcao = leitor.questionInt("Deseja calcular a área de qual forma geometrica?\n1- Quero Calcular a Area de um Retangulo\n2- Quero calcular a Area de um Triangulo\n3- Quero calcular a Area  de um Circulo\n4- Sair\n");
    switch (opcao) {
        case 1:
            var baseR = leitor.questionFloat("Para calcular a area de um Retangulo, preciso da base do mesmo, insira: ");
            var alturaR = leitor.questionFloat("Para calcular a area de um Retangulo, preciso da altura do mesmo, insira: ");
            calculos.areaRetangulo(baseR, alturaR);
            menu();
            break;
        case 2:
            var baseT = leitor.questionFloat("Para calcular a area de um Triangulo, preciso da base do mesmo, insira: ");
            var alturaT = leitor.questionFloat("Para calcular a area de um Triangulo, preciso da altura do mesmo, insira: ");
            calculos.areaTriangulo(baseT, alturaT);
            menu();
            break;
        case 3:
            var raio = leitor.questionFloat("Para calcular a area de um circulo, preciso do valor do raio do mesmo, insira:");
            calculos.areaCirculo(raio);
            menu();
            break;
    }
}
