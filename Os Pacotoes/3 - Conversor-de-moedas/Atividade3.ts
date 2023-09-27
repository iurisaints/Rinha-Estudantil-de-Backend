//Conversor de Moedas
//Implemente um programa que converta valores entre diferentes moedas. 
//O usuário deve inserir o valor, a moeda de origem e a moeda de destino. 
//As moedas deverão ser: Won sul-coreano, Dirham marroquino, Dólar e Real.

import * as leitor from "readline-sync";
let valor: number | undefined;

const moedaOrigem = leitor.questionInt("Qual a moeda de origem? \n1- Dolar \n2- Real \n3- Dirham \n4- Won \n ");

switch (moedaOrigem) {
    case 1:
        valor = leitor.questionInt("Qual o valor?\n");
        const moedaDestino = leitor.questionInt("Quer converter para? \n1- Dolar \n2- Real \n3 - Dirham \n4- Won\n ");
        switch (moedaDestino) {
            case 1:
                console.log("Mesma moeda logo não altera \n", valor);
                break;
            case 2:
                console.log("O valor convertido para real é:\n", valor! * 4.99);
                break;
            case 3:
                console.log("O valor convertido é Dirhan: \n", valor! * 10.27);
                break;
            case 4:
                console.log("O valor convertido é Won: \n", valor! * 1352.73);
                break;
        }
        break;
}

switch (moedaOrigem) {
    case 2:
        valor = leitor.questionInt("Qual o valor?");
        const moedaDestino = leitor.questionInt("Quer converter para? \n1- Dolar \n2- Real \n3 - Dirham \n4- Won ");
        switch (moedaDestino) {
            case 1:
                console.log("O valor convertido para real é Dolar:\n", valor! * 0.20);
                break;
            case 2:
                console.log("Mesma moeda logo não altera \n", valor);
                break;
            case 3:
                console.log("O valor convertido é Dirham: \n", valor! * 2.06);
                break;
            case 4:
                console.log("O valor convertido é Won: \n", valor! * 271.11);
                break;
        }
        break;
}

switch (moedaOrigem) {
    case 3:
        valor = leitor.questionInt("Qual o valor?");
        const moedaDestino = leitor.questionInt("Quer converter para? \n1- Dolar \n2- Real \n3 - Dirham \n4- Won ");
        switch (moedaDestino) {
            case 1:
                console.log("O valor convertido para real é:\n", valor! * 0.49);
                break;
            case 2:
                console.log("O valor convertido para dolar é:\n", valor! * 0.097);
                break;
            case 3:
                console.log("Mesma moeda logo não altera \n", valor);
                break;
            case 4:
                console.log("O valor convertido para Won: \n", valor! * 131,64);
                break;
        }
        break;
}

switch (moedaOrigem) {
    case 4:
        valor = leitor.questionInt("Qual o valor?");
        const moedaDestino = leitor.questionInt("Quer converter para? \n1- Dolar \n2- Real \n3 - Dirham \n4- Won ");
        switch (moedaDestino) {
            case 1:
                console.log("O valor convertido para real é:\n", valor! * 0.0037);
                break;
            case 2:
                console.log("O valor convertido para dolar é:\n", valor! * 0.00074);
                break;
            case 3:
                console.log("O valor convertido para dirhan é:\n", valor! * 0.0076);
                break;
            case 4:
                console.log("Mesma moeda logo não altera \n", valor);
                break;
        }
        break;
}

