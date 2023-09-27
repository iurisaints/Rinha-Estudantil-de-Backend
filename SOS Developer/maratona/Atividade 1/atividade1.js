"use strict";
// Calculadora de geometria:
// Implemente uma classe que calcule a área de diferentes formas geométricas, como círculos, 
// triângulos e quadrados. Permita ao usuário escolher a forma e inserir os dados necessários.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcularQuadrados = exports.CalcularTriangulos = exports.CalcularCirculos = void 0;
var CalcularCirculos = /** @class */ (function () {
    function CalcularCirculos() {
    }
    CalcularCirculos.prototype.CalcularArea = function (raio) {
        return 3.14 * (raio * raio);
    };
    return CalcularCirculos;
}());
exports.CalcularCirculos = CalcularCirculos;
var CalcularTriangulos = /** @class */ (function () {
    function CalcularTriangulos() {
    }
    CalcularTriangulos.prototype.CalcularArea = function (base, altura) {
        return (base * altura) / 2;
    };
    return CalcularTriangulos;
}());
exports.CalcularTriangulos = CalcularTriangulos;
var CalcularQuadrados = /** @class */ (function () {
    function CalcularQuadrados() {
    }
    CalcularQuadrados.prototype.CalcularArea = function (base) {
        return base * base;
    };
    return CalcularQuadrados;
}());
exports.CalcularQuadrados = CalcularQuadrados;
