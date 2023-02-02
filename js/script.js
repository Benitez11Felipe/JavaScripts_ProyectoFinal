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
    if (JSON.parse(localStorage.getItem('OperacionNormal')) == null){
        document.body.appendChild(divNormal);
        divNormal.innerHTML = '<form><p class="descripcion">Para poder realizar su operacion matematica debera ingresar en los cuadros de los costados su 1er y 2do valor, y en el cuadro del medio el signo del problema matematico que usted desea realizar. Si a la hora de apretar el boton calcular y le aparece "NaN" es porque le falta agregar un valor a su operacion.</p><p><input type="number"  id="numero1"/><select id="operacion"><option value="none">operacion</option><option value="+">+</option><option value="-">-</option><option value="x">x</option><option value="/">÷</option></select><input type="number"  id="numero2"/></p><p class="resultado" id="resultado">Su resultado es: </p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
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
            }
            else if (operacion.value == "-") {
                resultado.innerHTML = lectura_de_numero1+" - "+lectura_de_numero2+" = "+(lectura_de_numero1 - lectura_de_numero2);
            }
            else if (operacion.value == "x"){
                resultado.innerHTML = lectura_de_numero1+" x "+lectura_de_numero2+" = "+(lectura_de_numero1 * lectura_de_numero2);
            }else if (operacion.value == "/") {
                resultado.innerHTML = lectura_de_numero1+" / "+lectura_de_numero2+" = "+(lectura_de_numero1 / lectura_de_numero2);
            }
            localStorage.setItem('OperacionNormal', JSON.stringify(resultado.innerHTML));
        }
    }else{
        document.body.appendChild(divNormal);
        divNormal.innerHTML = '<form><p class="descripcion">Para poder realizar su operacion matematica debera ingresar en los cuadros de los costados su 1er y 2do valor, y en el cuadro del medio el signo del problema matematico que usted desea realizar. Si a la hora de apretar el boton calcular y le aparece "NaN" es porque le falta agregar un valor a su operacion.</p><p><input type="number"  id="numero1"/><select id="operacion"><option value="none">operacion</option><option value="+">+</option><option value="-">-</option><option value="x">x</option><option value="/">÷</option></select><input type="number"  id="numero2"/></p><p class="resultado" id="resultado">Su resultado es: </p><p id="resultadoDos">El resultado de su ultima operacion fue:<br>'+JSON.parse(localStorage.getItem('OperacionNormal'))+'</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
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
            }
            else if (operacion.value == "-") {
                resultado.innerHTML = lectura_de_numero1+" - "+lectura_de_numero2+" = "+(lectura_de_numero1 - lectura_de_numero2);
            }
            else if (operacion.value == "x"){
                resultado.innerHTML = lectura_de_numero1+" x "+lectura_de_numero2+" = "+(lectura_de_numero1 * lectura_de_numero2);
            }else if (operacion.value == "/") {
                resultado.innerHTML = lectura_de_numero1+" / "+lectura_de_numero2+" = "+(lectura_de_numero1 / lectura_de_numero2);
            }
            localStorage.setItem('OperacionNormal', JSON.stringify(resultado.innerHTML));
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
    if (JSON.parse(localStorage.getItem('OperacionFraccion')) == null){
        document.body.appendChild(divFracciones);
        divFracciones.innerHTML = '<form><p class="descripcion">Para poder realizar su operacion matematica debera ingresar en los cuadros de los costados sus valores, y en el cuadro del medio el signo del problema matematico que usted desea realizar. Si a la hora de apretar el boton calcular y le aparece "NaN" es porque le falta agregar un valor a su operacion.</p><p><input type="number" id="numeroFracciones1"/>/<input type="number" id="numeroFracciones2"/></p><p><select id="operacionFracciones"><option value="none">operacion</option><option value="+">+</option><option value="-">-</option><option value="x">x</option><option value="/">÷</option></select></p><p><input type="number"  id="numeroFracciones3"/>/<input type="number" id="numeroFracciones4"/></p><p class="resultado" id="resultado">Su resultado es: </p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
        const numero1 = document.getElementById("numeroFracciones1"),
        numero2 = document.getElementById("numeroFracciones2"),
        numero3 = document.getElementById("numeroFracciones3"),
        numero4 = document.getElementById("numeroFracciones4"),
        operacion = document.getElementById("operacionFracciones"),
        calcular = document.getElementById("botonCalcular"),
        resultadoFraccion = document.getElementById("resultado");
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
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" + "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+resultadoAbajo;
                }else {
                    resultadoAbajo = (lectura_de_numero2 * lectura_de_numero4);
                    arriba1 = (lectura_de_numero1 * lectura_de_numero4);
                    arriba2 = (lectura_de_numero3 * lectura_de_numero2);
                    resultadoArriba = (arriba1 + arriba2);
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" + "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+resultadoArriba+"/"+resultadoAbajo
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
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" - "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+resultadoAbajo
                }
                else {
                    resultadoAbajo = (lectura_de_numero2 * lectura_de_numero4);
                    arriba1 = (lectura_de_numero1 * lectura_de_numero4);
                    arriba2 = (lectura_de_numero3 * lectura_de_numero2);
                    resultadoArriba = (arriba1 - arriba2);
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" - "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+resultadoArriba+"/"+resultadoAbajo
                }
            }
            else if (operacion.value == "x") {
                let abajo;
                let arriba;
                arriba = (lectura_de_numero1 * lectura_de_numero3);
                abajo = (lectura_de_numero2 * lectura_de_numero4);
                resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" x "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+abajo
            }else if (operacion.value == "/") {
                let arriba;
                let abajo;
                arriba = (lectura_de_numero1 * lectura_de_numero4);
                abajo = (lectura_de_numero2 * lectura_de_numero3);
                resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" ÷ "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+abajo
            }
            localStorage.setItem('OperacionFraccion', JSON.stringify(resultadoFraccion.innerHTML));
        }
    }else{
        document.body.appendChild(divFracciones);
        divFracciones.innerHTML = '<form><p class="descripcion">Para poder realizar su operacion matematica debera ingresar en los cuadros de los costados sus valores, y en el cuadro del medio el signo del problema matematico que usted desea realizar. Si a la hora de apretar el boton calcular y le aparece "NaN" es porque le falta agregar un valor a su operacion.</p><p><input type="number" id="numeroFracciones1"/>/<input type="number" id="numeroFracciones2"/></p><p><select id="operacionFracciones"><option value="none">operacion</option><option value="+">+</option><option value="-">-</option><option value="x">x</option><option value="/">÷</option></select></p><p><input type="number"  id="numeroFracciones3"/>/<input type="number" id="numeroFracciones4"/></p><p class="resultado" id="resultado">Su resultado es: </p><p id="resultadoDos">El resultado de su ultima operacion fue:<br>'+JSON.parse(localStorage.getItem('OperacionFraccion'))+'</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
        const numero1 = document.getElementById("numeroFracciones1"),
        numero2 = document.getElementById("numeroFracciones2"),
        numero3 = document.getElementById("numeroFracciones3"),
        numero4 = document.getElementById("numeroFracciones4"),
        operacion = document.getElementById("operacionFracciones"),
        calcular = document.getElementById("botonCalcular"),
        resultadoFraccion = document.getElementById("resultado");
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
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" + "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+resultadoAbajo;
                }else{
                    resultadoAbajo = (lectura_de_numero2 * lectura_de_numero4);
                    arriba1 = (lectura_de_numero1 * lectura_de_numero4);
                    arriba2 = (lectura_de_numero3 * lectura_de_numero2);
                    resultadoArriba = (arriba1 + arriba2);
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" + "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+resultadoArriba+"/"+resultadoAbajo
                }
            }
            else if(operacion.value == "-") {
                let abajo;
                let resultadoAbajo;
                let arriba;
                let resultadoArriba;
                abajo = (lectura_de_numero2 / lectura_de_numero4);
                if (abajo == "1") {
                    resultadoAbajo = (lectura_de_numero2 * 1);
                    arriba = (lectura_de_numero1 - lectura_de_numero3);
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" - "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+resultadoAbajo
                }
                else {
                    resultadoAbajo = (lectura_de_numero2 * lectura_de_numero4);
                    arriba1 = (lectura_de_numero1 * lectura_de_numero4);
                    arriba2 = (lectura_de_numero3 * lectura_de_numero2);
                    resultadoArriba = (arriba1 - arriba2);
                    resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" - "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+resultadoArriba+"/"+resultadoAbajo
                }
            }
            else if (operacion.value == "x") {
                let abajo;
                let arriba;
                arriba = (lectura_de_numero1 * lectura_de_numero3);
                abajo = (lectura_de_numero2 * lectura_de_numero4);
                resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" x "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+abajo
            }else if(operacion.value == "/"){
                let arriba;
                let abajo;
                arriba = (lectura_de_numero1 * lectura_de_numero4);
                abajo = (lectura_de_numero2 * lectura_de_numero3);
                resultadoFraccion.innerHTML = lectura_de_numero1+"/"+lectura_de_numero2+" ÷ "+lectura_de_numero3+"/"+lectura_de_numero4+" = "+arriba+"/"+abajo
            }
            localStorage.setItem('OperacionFraccion', JSON.stringify(resultadoFraccion.innerHTML));
        }
    }
};
mru.onclick = () => {
    parrafoPrincipal.remove();
    divNormal.remove();
    divFracciones.remove();
    divMetrosCuadrados.remove();
    divImc.remove();
    divMruEspacio.remove();
    divMruTiempo.remove();
    divMruVelocidad.remove();
    document.body.appendChild(divMru);
    divMru.innerHTML = '<form id="mru"><p>Seleccionar la operacion que usted desea resolver. Debe de completar TODOS los campos requeridos.</p><input class="tresPrincipales" type="button" id="botonVelocidad" value="Velocidad"></input><input class="tresPrincipales" type="button" id="botonEspacio" value="Espacio"></input><input class="tresPrincipales" type="button" id="botonTiempo" value="Tiempo"></input></form>'
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
            resultado.innerHTML = "Velocidad = "+(lectura_de_numero2 / lectura_de_numero1).toFixed(2)+"m/s";
            const resolucionMruVelocidad = {
                espacio: "",
                tiempo: "",
                resultado: ""
            }
            resolucionMruVelocidad.espacio = lectura_de_numero2+"m";
            resolucionMruVelocidad.tiempo = lectura_de_numero1+"seg";
            resolucionMruVelocidad.resultado = resultado.innerHTML
            console.log(resolucionMruVelocidad)
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
            resultado.innerHTML = "Espacio = "+(lectura_de_numero2 * lectura_de_numero1).toFixed(2)+"m";
            const resolucionMruEspacio = {
                velocidad: "",
                tiempo: "",
                resultado: ""
            }
            resolucionMruEspacio.velocidad = lectura_de_numero2+"m/s";
            resolucionMruEspacio.tiempo = lectura_de_numero1+"seg";
            resolucionMruEspacio.resultado = resultado.innerHTML
            console.log(resolucionMruEspacio)
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
            resultado.innerHTML = "Tiempo = "+(lectura_de_numero2 / lectura_de_numero1).toFixed(2)+"seg";
            const resolucionMruTiempo = {
                espacio: "",
                velocidad: "",
                resultado: ""
            }
            resolucionMruTiempo.espacio = lectura_de_numero2+"m";
            resolucionMruTiempo.velocidad = lectura_de_numero1+"m/s";
            resolucionMruTiempo.resultado = resultado.innerHTML
            console.log(resolucionMruTiempo)
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
    if (JSON.parse(localStorage.getItem('OperacionMetrosCuadrados')) == null){
        document.body.appendChild(divMetrosCuadrados);
        divMetrosCuadrados.innerHTML = '<form><p>Debe de rellenar todos los campos requeridos</p><p>Ingresar el Largo en metros: <br><input type="number" id="numero2">m <br>Ingresar el Ancho en metros: <br><input type="number" id="numero1">m</p><p class="resultado" id="resultado">Su resultado es =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
        const numero1 = document.getElementById("numero1"),
        numero2 = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");
        calcular.onclick = (funciónAlPresionarElBoton);
        function funciónAlPresionarElBoton() {
            lectura_de_numero1 = parseFloat(numero1.value);
            lectura_de_numero2 = parseFloat(numero2.value);
            resultado.innerHTML = (lectura_de_numero2 * lectura_de_numero1).toFixed(2)+" metros cuadrados";
            localStorage.setItem('OperacionMetrosCuadrados', JSON.stringify(resultado.innerHTML));
            const resolucionMetrosCuadrados = {
                largo: "",
                ancho: "",
                resultado: ""
            }
            resolucionMetrosCuadrados.largo = lectura_de_numero1;
            resolucionMetrosCuadrados.ancho = lectura_de_numero2;
            resolucionMetrosCuadrados.resultado = resultado.innerHTML
            console.log(resolucionMetrosCuadrados)
        }
    }else{
        document.body.appendChild(divMetrosCuadrados);
        divMetrosCuadrados.innerHTML = '<form><p>Debe de rellenar todos los campos requeridos</p><p>Ingresar el Largo en metros: <br><input type="number" id="numero2">m <br>Ingresar el Ancho en metros: <br><input type="number" id="numero1">m</p><p class="resultado" id="resultado">Su resultado es =</p><p id="resultadoDos">El resultado de su ultima operacion fue: <br>'+JSON.parse(localStorage.getItem('OperacionMetrosCuadrados'))+'</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
        const largo = document.getElementById("numero1"),
        ancho = document.getElementById("numero2"),
        calcular = document.getElementById("botonCalcular"),
        resultado = document.getElementById("resultado");
        calcular.onclick = (funciónAlPresionarElBoton);
        function funciónAlPresionarElBoton() {
            lectura_de_numero1 = parseFloat(largo.value);
            lectura_de_numero2 = parseFloat(ancho.value);
            resultado.innerHTML = (lectura_de_numero2 * lectura_de_numero1).toFixed(2)+" metros cuadrados";
            localStorage.setItem('OperacionMetrosCuadrados', JSON.stringify(resultado.innerHTML));
            const resolucionMetrosCuadrados = {
                largo: "",
                ancho: "",
                resultado: ""
            }
            resolucionMetrosCuadrados.largo = lectura_de_numero1;
            resolucionMetrosCuadrados.ancho = lectura_de_numero2;
            resolucionMetrosCuadrados.resultado = resultado.innerHTML
            console.log(resolucionMetrosCuadrados)
        }
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
    if (JSON.parse(localStorage.getItem('OperacionImc')) == null){
        document.body.appendChild(divImc);
        divImc.innerHTML = '<h1>Indice de Masa Corporal</h1><form><p>Debe de rellenar todos los campos requeridos</p><p>Ingresar su peso corporal en kilogramos: <br><input type="number" id="numero2">kg<br>Ingresar su altura en metros: <br><input type="number" id="numero1">m</p><p class="resultado" id="resultado">Su IMC es de =</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
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
            localStorage.setItem('OperacionImc', JSON.stringify(resultado.innerHTML));
            const resolucionImc = {
                peso: "",
                altura: "",
                imc: ""
            }
            resolucionImc.peso = lectura_de_numero2;
            resolucionImc.altura = lectura_de_numero1;
            resolucionImc.imc = resultado.innerHTML
            console.log(resolucionImc)
        }
    }else{
        document.body.appendChild(divImc);
        divImc.innerHTML = '<h1>Indice de Masa Corporal</h1><form><p>Debe de rellenar todos los campos requeridos</p><p>Ingresar su peso corporal en kilogramos: <br><input type="number" id="numero2">kg<br>Ingresar su altura en metros: <br><input type="number" id="numero1">m</p><p class="resultado" id="resultado">Su IMC es de =</p><p id="resultadoDos">El resultado de su ultimo IMC fue de:<br>'+JSON.parse(localStorage.getItem('OperacionImc'))+'</p><p><input type="button" value="calcular" id="botonCalcular"/><input type="reset" value="borrar" id="botonBorrar"/></p></form>'
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
            localStorage.setItem('OperacionImc', JSON.stringify(resultado.innerHTML));
            const resolucionImc = {
                peso: "",
                altura: "",
                imc: ""
            }
            resolucionImc.peso = lectura_de_numero2;
            resolucionImc.altura = lectura_de_numero1;
            resolucionImc.imc = resultado.innerHTML
            console.log(resolucionImc)
        }
    }
}
