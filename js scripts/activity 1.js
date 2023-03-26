function findLarger() {
    var firstNumber = parseInt(document.getElementById("firstNumber").value);
    var secondNumber = parseInt(document.getElementById("secondNumber").value);

    if (firstNumber > secondNumber) {
      alert("The larger number is " + firstNumber);
    } else if (secondNumber > firstNumber) {
      alert("The larger number is " + secondNumber);
    } else {
      alert("The two numbers are equal.");
    }
  }
