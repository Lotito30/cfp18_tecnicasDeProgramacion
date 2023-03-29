// importando con require("ruta")

// clase 17/03 array

const jesusD = require("./clase_virtual_15_03/jesus/jesus")
console.log("Mi nombre es: "+jesusD[0] + " "+jesusD[1]+ " y "+ jesusD[2]);

// clase 22/03 calculadora
const variableSuma = require("./clase_virtual_22_03/sumar")
const variableResta = require("./clase_virtual_22_03/restar")
const variableMultiplicacion = require("./clase_virtual_22_03/multiplicar")
const variableDivision = require("./clase_virtual_22_03/division")

console.log("La suma de los valores es: " + variableSuma);
console.log("La resta de los valores es: " + variableResta);
console.log("La multiplicacion de los valores es: " + variableMultiplicacion);
console.log("La division de los valores es: " + variableDivision);