var bt_suma = document.getElementById("bt_suma");
var bt_resta = document.getElementById("bt_resta");
var bt_multiplica = document.getElementById("bt_multiplica");
var bt_divide = document.getElementById("bt_divide");

var resultado = document.getElementById("resultado");
var num_1 = document.getElementById("num_1");
var num_2 = document.getElementById("num_2");


/*
function validar(n1,n2) {
    if(n1 == NaN || n2 == NaN){
        resultado.innerHTML = "Error : no son numeros enteros";
        return false;
    }

    if(Number.isInteger (n1 + n2 )) {
    }else{
        resultado.innerHTML = "Error : no son numeros enteros";
        return false;
    }

    return true;

}
*/

bt_suma.addEventListener("click", function () {

    var n1 = num_1.value;
    var n2 = num_2.value;

    resultado.innerHTML = suma(n1, n2);


})

function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

bt_resta.addEventListener("click", function () {

    var n1 = num_1.value;
    var n2 = num_2.value;
    resultado.innerHTML = resta(n1, n2);
})

function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

bt_multiplica.addEventListener("click", function () {

    var n1 = num_1.value;
    var n2 = num_2.value;
    resultado.innerHTML = multiplicar(n1, n2);
})

function multiplicar(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

bt_divide.addEventListener("click", function () {

    var n1 = num_1.value;
    var n2 = num_2.value;
    resultado.innerHTML = dividir(n1, n2);
})

function dividir(n1, n2) {
    if (n2 == 0) {
        return "Error: no divida por cero";
    } else {
        return parseInt(n1) / parseInt(n2);
    }

}

