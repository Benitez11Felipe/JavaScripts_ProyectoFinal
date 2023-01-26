const { value: email } = Swal.fire({
    title: 'Ingresar correo electrónico',
    input: 'email',
    inputPlaceholder: 'Ingresar su correo electronico'
})
  
if (email) {
    Swal.fire(`Entered email: ${email}`)
}

const parrafoPrincipal = document.getElementById('parrafoEliminado'),
normal = document.getElementById ('normal'),
divNormal = document.createElement('div'),
fracciones = document.getElementById ('fracciones'),
divFracciones = document.createElement('div'),
mru = document.getElementById ('mru'),
divMru = document.createElement('div'),
velocidad = document.getElementById('botonVelocidad'),
divMruVelocidad = document.createElement('div'),
espacio = document.getElementById('botonEspacio'),
divMruEspacio = document.createElement('div'),
tiempo = document.getElementById('botonTiempo'),
divMruTiempo = document.createElement('div'),
metrosCuadrados = document.getElementById ('metrosCuadrados'),
divMetrosCuadrados = document.createElement('div'),
imc = document.getElementById ('IMC'),
divImc = document.createElement('div');

normal.onclick = () => {
 
    parrafoPrincipal.remove();
    divFracciones.remove();
    divMru.remove();
    divMruTiempo.remove();
    divMruVelocidad.remove();
    divMruEspacio.remove();
    divMetrosCuadrados.remove();
    divImc.remove();

    document.body.appendChild(divNormal);
    divNormal.innerHTML = '<form><p class="descripcion">Para poder realizar su operacion matematica debera ingresar en el segundo cuadro (El cuadro del medio)>el signo del problema matematico que usted desea realizar</p><p><input type="number"  id="numero1"/><select id="operacion"><option value="none">operacion</option><option value="+">+</option><option value="-">-</option><option value="x">x</option><option value="/">÷</option></select><input type="number"  id="numero2"/></p><p class="resultado" id="resultado">Su resultado es = </p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'

    const numero1 = document.getElementById("numero1"),
    operacion = document.getElementById("operacion"),
    numero2 = document.getElementById("numero2"),
    calcular = document.getElementById("botonCalcular"),
    resultado = document.getElementById("resultado");

    calcular.onclick = (funciónAlPresionarElBoton);

    function funciónAlPresionarElBoton() {

        lectura_de_numero1 = parseFloat(numero1.value);
        lectura_de_numero2 = parseFloat(numero2.value);

        if (operacion.value == "+") {

            resultado.innerHTML = lectura_de_numero1+" + "+lectura_de_numero2+" = "+(lectura_de_numero1 + lectura_de_numero2);

            sessionStorage.setItem('Operacion matematica suma', resultado.innerHTML);

        }
        else if (operacion.value == "-") {

            resultado.innerHTML = lectura_de_numero1+" - "+lectura_de_numero2+" = "+(lectura_de_numero1 - lectura_de_numero2);

            sessionStorage.setItem('Operacion matematica resta', resultado.innerHTML);

        }
        else if (operacion.value == "x"){

            resultado.innerHTML = lectura_de_numero1+" x "+lectura_de_numero2+" = "+(lectura_de_numero1 * lectura_de_numero2);
            
            sessionStorage.setItem('Operacion matematica multiplicacion', resultado.innerHTML);

        }else if (operacion.value == "/") {

            resultado.innerHTML = lectura_de_numero1+" / "+lectura_de_numero2+" = "+(lectura_de_numero1 / lectura_de_numero2);
            
            sessionStorage.setItem('Operacion matematica division', resultado.innerHTML);

        }


    }

};

