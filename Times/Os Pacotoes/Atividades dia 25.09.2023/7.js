function gerarNumAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var minimo = 1;
var maximo = 50;
var numale = gerarNumAleatoria(minimo, maximo);
console.log("Número aleatoria entre ", minimo, "e", maximo, ": \n", numale);
