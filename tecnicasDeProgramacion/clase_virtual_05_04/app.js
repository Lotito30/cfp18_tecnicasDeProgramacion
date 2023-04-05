// Creando Objetos
let deportista = {
    nombre : "jesus",
    energia : 100,
    experiencia : 1,
    entrenarHoras : function(cantidadHoras){
        this.energia-=cantidadHoras*5
        this.experiencia += cantidadHoras*2
    }
}

console.log(deportista.energia,deportista.experiencia);
deportista.entrenarHoras(5)
console.log(deportista.energia,deportista.experiencia);

// Numeros impares 

function noParesDeContarImparesHasta(x){
    let cantidad = 0
    for (let i = 1; i <= x; i++){
        if( (i % 2) != 0){
            cantidad += 1
        }
    }
    return cantidad    
}
console.log("Numeros impares");
console.log(noParesDeContarImparesHasta(13))

// comparar 2 numeros y retornar el numero mayor
function comparaDosNumeros(num1,num2){
    if(num1>num2){
            return num1
    }else if(num1===num2){
        return "Son iguales"
    }
    return num2
}
let num1 = 78
let num2 = 7
console.log("Numero mayor entre "+ num1 +" y " + num2);
console.log(comparaDosNumeros(num1,num2))

// funcion que retorna si el numero es positivo o negativo

function positivo (num){
    if(num >= 0){
        return "Positivo"
    }
    return "Negativo"
}
let num = -10
console.log("El numero " + num + " es: " + positivo(num));
