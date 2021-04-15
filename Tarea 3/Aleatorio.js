var btn = document.getElementById("botoncito");
var resultado = document.getElementById("resultado");

var input_minimo = document.getElementById("input-minimo");
var input_maximo = document.getElementById("input-maximo");

btn.addEventListener("click", function () {
    var n1 = input_minimo.value;
    var n2 = input_maximo.value;
    resultado.innerHTML = num_random(n1, n2);

});

function num_random(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
}