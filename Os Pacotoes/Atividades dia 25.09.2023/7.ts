    function gerarNumAleatoria(min: number, max: number): number {
return Math.floor(Math.random()* (max - min + 1)) + min;
    }

    const minimo = 1;
    const maximo = 50;

    const numale = gerarNumAleatoria(minimo, maximo);
    console.log("Número aleatoria entre ", minimo, "e", maximo, ": \n", numale);