const btnCalcul = document.getElementById("btnCalcul");

btnCalcul.addEventListener('click', event => {
    
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;


    let result = "Invalid Operator";

    switch (operator) {
        case '+' : 
            result = firstNumber + secondNumber;
            break;

        case '-' : 
            result = firstNumber - secondNumber;
            break;

        case '*' : 
            result = firstNumber * secondNumber;
            break;

        case '/' : 
        result = firstNumber / secondNumber;
        break;
    }

    console.log(result);

    const printResult = document.getElementById("result");
    printResult.innerHTML = result;
});




