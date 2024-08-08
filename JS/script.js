async function agregarProyectos(cantidad) {
  const contenedor = document.querySelector(".project-tile");
  const respuesta = await fetch('JSON/proyectos.json'); // Ruta completa al archivo
  const datosJSON = await respuesta.json();
  let color;
  let contador = 0;

  contenedor.innerHTML = "";


  // Recorrer el array de personas del JSON
  for (const proyectosJson of datosJSON.proyectos) {
    const nombre = proyectosJson.nombre;
    const link = proyectosJson.link;
    const imagen = proyectosJson.imagen;
    const descripcion = proyectosJson.descripcion;
    const alt = proyectosJson.alt;
    const listaHerramientas = proyectosJson.listaHerramientas;

    let = listaJunta = "";
    for(let i = 0; i < listaHerramientas.length; i += 1){
      listaJunta += listaHerramientas[i]+`
      
      `;
    }

    contenedor.innerHTML += `
        <a href="${link}" target="_blank">
          <div class="pro-box">
            <img src="${imagen}" alt="${alt}" />
            <div id=herramientas-contenedor>
              ${listaJunta}
            </div>
            <p class="project-title">${nombre}</p>
            <div style="display:none">${descripcion}</div>
          </div>
        </a>`; 
    if(cantidad < 1){
      contador += 1;

      if(contador > 4){
        break;
      }
    }
  }

  if(cantidad < 1){
    contenedor.innerHTML += `
        <a onclick="agregarProyectos(1);">
          <div class="pro-box">
            <img src="img/masproyectos.jpg" alt="Imagen random" />
            <p class="project-title">Más proyectos...</p>
          </div>
        </a>
      `;
  }else{
    contenedor.innerHTML += `
        <a onclick="agregarProyectos(0);">
          <div class="pro-box">
            <img src="img/masproyectos.jpg" alt="Imagen random" />
            <p class="project-title">Menos proyectos...</p>
          </div>
        </a>
      `;
  }

  /*
  Anteriormente servia para la seccion de conocimientos
  for (var i = 1; i < 5; i++) {
    color = generarNuevoColor();
    document.getElementById("perfil" + i).style.backgroundColor = color;
    document.getElementById("perfil" + i).style.color = obtenerColorOpuesto(color);
  }*/
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

function generarLenguajes(listaHerramientas){
  const contenedor = document.getElementById("container-tool");
  
  contenedor.innerHTML = "";
  console.log(listaHerramientas.length);
  // Recorrer el array de personas del JSON
  for (let i = 0; i < listaHerramientas.length; i += 1) {
    const nombre = listaHerramientas[i].nombre;
    const imagen = listaHerramientas[i].imagenSVG;

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

let lista = fetch('JSON/herramientas.json')
  .then(response => response.json())
  .then(data => {
    let listaHerramientas = data.listaHerramientas;
    agregarProyectos(0);
    generarLenguajes(listaHerramientas);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }