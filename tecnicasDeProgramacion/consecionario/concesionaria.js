const autos = require("./autos.js");
const clientes = require("./clientes.js");
var concesionaria = {
  autos: autos,
  clientes: clientes,
  buscarAuto(patente) {
    for (let i = 0; i < autos.length; i++) {
      if (patente == autos[i].patente) {
        return autos[i];
      }
    }
    return null;
  },
  venderAuto(patente) {
    let auto = this.buscarAuto(patente);
    if (auto != undefined) {
      if (auto.vendido == false) {
        auto.vendido = true;
        return auto;
      }
    } else {
      return "Auto no encontrado.\nPantente: " + patente;
    }
  },
  autoParaLaVenta() {
    return this.autos.filter((autos) => autos.vendido == false);
  },
  listaDeVentas() {
    let vendidos = this.autos.filter((autos) => autos.vendido == true);
    let listaPrecio = [];
    for (let i = 0; i < vendidos.length; i++) {
      listaPrecio.push(vendidos[i].precio);
    }

    return listaPrecio;
  },
  totalDeVentas() {
    let listaVendidos = concesionaria.listaDeVentas(autos);
    let sumatoria = listaVendidos.reduce(
      (actual, siguiente) => actual + siguiente
    );
    return sumatoria;
  },
  puedeComprar(auto, clientes) {
    let autoAComparar = this.buscarAuto(auto);
    let calculoCuotas = autoAComparar.precio / autoAComparar.cuotas;

    if (autoAComparar.precio <= clientes[0].capacidadDePagoTotal) {
      if (calculoCuotas <= clientes[0].capacidadDePagoEnCuotas) {
        return "Puede comprar";
      }
    }
    return "No puede comprar";
  },
  puedeComprarDos(clientes) {
    let autosAComparar = this.autoParaLaVenta();

        for (let i = 0; i < autosAComparar.length; i++){
        let calculoCuotas = autosAComparar[i].precio / autosAComparar[i].cuotas;
        if (autosAComparar[i].precio <= clientes[0].capacidadDePagoTotal) {
            if (calculoCuotas <= clientes[0].capacidadDePagoEnCuotas) {
            console.log("Patente -> " + autosAComparar[i].patente + ": Puede comprar"); 

            }
        }else{
            console.log("Patente -> " + autosAComparar[i].patente + ": No puede comprar");
         }
        
    }
  },
}

// console.log("Buscar Auto");
// console.log(concesionaria.buscarAuto("JJK235"));
// console.log("vender auto");
// console.log(concesionaria.venderAuto("JJK235"));
// console.log("Auto para la venta");
// console.log(concesionaria.autoParaLaVenta());
// console.log("Lista de ventas");
// console.log(concesionaria.listaDeVentas());
// console.log("total de ventas");
// console.log(concesionaria.totalDeVentas());
// console.log("El cliente puede Comprar?");
// console.log(concesionaria.puedeComprar(concesionaria.autos,concesionaria.clientes));
console.log(concesionaria.puedeComprarDos(concesionaria.clientes));
