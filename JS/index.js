let num1;
let num2;
let operacion;
const resultado = document.getElementById("resultado");
document.getElementById("hist").innerHTML= allStorage();

function igual(){

    num2 = resultado.textContent;

    let respuesta = 0;
    let calculo;
    switch (operacion){
        case "+":
            respuesta = parseFloat(num1) + parseFloat(num2);
            calculo = num1 + " + " + num2 + " = " + respuesta
            break;

        case "-":
            respuesta = parseFloat(num1) - parseFloat(num2);
            calculo = num1 + " - " + num2 + " = " + respuesta
            break;

        case "*":
            respuesta = parseFloat(num1) * parseFloat(num2);
            calculo = num1 + " * " + num2 + " = " + respuesta
            break;

        case "/":
            respuesta = parseFloat(num1) / parseFloat(num2);
            calculo = num1 + " / " + num2 + " = " + respuesta
            break;

        default:
            break;
    }

    save_localStorage(calculo);
    document.getElementById("hist").innerHTML= allStorage() + " ";
    resultado.innerHTML = respuesta;

}

function limpiar(){
    resultado.textContent = " ";
}

function vaciar() {
    num1 = 0;
    num2 = 0;
    operacion = "";
    resultado.textContent = "";
}

function sumar(){
    num1 = resultado.textContent;
    operacion = "+";
    limpiar();
}

function Boton1(){
    resultado.textContent =  resultado.textContent + "1";
}

function Boton2(){
    resultado.textContent =  resultado.textContent + "2";
}

function Boton3() {
    resultado.textContent =  resultado.textContent + "3";
}

function Boton4() {
    resultado.textContent =  resultado.textContent + "4";
}

function Boton5() {
    resultado.textContent =  resultado.textContent + "5";
}

function Boton6() {
    resultado.textContent =  resultado.textContent + "6";
}

function Boton7() {
    resultado.textContent =  resultado.textContent + "7";
}

function Boton8() {
    resultado.textContent =  resultado.textContent + "8";
}

function Boton9() {
    resultado.textContent =  resultado.textContent + "9";
}

function Boton0() {
    resultado.textContent =  resultado.textContent + "0";
}


function restar() {
    num1 = resultado.textContent;
    operacion = "-";
    limpiar();
}

function dividir() {
    num1 = resultado.textContent;
    operacion = "/";
    limpiar();
}

function multiplicar() {
    num1 = resultado.textContent;
    operacion = "*";
    limpiar();
}

function save_localStorage( resultado) {
    let guardar = resultado;
    let key = id();
    localStorage.setItem(key,guardar)
}

function id() {
    let id = localStorage.length + 1;
    return id;
}

function Borrar() {
    localStorage.clear();
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

