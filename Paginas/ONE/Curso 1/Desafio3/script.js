// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while(contador < 11){
    console.log(`Contador: ${contador}`);
    contador+=1;
}

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

contador = 10;
while(contador > -1){
    console.log(`Contador: ${contador}`);
    contador-=1;
}

// Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroUsuario = prompt("Ingresa un numero mayor a cero");
while(numeroUsuario > -1){
    console.log(`Contador: ${numeroUsuario}`);
    numeroUsuario-=1;
}

// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

numeroUsuario = prompt("Ingresa un numero mayor a cero");
contador = 0;
while(contador <= numeroUsuario){
    console.log(`Contador: ${contador}`);
    contador+=1;
}
