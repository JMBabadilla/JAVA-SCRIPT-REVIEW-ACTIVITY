// Taking input from user
const numOfLevels = parseInt(prompt("Enter the number of passed levels: "));
const points = [];
for (let i = 0; i < numOfLevels; i++) {
  points.push(parseInt(prompt(`Enter the points gained for level ${i+1}: `)));
}

// Calculating sum of all gained points
const sum = points.reduce((acc, val) => acc + val, 0);

// Outputting the result
document.getElementById("demo").innerHTML = sum;
