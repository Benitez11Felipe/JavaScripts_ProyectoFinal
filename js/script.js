let nombre= prompt("Ingresá tu nombre");
let apellido= prompt("Ingresá tu apellido");{
    alert("Bienvenído a Calculadora General "+nombre+" "+apellido+"!!!");
}

let problema = prompt("Ingrese el problema matematico que desea resolver. Por ejemplo: Multiplicacion");

if ((problema == "suma")||(problema == "Suma")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a sumar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a sumar"));
    let suma = num1 + num2;
    alert(+num1+" + "+num2+" = "+suma);
}else if ((problema == "resta")||(problema == "Resta")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a restar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a restar"));
    let resta = num1 - num2;
    alert(+num1+" - "+num2+" = "+resta);
}else if ((problema == "multiplicacion")||(problema == "Multiplicacion")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a multiplicar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a multiplicar"));
    let multiplicar = num1 * num2;
    alert(+num1+" x "+num2+" = "+multiplicar);
}else if ((problema == "division")||(problema == "Division")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a dividir"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a dividir"));
    let division = num1 / num2;
    alert(+num1+" / "+num2+" = "+division);
}else{
    alert("ERROR: Ingresar bien el nombre de su operacion.")
    let problema = prompt("Ingrese el problema matematico que desea resolver. Por ejemplo: Multiplicacion");
    if ((problema == "suma")||(problema == "Suma")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a sumar"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a sumar"));
        let suma = num1 + num2;
        alert(+num1+" + "+num2+" = "+suma);
    }else if ((problema == "resta")||(problema == "Resta")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a restar"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a restar"));
        let resta = num1 - num2;
        alert(+num1+" - "+num2+" = "+resta);
    }else if ((problema == "multiplicacion")||(problema == "Multiplicacion")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a multiplicar"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a multiplicar"));
        let multiplicar = num1 * num2;
        alert(+num1+" x "+num2+" = "+multiplicar);
    }else if ((problema == "division")||(problema == "Division")){
        let num1=parseFloat (prompt("Ingrese el valor del primer numero a dividir"));
        let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a dividir"));
        let division = num1 / num2;
        alert(+num1+" / "+num2+" = "+division);
    }
}