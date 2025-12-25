function positiveNumber() {
  let num = parseFloat(prompt("Enter a positive number:"));
  document.getElementById("q1").innerHTML =
    "Number: " + num +
    "<br>Round: " + Math.round(num) +
    "<br>Floor: " + Math.floor(num) +
    "<br>Ceil: " + Math.ceil(num);
}

// Q2
function negativeNumber() {
  let num = parseFloat(prompt("Enter a negative floating number:"));
  document.getElementById("q2").innerHTML =
    "Number: " + num +
    "<br>Round: " + Math.round(num) +
    "<br>Floor: " + Math.floor(num) +
    "<br>Ceil: " + Math.ceil(num);
}

// Q3
function absoluteValue() {
  let num = parseFloat(prompt("Enter a number:"));
  document.getElementById("q3").innerHTML =
    "Absolute Value: " + Math.abs(num);
}

// Q4
function dice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("q4").innerHTML =
    "Dice Value: " + dice;
}

// Q5
function coinToss() {
  let toss = Math.floor(Math.random() * 2);
  let result = toss === 0 ? "Heads" : "Tails";
  document.getElementById("q5").innerHTML =
    "Coin Toss: " + result;
}

// Q6
function random100() {
  let num = Math.floor(Math.random() * 100) + 1;
  document.getElementById("q6").innerHTML =
    "Random Number: " + num;
}

// Q7
function weight() {
  let input = prompt("Enter your weight:");
  let w = parseFloat(input);
  document.getElementById("q7").innerHTML =
    "Your weight is " + w + " kg";
}

// Q8
function secretNumber() {
  let secret = Math.floor(Math.random() * 10) + 1;
  let guess = parseInt(prompt("Guess a number (1 to 10):"));

  if (guess === secret) {
    document.getElementById("q8").innerHTML =
      "🎉 Congratulations! You guessed correctly.";
  } else {
    document.getElementById("q8").innerHTML =
      "❌ Wrong! Secret number was " + secret;
  }
}
