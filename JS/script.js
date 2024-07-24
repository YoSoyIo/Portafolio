function agregarProyectos(cantidad) {
  var projectTile = document.querySelector(".project-tile");

  var proyectoHTML = `
        <a href="Paginas/cesar.html" target="_blank">
          <div class="pro-box">
            <img src="img/Cesar.PNG" alt="Imagen miniatura" />
            <p class="project-title">Proyecto 1</p>
          </div>
        </a>
        <a href="Paginas/ONE/1769-HTML5 y CSS3 parte4 - aula6/index.html" target="_blank">
          <div class="pro-box">
            <img src="img/barberia.png" alt="Imagen miniatura" />
            <p class="project-title">Proyecto 2</p>
          </div>
        </a>
        <a href="Paginas/ONE/Desafio/index.html" target="_blank">
          <div class="pro-box">
            <img src="img/desafio.png" alt="Imagen miniatura" />
            <p class="project-title">Proyecto 3</p>
          </div>
        </a>
        <a href="Paginas/ONE/2035-logica-programacion-2-Aula1/index.html" target="_blank">
          <div class="pro-box">
            <img src="img/Adivina.png" alt="Imagen miniatura" />
            <p class="project-title">Proyecto 4</p>
          </div>
        </a>
        <a href="Paginas/ONE/PingPong/index.html" target="_blank">
          <div class="pro-box">
            <img src="img/pingpong.png" alt="Imagen miniatura" />
            <p class="project-title">Proyecto 5</p>
          </div>
        </a>
      `;

  projectTile.innerHTML += proyectoHTML;

  for (var i = 6; i <= cantidad; i++) {
    proyectoHTML = `
          <a href="" target="_blank">
            <div class="pro-box">
              <img src="img/masproyectos.png" alt="Imagen random" />
              <p class="project-title">Proyecto ${i}</p>
            </div>
          </a>
        `;

    projectTile.innerHTML += proyectoHTML;
  }

  proyectoHTML = `
        <a href="" target="_blank">
          <div class="pro-box">
            <img src="img/masproyectos.jpg" alt="Imagen random" />
            <p class="project-title">Más proyectos...</p>
          </div>
        </a>
      `;

  projectTile.innerHTML += proyectoHTML;

  let color;

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
  console.log("Hola");
  
  contenedor.innerHTML = "";

  // Recorrer el array de personas del JSON
  for (const herramientaJSON of datosJSON) {
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