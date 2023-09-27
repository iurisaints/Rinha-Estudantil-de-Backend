//Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, triângulos e quadrados. Permita ao usuário escolher a forma e inserir os dados necessários.

import * as leitor from 'readline-sync'
export class FormaGeometrica{
    
    areaRetangulo(base, altura):number{
    let resultado = (base * altura)
    console.log("A Area referente é: ",resultado)
    return resultado
    }
    areaTriangulo(base, altura):number{
        let resultado = (base * altura)/2
        console.log("A Area referente é: ",resultado)
        return resultado
        }
     areaCirculo(raio):number{
            let resultado = (Math.pow(raio,2)) * 3.14
            console.log("A Area referente é: ",resultado)
            return resultado
            }
}