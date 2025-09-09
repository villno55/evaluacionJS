export function actualizarUI(datos) {
  document.getElementById("txtCarros").value = datos.carros;
  document.getElementById("txtBuses").value = datos.buses;
  document.getElementById("txtCamiones").value = datos.camiones;
  document.getElementById("txtTotal").value = "$ " + datos.total;
}

export function habilitarControles(estado) {
  document.getElementById("btnCarro").disabled = !estado;
  document.getElementById("btnBus").disabled = !estado;
  document.getElementById("btnCamion").disabled = !estado;
  document.getElementById("btnCerrar").disabled = !estado;
  document.getElementById("btnAbrir").disabled = estado;
}


