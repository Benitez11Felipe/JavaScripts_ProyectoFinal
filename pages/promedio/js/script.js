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