function suma (num1, num2){
    let resultadoSuma = num1 + num2;
    alert(num1+" + "+num2+" = "+resultadoSuma);
}

function resta (num1, num2){
    let resultadoResta = num1 - num2;
    alert(num1+" - "+num2+" = "+resultadoResta);
}

function multiplicacion (num1, num2){
    let resultadoMultiplicacion = num1 * num2;
    alert(num1+" x "+num2+" = "+resultadoMultiplicacion);
}

function division (num1, num2){
    let resultadoDivision = num1 / num2;
    alert(num1+" / "+num2+" = "+resultadoDivision);
}

let nombre= prompt("Ingresá tu nombre");
let apellido= prompt("Ingresá tu apellido");{
    alert("Bienvenído a Calculadora General "+nombre+" "+apellido+"!!!");
}

let problema = prompt("Ingrese el problema matematico que desea resolver. Por ejemplo: Suma - Resta - Multiplicacion - Division");

if ((problema == "suma")||(problema == "Suma")||(problema == "SUMA")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a sumar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a sumar"));
    suma (num1, num2);
}else if ((problema == "resta")||(problema == "Resta")||(problema == "RESTA")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a restar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a restar"));
    resta (num1, num2);
}else if ((problema == "multiplicacion")||(problema == "Multiplicacion")||(problema == "MULTIPLICACION")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a multiplicar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a multiplicar"));
    multiplicacion (num1, num2);
}else if ((problema == "division")||(problema == "Division")||(problema == "DIVISION")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a dividir"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a dividir"));
    division (num1, num2);
}else{
    alert("ERROR: Ingresar bien el nombre de su operacion. Sin ningun espacio o simbolo")
    let problema = prompt("Ingrese el problema matematico que desea resolver. Por ejemplo: Multiplicacion");
    if ((problema == "suma")||(problema == "Suma")||(problema == "SUMA")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a sumar"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a sumar"));
        suma (num1, num2);
    }else if ((problema == "resta")||(problema == "Resta")||(problema == "RESTA")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a restar"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a restar"));
        resta (num1, num2);
    }else if ((problema == "multiplicacion")||(problema == "Multiplicacion")||(problema == "MULTIPLICACION")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a multiplicar"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a multiplicar"));
        multiplicacion (num1, num2);
    }else if ((problema == "division")||(problema == "Division")||(problema == "DIVISION")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a dividir"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a dividir"));
        let division = num1 / num2;
        division (num1, num2);
    }
}
