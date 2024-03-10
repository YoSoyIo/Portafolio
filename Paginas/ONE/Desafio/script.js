/*
    Autor: Ricardo Gonzalez
*/

// Variable que recuperara el mensaje ingresado

const contenedor_info = document.getElementById("contenedor_mensaje_encriptado");
const contenedor_msg = document.getElementById("contenedor_mensaje_encriptado_aplicado");
let mensaje_sin_encriptar = document.getElementById("txa_mensaje");
let mensaje_encriptado = document.getElementById("lbl_mensaje_encriptado");

/*
    La siguiente funcion encriptara todas las palabras, mediante el uso de unas llaves
    Las "llaves" de encriptación que utilizaremos son las siguientes:
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
    Restricciones:
        * Debe funcionar solo con letras minúsculas
        * No deben ser utilizados letras con acentos ni caracteres especiales
        * Debe ser posible convertir una palabra para la versión encriptada 
          también devolver una palabra encriptada para su versión original.
*/ 
function encriptar(){
    let texto_mensaje = mensaje_sin_encriptar.value;
    let mensaje = "";
    let caracter_recorrido = "" ;

    if(texto_mensaje.length > 0){
        for(i = 0; i < texto_mensaje.length; i += 1){
            caracter_recorrido = texto_mensaje[i];
            switch(caracter_recorrido){
                case 'a':
                    caracter_recorrido = 'ai';
                    break;
                case 'e':
                    caracter_recorrido = 'enter';
                    break;
                case 'i':
                    caracter_recorrido = 'imes';
                    break;
                case 'o':
                    caracter_recorrido = 'ober';
                    break;
                case 'u':
                    caracter_recorrido = 'ufat';
                    break;
                default:
                    break;
            }
            mensaje += caracter_recorrido;

            contenedor_info.className = "inactivo";
            contenedor_msg.className = "activo";

            mensaje_encriptado.innerHTML = mensaje;
        }
    }
}

/* 
    La funcion de desencriptar hace la reconstruccion del mensaje proporcionado
*/

function desencriptar(){
    let texto_mensaje = mensaje_sin_encriptar.value;

    let regex = /ai/gi;
    texto_mensaje = texto_mensaje.replaceAll(regex, 'a');
    regex = /enter/gi;
    texto_mensaje = texto_mensaje.replaceAll(regex, 'e');
    regex = /imes/gi;
    texto_mensaje = texto_mensaje.replaceAll(regex, 'i');
    regex = /ober/gi;
    texto_mensaje = texto_mensaje.replaceAll(regex, 'o');
    regex = /ufat/gi;
    
    mensaje_encriptado.innerHTML = texto_mensaje.replaceAll(regex, 'u');
}

/* 
    La funcion de copiar podr[a permitir copiar el texto encriptado al portapapeles
*/ 

function copiar() {
    // Obtenemos el texto del mensaje encriptado
    const textoMensaje = mensaje_encriptado.textContent;
  
    // Asignamos el texto al campo sin encriptar
    mensaje_sin_encriptar.value = textoMensaje;
    
    // Verificamos si la función writeText está disponible
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Intentamos copiar al portapapeles
      navigator.clipboard.writeText(textoMensaje)
        .then(() => {
          console.log("Contenido copiado al portapapeles");
          // Limpiamos el mensaje encriptado
          mensaje_encriptado.textContent = "";
          // Mostramos una alerta al usuario
          alert("Se ha copiado correctamente al portapapeles");
        })
        .catch(error => {
          console.error("Error al copiar:", error);
          // Mostrar mensaje de error al usuario
          alert("No se pudo copiar al portapapeles. Inténtalo nuevamente.");
        });
    } else {
      console.error("La función writeText no está disponible");
      // Mostrar mensaje de error al usuario
      alert("Copiar al portapapeles no es compatible con este navegador.");
    }

    mensaje_encriptado.textContent = "";
  }
  
  

/* 
    La funcion limpiar restablecer[a todo a su forma inicial
*/

function limpiar(){
    mensaje_sin_encriptar.value="";
    mensaje_encriptado.innerHTML = "";

    contenedor_info.className = "activo";
    contenedor_msg.className = "inactivo";
}