 function add(a, b) { return a + b; }
        function subtract(a, b) { return a - b; }
        function multiply(a, b) { return a * b; }
        function divide(a, b) { return b !== 0 ? a / b : 'Cannot divide by zero'; }
        function modulus(a, b) { return b !== 0 ? a % b : 'Cannot divide by zero'; }
        
        function displayResult(operation, num1, num2, result) {
            var messages = {
                'add': "The sum of " + num1 + " and " + num2 + " is " + result + ".",
                'subtract': "The difference of " + num1 + " and " + num2 + " is " + result + ".",
                'multiply': "The product of " + num1 + " and " + num2 + " is " + result + ".",
                'divide': "The quotient of " + num1 + " and " + num2 + " is " + result + ".",
                'modulus': "The remainder of " + num1 + " divided by " + num2 + " is " + result + "."
            };
            document.getElementById("result").innerHTML = messages[operation];
        }
        
        function calculate(operation) {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var result;
            
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").innerHTML = "Please enter valid numbers.";
                return;
            }
            
            if (operation === 'add') {
                result = add(num1, num2);
            } else if (operation === 'subtract') {
                result = subtract(num1, num2);
            } else if (operation === 'multiply') {
                result = multiply(num1, num2);
            } else if (operation === 'divide') {
                result = divide(num1, num2);
            } else if (operation === 'modulus') {
                result = modulus(num1, num2);
            }
            
            displayResult(operation, num1, num2, result);
        }