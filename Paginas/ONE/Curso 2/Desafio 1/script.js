// Crear una función que muestre "¡Hola, mundo!" en la consola.

function hola() { 
    console.log("¡Hola, mundo!");
    return;
}

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function holaNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function doble(numero){
    return numero * 2;
}

// Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
}

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayor(numero1, numero2){
    return (Math.max(numero1,numero2));
}

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(numero){
    return numero * numero;
}

// Ejecucion de cada funcion

hola();
holaNombre("Juan");
console.log(`Doble de 7: ${doble(7)} `);
console.log(`Promedio de 7, 8, 10: ${promedio(7, 8, 10)} `);
console.log(`Mayor entre 9 y 52: ${mayor(52, 9)} `);
console.log(`El cuadrado de 15: ${cuadrado(15)} `);