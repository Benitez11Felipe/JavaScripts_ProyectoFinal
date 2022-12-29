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

function MRU (velocidad, tiempo, espacio){
    this.velocidad = velocidad;
    this.tiempo = tiempo;
    this.espacio = espacio;
}

let problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));

while(problema != "-1"){

    if (problema == "1"){

        let num1 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        let num2 = parseFloat (prompt("Ingresar el tiempo en Hs"));
        calculo (num1, num2, "espacio");

        const espacio = new MRU;
        espacio.velocidad = num1+"Km/h";
        espacio.tiempo = num2+"Hs";
        espacio.espacio = resultadoMruEspacio+"Km";

        console.log(espacio);

        problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));
    }
    else if (problema == "3"){

        let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
        let num2 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
        calculo (num1, num2, "tiempo");
        
        const tiempo = new MRU;
        tiempo.espacio = num1+"Km";
        tiempo.velocidad = num2+"Km/h";
        tiempo.tiempo = resultadoMruTiempo+"Hs";

        console.log(tiempo);

        problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));
    }
    else if (problema == "2"){

        let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
        let num2 = parseFloat (prompt("Ingresar el tiempo en hs"));
        calculo (num1, num2, "velocidad");
        
        const velocidad = new MRU;
        velocidad.espacio = num1+"Km";
        velocidad.tiempo = num2+"Hs";
        velocidad.velocidad = resultadoMruVelocidad+"Km/h";

        console.log(velocidad);

        problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));
    }else{
            alert("ERROR: Ingresar bien el nombre de su operacion.")
            
            problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));

            if (problema == "1"){

                let num1 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
                let num2 = parseFloat (prompt("Ingresar el tiempo en Hs"));
                calculo (num1, num2, "espacio");
        
                const espacio = new MRU;
                espacio.velocidad = num1+"Km/h";
                espacio.tiempo = num2+"Hs";
                espacio.espacio = resultadoMruEspacio+"Km";
        
                console.log(espacio);
        
                problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));
            }
            else if (problema == "3"){
        
                let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
                let num2 = parseFloat (prompt("Ingresar la velocidad en Km/h"));
                calculo (num1, num2, "tiempo");

                const espacio = new MRU;
                espacio.velocidad = num1+"Km/h";
                espacio.tiempo = num2+"Hs";
                espacio.espacio = resultadoMruEspacio+"Km";
        
                console.log(espacio);
        
        
                problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));
            }
            else if (problema == "2"){
                let num1 = parseFloat (prompt("Ingrese la distancia en Km"));
                let num2 = parseFloat (prompt("Ingresar el tiempo en hs"));
                calculo (num1, num2, "velocidad");
        
                problema = parseInt (prompt ("Ingrese el problema de MRU que desea resolver. \n(1)Espacio\n(2)Velocidad \n(3)Tiempo\n(-1)Para finalizar"));
            }
        }
}