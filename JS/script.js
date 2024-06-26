function agregarProyectos(cantidad) {
      var projectTile = document.querySelector('.project-tile');

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
      `;

      projectTile.innerHTML += proyectoHTML;

      for (var i = 5; i <= cantidad; i++) {
        proyectoHTML = `
          <a href="" target="_blank">
            <div class="pro-box">
              <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg" alt="Imagen random" />
              <p class="project-title">Proyecto ${i}</p>
            </div>
          </a>
        `;

        projectTile.innerHTML += proyectoHTML;
      }

      proyectoHTML = `
        <a href="" target="_blank">
          <div class="pro-box">
            <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg" alt="Imagen random" />
            <p class="project-title">Más proyectos...</p>
          </div>
        </a>
      `;

      projectTile.innerHTML += proyectoHTML;

      for(var i = 1; i < 5; i++){
        document.getElementById("perfil"+i).style.backgroundColor = generarNuevoColor();
      }
    }

    function generarNuevoColor(){
      var simbolos, color;
      simbolos = "0123456789ABCDEF";
      color = "#";
    
      for(var i = 0; i < 6; i++){
        color = color + simbolos[Math.floor(Math.random() * 16)];
      }
    
      return color;
    }

    // Ejemplo: agregar 3 proyectos
    agregarProyectos(5);
