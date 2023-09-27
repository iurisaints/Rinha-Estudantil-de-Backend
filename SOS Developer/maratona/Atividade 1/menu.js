"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leia = require("readline-sync");
var atividade1_1 = require("./atividade1");
var atividade1_2 = require("./atividade1");
var atividade1_3 = require("./atividade1");
var continuar = "";
var menu = true;
var resposta = 0;
var circulo = new atividade1_1.CalcularCirculos();
var quadrado = new atividade1_2.CalcularQuadrados();
var triangulo = new atividade1_3.CalcularTriangulos();
var raio = 0;
var base = 0;
var altura = 0;
while (menu) {
    console.clear();
    console.log("\n         -Menu lendario");
    console.log("1- Calcular area do circulo");
    console.log("2- Calcular area do quadrado");
    console.log("3- Calcular area do triangulo");
    console.log("4- Sair");
    resposta = leia.questionInt("\nR: ");
    switch (resposta) {
        case 1:
            console.clear();
            raio = leia.questionInt("Digite o raio do circulo\nR: ");
            console.log("\nArea do circulo: ".concat(circulo.CalcularArea(raio)));
            continuar = leia.question("Digite qualquer tecla para continuar... ");
            break;
        case 2:
            console.clear();
            base = leia.questionInt("Digite a base do quadrado\nR: ");
            console.log("\nArea do quadrado: ".concat(quadrado.CalcularArea(base)));
            continuar = leia.question("Digite qualquer tecla para continuar... ");
            break;
        case 3:
            console.clear();
            base = leia.questionInt("Digite a base do triangulo\nR: ");
            altura = leia.questionInt("Digite a altura do triangulo\nR: ");
            console.log("Area do triangulo: ".concat(triangulo.CalcularArea(base, altura)));
            continuar = leia.question("Digite qualquer tecla para continuar... ");
            break;
        case 4:
            console.clear();
            menu = false;
            console.log("\nSayonara");
            break;
        default:
            console.clear();
            console.log("Escolha uma das opcoes dadas!");
            continuar = leia.question("\nDigite qualquer tecla para continuar... ");
            break;
    }
}
