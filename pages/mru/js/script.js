function calculo (num1, num2, operacion){
    let resultadoMru = 0
    switch (operacion) {
        case "espacio":
            resultadoMruEspacio = ((num1 * num2).toFixed(2));
            distanciaEnMetros = ((resultadoMruEspacio * 1000).toFixed(2));
            alert("La distancia que recorrio o recorrerá es de "+resultadoMruEspacio+"Km o tambien "+distanciaEnMetros+"m");
            break;
        case "tiempo":
            resultadoMruTiempo = ((num1 / num2).toFixed(2));
            tiempoEnSegundos = ((resultadoMruTiempo * 3600).toFixed(2));
            alert("El tiempo que tardo es de "+resultadoMruTiempo+"Hs o "+tiempoEnSegundos+"seg");
            break;
        case "velocidad":
            resultadoMruVelocidad = ((num1 / num2).toFixed(2));
            velocidadEnMetrosPorSegundos = ((resultadoMruVelocidad / 3.6).toFixed(2));
            alert("La velocidad es de "+resultadoMruVelocidad+"Km/h o "+velocidadEnMetrosPorSegundos+"m/s");
            break;
        default:
            break;
    }
}

let problema = prompt("Ingrese el problema de MRU que desea resolver. \nPor ejemplo: Espacio - Velocidad - Tiempo");

if (problema.toLowerCase() == "espacio"){
    let num1 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
    let num2 = parseFloat (prompt("Ingresar el tiempo en Hs"));
    calculo (num1, num2, "espacio");
}
else if (problema.toLowerCase() == "tiempo"){
    let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
    let num2 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
    calculo (num1, num2, "tiempo");
}
else if (problema.toLowerCase() == "velocidad"){
    let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
    let num2 = parseFloat (prompt("Ingresar el tiempo en hs"));
    calculo (num1, num2, "velocidad");
}else{
        alert("ERROR: Ingresar bien el nombre de su operacion.")
        let problema = prompt("Ingrese el problema de MRU que desea resolver. \nPor ejemplo: Espacio - Velocidad - Tiempo");

    if (problema.toLowerCase() == "espacio"){
        let num1 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        let num2 = parseFloat (prompt("Ingresar el tiempo en Hs"));
        calculo (num1, num2, "espacio");
    }
    else if (problema.toLowerCase() == "tiempo"){
        let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
        let num2 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        calculo (num1, num2, "tiempo");
    }
    else if (problema.toLowerCase() == "velocidad"){
        let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
        let num2 = parseFloat (prompt("Ingresar el tiempo en hs"));
        calculo (num1, num2, "velocidad");
    }
}