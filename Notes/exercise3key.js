/* =========================================================
   ANSWER KEY — CONDITIONALS, TERNARY, instanceof, LENGTH
   ========================================================= */


/* =========================
   PART 1: VERY BASIC (WARM-UP)
   ========================= */

// 1
let age1 = 20;
if (age1 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// 2
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back!");
}

// 3
let score1 = 55;
if (score1 > 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}



/* =========================
   PART 2: instanceof / delete
   ========================= */

// 4
let data = [];
console.log(typeof data);              // "object"
console.log(data instanceof Array);    // true

// 5
let user1 = { name: "Alice", age: 36 };
delete user1.age;
console.log(user1.age);                // undefined

// 6
let book1 = { title: "LOTR", pages: 800 };
console.log(book1);
delete book1.pages;
console.log(book1);



/* =========================
   PART 3: LENGTH & indexOf
   ========================= */

// 7
let word = "JavaScript";
console.log(word.length);

// 8
let colors1 = ["red", "blue", "green"];
console.log(colors1.length);

// 9
console.log("JavaScript".indexOf("Script")); // 4
console.log(colors1.indexOf("blue"));        // 1



/* =========================
   PART 4: TERNARY OPERATOR (INTRO)
   ========================= */

// 10
let age2 = 16;
let voteMsg = age2 >= 18 ? "Can vote" : "Too young";
console.log(voteMsg);

// 11
let number1 = 11;
let parity = number1 % 2 === 0 ? "Even" : "Odd";
console.log(parity);

// 12
let username = "";
let displayName = username ? username : "Guest";
console.log(displayName);



/* =========================
   PART 5: if / else if / else
   ========================= */

// 13
let temperature = 70;
if (temperature > 85) {
  console.log("Hot");
} else if (temperature > 65) {
  console.log("Warm");
} else {
  console.log("Cold");
}

// 14
let role = "user";
if (role === "admin") {
  console.log("Full access");
} else if (role === "user") {
  console.log("Limited access");
} else {
  console.log("Guest access");
}

// 15
let cartValue = 299;
let points = 500;
if (cartValue >= 300 || points >= 500) {
  console.log("Free shipping");
} else {
  console.log("Shipping applies");
}



/* =========================
   PART 6: NESTED CONDITIONS
   ========================= */

// 16
let userAge = 18;
let hasTicket = false;

if (userAge >= 18) {
  if (hasTicket === true) {
    console.log("Entry allowed");
  } else {
    console.log("Ticket required");
  }
} else {
  console.log("Too young");
}

// 17
let grade = 77;
let letter;

if (grade >= 90) {
  letter = "A";
} else if (grade >= 80) {
  letter = "B";
} else if (grade >= 70) {
  letter = "C";
} else if (grade >= 60) {
  letter = "D";
} else {
  letter = "F";
}

console.log(letter);



/* =========================
   PART 7: THINKING QUESTIONS
   ========================= */

// 18) What does delete do to an object property?
// Answer:
console.log("delete removes a property from an object (or makes it no longer exist).");

// 19) What value does indexOf return if it does NOT find something?
// Answer:
console.log("indexOf returns -1 when the value is not found.");

// 20) When should you use a ternary instead of an if statement?
// Answer:
console.log("Use a ternary for simple true/false decisions that choose between two values.");
