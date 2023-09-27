# Conversor de Moedas
#Implemente um programa que converta valores entre diferentes moedas. O usuário deve inserir o valor, a moeda de origem e a moeda de destino.
#As moedas deverão ser: Won sul-coreano, Dirham marroquino, Dólar e Real.*/

def conversor_de_moedas(valor, moeda_origem, moeda_destino):
    taxas_de_cambio = {
        "WON": 0.00086,    # Taxa de câmbio do Won sul-coreano para Dólar
        "MAD": 0.110,      # Taxa de câmbio do Dirham marroquino para Dólar
        "USD": 1.0,        # Dólar Americano (taxa de câmbio 1:1)
        "BRL": 5.24,       # Taxa de câmbio do Real para Dólar
    }

    moeda_origem = moeda_origem.upper()
    moeda_destino = moeda_destino.upper()

    if moeda_origem in taxas_de_cambio and moeda_destino in taxas_de_cambio:
        taxa_origem_para_dolar = taxas_de_cambio[moeda_origem]
        taxa_dolar_para_destino = taxas_de_cambio[moeda_destino]
        valor_em_dolar = valor * taxa_origem_para_dolar
        valor_convertido = valor_em_dolar / taxa_dolar_para_destino
        return round(valor_convertido, 2)  # Arredonda para 2 casas decimais
    else:
        return "Moeda não suportada."

valor = float(input("Digite o valor a ser convertido: "))
moeda_origem = input("Digite a moeda de origem (WON, MAD, USD, BRL): ")
moeda_destino = input("Digite a moeda de destino (WON, MAD, USD, BRL): ")

resultado = conversor_de_moedas(valor, moeda_origem, moeda_destino)
print(f'O valor convertido é: {resultado} {moeda_destino}')
