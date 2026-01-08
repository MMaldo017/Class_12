/* =========================================================
   EXERCISES — LOOPS (for / while / for...of / for...in
   If .push is needed, it is already written.
   ========================================================= */


/* =========================
   SECTION 1: FILL IN THE BLANK (WARM UP)
   =========================
   Fill in the blanks ONLY.
*/

// 1) Basic for loop (count up)
// Goal output: 0, 1, 2, 3
for (let i = 0; i < 4; i++) {
  console.log(i);
}


// 2) Basic for loop (count down)
// Goal output: 3, 2, 1
for (let i = ___; i > ___; i___) {
  console.log(i);
}


// 3) while loop (count up)
// Goal output: 1, 2, 3
let w = ___;
while (w ___ ___) {
  console.log(w);
  w___;
}


// 4) for...of loop (values)
// Goal output: each item in the array on its own line
let foods = ["taco", "pizza", "salad"];
for (let item ___ foods) {
  console.log(item);
}


// 5) for...in loop (keys)
// Goal output: the keys: name, age, role
let profile = { name: "Sam", age: 22, role: "student" };
for (let key ___ profile) {
  console.log(key);
}



/* =========================
   SECTION 2: EASY PRACTICE (WRITE THE CODE)
   ========================= */

// 6) Create a for loop that logs: 5, 6, 7, 8, 9


// 7) Create a while loop that logs: 10, 8, 6, 4, 2
// (Hint: start at 10 and subtract 2)


// 8) Use for...of to log each letter
let letters = ["a", "b", "c", "d"];


// 9) Use for...in to log each value in the object using bracket notation
let phone = {
  brand: "Apple",
  model: "iPhone",
  storage: "128GB"
};
// Reminder: use phone[key]



/* =========================
   SECTION 3: ARRAYS + LOOPS 
   ========================= */

// 10) Sum numbers with a loop (NO functions)
// Use a loop to add all numbers and log the total at the end
let numbers1 = [2, 4, 6];
let total1 = 0;
// write your loop here
// console.log(total1);


// 11) Count how many strings are in this array using typeof
let mixed = ["hi", 99, "bye", true, "ok"];
let stringCount = 0;
// write your loop here
// console.log(stringCount);


// 12) Build a new array of BIG numbers (>= 10)
// NOTE: .push is already provided
let nums2 = [3, 10, 25, 1, 9, 12];
let bigNums = [];
// write your loop here
// if a number is >= 10, do:
// bigNums.push(____);
// console.log(bigNums);



/* =========================
   SECTION 4: OBJECTS + LOOPS (BUILDING UP)
   ========================= */

// 13) Using for...in, log:
// "key = <key>"
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};


// 14) Using for...in, log:
// "<key>: <value>"
let settings = {
  theme: "dark",
  language: "en",
  notifications: "on"
};
// Reminder: settings[key]



/* =========================
   SECTION 5: CHALLENGE 
   ========================= */

// 15) Find the largest number in this array using a loop
// (No Math.max)
let nums3 = [7, 2, 19, 4, 10];
let max = nums3[0];
// write your loop here
// console.log(max);


// 16) Reverse-print an array using a for loop
// Goal output: "c", "b", "a"
let abc = ["a", "b", "c"];
// write your loop here (start at last index)


// 17) Cities practice (simple object array)
// Log only the city names where population is >= 20e6
let cities = [
  { name: "Cairo", population: 18.82e6 },
  { name: "Tokyo", population: 37.26e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "Shanghai", population: 23.48e6 }
];
// write your loop here
