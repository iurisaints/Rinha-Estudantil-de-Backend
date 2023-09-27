//Implemente uma classe que calcule a área de diferentes formas 
//geométricas, como círculos, triângulos e quadrados. 
//Permita ao usuário escolher a forma e inserir os dados necessários.


class CalculadoraGeometrica{
    numero1;
    numero2;

    constructor(numero1,numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    Circulo(){
        this.numero1 = rl.questionFloat(`Raio: `);
        const resultado = 3.14159 * Math.pow(this.numero1, 2);
        console.log(`A area do circulo é: ${resultado}`);
    }

    Quadrado(){
        this.numero1 = rl.questionFloat(`Base: `);
        this.numero2 = rl.questionFloat(`Altura: `);
        const resultado = this.numero1 * this.numero2;
        console.log(`A area do quadrado é: ${resultado}`);
    }

    Triangulo(){
        this.numero1 = rl.questionFloat(`Base: `);
        this.numero2 = rl.questionFloat(`Altura: `);
        const resultado = this.numero1 * this.numero2 / 2;
        console.log(`A area do triangulo é: ${resultado}`);
    }
}

const rl = require('readline-sync');

let menu = true;
const calculo =  new CalculadoraGeometrica();
while(menu){
    const op = rl.questionInt(`Qual forma geométrica voce deseja calcular: \n1 - Circulo\n2 - Quadrado\n3 - Triangulo\n4 - Sair `);
    switch(op){
        case 1:
            calculo.Circulo();
            break;
        case 2:
            calculo.Quadrado();
            break;
        case 3:
            calculo.Triangulo();
            break;
        case 4:
            console.log(`Saindo...`);
            menu = false;
            break;
        default:
            console.log(`Opcao invalida.`);
            break;
    }
}