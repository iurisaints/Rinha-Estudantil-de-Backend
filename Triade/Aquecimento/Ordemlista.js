function bubbleSort(arr, ascending) {
    var n = arr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if ((ascending && arr[i] > arr[i + 1]) || (!ascending && arr[i] < arr[i + 1])) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
var listaNumeros = [5, 2, 9, 1, 5, 6];
var ordenacaoCrescente = true;
console.log("Lista original: ".concat(listaNumeros.join(', ')));
var listaOrdenada = bubbleSort(listaNumeros.slice(), ordenacaoCrescente);
console.log("Lista ordenada: ".concat(listaOrdenada.join(', ')));
