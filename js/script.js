"use strict";
var input_minimum = document.getElementById("minimum");
var input_maximum = document.getElementById("maximum");
var result = document.getElementById("result");
function onClickGenerate() {
    result.value = "";
    if (input_minimum.value == "" || input_maximum.value == "") {
        alert("Fill out all field");
        return;
    }
    var minimum = parseInt(input_minimum.value);
    var maximum = parseInt(input_maximum.value);
    if (maximum < minimum) {
        alert("Invalid range");
        return;
    }
    if (minimum < 0 || maximum < 0) {
        alert("Negative range");
        return;
    }
    var minimum = parseInt(input_minimum.value);
    var maximum = parseInt(input_maximum.value);
    result.value = generator(minimum, maximum).toString();
}
function generator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
