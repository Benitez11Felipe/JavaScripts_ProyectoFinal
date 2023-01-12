const normal = document.getElementById ('normal'),
supermercado = document.getElementById ('supermercado'),
promedio = document.getElementById ('promedio'),
mru = document.getElementById ('mru'),
metrosCuadrados = document.getElementById ('metrosCuadrados'),
parrafoPrincipal = document.getElementById('parrafoEliminado'),
divNormal = document.createElement('div'),
divSupermercado = document.createElement('div');

normal.onclick = () => {
 
    parrafoPrincipal.remove();
    divSupermercado.remove();

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

supermercado.onclick = () => {

    parrafoPrincipal.remove();
    divNormal.remove();

    document.body.appendChild(divSupermercado);
    
    divSupermercado.innerHTML = '<h1>supermercado</h1>'
    

    /*function todoElProcesoDeCompra (cantidad_de_productos, precio, dividido, con_descuento, descuento_dividido){

        this.cantidad_de_productos = cantidad_de_productos;
        this.precio = precio;
        this.dividido = dividido;
        this.con_descuento = con_descuento;
        this.descuento_dividido = descuento_dividido;
    
    }
    
    alert("¿Desea hacer una lista o un carrito donde pondra los precios de los productos?");
    
    let decision = parseInt (prompt ("Para hacer lista ingrese(1). \nPara sumar solo los precios de los productos ingrese (2)\nPara salir ingrese (3)"));
    
    if (decision == "1"){
    
        const carrito = [''];
    
        let productoDeLaLista = prompt("Ingresar nombre del producto. \n(-1) para Finalizar")
    
        while (productoDeLaLista != "-1"){
            carrito.push(productoDeLaLista);
            productoDeLaLista = prompt("Ingresar nombre del producto. \n(-1) para Finalizar");
        }
    
        console.log(carrito.join("\n"))
        alert("En total tiene "+carrito.length+" productos:"+carrito.join("\n"))
    
    }else if (decision == "2"){
        
        let cantidadProductos = 0;
        let precioPagar = 0;
    
        let producto = parseInt (prompt("Ingresar el valor del producto a comprar: \nIngresar (-1) para salir y saber su precio a pagar"));
    
        while (producto != -1){
            cantidadProductos = cantidadProductos + 1;
            precioPagar = precioPagar + producto;
            producto = parseInt (prompt("Ingresar el valor del producto a comprar: \nIngresar (-1) para salir y saber su precio a pagar"));
        }
    
        alert("Tienes "+cantidadProductos+" productos en tu carrito. \nEl total a pagar es de $"+precioPagar);
    
        let metodoDePago = prompt ("Si usted desea dividir el precio total a pagar ingrese (1). \nSi usted desea ingresar un descuento en su compra ingrese (2). \nSi no tiene necesidad de ninguna, ingresar (3)")
    
        if (metodoDePago == "1"){
            
            dividirPrecio = prompt ("ingresar en cuanto quiere dividir su total a pagar");
            precioDividido = ((precioPagar / dividirPrecio).toFixed(2));
            
            alert ("Total a pagar dividido en "+dividirPrecio+" es de $"+precioDividido+". \nHasta la proxima :D");
    
            const todo = new todoElProcesoDeCompra;
    
            todo.cantidad_de_productos = cantidadProductos;
            todo.precio = "$"+precioPagar;
            todo.dividido = "$"+precioDividido+" dividido en "+dividirPrecio;
    
            console.log(todo);
        
        }else if (metodoDePago == "2"){
            
            descuentoPrecio = prompt ("ingresar el porcentaje de su descuento");
            precioConDescuento = ((precioPagar / 100) * (100 - descuentoPrecio).toFixed(2));
            
            alert ("Total a pagar con descuento del "+descuentoPrecio+"% es de $"+precioConDescuento);
    
            let metodoDePagoDescuento = prompt ("Si usted desea dividir el precio total a pagar CON EL DESCUENTO ingrese (1). \nSi no tiene necesidad de dividir el precio, ingresar (3)")
    
            if (metodoDePagoDescuento == "1"){
                dividirPrecioDescuento = prompt ("ingresar en cuanto quiere dividir su total a pagar");
                precioDivididoDescuento = ((precioConDescuento / dividirPrecioDescuento).toFixed(2));
    
                alert ("Total a pagar es de $"+precioDivididoDescuento+". \nHasta la proxima :D");
    
                const todo = new todoElProcesoDeCompra;
                todo.cantidad_de_productos = cantidadProductos;
                todo.precio = "$"+precioPagar;
                todo.con_descuento = "$"+precioConDescuento+" con un descuento del "+descuentoPrecio+"%";
                todo.descuento_dividido = "$"+precioDivididoDescuento+" dividido en "+dividirPrecioDescuento;
    
                console.log(todo);
    
            }else if (metodoDePagoDescuento == "3"){
    
                const todo = new todoElProcesoDeCompra;
    
                todo.cantidad_de_productos = cantidadDeProductos+" Productos";
                todo.precio = "$"+precio;
                todo.con_descuento = "$"+conDescuento+" con un descuento del "+descuentoPrecio+"%";
    
                console.log(todo);
    
            }else{
    
                alert("ERROR");
    
            }
    
        }else if (metodoDePago.toLowerCase() == "3"){
    
            const todo = new todoElProcesoDeCompra;
    
            todo.cantidad_de_productos = cantidadProductos+" Productos";
            todo.precio = precioPagar;
    
            console.log(todo);
        
        }else{
            
            alert("ERROR");
            
        }
    
    }else if (decision == "3"){
        
        alert ("Hasta la proxima :D");
    
    }*/
    
};

promedio.onclick = () => {

    /*function promedioConsol (sumaDeNotas, cantidadDeNotas, notaFinal){

        this.sumaDeNotas = sumaDeNotas;
        this.cantidadDeNotas = cantidadDeNotas;
        this.notaFinal = notaFinal;
    
    }

    const todo = new promedioConsol;

    let contadorDeNotas = 0;
    let sumadorDeNotas = 0;

    let nota = parseInt(prompt("ingresar nota: (para finalizar ingrese -1)"));

    while (nota != -1){
        contadorDeNotas = contadorDeNotas + 1;
        sumadorDeNotas = sumadorDeNotas + nota;
        nota = parseInt(prompt("ingresar nota: (para finalizar ingrese -1)"));
    }

    let promedio = ((sumadorDeNotas / contadorDeNotas).toFixed(2));

    alert ("La suma de las notas es de "+sumadorDeNotas+", ingreso "+contadorDeNotas+" notas, eso quiere decir que su promedio es de "+promedio);

    todo.sumaDeNotas = sumadorDeNotas;
    todo.cantidadDeNotas = contadorDeNotas+" Notas";
    todo.notaFinal = promedio;

    console.log(todo);*/

};

mru.onclick = () => {
    
    /*function calculo (num1, num2, operacion){
    
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
                break;
                
        }
    }
};

metrosCuadrados.onclick = () => {

    function metroCuadrado (largoCons, anchoCons, resultadoCons){
        this.largoCons = largoCons;
        this.anchoCons = anchoCons;
        this.resultadoCons = resultadoCons;
    }

    function calcularMetrosCuadrados (largo, ancho){
        let metrosCuadrados=largo * ancho;
        return metrosCuadrados;
    }
    
    let largo = parseInt (prompt ("ingresar el largo en (m)") );
    
    let ancho = parseInt (prompt ("ingresar el ancho en (m)") );
    
    let resultado = calcularMetrosCuadrados (largo, ancho);
    
    alert ("El resultado es de "+resultado+" metros cuadrados");

    const todo = new metroCuadrado;
    todo.largoCons = largo+"m";
    todo.anchoCons = ancho+"m";
    todo.resultadoCons = resultado+"m cuadrados";

    console.log (todo);*/
    
};