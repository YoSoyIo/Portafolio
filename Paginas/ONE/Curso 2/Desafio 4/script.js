// Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function listaElementos(lista){
    for(i = 0; i < lista.length; i += 1){
        console.log(lista[i]);
    }

    return;
}

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function listaElementosInverso(lista){
    for(i = lista.length - 1; i > -1; i -= 1){
        console.log(lista[i]);
    }
    
    return;
}

// Crea una función que calcule el promedio de los elementos en una lista de números.

function promedioLista(lista){
    let promedio = 0;
    for(i = 0; i < lista.length; i += 1){
        promedio += lista[i]
    }
    promedio = promedio/lista.length;
    return promedio;
}

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }

// Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaLista(lista){
    let suma = 0;
    for(i = 0; i < lista.length; i += 1){
        suma += lista[i]
    }
    return suma;
}

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function posicionElemento(elemento, lista){
    let indice = lista.indexOf(elemento);
    return indice;
}

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumaListas(lista1, lista2){
    let sumaListas = [];
    for(i = 0; i < lista1.length; i += 1){
        sumaListas.push(lista1[i] + lista2[i]);
    }

    return sumaListas;
}

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista){
    let cuadradoLista = [];
    for(i = 0; i < lista.length; i += 1){
        cuadradoLista.push(lista[i]*lista[i]);
    }

    return cuadradoLista;
}


let lista1 = [1,2,3];
let lista2 = [9,8,7];

listaElementos(lista1);
listaElementosInverso(lista1);
console.log(`Promedio: ${promedioLista(lista2)}`);
encontrarMayorMenor(lista2);
console.log(`Suma: ${sumaLista(lista1)}`);
console.log(`Posicion 7: ${posicionElemento(7,lista2)}`);
listaElementos(sumaListas(lista1,lista2));
listaElementos(cuadradoLista(lista2));