fracciones.onclick = () => {

    parrafoPrincipal.remove();
    divNormal.remove();
    divMru.remove();
    divMruTiempo.remove();
    divMruVelocidad.remove();
    divMruEspacio.remove();
    divMetrosCuadrados.remove();
    divImc.remove();

    document.body.appendChild(divFracciones);
    divFracciones.innerHTML = '<form><p class="descripcion">Para poder realizar su operacion matematica debera ingresar en el cuadro del medio el signo del problema matematico que usted desea realizar</p><p><input type="number" id="numeroFracciones1"/>/<input type="number" id="numeroFracciones2"/></p><p><select id="operacionFracciones"><option value="none">operacion</option><option value="+">+</option><option value="-">-</option><option value="x">x</option><option value="/">÷</option></select></p><p><input type="number"  id="numeroFracciones3"/>/<input type="number" id="numeroFracciones4"/></p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'

    const numero1 = document.getElementById("numeroFracciones1"),
    numero2 = document.getElementById("numeroFracciones2"),
    numero3 = document.getElementById("numeroFracciones3"),
    numero4 = document.getElementById("numeroFracciones4"),
    operacion = document.getElementById("operacionFracciones"),
    calcular = document.getElementById("botonCalcular"),
    resultado = document.getElementById("resultado");

    calcular.onclick = (funciónAlPresionarElBoton);

    function funciónAlPresionarElBoton() {

        lectura_de_numero1 = parseFloat(numero1.value);
        lectura_de_numero2 = parseFloat(numero2.value);
        lectura_de_numero3 = parseFloat(numero3.value);
        lectura_de_numero4 = parseFloat(numero4 .value);

        if (operacion.value == "+") {

            let abajo;
            let resultadoAbajo;
            let arriba;
            let resultadoArriba;

            abajo = (lectura_de_numero2 / lectura_de_numero4);

            if (abajo == "1") {

                resultadoAbajo = (lectura_de_numero2 * 1);
                arriba = (lectura_de_numero1 + lectura_de_numero3);

                resultado.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" + "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+resultadoAbajo;

                sessionStorage.setItem('Operacion matamatica de fracciones suma', resultado.innerHTML);

            }else {

                resultadoAbajo = (lectura_de_numero2 * lectura_de_numero4);
                arriba1 = (lectura_de_numero1 * lectura_de_numero4);
                arriba2 = (lectura_de_numero3 * lectura_de_numero2);
                resultadoArriba = (arriba1 + arriba2);

                resultado.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" + "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+resultadoArriba+"/"+resultadoAbajo

                sessionStorage.setItem('Operacion matamatica de fracciones suma', resultado.innerHTML);

            }
        }
        else if (operacion.value == "-") {

            let abajo;
            let resultadoAbajo;
            let arriba;
            let resultadoArriba;

            abajo = (lectura_de_numero2 / lectura_de_numero4);

            if (abajo == "1") {

                resultadoAbajo = (lectura_de_numero2 * 1);
                arriba = (lectura_de_numero1 - lectura_de_numero3);

                resultado.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" - "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+resultadoAbajo

                sessionStorage.setItem('Operacion matamatica de fracciones resta', resultado.innerHTML);

            }
            else {

                resultadoAbajo = (lectura_de_numero2 * lectura_de_numero4);
                arriba1 = (lectura_de_numero1 * lectura_de_numero4);
                arriba2 = (lectura_de_numero3 * lectura_de_numero2);
                resultadoArriba = (arriba1 - arriba2);

                resultado.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" - "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+resultadoArriba+"/"+resultadoAbajo

                sessionStorage.setItem('Operacion matamatica de fracciones resta', resultado.innerHTML);

            }
        }
        else if (operacion.value == "x") {

            let abajo;
            let arriba;
            
            arriba = (lectura_de_numero1 * lectura_de_numero3);
            abajo = (lectura_de_numero2 * lectura_de_numero4);

            resultado.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" x "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+abajo

            sessionStorage.setItem('Operacion matamatica de fracciones multiplicacion', resultado.innerHTML);

        }else if (operacion.value == "/") {

            let arriba;
            let abajo;
            
            arriba = (lectura_de_numero1 * lectura_de_numero4);
            abajo = (lectura_de_numero2 * lectura_de_numero3);

            resultado.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" ÷ "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+abajo

            sessionStorage.setItem('Operacion matamatica de fracciones division', resultado.innerHTML);

        }

    }

};

