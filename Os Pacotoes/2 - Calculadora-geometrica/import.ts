import { FormaGeometrica } from "./CalculadoraGeometrica";

import * as leitor from 'readline-sync'
let calculos = new FormaGeometrica();

menu()


function menu(){
    let opcao = leitor.questionInt("Deseja calcular a área de qual forma geometrica?\n1- Quero Calcular a Area de um Retangulo\n2- Quero calcular a Area de um Triangulo\n3- Quero calcular a Area  de um Circulo\n4- Sair\n")

    switch (opcao){
        case 1:
            let baseR = leitor.questionFloat("Para calcular a area de um Retangulo, preciso da base do mesmo, insira: ")
            let alturaR = leitor.questionFloat("Para calcular a area de um Retangulo, preciso da altura do mesmo, insira: ")
            calculos.areaRetangulo(baseR,alturaR)
            menu()
        break
        case 2:
            let baseT = leitor.questionFloat("Para calcular a area de um Triangulo, preciso da base do mesmo, insira: ")
            let alturaT = leitor.questionFloat("Para calcular a area de um Triangulo, preciso da altura do mesmo, insira: ")
            calculos.areaTriangulo(baseT,alturaT)
            menu()
        break
        case 3:
            let raio = leitor.questionFloat("Para calcular a area de um circulo, preciso do valor do raio do mesmo, insira:")
            calculos.areaCirculo(raio)
            menu()
        break
            
    }


}