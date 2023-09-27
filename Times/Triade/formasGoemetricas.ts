export class Circulo{
    circulo: number;


    constructor(circulo: number){
        this.circulo = circulo
    
    }

    Circulo(circulo): number{
        const C : number =2 * Math.PI * circulo
        return  C
    }
}
export class Triangulo{
    base: number
    altura: number

 constructor(base: number,altura: number){
    this.base = base
    this.altura = altura
 }

    Triangulo(B,A): number{
        const T : number = B * A / 2
        return T
    }
}
export class Quadrado{
    lado1: number;
    lado2: number

    constructor(lado1: number, lado2: number){
        this.lado1 = lado1;
        this.lado2 = lado2
    }
    Quadrado(lado1, lado2): number{
        const Q: number = lado1 * lado2
        return Q
    }
}