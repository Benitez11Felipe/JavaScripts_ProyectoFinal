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
