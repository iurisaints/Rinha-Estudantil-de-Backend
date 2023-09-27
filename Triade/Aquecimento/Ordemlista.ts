function bubbleSort(arr: number[], ascending: boolean): number[] {
    const n = arr.length;
    let swapped: boolean;
    
    do {
      swapped = false;
      
      for (let i = 0; i < n - 1; i++) {
        if ((ascending && arr[i] > arr[i + 1]) || (!ascending && arr[i] < arr[i + 1])) {
          
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    
    return arr;
  }
  
  const ListaNumeros: number[] = [5, 2, 9, 1, 5, 6];
  const OrdenacaoCrescente = true; 
  
  console.log(`Lista original: ${listaNumeros.join(', ')}`);
  const ListaOrdenada = bubbleSort(listaNumeros.slice(), ordenacaoCrescente);
  console.log(`Lista ordenada: ${listaOrdenada.join(', ')}`);