// Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, triângulos e quadrados. 
// Permita ao usuário escolher a forma e inserir os dados necessários.

export class Circulo {
    raio: number

    constructor(raio: number) {
        this.raio = raio
    }

    calcularArea(): number {
        return Math.PI * (this.raio * this.raio)
    }
}

export class Triangulo {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2
    }
}

export class Quadrado {
    largura: number

    constructor(largura: number) {
        this.largura = largura
    }

    calcularArea(): number {
        return this.largura * this.largura
    }
}