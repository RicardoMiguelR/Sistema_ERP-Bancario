document.addEventListener("DOMContentLoaded", () => {
  const pais = document.getElementById("pais");
  const estado = document.getElementById("estado");
  const municipio = document.getElementById("municipio");

  pais.addEventListener("change", () => {
    const paisId = pais.value;

    const cargarEstados = async () => {
      try {
        const response = await fetch(`/ajax/cargar-estados/?pais_id=${paisId}`);
        if (!response.ok) {
          throw new Error("Error al cargar estados");
        }
        const data = await response.json();

        estado.innerHTML = `<option value="">Seleccione</option>`;
        municipio.innerHTML = `<option value="">Seleccione un estado primero</option>`;
        data.forEach((edo) => {
          estado.innerHTML += `<option value="${edo.id}">${edo.nombre}</option>`;
        });
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    cargarEstados();
  });

  estado.addEventListener("change", () => {
    const estadoId = estado.value;

    const cargarMunicipios = async () => {
      try {
        const response = await fetch(
          `/ajax/cargar-municipios/?estado_id=${estadoId}`
        );
        if (!response.ok) {
          throw new Error("Error al cargar municipios");
        }
        const data = await response.json();

        municipio.innerHTML = `<option value="">Seleccione</option>`;
        data.forEach((mpio) => {
          municipio.innerHTML += `<option value="${mpio.id}">${mpio.nombre}</option>`;
        });
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    cargarMunicipios();
  });
});
