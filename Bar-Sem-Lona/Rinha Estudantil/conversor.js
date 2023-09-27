//Implemente um programa que converta valores entre diferentes moedas. O usuário deve 
//inserir o valor, a moeda de origem e a moeda de destino. As moedas deverão ser: 
//Won sul-coreano, Dirham marroquino, Dólar e Real.


class ConversorDeMoedas{
    moeda;
    valor;
    constructor(moeda, valor){
        this.moeda = moeda;
        this.valor = valor;
    }

    Dolar(){
        let resultado;
        if(this.moeda === 'Real'){
            resultado = 0.20 * this.valor;
            console.log(`Voce podera comprar ${resultado} Dolares`);
        }else if(this.moeda === 'Won'){
            resultado = 0.00074 * this.valor;
            console.log(`Voce podera comprar ${resultado} Dolares`);
        }else if(this.moeda === 'Dirham'){
            resultado = 0.097 * this.valor;
            console.log(`Voce podera comprar ${resultado} Dolares`);
        }
    }
    
    Real(){
        let resultado;
        if(this.moeda === 'Dolar'){
            resultado = 4.99 * this.valor;
            console.log(`Voce podera comprar ${resultado} Reais`);
        }else if(this.moeda === 'Won'){
            resultado = 0.0037 * this.valor;
            console.log(`Voce podera comprar ${resultado} Reais`);
        }else if(this.moeda === 'Dirham'){
            resultado = 0.49 * this.valor;
            console.log(`Voce podera comprar ${resultado} Reais`);
        }
    }

    Won(){
        let resultado;
        if(this.moeda === 'Dolar'){
            resultado = 1353.29 * this.valor;
            console.log(`Voce podera comprar ${resultado} Won`);
        }else if(this.moeda === 'Real'){
            resultado = 271.20 * this.valor;
            console.log(`Voce podera comprar ${resultado} Won`);
        }else if(this.moeda === 'Dirham'){
            resultado = 131.68 * this.valor;
            console.log(`Voce podera comprar ${resultado} Won`);
        }
    }

    Dirham(){
        let resultado;
        if(this.moeda === 'Dolar'){
            resultado = 10.27 * this.valor;
            console.log(`Voce podera comprar ${resultado} Dirham`);
        }else if(this.moeda === 'Won'){
            resultado = 0.0076 * this.valor;
            console.log(`Voce podera comprar ${resultado} Dirham`);
        }else if(this.moeda === 'Real'){
            resultado = 2.06 * this.valor;
            console.log(`Voce podera comprar ${resultado} Dirham`);
        }
    }
}
const rl = require('readline-sync');
let menu = true;

const conversor = new ConversorDeMoedas();

while(menu){
    const op = rl.questionInt(`1 - Dolar\n2 - Real\n3 - Won Sul-Coreano\n4 - Dirham Marroquino\n5 - Sair\n `)
    switch(op){
        case 1:
            this.moeda = rl.question(`Para qual moeda voce quer tranferir? `);
            this.valor = rl.question(`Quantas moedas voce quer tranferir? `);
            if(this.moeda === 'Won' || this.moeda === 'Won Sul-Coreano'){
                conversor.Won();
            }else if(this.moeda === 'Real'){
                conversor.Real();
            }else if(this.moeda === 'Dirham'){
                conversor.Dirham();
            }
            break;
        case 2:
            this.moeda = rl.question(`Para qual moeda voce quer tranferir? `);
            this.valor = rl.question(`Quantas moedas voce quer tranferir? `);
            if(this.moeda === 'Dolar'){
                conversor.Dolar();
            }else if(this.moeda === 'Won' || this.moeda === 'Won Sul-Coreano'){
                conversor.Won();
            }else if(this.moeda === 'Dirham'){
                conversor.Dirham();
            }
            break;
        case 3:
            this.moeda = rl.question(`Para qual moeda voce quer tranferir? `);
            this.valor = rl.question(`Quantas moedas voce quer tranferir? `);
            if(this.moeda === 'Dolar'){
                conversor.Dolar();
            }else if(this.moeda === 'Real'){
                conversor.Real();
            }else if(this.moeda === 'Dirham'){
                conversor.Dirham();
            }
            break;
        case 4:
            this.moeda = rl.question(`Para qual moeda voce quer tranferir? `);
            this.valor = rl.question(`Quantas moedas voce quer tranferir? `);
            if(this.moeda === 'Dolar'){
                conversor.Dolar();
            }else if(this.moeda === 'Won' || this.moeda === 'Won Sul-Coreano'){
                conversor.Won();
            }else if(this.moeda === 'Real'){
                conversor.Real();
            }
            break;
        case 5:
            console.log(`Saindo...`);
            menu = false;
            break;
        default:
            console.log(`Opcao invalida.`);
            break;
    }
}