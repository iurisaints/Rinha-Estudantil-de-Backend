"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = exports.Triangulo = exports.Circulo = void 0;
var Circulo = /** @class */ (function () {
    function Circulo(circulo) {
        this.circulo = circulo;
    }
    Circulo.prototype.Circulo = function (circulo) {
        var C = 2 * Math.PI * circulo;
        return C;
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.Triangulo = function (B, A) {
        var T = B * A / 2;
        return T;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Quadrado = /** @class */ (function () {
    function Quadrado(lado1, lado2) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    Quadrado.prototype.Quadrado = function (lado1, lado2) {
        var Q = lado1 * lado2;
        return Q;
    };
    return Quadrado;
}());
exports.Quadrado = Quadrado;
