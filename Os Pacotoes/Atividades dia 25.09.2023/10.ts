import * as leitor from "readline-sync";

function ConverterAll(valor: number, tipoConversao: string): number {
    switch (tipoConversao) {
        case "Km para Mi":
            return valor * 0.62;
        case "Litros para Galoes":
            return valor * 0.264;
        case "Cm para Inches":
            return valor * 0.39;
        default:
            console.log("Escolha inválida, meu bom!");
            return valor;
    }
}

const ValorOf = leitor.questionInt("Qual o valor? ");
const TipoConversao = leitor.question("Escolha o tipo de conversão:\n1 - Km para Milhas\n2 - Litros para Galões\n3 - Cm para Polegadas\n");

let resultado: number;

switch (TipoConversao) {
    case "1":
        resultado = ConverterAll(ValorOf, "Km para Mi");
        console.log(`${ValorOf} Km é igual a ${resultado} Milhas.`);
        break;
    case "2":
        resultado = ConverterAll(ValorOf, "Litros para Galoes");
        console.log(`${ValorOf} Litros é igual a ${resultado} Galões.`);
        break;
    case "3":
        resultado = ConverterAll(ValorOf, "Cm para Inches");
        console.log(`${ValorOf} Cm é igual a ${resultado} Polegadas.`);
        break;
    default:
        console.log("Escolha inválida, meu bom!");
        break;
}
