/* ===============================
   Part 1: Variables & Conditionals
   =============================== */
// Variable declaration
let userName = "Guest";
let isLoggedIn = false;

// Function to update greeting using conditional
function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  if (isLoggedIn) {
    greetingElement.textContent = `Welcome back, ${userName}!`;
  } else {
    greetingElement.textContent = "Hello, guest! Please log in.";
  }
}

// Event listener for asking name
document.getElementById("askNameBtn").addEventListener("click", () => {
  let nameInput = prompt("Enter your name:");
  if (nameInput && nameInput.trim() !== "") {
    userName = nameInput;
    isLoggedIn = true;
  }
  updateGreeting();
});

/* ===============================
   Part 2: Functions
   =============================== */

// Function 1: Calculate sum
function calculateSum(a, b) {
  return a + b;
}

document.getElementById("sumBtn").addEventListener("click", () => {
  let num1 = parseInt(prompt("Enter first number:"));
  let num2 = parseInt(prompt("Enter second number:"));
  alert("The sum is: " + calculateSum(num1, num2));
});

// Function 2: Toggle message visibility
function toggleMessage() {
  const msg = document.getElementById("toggleMessage");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
}

document.getElementById("toggleBtn").addEventListener("click", toggleMessage);

/* ===============================
   Part 3: Loops
   =============================== */

// Loop Example 1: Countdown using for loop
document.getElementById("countBtn").addEventListener("click", () => {
  const countList = document.getElementById("countList");
  countList.innerHTML = ""; // Clear previous
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    countList.appendChild(li);
  }
});

// Loop Example 2: Array iteration using forEach
let fruits = ["Apple", "Banana", "Mango", "Orange"];

document.getElementById("listArrayBtn").addEventListener("click", () => {
  const arrayList = document.getElementById("arrayList");
  arrayList.innerHTML = "";
  fruits.forEach((fruit) => {
    let li = document.createElement("li");
    li.textContent = fruit;
    arrayList.appendChild(li);
  });
});

/* ===============================
   Part 4: DOM Manipulation
   =============================== */
// (Already used throughout above)
// 1. updateGreeting() modifies text content
// 2. toggleMessage() shows/hides element
// 3. Loops dynamically create list items
