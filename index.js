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

//activity 4
let array1 = ['apple', 'banana', 'mango'];
let array2 = ['orange', 'ponkan', 'melon'];

document.getElementById("demo3").innerHTML = array2[1];

//activity 5
let menu = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
let index = prompt("Enter the index of the item to replace:");
menu[index] = "Sunny Side up";
document.getElementById("demo4").innerHTML = menu;

//activity 6
function Contact(name, number) {
    this.name = name;
    this.number = number;
  
    this.print = function() {
        document.getElementById("demo4").innerHTML = this.name + ": " + this.number;

    }
  }
  let contact = new Contact("Michelley", "09123456789");
  contact.print();
