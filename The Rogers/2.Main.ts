import { Circulo, Triangulo, Quadrado } from "./2.CalculadoraDeGeometria"
import * as leitor from "readline-sync"

const raioCirculo: number = leitor.questionFloat(`Digite o raio do circulo: `)
const areaCirculo = new Circulo(raioCirculo)
console.log(`Área do circulo: ${areaCirculo.calcularArea().toFixed(2)}`)

const baseTriangulo: number = leitor.questionFloat(`\nDigite a base do triangulo: `)
const alturaTriangulo: number = leitor.questionFloat(`Digite a altura do triângulo: `)
const areaTriangulo = new Triangulo(baseTriangulo, alturaTriangulo)
console.log(`Área do triangulo: ${areaTriangulo.calcularArea()}`)

const larguraQuadrado: number = leitor.questionFloat(`\nDigite a largura do quadrado: `)
const areaQuadrado = new Quadrado(larguraQuadrado)
console.log(`Área do quadrado: ${areaQuadrado.calcularArea()}`)