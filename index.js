const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const operator =prompt("Enter operator (+, -, /, *)");
// function calculator() {
    // if(isNaN(num1)|| isNaN(num2)){
        // alert('wrong input! please Refresh the page again');
    // } else{
        let result;
        if(operator =="+") {
            result= num1 + num2;
        } else if (operator =="-") {
            result = num1 - num2;
        } else if (operator == "*") {
            result = num1 * num2;
        } else if (operator == "/") {
            result = num1 / num2;
        }
alert(num1 + operator + num2 +'='+ result);
// }