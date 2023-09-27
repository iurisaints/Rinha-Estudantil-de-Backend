"use strict";
// Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, triângulos e quadrados. 
// Permita ao usuário escolher a forma e inserir os dados necessários.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = exports.Triangulo = exports.Circulo = void 0;
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * (this.raio * this.raio);
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Quadrado = /** @class */ (function () {
    function Quadrado(largura) {
        this.largura = largura;
    }
    Quadrado.prototype.calcularArea = function () {
        return this.largura * this.largura;
    };
    return Quadrado;
}());
exports.Quadrado = Quadrado;
