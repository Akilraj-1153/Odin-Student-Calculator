document.addEventListener('DOMContentLoaded', function () {
    var question = document.getElementById('question');
    var answer = document.getElementById('answer');
    var userinput = '';
    var resultop = 0; 

    var ipbuttons = document.querySelectorAll('.num');
    ipbuttons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttonclick(button.textContent);
        });
    });

    function buttonclick(buttonvalue) {
        if (buttonvalue === 'AC') {
            clearall();
        } else if (buttonvalue === 'Clear') {
            Clear();
        } else if (buttonvalue === '+' || buttonvalue === '-' || buttonvalue === '*' || buttonvalue === '/') {
            appendvalue(buttonvalue);
        } else if (buttonvalue === '=') {
            calculate();
        } else {
            appendvalue(buttonvalue);
        }
    }

    function clearall() {
        userinput = '';
        resultop = 0;
        question.textContent = userinput;
        answer.textContent = '';
    }

    function Clear() {
        userinput = userinput.slice(0, -1);
        question.textContent = userinput;
    }

    function calculate() {
        let operators = ['+', '-', '*', '/'];
        let operator = '';

        for (let i = 0; i < operators.length; i++) {
            if (userinput.includes(operators[i])) {
                operator = operators[i];
                break;
            }
        }

        if (operator !== '') {
            let inputs = userinput.split(operator);
            let input1 = parseFloat(inputs[0]);
            let input2 = parseFloat(inputs[1]);
            let result = 0;

            if (operator === '+') {
                result = input1 + input2;
            } else if (operator === '-') {
                result = input1 - input2;
            } else if (operator === '*') {
                result = input1 * input2;
            } else if (operator === '/') {
                result = input1 / input2;
            }

            resultop = result;
            answer.textContent = resultop;
            userinput = resultop ;
        }
    }

    function appendvalue(value) {
        userinput += value;
        question.textContent = userinput;
    }
});
