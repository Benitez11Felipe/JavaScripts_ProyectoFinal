alert("¿Desea hacer una lista o un carrito donde pondra los precios de los productos?");

let decision = parseInt (prompt ("Para hacer lista ingrese(1). Para ingresar solo los precios de los productos precione (2)"));

if (decision = "1"){

    const carrito = ['Productos:'];

    let productoDeLaLista = prompt("Ingresar nombre del producto. (-1) para Finalizar")

    while (productoDeLaLista != "-1"){
        carrito.push(productoDeLaLista);
        productoDeLaLista = prompt("Ingresar nombre del producto. (-1) para Finalizar");
    }

    console.log(carrito.join("\n"))
    alert(carrito.join("\n"))

}else if (decision = "2"){
    let cantidadProductos = 0;
    let precioPagar = 0;

    let producto = parseInt (prompt("Ingresar el valor del producto a comprar: (Ingresar (-1) para salir y saber tu valor a pagar)"));

    while (producto != -1){
        cantidadProductos = cantidadProductos + 1;
        precioPagar = precioPagar + producto;
        producto = parseInt (prompt("Ingresar el valor del producto a comprar: (Ingresar (-1) para salir y saber tu valor a pagar)"));
    }

    alert("Tienes "+cantidadProductos+" productos en tu carrito. El total a pagar es de $"+precioPagar);

    let metodoDePago = prompt ("Si usted desea dividir el precio total a pagar ingrese (dividir). Si usted desea ingresar un descuento en su compra ingrese (descuento). Si no tiene necesidad de ninguna, ingresar (finalizar)")

    if (metodoDePago.toLowerCase() == "dividir"){
        dividirPrecio = prompt ("ingresar en cuanto quiere dividir su total a pagar");
        precioDividido = (precioPagar / dividirPrecio);
        alert ("Total a pagar dividido en "+dividirPrecio+" es de $"+precioDividido+". Hasta la proxima :D");
    }
    else if (metodoDePago.toLowerCase() == "descuento"){
        descuentoPrecio = prompt ("ingresar el porcentaje de su descuento");
        precioConDescuento = (precioPagar / 100) * (100 - descuentoPrecio);
        alert ("Total a pagar con descuento del "+descuentoPrecio+"% es de $"+precioConDescuento+". Hasta la proxima :D");
    }
    else if (metodoDePago.toLowerCase() == "finalizar"){
        alert ("Hasta la proxima :D");
    }
    else{
        alert("ERROR");
        let metodoDePago = prompt ("Si usted desea dividir el precio total a pagar ingrese (dividir). Si usted desea ingresar un descuento en su compra ingrese (descuento). Si no tiene necesidad de ninguna, ingresar (finalizar)")
        if (metodoDePago.toLowerCase() == "dividir"){
            dividirPrecio = prompt ("ingresar en cuanto quiere dividir su total a pagar");
            precioDividido = (precioPagar / dividirPrecio);
            alert ("Total a pagar dividido en "+dividirPrecio+" es de $"+precioDividido+". Hasta la proxima :D");
        }
        else if (metodoDePago.toLowerCase() == "descuento"){
            descuentoPrecio = prompt ("ingresar el porcentaje de su descuento");
            precioConDescuento = (precioPagar / 100) * (100 - descuentoPrecio);
            alert ("Total a pagar con descuento del "+descuentoPrecio+"% es de $"+precioConDescuento+". Hasta la proxima :D");
        }
        else if (metodoDePago.toLowerCase() == "finalizar"){
            alert ("Hasta la proxima :D");
        }
    }
}else{

    alert("ERROR: ingresar sin ningun simbolo o espacio");

    let decision = parseInt (prompt ("Para hacer lista ingrese(1). Para ingresar solo los precios de los productos precione (2)"));

    if (decision = "1"){

        const carrito = ['Productos:'];

        let productoDeLaLista = prompt("Ingresar nombre del producto. (-1) para Finalizar")

        while (productoDeLaLista != "-1"){
            carrito.push(producto);
            productoDeLaLista = prompt("Ingresar nombre del producto. (-1) para Finalizar");
        }

        console.log(carrito.join("\n"))
        alert(carrito.join("\n"))

    }else if (decision = "2"){
        let cantidadProductos = 0;
        let precioPagar = 0;

        let producto = parseInt (prompt("Ingresar el valor del producto a comprar: (Ingresar (-1) para salir y saber tu valor a pagar)"));

        while (producto != -1){
            cantidadProductos = cantidadProductos + 1;
            precioPagar = precioPagar + producto;
            producto = parseInt (prompt("Ingresar el valor del producto a comprar: (Ingresar (-1) para salir y saber tu valor a pagar)"));
        }

        alert("Tienes "+cantidadProductos+" productos en tu carrito. El total a pagar es de $"+precioPagar);

        let metodoDePago = prompt ("Si usted desea dividir el precio total a pagar ingrese (dividir). Si usted desea ingresar un descuento en su compra ingrese (descuento). Si no tiene necesidad de ninguna, ingresar (finalizar)")

        if (metodoDePago.toLowerCase() == "dividir"){
            dividirPrecio = prompt ("ingresar en cuanto quiere dividir su total a pagar");
            precioDividido = (precioPagar / dividirPrecio);
            alert ("Total a pagar dividido en "+dividirPrecio+" es de $"+precioDividido+". Hasta la proxima :D");
        }
        else if (metodoDePago.toLowerCase() == "descuento"){
            descuentoPrecio = prompt ("ingresar el porcentaje de su descuento");
            precioConDescuento = (precioPagar / 100) * (100 - descuentoPrecio);
            alert ("Total a pagar con descuento del "+descuentoPrecio+"% es de $"+precioConDescuento+". Hasta la proxima :D");
        }
        else if (metodoDePago.toLowerCase() == "finalizar"){
            alert ("Hasta la proxima :D");
        }
        else{
            alert("ERROR");
            let metodoDePago = prompt ("Si usted desea dividir el precio total a pagar ingrese (dividir). Si usted desea ingresar un descuento en su compra ingrese (descuento). Si no tiene necesidad de ninguna, ingresar (finalizar)")
            if (metodoDePago.toLowerCase() == "dividir"){
                dividirPrecio = prompt ("ingresar en cuanto quiere dividir su total a pagar");
                precioDividido = (precioPagar / dividirPrecio);
                alert ("Total a pagar dividido en "+dividirPrecio+" es de $"+precioDividido+". Hasta la proxima :D");
            }
            else if (metodoDePago.toLowerCase() == "descuento"){
                descuentoPrecio = prompt ("ingresar el porcentaje de su descuento");
                precioConDescuento = (precioPagar / 100) * (100 - descuentoPrecio);
                alert ("Total a pagar con descuento del "+descuentoPrecio+"% es de $"+precioConDescuento+". Hasta la proxima :D");
            }
            else if (metodoDePago.toLowerCase() == "finalizar"){
                alert ("Hasta la proxima :D");
            }
        }
    }
}
