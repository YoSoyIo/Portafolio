/*
    La función agregaProyectos sirve para agregar todos los proyectos que pueden ser recuperados de una ruta especifica declarada por
    un archivo externo que funciona como lista de proyectos.


*/
function agregarProyectos() {
  // projectTile es la variable que recupera el elemento HTML donde se colocara el código generado en esta función con las ligas a los Proyectos
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
        <img src="img/Cesar.png" alt="Imagen random" />
        <p class="project-title">Más proyectos...</p>
      </div>
    </a>
  `;

  projectTile.innerHTML += proyectoHTML;
}



    // Ejemplo: agregar 3 proyectos
    agregarProyectos();
