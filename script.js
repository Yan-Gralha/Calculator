
function insertNumber(num) {
    if (result.innerHTML.length < 13) { //Limite de 13 caracteres
        result.innerHTML += num; //Adiciona os números clicados a variável result, mostrando eles na tela
    }
};
function clearDisplay() {
    result.innerHTML = ""; //Reseta os valores da variável result
};
function backspace() {
    result.innerHTML = result.innerHTML.slice(0, -1); //Corta o último caractere inserido
};
function sum() {
    if (result.innerHTML.length < 13) { // Limite de 13 caracteres
        let lastChar = result.innerHTML.slice(-1); // Pega o último caractere inseridos
        if (!"+-×÷.".includes(lastChar)) { //Verifica se o último caractere inserido não é +-×÷.
            result.innerHTML += "+"; //Se não for nenhum deles, adiciona um + na variável result
        }
    }
};
function min() {
    if (result.innerHTML.length < 13) { // Limite de 13 caracteres
        let lastChar = result.innerHTML.slice(-1); // Pega o último caractere inserido
        if (!"+-×÷.".includes(lastChar)) { //Verifica se o último caractere inserido não é +-×÷.
            result.innerHTML += "-"; //Se não for nenhum deles, adiciona um - na variável result
        }
    }
};
function mult() {
    if (result.innerHTML.length < 13) { // Limite de 13 caracteres
        let lastChar = result.innerHTML.slice(-1); // Pega o último caractere inserido
        if (!"+-×÷.".includes(lastChar)) { //Verifica se o último caractere inserido não é +-×÷.
            result.innerHTML += "×"; //Se não for nenhum deles, adiciona um × na variável result
        }
    }
};
function div() {
    if (result.innerHTML.length < 13) { // Limite de 13 caracteres
        let lastChar = result.innerHTML.slice(-1); // Pega o último caractere inserido
        if (!"+-×÷.".includes(lastChar)) { //Verifica se o último caractere inserido não é +-×÷.
            result.innerHTML += "÷"; //Se não for nenhum deles, adiciona um ÷ na variável result
        }
    }
};
function dot() {
    if (result.innerHTML.length < 13) { // Limite de 13 caracteres
        let lastChar = result.innerHTML.slice(-1); // Pega o último caractere inserido
        if (!"+-×÷.".includes(lastChar)) { //Verifica se o último caractere inserido não é +-×÷.
            result.innerHTML += "."; //Se não for nenhum deles, adiciona um . na variável result
        }
    }
};
document.addEventListener("keydown", function (event) { //Ações com o teclado
    if (event.key >= "0" && event.key <= "9") { //Diz que se apertar as teclas de 0 a 9 vai executar a função insertNumber() com o valor pressionado
        insertNumber(event.key);
    } else if (event.key === "Backspace") { //Diz que se apertar Backspace vai executar a função backspace()
        backspace();
    } else if (event.key === "Delete") {//Diz que se apertar Delete vai executar a função clearDisplay()
        clearDisplay();
    } else if (event.key === "+") {//Diz que se apertar + vai executar a função sum()
        sum();
    } else if (event.key === "-") {//Diz que se apertar - vai executar a função min()
        min();
    } else if (event.key === "*") {//Diz que se apertar * vai executar a função mult()
        mult();
    } else if (event.key === "/") {//Diz que se apertar / vai executar a função div()
        div();
    } else if (event.key === ".") {//Diz que se apertar . vai executar a função dot()
        dot();
    } else if (event.key === "Enter") {//Diz que se apertar Enter vai executar a função calculate()
        calculate();
    }
});
function calculate() {
    let expression = result.innerHTML; //Fala que a variável expression tem o valor do que estiver na variável result

    // Substituir operadores visuais pelos operadores do JavaScript
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

    try {
        // Avaliar a expressão e exibir o resultado
        result.innerHTML = eval(expression); //A função eval() avalia a string result como código JavaScript e executa essa string como se fosse um comando do próprio código
    } catch (error) {
        result.innerHTML = "Erro"; //Se der erro exibe "Erro"
    }
};