async function agregarProyectos(cantidad) {
  const contenedor = document.querySelector(".project-tile");
  const respuesta = await fetch('JSON/proyectos.json'); // Ruta completa al archivo
  const datosJSON = await respuesta.json();
  let color;

  contenedor.innerHTML = "";

  // Recorrer el array de personas del JSON
  for (const proyectosJson of datosJSON.proyectos) {
    const nombre = proyectosJson.nombre;
    const link = proyectosJson.link;
    const imagen = proyectosJson.imagen;
    const alt = proyectosJson.alt;

    contenedor.innerHTML += `
        <a href="${link}" target="_blank">
          <div class="pro-box">
            <img src="${imagen}" alt="${alt}" />
            <p class="project-title">${nombre}</p>
          </div>
        </a>`; 
  }

  contenedor.innerHTML += `
        <a href="" target="_blank">
          <div class="pro-box">
            <img src="img/masproyectos.jpg" alt="Imagen random" />
            <p class="project-title">Más proyectos...</p>
          </div>
        </a>
      `;

  for (var i = 1; i < 5; i++) {
    color = generarNuevoColor();
    document.getElementById("perfil" + i).style.backgroundColor = color;
    document.getElementById("perfil" + i).style.color = obtenerColorOpuesto(color);
  }
}

function obtenerColorOpuesto(colorHexadecimal) {
  // Validar el formato hexadecimal
  if (!/^#[0-9a-fA-F]{6}$/.test(colorHexadecimal)) {
    throw new Error("Formato de color hexadecimal inválido");
  }

  // Convertir el color hexadecimal a un array de valores RGB
  let rgb = colorHexadecimal.replace("#", "").match(/[0-9a-fA-F]{2}/g).map((hex) => {
    return parseInt(hex, 16);
  });

  // Calcular el color opuesto invirtiendo cada valor RGB
  let rgbOpuesto = rgb.map((valor) => {
    return 255 - valor;
  });

  // Convertir el color opuesto a formato hexadecimal
  let colorOpuestoHex = "#" + rgbOpuesto
    .map((valor) => valor.toString(16).padStart(2, "0"))
    .join("");

  return colorOpuestoHex;
}

async function generarLenguajes(){
  const contenedor = document.getElementById("container-tool");
  const respuesta = await fetch('JSON/herramientas.json'); // Ruta completa al archivo
  const datosJSON = await respuesta.json();
  
  contenedor.innerHTML = "";

  // Recorrer el array de personas del JSON
  for (const herramientaJSON of datosJSON.listaHerramientas) {
    const nombre = herramientaJSON.nombre;
    const imagen = herramientaJSON.imagenSVG;

    contenedor.innerHTML += `
        <div class="icono-tool">
          ${imagen}
          <p class="footer-icon">${nombre}</p>
        </div>`; 
  }

}


function generarNuevoColor() {
  var simbolos, color;
  simbolos = "0123456789ABCDEF";
  color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + simbolos[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Ejemplo: agregar 3 proyectos
agregarProyectos(5);
generarLenguajes();