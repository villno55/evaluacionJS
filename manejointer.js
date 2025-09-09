export function actualizarUI(datos) {
  document.getElementById("txtAutos").value = datos.autos;
  document.getElementById("txtBuses").value = datos.buses;
  document.getElementById("txtCamiones").value = datos.camiones;
  document.getElementById("txtTotal").value = "$ " + datos.total;
}

