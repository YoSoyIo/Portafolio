function agregarProyectos() {
  var projectTile = document.querySelector('.project-tile');
  var proyectos = JSON.parse(
    fetch('JSON/project.json').then(response => response.text())
  );
  var numProyectos = proyectos.length;

  for (var i = 0; i < numProyectos; i++) {
    var proyectoHTML = `
      <a href="${proyectos[i].href}" target="_blank">
        <div class="pro-box">
          <img src="${proyectos[i].image}" alt="${proyectos[i].alt}" />
          <p class="project-title">${proyectos[i].name}</p>
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
    agregarProyectos();
