// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let respuestaUsuario = prompt("¿Qué día de la semana es hoy?");

if(respuestaUsuario == "Sábado" || respuestaUsuario == "Domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

respuestaUsuario = prompt("Ingresa un numero positivo o negativo");
if(respuestaUsuario > 0){
    alert("Tu numero es positivo "+ respuestaUsuario);
}else if(respuestaUsuario < 0){
    alert("Tu numero es negativo "+ respuestaUsuario);
}else{
    alert("Tu numero es cero ");
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".

let calificacionUsuario = 105;
if(calificacionUsuario > 0){
    alert("¡Felicidades, has ganado! "+ calificacionUsuario);
}else if(calificacionUsuario < 0){
    alert("Intenta nuevamente para ganar. "+ calificacionUsuario);
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldoCuenta = 100;
alert(`El saldo total es de ${saldoCuenta} mxn.`);

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

respuestaUsuario = prompt("Ingresa tu nombre");
alert(`Bienvenido al sistema ${respuestaUsuario}.`);