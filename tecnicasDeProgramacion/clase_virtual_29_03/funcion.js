function anterior(numero){
    return numero - 1
}

function triple(numero){
    return numero * 3
}

function anteriorDeltriple(numero){
    let resultadoTriple = triple(numero)
    let resultadoFinal = anterior(resultadoTriple)

    return resultadoFinal;
}

console.log(anteriorDeltriple(10))