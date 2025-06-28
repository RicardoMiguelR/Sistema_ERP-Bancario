document.addEventListener("DOMContentLoaded", () => {
  const tipoUsuario = document.getElementById("tipoUsuario");
  const camposDinamicos = document.getElementById("camposDinamicos");

  tipoUsuario.addEventListener("change", () => {
    // # Escuchador de cambios

    const valorSelectTipoUsuario =
      tipoUsuario.options[tipoUsuario.selectedIndex].text; // # Viculamos con valores tipoUsuarios desde la BD

    camposDinamicos.innerHTML = ""; // # Limpiamos campos dinamicos inicialmente

    // Condicionamos el elemento a mostrar dependiendo a lo que se elija en el select de tipo de usuario ->
    if (valorSelectTipoUsuario === "Persona") {
      camposDinamicos.insertAdjacentHTML(
        "beforeend",
        `
            <div class="apartado1 mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <label for="nombre" class="form-label">Nombre completo</label>
                        <input type="text" id="nombre" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="fecha_nacimiento" class="form-label">Fecha de nacimiento</label>
                        <input type="date" id="fecha_nacimiento" class="form-control">
                    </div>
                </div>
            </div>
        `
      );
    } else if (valorSelectTipoUsuario === "Empresa") {
      camposDinamicos.insertAdjacentHTML(
        "beforeend",
        `
            <div class="apartado2 mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <label for="razon-social" class="form-label">Razon social</label>
                        <input type="text" id="razon-social" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="rfc" class="form-label">RFC</label>
                        <input type="text" id="rfc" class="form-control">
                    </div>
                </div>
            </div>
        `
      );
    } else if (valorSelectTipoUsuario === "") {
      camposDinamicos.insertAdjacentHTML(
        "beforeend",
        `
                    <div class="alert alert-warning" role="alert">
                        ¡Selecciona una opción válida!
                    </div>
                `
      );
    }
  });
});
