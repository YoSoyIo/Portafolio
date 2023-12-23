function agregarProyectos(cantidad) {
      var projectTile = document.querySelector('.project-tile');

      var proyectoHTML = `
        <a href="Paginas/cesar.html" target="_blank">
          <div class="pro-box">
            <img src="img/Cesar.PNG" alt="Imagen random" />
            <p class="project-title">Proyecto 1</p>
          </div>
        </a>
      `;

      for (var i = 2; i <= cantidad; i++) {
        var proyectoHTML = `
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
    }

    // Ejemplo: agregar 3 proyectos
    agregarProyectos(5);
