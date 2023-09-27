// Calculadora de geometria:
// Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, 
// triângulos e quadrados. Permita ao usuário escolher a forma e inserir os dados necessários.

import * as leia from 'readline-sync'
import { CalcularCirculos } from './atividade1'
import { CalcularQuadrados } from './atividade1'
import { CalcularTriangulos } from './atividade1'

let continuar: string = ""
let menu: boolean = true
let resposta: number = 0
let circulo= new CalcularCirculos()
let quadrado= new CalcularQuadrados()
let triangulo= new CalcularTriangulos()
let raio: number = 0
let base: number = 0
let altura: number = 0

while(menu){
    console.clear()
    console.log(`\n         -Menu lendario`)
    console.log(`1- Calcular area do circulo`)
    console.log(`2- Calcular area do quadrado`)
    console.log(`3- Calcular area do triangulo`)
    console.log(`4- Sair`)
    resposta = leia.questionInt(`\nR: `)
    
    switch(resposta){
        case 1:
            console.clear()
            raio = leia.questionInt(`Digite o raio do circulo\nR: `)
            console.log(`\nArea do circulo: ${circulo.CalcularArea(raio)}`)
            continuar = leia.question(`Digite qualquer tecla para continuar... `)
        break
        case 2:
            console.clear()
            base = leia.questionInt(`Digite a base do quadrado\nR: `)
            console.log(`\nArea do quadrado: ${quadrado.CalcularArea(base)}`)
            continuar = leia.question(`Digite qualquer tecla para continuar... `)
        break
        case 3:
            console.clear()
            base = leia.questionInt(`Digite a base do triangulo\nR: `)
            altura = leia.questionInt(`Digite a altura do triangulo\nR: `)
            console.log(`Area do triangulo: ${triangulo.CalcularArea(base, altura)}`)
            continuar = leia.question(`Digite qualquer tecla para continuar... `)
        break
        case 4:
            console.clear()
            menu=false
            console.log(`\nSayonara`)
        break
        default:
            console.clear()
            console.log(`Escolha uma das opcoes dadas!`)
            continuar = leia.question(`\nDigite qualquer tecla para continuar... `)
        break
    }
}