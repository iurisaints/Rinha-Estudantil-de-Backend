# Calculadora de Geometria
#Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, triângulos e quadrados. Permita ao usuário escolher a forma e inserir os dados necessários.

import math

class CalculadoraGeometria:
    @staticmethod
    def calcular_area_forma(forma, dados):
        if forma == "círculo":
            raio = dados["raio"]
            return math.pi * raio**2
        elif forma == "triângulo":
            base = dados["base"]
            altura = dados["altura"]
            return (base * altura) / 2
        elif forma == "quadrado":
            lado = dados["lado"]
            return lado**2
        else:
            return "Forma não suportada."

forma = "círculo"  # Substitua pela forma desejada: "círculo", "triângulo" ou "quadrado"
dados_forma = {
    "raio": 5,  # Substitua pelos dados necessários para cada forma
}

area = CalculadoraGeometria.calcular_area_forma(forma, dados_forma)
print(f'A área do {forma} é: {area}')