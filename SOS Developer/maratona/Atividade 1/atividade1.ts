// Calculadora de geometria:
// Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, 
// triângulos e quadrados. Permita ao usuário escolher a forma e inserir os dados necessários.

export class CalcularCirculos{
    CalcularArea(raio: number): number{
        return 3.14*(raio*raio)
    }
}

export class CalcularTriangulos{
    CalcularArea(base: number, altura: number): number{
        return (base*altura)/2
    }
}

export class CalcularQuadrados{
    CalcularArea(base: number): number{
        return base*base
    }
}