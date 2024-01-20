// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function imc(altura, masa){
    return masa/(altura * altura);
}

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero){
    if(numero == 1){
        return 1;
    }else{
        return numero*factorial(numero-1);
    }
}

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversionDolar(dolares){
    return dolares * 4.8;
}

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaPerimetroRectangulo(altura, anchura){
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);

    return `El area es de ${area} y su perimetro es de ${perimetro}`
}

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaPerimetroCirculo(radio){
    var area = 3.14 * (radio * radio);
    var perimetro = 2 * radio * 3.14;

    return `El area es de ${area} y su perimetro es de ${perimetro}`
}
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero){
    for(i = 1; i < 11; i+=1){
        console.log(`${numero} X ${i} = ${numero * i}`);
    }

    return;
}
console.log(`IMC de 1.68m y 85kg: ${imc(1.68,85)}`);
console.log(`Factorial de 5: ${factorial(5)}`);
console.log(`85 Reales: ${conversionDolar(85)}`);
console.log(areaPerimetroRectangulo(8,6));
console.log(areaPerimetroCirculo(18));
tablaMultiplicar(10);