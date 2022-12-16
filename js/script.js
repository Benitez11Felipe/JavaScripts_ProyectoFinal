function calculo (num1, num2, operacion){
    let resultadoSuma = 0
    switch (operacion) {
        case "+":
            resultadoSuma = num1 + num2
            alert (num1+" + "+num2+" = "+resultadoSuma);
            break;
        case "-":
            resultadoSuma = num1 - num2
            alert (num1+" - "+num2+" = "+resultadoSuma);
            break;
        case "*":
            resultadoSuma = num1 * num2
            alert (num1+" * "+num2+" = "+resultadoSuma);
            break;
        case "/":
            resultadoSuma = num1 / num2
            alert (num1+" / "+num2+" = "+resultadoSuma);
            break;
        default :
            break;
    }
}

let problema = prompt("Ingrese el problema matematico que desea resolver. Por ejemplo: Suma - Resta - Multiplicacion - Division. \nIngresar (-1 para finalizar.");

if ((problema == "suma")||(problema == "Suma")||(problema == "SUMA")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a sumar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a sumar"));
    calculo (num1, num2, "+");
}else if ((problema == "resta")||(problema == "Resta")||(problema == "RESTA")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a restar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a restar"));
    calculo (num1, num2, "-");
}else if ((problema == "multiplicacion")||(problema == "Multiplicacion")||(problema == "MULTIPLICACION")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a multiplicar"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a multiplicar"));
    calculo (num1, num2, "*");
}else if ((problema == "division")||(problema == "Division")||(problema == "DIVISION")){
    let num1=parseFloat (prompt("Ingrese el valor del primer numero a dividir"));
    let num2 = parseFloat (prompt("Ingrese el valor del segundo numero a dividir"));
    calculo (num1, num2, "/");
}else if(problema == "-1"){
    alert("Hasta luego.")
}