import Peaje from "./pasaPeaje.js";
import { actualizarUI, habilitarControles } from "./actualizaUser.js";

const peaje = new Peaje();


const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");
const btnCarro = document.getElementById("btnCarro");
const btnBus = document.getElementById("btnBus");
const btnCamion = document.getElementById("btnCamion");


btnAbrir.addEventListener("click", () => {
  peaje.reiniciar();
  actualizarUI(peaje.datos());
  habilitarControles(true);
});

btnCerrar.addEventListener("click", () => {
  habilitarControles(false);
});

btnCarro.addEventListener("click", () => {
  peaje.registrar("carro");
  actualizarUI(peaje.datos());
});

btnBus.addEventListener("click", () => {
  peaje.registrar("bus");
  actualizarUI(peaje.datos());
});

btnCamion.addEventListener("click", () => {
  peaje.registrar("camion");
  actualizarUI(peaje.datos());
});






