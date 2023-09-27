"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormaGeometrica = void 0;
var FormaGeometrica = /** @class */ (function () {
    function FormaGeometrica() {
    }
    FormaGeometrica.prototype.areaRetangulo = function (base, altura) {
        var resultado = (base * altura);
        console.log("A Area referente é: ", resultado);
        return resultado;
    };
    FormaGeometrica.prototype.areaTriangulo = function (base, altura) {
        var resultado = (base * altura) / 2;
        console.log("A Area referente é: ", resultado);
        return resultado;
    };
    FormaGeometrica.prototype.areaCirculo = function (raio) {
        var resultado = (Math.pow(raio, 2)) * 3.14;
        console.log("A Area referente é: ", resultado);
        return resultado;
    };
    return FormaGeometrica;
}());
exports.FormaGeometrica = FormaGeometrica;
