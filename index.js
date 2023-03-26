//activity 1
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

//activity 2
let text = "";
const planets = ["Venus","Uranus","Saturn","Neptune","Mercury","Mars","Jupiter","Earth"];
planets.forEach(myFunction2);
function myFunction2(item) {
    text += item + "<br>";
}
document.getElementById("demo1").innerHTML = text;

//activity 3
const items = ["Zero","One","Two","Three","For","Five","Six","Seven","Eight","Nine","Ten"];
let fLen = items.length;
let text2 = "";
for (let i = 0; i < fLen; i++) {
  text2 +=  + i + ":" + items[i] + "<br>";
}
document.getElementById("demo2").innerHTML = text2;