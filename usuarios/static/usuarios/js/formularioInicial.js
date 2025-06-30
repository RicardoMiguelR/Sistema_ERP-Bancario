document.addEventListener("DOMContentLoaded", () => {
  const tipoUsuario = document.getElementById("tipoUsuario");
  const camposDinamicos = document.getElementById("camposDinamicos");

  // Escuchador de cambios ->
  tipoUsuario.addEventListener("change", () => {
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
                        <input type="text" name="nombre" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="fecha_nacimiento" class="form-label">Fecha de nacimiento</label>
                        <input type="date" name="fecha_nacimiento" class="form-control">
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
                        <label for="razon_social" class="form-label">Razon social</label>
                        <input type="text" name="razon_social" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="rfc" class="form-label">RFC</label>
                        <input type="text" name="rfc" class="form-control">
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
