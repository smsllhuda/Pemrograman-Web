let expression = '';

function appendNumber(number) {
    const display = document.getElementById('result');
    if (display.value === '0' || display.value === 'Error') {
        display.value = number;
    } else {
        display.value += number;
    }
    expression += number;
}

function appendOperator(operator) {
    const display = document.getElementById('result');
    display.value += operator;
    expression += operator;
}

function clearAll() {
    expression = '';
    document.getElementById('result').value = '0';
}

function calculate() {
    try {
        expression = expression.replace('^', '**'); // Pangkat
        const result = eval(expression);
        document.getElementById('result').value = result;
        expression = result.toString(); // Simpan hasil untuk kalkulasi berikutnya
    } catch (error) {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}