mru.onclick = () => {

    parrafoPrincipal.remove();
    divNormal.remove();
    divFracciones.remove();
    divMetrosCuadrados.remove();
    divImc.remove();

    document.body.appendChild(divMru);
    divMru.innerHTML = '<form id="mru"><p>Seleccionar la operacion que usted desea resolver</p><input class="tresPrincipales" type="button" id="botonVelocidad" value="Velocidad"></input><input class="tresPrincipales" type="button" id="botonEspacio" value="Espacio"></input><input class="tresPrincipales" type="button" id="botonTiempo" value="Tiempo"></input></form>'

    const velocidad = document.getElementById('botonVelocidad'),
    espacio = document.getElementById('botonEspacio'),
    tiempo = document.getElementById('botonTiempo');

    velocidad.onclick = () => {

        divMruTiempo.remove();
        divMruEspacio.remove();

        document.body.appendChild(divMruVelocidad);
        divMruVelocidad.innerHTML = '<form><p>Ingresar el Espacio en metros: <br><input type="number" id="numero2">m <br>Ingresar el Tiempo en segundos: <br><input type="number" id="numero1">Seg</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'

        const numero1 = document.getElementById("numero1"),
        numero2 = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");

        calcular.onclick = (funciónAlPresionarElBoton);

        function funciónAlPresionarElBoton() {

            lectura_de_numero1 = parseFloat(numero1.value);
            lectura_de_numero2 = parseFloat(numero2.value);

            resultado.innerHTML = "La velocidad que recorrio o recorrera el vehiculo es de: "+(lectura_de_numero2 / lectura_de_numero1).toFixed(2)+"m/s";

            sessionStorage.setItem('Resultado Velocidad', resultado.innerHTML);

        }

    }

    espacio.onclick = () => {

        divMruTiempo.remove();
        divMruVelocidad.remove();

        document.body.appendChild(divMruEspacio);
        divMruEspacio.innerHTML = '<form><p>Ingresar la Velocidad en metros por segundos: <br><input type="number" id="numero2">m/s <br>Ingresar el Tiempo en segundos: <br><input type="number" id="numero1">seg</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'

        const numero1 = document.getElementById("numero1"),
        numero2 = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");

        calcular.onclick = (funciónAlPresionarElBoton);

        function funciónAlPresionarElBoton() {

            lectura_de_numero1 = parseFloat(numero1.value);
            lectura_de_numero2 = parseFloat(numero2.value);

            resultado.innerHTML = "El espacio que recorrio o recorrerá el vehiculo es de: "+(lectura_de_numero2 * lectura_de_numero1).toFixed(2)+"m";

            sessionStorage.setItem('Resultado Espacio', resultado.innerHTML);

        }
    }

    tiempo.onclick = () => {
        
        divMruEspacio.remove();
        divMruVelocidad.remove();

        document.body.appendChild(divMruTiempo);
        divMruTiempo.innerHTML = '<form><p>Ingresar el Espacio en metros: <br><input type="number" id="numero2">m <br>Ingresar la Velocidad en metros por segundos: <br><input type="number" id="numero1">m/s</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'

        const numero1 = document.getElementById("numero1"),
        numero2 = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");

        calcular.onclick = (funciónAlPresionarElBoton);

        function funciónAlPresionarElBoton() {

            lectura_de_numero1 = parseFloat(numero1.value);
            lectura_de_numero2 = parseFloat(numero2.value);

            resultado.innerHTML = "El tiempo que tardo o tardará el vehiculo es de: "+(lectura_de_numero2 / lectura_de_numero1).toFixed(2)+"seg";

            sessionStorage.setItem('Resultado Tiempo', resultado.innerHTML);

        }
    }
};

metrosCuadrados.onclick = () => {

    parrafoPrincipal.remove();
    divNormal.remove();
    divFracciones.remove();
    divMru.remove();
    divMruTiempo.remove();
    divMruEspacio.remove();
    divMruVelocidad.remove();
    divImc.remove();

    document.body.appendChild(divMetrosCuadrados);
    divMetrosCuadrados.innerHTML = '<form><p>Ingresar el Largo en metros: <br><input type="number" id="numero2">m <br>Ingresar el Ancho en metros: <br><input type="number" id="numero1">m</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
    
    const numero1 = document.getElementById("numero1"),
    numero2 = document.getElementById("numero2"),
    calcular = document.getElementById("botonCalcular"),
    resultado = document.getElementById("resultado");

    calcular.onclick = (funciónAlPresionarElBoton);

    function funciónAlPresionarElBoton() {

        lectura_de_numero1 = parseFloat(numero1.value);
        lectura_de_numero2 = parseFloat(numero2.value);

        resultado.innerHTML = "El resultado es de: "+(lectura_de_numero2 * lectura_de_numero1).toFixed(2)+" metros cuadrados";

        sessionStorage.setItem('Resultado de metros cuadrados', resultado.innerHTML);

    }
};

imc.onclick = () => {
 
    parrafoPrincipal.remove();
    divFracciones.remove();
    divMru.remove();
    divMruTiempo.remove();
    divMruVelocidad.remove();
    divMruEspacio.remove();
    divMetrosCuadrados.remove();
    divNormal.remove();

    document.body.appendChild(divImc);
    divImc.innerHTML = '<h1>Indice de Masa Corporal</h1><form><p>Ingresar su peso corporal en kilogramos: <br><input type="number" id="numero2">kg<br>Ingresar su altura en metros: <br><input type="number" id="numero1">m</p><p class="resultado" id="resultado">Su IMC es de =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'

    const numero1 = document.getElementById("numero1"),
    numero2 = document.getElementById("numero2"),
    calcular = document.getElementById("botonCalcular"),
    resultado = document.getElementById("resultado");

    calcular.onclick = (funciónAlPresionarElBoton);

    function funciónAlPresionarElBoton() {

        lectura_de_numero1 = parseFloat(numero1.value);
        lectura_de_numero2 = parseFloat(numero2.value);

        let imcResultado = (lectura_de_numero2 / (lectura_de_numero1**2)).toFixed(2);

        resultado.innerHTML = "Su IMC es de = "+imcResultado;

        sessionStorage.setItem('Resultado IMC', resultado.innerHTML);
    }
}