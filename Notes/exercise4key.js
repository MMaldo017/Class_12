/* =========================================================
   ANSWER KEY — SWITCH & WHILE / DO...WHILE ONLY
   ========================================================= */


/* =========================
   PART 1: SWITCH — VERY BASIC
   ========================= */

// 1
let trafficLight = "red";

switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid light");
}

// 2
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Needs Improvement");
    break;
  case "F":
    console.log("Failing");
    break;
  default:
    console.log("Invalid grade");
}

// 3
let day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}



/* =========================
   PART 2: SWITCH — BREAK & DEFAULT
   ========================= */

// 4
let menuOption = "start";

switch (menuOption) {
  case "start":
    console.log("Game starting...");
    break;
  case "settings":
    console.log("Opening settings...");
    break;
  case "exit":
    console.log("Exiting game...");
    break;
  default:
    console.log("Unknown option");
}

// 5
// If a break is removed, execution continues into the next case
// even when it does not match (called fall-through).



/* =========================
   PART 3: while LOOP — BASIC
   ========================= */

// 6
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// 7
let pets = ["dog", "cat", "fish"];
let i = 0;

while (i < pets.length) {
  console.log(pets[i]);
  i++;
}



/* =========================
   PART 4: do...while LOOP
   ========================= */

// 8
let attempts = 1;
do {
  console.log("Attempt " + attempts);
  attempts++;
} while (attempts <= 3);

// 9
let number = 5;
do {
  console.log(number);
  number--;
} while (number >= 1);



/* =========================
   PART 5: LOOPING WITHOUT for
   ========================= */

// 10
let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

// 11
let scores = [88, 92, 76, 81];
let s = 0;

while (s < scores.length) {
  console.log(scores[s]);
  s++;
}



/* =========================
   PART 6: OBJECTS + while
   ========================= */

// 12
let user = {
  name: "Alice",
  age: 30,
  role: "admin"
};

let keys = ["name", "age", "role"];
let k = 0;

while (k < keys.length) {
  console.log(user[keys[k]]);
  k++;
}



/* =========================
   PART 7: MIXED PRACTICE
   ========================= */

// 13
let numbers = [2, 4, 6, 8];
let n = 0;

while (n < numbers.length) {
  console.log(numbers[n] * 2);
  n++;
}

// 14
let choice = "yes";

switch (choice) {
  case "yes":
    console.log("Confirmed");
    break;
  case "no":
    console.log("Cancelled");
    break;
  default:
    console.log("Invalid choice");
}

// 15
let letters = ["a", "b", "c", "d", "e"];
let index = 0;

while (index < letters.length) {
  console.log(letters[index]);
  index++;
}

// 16
let testValue = "unknown";

switch (testValue) {
  default:
    console.log("Default case ran");
}
