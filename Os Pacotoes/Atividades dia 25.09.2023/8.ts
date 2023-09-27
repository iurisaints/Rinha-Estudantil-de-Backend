import * as leitor from "readline-sync"

function CalcIMC(pesoKG: number, alturaM: number): number {
return pesoKG / (alturaM * alturaM ); 
}

const pesoKG = leitor.questionFloat("Qual seu peso? ")

const alturaM = leitor.questionFloat("Qual sua altura? ")
const imc =  CalcIMC(pesoKG, alturaM);

console.log("Seu IMC é: ",imc.toFixed(2));