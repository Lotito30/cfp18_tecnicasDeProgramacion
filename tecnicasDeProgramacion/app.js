// importando con require("ruta")

// clase 17/03 array

const jesusD = require("./clase_virtual_15_03/jesus/jesus")
console.log("Mi nombre es: "+jesusD[0] + " "+jesusD[1]+ " y "+ jesusD[2]);

// clase 22/03 calculadora
const suma = require("./clase_virtual_22_03/sumar")
const resta = require("./clase_virtual_22_03/restar")
const multiplicacion = require("./clase_virtual_22_03/multiplicar")
const division = require("./clase_virtual_22_03/division")

console.log("La suma de los valores es: " + suma);
console.log("La resta de los valores es: " + resta);
console.log("La multiplicacion de los valores es: " + multiplicacion);
console.log("La division de los valores es: " + division);