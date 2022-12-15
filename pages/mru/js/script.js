function calculo (num1, num2, operacion){
    let resultadoMru = 0
    switch (operacion) {
        case "espacio":
            resultadoMru = ((num1 * num2).toFixed(2));
            distanciaEnMetros = ((resultadoMru * 1000).toFixed(2));
            alert("La distancia que recorrio o recorrerá es de "+resultadoMru+"Km o tambien "+distanciaEnMetros+"m");
            break;
        case "tiempo":
            resultadoMru = ((num1 / num2).toFixed(2));
            tiempoEnSegundos = ((resultadoMru * 3600).toFixed(2));
            alert("El tiempo que tardo es de "+resultadoMru+"Hs o "+tiempoEnSegundos+"seg");
            break;
        case "velocidad":
            resultadoMru = ((num1 / num2).toFixed(2));
            velocidadEnMetrosPorSegundos = ((resultadoMru / 3.6).toFixed(2));
            alert("La velocidad es de "+velocidad+"Km/h o "+velocidadEnMetrosPorSegundos+"m/s");
            break;
        default:
            break;
    }
}

let problema = prompt("Ingrese el problema de MRU que desea resolver. por ejemplo: Espacio - Velocidad - Tiempo");

if ((problema == "espacio")||(problema == "Espacio")||(problema == "ESPACIO")){
    let num1 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
    let num2 = parseFloat (prompt("Ingresar el tiempo en Hs"));
    calculo (num1, num2, "espacio");
}
else if ((problema == "tiempo")||(problema == "Tiempo")|(problema == "TIEMPO")){
    let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
    let num2 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
    calculo (num1, num2, "tiempo");
}
else if ((problema == "velocidad")||(problema == "Velocidad")||(problema == "VELOCIDAD")){
    let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
    let num2 = parseFloat (prompt("Ingresar el tiempo en hs"));
    calculo (num1, num2, "velocidad");
}
else{
    alert("ERROR: Ingresar bien el nombre de su operacion.")
    let problema = prompt("Ingrese el problema de MRU que desea resolver. por ejemplo: Espacio - Velocidad - Tiempo");
    if ((problema == "espacio")||(problema == "Espacio")||(problema == "ESPACIO")){
        let num1 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        let num2 = parseFloat (prompt("Ingresar el tiempo en Hs"));
        calculo (num1, num2, "espacio");
    }
    else if ((problema == "tiempo")||(problema == "Tiempo")|(problema == "TIEMPO")){
        let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
        let num2 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        calculo (num1, num2, "tiempo");
    }
    else if ((problema == "velocidad")||(problema == "Velocidad")||(problema == "VELOCIDAD")){
        let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
        let num2 = parseFloat (prompt("Ingresar el tiempo en hs"));
        calculo (num1, num2, "velocidad");
    }
}
