function calcularMetrosCuadrados (largo, ancho){
    let metrosCuadrados=largo * ancho;
    return metrosCuadrados;
}

let largo = parseInt (prompt ("ingresar el largo en (m)") );

let ancho = parseInt (prompt ("ingresar el ancho en (m)") );

let resultado = calcularMetrosCuadrados (largo, ancho);

alert ("El resultado es de "+resultado+" metros cuadrados");
