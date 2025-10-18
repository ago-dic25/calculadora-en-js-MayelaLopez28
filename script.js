const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('resultado');
const logList = document.getElementById('log');

function displayResult(message, isError = false) {
    resultDiv.textContent = message;
    if (isError) {
        resultDiv.classList.add('error');
    } else {
        resultDiv.classList.remove('error');
    }
}

function addToLog(calculation) {
    if (logList.children.length === 1 && logList.firstElementChild.textContent.includes('No hay calculos')) {
        logList.innerHTML = '';
    }

    const listItem = document.createElement('li');
    listItem.textContent = calculation;
    logList.prepend(listItem);
}

function calculate(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Error: Ingrese ambos numeros', true);
        return;
    }

    let result;
    let operatorSymbol;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            operatorSymbol = '+';
            break;
        case 'substract':
            result = num1 - num2;
            operatorSymbol = '-';
            break;
        case 'multiply':
            result = num1 * num2;
            operatorSymbol = 'x';
            break;
        case 'divide':
            if (num2 === 0) {
                displayResult('Error: Division entre cero no permitida.', true);
                return;
            }
            result = num1 / num2;
            operatorSymbol = '/';
            break;
        default:
            displayResult('Error de operacion.', true);
            return;
    }

    const finalResult = result.toFixed(2);
    displayResult(finalResult);

    const logEntry = `${num1} ${operatorSymbol} ${num2} = ${finalResult}`;
    addToLog(logEntry);
}

function clearInputs() {
    num1Input.value = '';
    num2Input.value = '';

    displayResult('...', false);
}