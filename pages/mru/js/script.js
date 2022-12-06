let problema = prompt("Ingrese el problema de MRU que desea resolver. por ejemplo: distancia");

if ((problema == "distancia")||(problema == "Distancia")){
    let velocidad = parseFloat (prompt("Ingresar la velocidad en Km/h"));
    let tiempo = parseFloat (prompt("Ingresar el tiempo en Hs"));
    let distancia = velocidad * tiempo;
    let distanciaEnMetros = distancia * 1000;
    alert("La distancia que recorrio o recorrerá es de "+distancia+"Km o tambien "+distanciaEnMetros+"m");
}
else if ((problema == "tiempo")||(problema == "Tiempo")){
    let distancia = parseFloat (prompt("Ingrese la distancia en Km"));
    let velocidad = parseFloat (prompt("Ingresar la velocidad en Km/h"));
    let tiempo = distancia / velocidad;
    let tiempoEnSegundos = tiempo * 3600;
    alert("El tiempo que tardo es de "+tiempo+"Hs o "+tiempoEnSegundos+"seg");
}
else if ((problema == "velocidad")||(problema == "Velocidad")){
    let distancia = parseFloat (prompt("Ingrese la distancia en Km"));
    let tiempo = parseFloat (prompt("Ingresar el tiempo en hs"));
    let velocidad = distancia / tiempo;
    let velocidadEnMetrosPorSegundos = velocidad / 3.6;
    alert("La velocidad es de "+velocidad+"Km/h o "+velocidadEnMetrosPorSegundos+"m/s");
}
else{
    alert("ERROR: Ingresar bien el nombre de su operacion.")
    let problema = prompt("Ingrese el problema de MRU que desea resolver. por ejemplo: distancia");
    if ((problema == "distancia")||(problema == "Distancia")){
        let velocidad = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        let tiempo = parseFloat (prompt("Ingresar el tiempo en Hs"));
        let distancia = velocidad * tiempo;
        let distanciaEnMetros = distancia * 1000;
        alert("La distancia que recorrio o recorrerá es de "+distancia+"Km o tambien "+distanciaEnMetros+"m");
    }
    else if ((problema == "tiempo")||(problema == "Tiempo")){
        let distancia = parseFloat (prompt("Ingrese la distancia en Km"));
        let velocidad = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        let tiempo = distancia / velocidad;
        let tiempoEnSegundos = tiempo * 3600;
        alert("El tiempo que tardo es de "+tiempo+"Hs o "+tiempoEnSegundos+"seg");
    }
    else if ((problema == "velocidad")||(problema == "Velocidad")){
        let distancia = parseFloat (prompt("Ingrese la distancia en Km"));
        let tiempo = parseFloat (prompt("Ingresar el tiempo en hs"));
        let velocidad = distancia / tiempo;
        let velocidadEnMetrosPorSegundos = velocidad / 3.6;
        alert("La velocidad es de "+velocidad+"Km/h o "+velocidadEnMetrosPorSegundos+"m/s");
    }
}