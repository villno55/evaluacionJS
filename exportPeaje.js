export default class pasaPeaje {
  constructor() {
    this.carros = 0;
    this.buses = 0;
    this.camiones = 0;
    this.total = 0;
    this.costo = { carro: 5000, bus: 10000, camion: 15000 };
  }

  registrar(tipo) {
    if (tipo === "carro") { this.carros++; this.total += this.costo.carro; }
    if (tipo === "bus") { this.buses++; this.total += this.costo.bus; }
    if (tipo === "camion") { this.camiones++; this.total += this.costo.camion; }
  }

  datos() {
    return {
      carros: this.carros,
      buses: this.buses,
      camiones: this.camiones,
      total: this.total
    };
  }

  reiniciar() {
    this.carros = 0;
    this.buses = 0;
    this.camiones = 0;
    this.total = 0;
  }
}





  

