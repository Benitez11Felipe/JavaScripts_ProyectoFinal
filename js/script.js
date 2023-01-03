const normal = document.getElementById ('normal'),
supermercado = document.getElementById ('supermercado'),
promedio = document.getElementById ('promedio'),
mru = document.getElementById ('mru'),
metrosCuadrados = document.getElementById ('metrosCuadrados');

normal.onclick = () => {

    function calculo (num1, num2, operacion){

        let resultadoSuma = 0

        switch (operacion){

            case "+":

                resultadoSuma = num1 + num2;
                alert (num1+" + "+num2+" = "+resultadoSuma);
                console.log (num1+" + "+num2+" = "+resultadoSuma);
                break;

            case "-":

                resultadoSuma = num1 - num2;
                alert (num1+" - "+num2+" = "+resultadoSuma);
                console.log (num1+" - "+num2+" = "+resultadoSuma);
                break;

            case "*":

                resultadoSuma = num1 * num2;
                alert (num1+" x "+num2+" = "+resultadoSuma);
                console.log (num1+" x "+num2+" = "+resultadoSuma);
                break;

            case "/":
        
                resultadoSuma = num1 / num2;
                alert (num1+" / "+num2+" = "+resultadoSuma);
                console.log (num1+" / "+num2+" = "+resultadoSuma);
                break;

            default :

                break;

        }
    }
    
    let problema = prompt("Ingrese el problema matematico que desea resolver. \n(1)Suma \n(2)Resta \n(3)Multiplicacion \n(4)Division. \nIngresar (-1) para salir.");

    while (problema != "-1"){

        if (problema == "1"){

            let num1=parseFloat (prompt("Ingrese el valor del primer numero a sumar"));
            let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a sumar"));

            calculo (num1, num2, "+");

            problema = prompt("Ingrese el problema matematico que desea resolver. \n(1)Suma \n(2)Resta \n(3)Multiplicacion \n(4)Division. \nIngresar (-1) para salir.");

        }else if (problema == "2"){

            let num1=parseFloat (prompt("Ingrese el valor del primer numero a restar"));
            let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a restar"));
            
            calculo (num1, num2, "-");
            
            problema = prompt("Ingrese el problema matematico que desea resolver. \n(1)Suma \n(2)Resta \n(3)Multiplicacion \n(4)Division. \nIngresar (-1) para salir.");
        
        }else if (problema == "3"){
        
            let num1=parseFloat (prompt("Ingrese el valor del primer numero a multiplicar"));
            let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a multiplicar"));
            
            calculo (num1, num2, "*");

            problema = prompt("Ingrese el problema matematico que desea resolver. \n(1)Suma \n(2)Resta \n(3)Multiplicacion \n(4)Division. \nIngresar (-1) para salir.");
        
        }else if (problema == "4"){
        
            let num1=parseFloat (prompt("Ingrese el valor del primer numero a dividir"));
        
            let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a dividir"));

            calculo (num1, num2, "/");

            problema = prompt("Ingrese el problema matematico que desea resolver. \n(1)Suma \n(2)Resta \n(3)Multiplicacion \n(4)Division. \nIngresar (-1) para salir.");

        }

    }

};

supermercado.onclick = () => {

    function todoElProcesoDeCompra (cantidad_de_productos, precio, dividido, con_descuento, descuento_dividido){

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
    
        let metodoDePago = prompt ("Si usted desea dividir el precio total a pagar ingrese (dividir). \nSi usted desea ingresar un descuento en su compra ingrese (descuento). \nSi no tiene necesidad de ninguna, ingresar (finalizar)")
    
        if (metodoDePago.toLowerCase() == "dividir"){
            
            dividirPrecio = prompt ("ingresar en cuanto quiere dividir su total a pagar");
            precioDividido = ((precioPagar / dividirPrecio).toFixed(2));
            
            alert ("Total a pagar dividido en "+dividirPrecio+" es de $"+precioDividido+". \nHasta la proxima :D");
    
            const todo = new todoElProcesoDeCompra;
    
            todo.cantidad_de_productos = cantidadProductos;
            todo.precio = "$"+precioPagar;
            todo.dividido = "$"+precioDividido;
    
            console.log(todo);
        
        }else if (metodoDePago.toLowerCase() == "descuento"){
            
            descuentoPrecio = prompt ("ingresar el porcentaje de su descuento");
            precioConDescuento = ((precioPagar / 100) * (100 - descuentoPrecio).toFixed(2));
            
            alert ("Total a pagar con descuento del "+descuentoPrecio+"% es de $"+precioConDescuento);
    
            let metodoDePagoDescuento = prompt ("Si usted desea dividir el precio total a pagar CON EL DESCUENTO ingrese (dividir). \nSi no tiene necesidad de dividir el precio, ingresar (finalizar)")
    
            if (metodoDePagoDescuento.toLowerCase() == "dividir"){
                dividirPrecioDescuento = prompt ("ingresar en cuanto quiere dividir su total a pagar");
                precioDivididoDescuento = ((precioConDescuento / dividirPrecioDescuento).toFixed(2));
    
                alert ("Total a pagar es de $"+precioDivididoDescuento+". \nHasta la proxima :D");
    
                const todo = new todoElProcesoDeCompra;
                todo.cantidad_de_productos = cantidadProductos;
                todo.precio = "$"+precioPagar;
                todo.con_descuento = "$"+precioConDescuento;
                todo.descuento_dividido = "$"+precioDivididoDescuento;
    
                console.log(todo);
    
            }else if (metodoDePagoDescuento.toLowerCase() == "finalizar"){
    
                alert ("Hasta la proxima :D");
    
                const todo = new todoElProcesoDeCompra;
    
                todo.cantidad_de_productos = cantidadDeProductos;
                todo.precio = "$"+precio;
                todo.con_descuento = "$"+conDescuento;
    
                console.log(todo);
    
            }else{
    
                alert("ERROR");
    
            }
    
        }else if (metodoDePago.toLowerCase() == "finalizar"){
            
            alert ("Hasta la proxima :D");
    
            const todo = new todoElProcesoDeCompra;
    
            todo.cantidad_de_productos = cantidadProductos;
            todo.precio = precioPagar;
    
            console.log(todo);
        
        }else{
            
            alert("ERROR");
            
        }
    
    }else if (decision == "3"){
        
        alert ("Hasta la proxima :D");
    
    }else{
        
        alert("ERROR");
    
    }
    
};

promedio.onclick = () => {

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

};

mru.onclick = () => {
    
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

                alert("ERROR: Digito mal ingresado")
                break;
                
        }
    }
};

metrosCuadrados.onclick = () => {

    function calcularMetrosCuadrados (largo, ancho){
        let metrosCuadrados=largo * ancho;
        return metrosCuadrados;
    }
    
    let largo = parseInt (prompt ("ingresar el largo en (m)") );
    
    let ancho = parseInt (prompt ("ingresar el ancho en (m)") );
    
    let resultado = calcularMetrosCuadrados (largo, ancho);
    
    alert ("El resultado es de "+resultado+" metros cuadrados");
    
};