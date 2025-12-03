function insertNumber(num) {
    if (result.innerHTML.length < 13) {
        result.innerHTML += num;
    }
}
function clearDisplay() {
    result.innerHTML = "";
}
function backspace() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}
function sum() {
    if (result.innerHTML.length < 13) {
        let lastChar = result.innerHTML.slice(-1);
        if (!"+-×÷.".includes(lastChar)) {
            result.innerHTML += "+";
        }
    }
}
function min() {
    if (result.innerHTML.length < 13) {
        let lastChar = result.innerHTML.slice(-1);
        if (!"+-×÷.".includes(lastChar)) {
            result.innerHTML += "-";
        }
    }
}
function mult() {
    if (result.innerHTML.length < 13) {
        let lastChar = result.innerHTML.slice(-1);
        if (!"+-×÷.".includes(lastChar)) {
            result.innerHTML += "×";
        }
    }
}
function div() {
    if (result.innerHTML.length < 13) {
        let lastChar = result.innerHTML.slice(-1);
        if (!"+-×÷.".includes(lastChar)) {
            result.innerHTML += "÷";
        }
    }
}
function dot() {
    if (result.innerHTML.length < 13) {
        let lastChar = result.innerHTML.slice(-1);
        if (!"+-×÷.".includes(lastChar)) {
            result.innerHTML += ".";
        }
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") {
        insertNumber(event.key);
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "Delete") {
        clearDisplay();
    } else if (event.key === "+") {
        sum();
    } else if (event.key === "-") {
        min();
    } else if (event.key === "*") {
        mult();
    } else if (event.key === "/") {
        div();
    } else if (event.key === ".") {
        dot();
    } else if (event.key === "Enter") {
        calculate();
    }
});

function calculate() {
    let expression = result.innerHTML;
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

    try {
        result.innerHTML = eval(expression);
    } catch (error) {
        result.innerHTML = "Erro";
    }
}
