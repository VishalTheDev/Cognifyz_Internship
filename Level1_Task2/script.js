function changeColor() {
  let btn = document.getElementById("colorBtn");

  btn.style.backgroundColor = "red";
  btn.style.color = "white";
}

function showGreeting() {
  let hour = new Date().getHours();

  if (hour < 12) {
    alert("Good Morning Vishal!");
  } else if (hour < 18) {
    alert("Good Afternoon Vishal!");
  } else {
    alert("Good Evening Vishal!");
  }
}

function calculateSum() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let sum = num1 + num2;

  document.getElementById("result").innerHTML = "Result = " + sum;
}
