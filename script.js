let display = document.getElementById("display");

function append(value) {

    display.value += value;

}

function clearDisplay() {

    display.value = "";

}

function deleteLast() {

    display.value = display.value.slice(0, -1);

}

function calculate() {

    try {

        display.value = eval(display.value);

    }

    catch {

        display.value = "Error";

    }

}

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", function (e) {

    let key = e.key;

    if ("0123456789+-*/.".includes(key)) {
        display.value += key;
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }

});