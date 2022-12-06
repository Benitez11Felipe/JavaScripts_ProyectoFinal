let cantidadProductos = 0;
let precioPagar = 0;

let producto = parseInt (prompt("Ingresar el valor del producto a comprar: (Ingresar (-1) para salir y saber tu valor a pagar)"));

while (producto != -1){
    cantidadProductos = cantidadProductos + 1;
    precioPagar = precioPagar + producto;
    producto = parseInt (prompt("Ingresar el valor del producto a comprar: (Ingresar (-1) para salir y saber tu valor a pagar)"));
}

alert("Tienes "+cantidadProductos+" productos en tu carrito. El total a pagar es de $"+precioPagar);

/*let seguirAgregando = prompt("Si usted desea seguir agregando productos a su carrito escriba la palabra (si). Si usted desea finalizar la compra diga (-1)");

while (producto != -1){
    cantidadProductos = cantidadProductos + 1;
    precioPagar = precioPagar + producto;
    producto = parseInt (prompt("Ingresar el valor del producto a comprar: (Ingresar (-1) para salir y saber tu valor a pagar)"));
}*/

let metodoDePago = prompt ("Si usted desea dividir el precio total a pagar ingrese (dividir). Si usted desea ingresar un descuento en su compra ingrese (descuento). Si no tiene necesidad de ninguna, ingresar (finalizar)")

if (metodoDePago == "dividir"){
    dividirPrecio = prompt ("ingresar en cuanto quiere dividirr su total a pagar");
    precioDividido = (precioPagar / dividirPrecio);
    alert ("Total a pagar dividido en "+dividirPrecio+" es de $"+precioDividido+". Hasta la proxima :D");
}
else if (metodoDePago == "descuento"){
    descuentoPrecio = prompt ("ingresar el porcentaje de su descuento");
    precioConDescuento = (precioPagar / 100) * (100 - descuentoPrecio);
    alert ("Total a pagar con descuento del "+descuentoPrecio+"% es de $"+precioConDescuento+". Hasta la proxima :D");
}
else if (metodoDePago == "finalizar"){
    alert ("Hasta la proxima :D");
}
else{
    alert("ERROR");
}