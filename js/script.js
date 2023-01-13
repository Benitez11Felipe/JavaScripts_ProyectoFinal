const normal = document.getElementById ('normal'),
supermercado = document.getElementById ('supermercado'),
promedio = document.getElementById ('promedio'),
mru = document.getElementById ('mru'),
metrosCuadrados = document.getElementById ('metrosCuadrados'),
parrafoPrincipal = document.getElementById('parrafoEliminado'),
divNormal = document.createElement('div'),
divSupermercado = document.createElement('div'),
divMru = document.createElement('div'),
divMruVelocidad = document.createElement('div'),
divMruEspacio = document.createElement('div'),
divMruTiempo = document.createElement('div'),
velocidad = document.getElementById('botonVelocidad'),
espacio = document.getElementById('botonEspacio'),
tiempo = document.getElementById('botonTiempo');

normal.onclick = () => {
 
    parrafoPrincipal.remove();
    divSupermercado.remove();
    divMru.remove();
    divMruTiempo.remove();
    divMruVelocidad.remove();
    divMruEspacio.remove();

    document.body.appendChild(divNormal);
    divNormal.innerHTML = '<form><p><input type="number"  id="numero1"/><input type="text" id="operacion" /><input type="number"  id="numero2"/>=</p><p class="resultado" id="resultado">Su resultado es = </p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" /></p><p class="descripcion">Para poder realizar su operacion matematica debera ingresar en elsegundo cuadro (En el cuadro del medio) la opcion que usted desearealizar: <br>+ = Para Suma <br>- = Para Resta <br>* = para Multiplicacion <br>/ = para Division <br></p></form>'

    const numero1 = document.getElementById("numero1"),
    operacion = document.getElementById("operacion"),
    numero2 = document.getElementById("numero2"),
    calcular = document.getElementById("botonCalcular"),
    resultado = document.getElementById("resultado");

    calcular.onclick = (funciónAlPresionarElBoton);

    function funciónAlPresionarElBoton() {

        lectura_de_numero1 = parseInt(numero1.value);
        lectura_de_numero2 = parseInt(numero2.value);

        if (operacion.value == "+") {
            resultado.innerHTML = lectura_de_numero1+" + "+lectura_de_numero2+" = "+Math.floor(lectura_de_numero1 + lectura_de_numero2);
        }
        else if (operacion.value == "-") {
            resultado.innerHTML = lectura_de_numero1+" - "+lectura_de_numero2+" = "+Math.floor(lectura_de_numero1 - lectura_de_numero2);
        }
        else if (operacion.value == "*") {
            resultado.innerHTML = lectura_de_numero1+" x "+lectura_de_numero2+" = "+Math.floor(lectura_de_numero1 * lectura_de_numero2);
        }else if (operacion.value == "/") {
            resultado.innerHTML = lectura_de_numero1+" / "+lectura_de_numero2+" = "+Math.floor(lectura_de_numero1 / lectura_de_numero2);
        }
    }
};

mru.onclick = () => {

    parrafoPrincipal.remove();
    divNormal.remove();
    divSupermercado.remove();

    document.body.appendChild(divMru);
    divMru.innerHTML = '<p>Seleccionar la opcion que usted desea resolver</p><input class="tresPrincipales" type="button" id="botonVelocidad" value="Velocidad"></input><input class="tresPrincipales" type="button" id="botonEspacio" value="Espacio"></input><input class="tresPrincipales" type="button" id="botonTiempo" value="Tiempo"></input>'

    
    const velocidad = document.getElementById('botonVelocidad'),
    espacio = document.getElementById('botonEspacio'),
    tiempo = document.getElementById('botonTiempo');

    velocidad.onclick = () => {
        divMruTiempo.remove();
        divMruEspacio.remove();

        document.body.appendChild(divMruVelocidad);
        divMruVelocidad.innerHTML = '<form><p class="mru">Ingresar el Espacio en metros: <br><input type="number" id="numero2">m <br>Ingresar el Tiempo en segundos: <br><input type="number" id="numero1">Seg</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" /></p></form>'

        const numero1 = document.getElementById("numero1"),
        numero2 = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");

        calcular.onclick = (funciónAlPresionarElBoton);

        function funciónAlPresionarElBoton() {

            lectura_de_numero1 = parseInt(numero1.value);
            lectura_de_numero2 = parseInt(numero2.value);

            resultado.innerHTML = "La velocidad que recorrio o recorrera el vehiculo es de: "+(lectura_de_numero2 / lectura_de_numero1)+"m/s";
        }
    }

    espacio.onclick = () => {
        divMruTiempo.remove();
        divMruVelocidad.remove();

        document.body.appendChild(divMruEspacio);
        divMruEspacio.innerHTML = '<form><p class="mru">Ingresar la Velocidad en metros por segundos: <br><input type="number" id="numero2">m/s <br>Ingresar el Tiempo en segundos: <br><input type="number" id="numero1">seg</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar"/></p></form>'

        const numero1 = document.getElementById("numero1"),
        numero2 = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");

        calcular.onclick = (funciónAlPresionarElBoton);

        function funciónAlPresionarElBoton() {

            lectura_de_numero1 = parseInt(numero1.value);
            lectura_de_numero2 = parseInt(numero2.value);

            resultado.innerHTML = "El espacio que recorrio o recorrerá el vehiculo es de: "+(lectura_de_numero2 * lectura_de_numero1)+"m";
        }
    }

    tiempo.onclick = () => {
        divMruEspacio.remove();
        divMruVelocidad.remove();

        document.body.appendChild(divMruTiempo);
        divMruTiempo.innerHTML = '<form><p class="mru">Ingresar el Espacio en metros: <br><input type="number" id="numero2">m <br>Ingresar la Velocidad en metros por segundos: <br><input type="number" id="numero1">m/s</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" /></p></form>'

        const numero1 = document.getElementById("numero1"),
        numero2 = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");

        calcular.onclick = (funciónAlPresionarElBoton);

        function funciónAlPresionarElBoton() {

            lectura_de_numero1 = parseInt(numero1.value);
            lectura_de_numero2 = parseInt(numero2.value);

            resultado.innerHTML = "El tiempo que tardo o tardará el vehiculo es de: "+(lectura_de_numero2 / lectura_de_numero1)+"seg";
        }
    }
};

metrosCuadrados.onclick = () => {

    parrafoPrincipal.remove();
    divNormal.remove();
    divSupermercado.remove();

    document.body.appendChild(divMru);
    divMru.innerHTML = '<form><p class="mru">Ingresar el Largo en metros: <br><input type="number" id="numero2">m <br>Ingresar el Ancho en metros: <br><input type="number" id="numero1">m/s</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" /></p></form>'
    
    const numero1 = document.getElementById("numero1"),
    numero2 = document.getElementById("numero2"),
    calcular = document.getElementById("botonCalcular"),
    resultado = document.getElementById("resultado");

    calcular.onclick = (funciónAlPresionarElBoton);

    function funciónAlPresionarElBoton() {

        lectura_de_numero1 = parseInt(numero1.value);
        lectura_de_numero2 = parseInt(numero2.value);

        resultado.innerHTML = "El resultado es de: "+(lectura_de_numero2 * lectura_de_numero1)+" metros cuadrados";
    }
};