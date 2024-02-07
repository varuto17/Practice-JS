const calcbtn = document.getElementById("calculate");

calcbtn.addEventListener("click", function () {
  //Get the numbers from the input field

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const operation = document.getElementById("operation").value;

  let result; //To store the result of the calculation

  //Perform the operation

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero!";
      }
      break;
  }

  //Display the result
  document.getElementById("result").innerText = `Result: ${result}`;
});
