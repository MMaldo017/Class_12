/* =========================================================
   ANSWER KEY — LOOPS (NO FUNCTIONS)
   ========================================================= */


/* =========================
   SECTION 1: FILL IN THE BLANK
   ========================= */

// 1
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 2
for (let i = 3; i > 0; i--) {
  console.log(i);
}

// 3
let w = 1;
while (w <= 3) {
  console.log(w);
  w++;
}

// 4
let foods = ["taco", "pizza", "salad"];
for (let item of foods) {
  console.log(item);
}

// 5
let profile = { name: "Sam", age: 22, role: "student" };
for (let key in profile) {
  console.log(key);
}



/* =========================
   SECTION 2: EASY PRACTICE
   ========================= */

// 6
for (let i = 5; i < 10; i++) {
  console.log(i);
}

// 7
let num = 10;
while (num >= 2) {
  console.log(num);
  num -= 2;
}

// 8
let letters = ["a", "b", "c", "d"];
for (let letter of letters) {
  console.log(letter);
}

// 9
let phone = {
  brand: "Apple",
  model: "iPhone",
  storage: "128GB"
};

for (let key in phone) {
  console.log(phone[key]);
}



/* =========================
   SECTION 3: ARRAYS + LOOPS
   ========================= */

// 10
let numbers1 = [2, 4, 6];
let total1 = 0;

for (let i = 0; i < numbers1.length; i++) {
  total1 += numbers1[i];
}
console.log(total1);

// 11
let mixed = ["hi", 99, "bye", true, "ok"];
let stringCount = 0;

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === "string") {
    stringCount++;
  }
}
console.log(stringCount);

// 12
let nums2 = [3, 10, 25, 1, 9, 12];
let bigNums = [];

for (let i = 0; i < nums2.length; i++) {
  if (nums2[i] >= 10) {
    bigNums.push(nums2[i]);
  }
}
console.log(bigNums);



/* =========================
   SECTION 4: OBJECTS + LOOPS
   ========================= */

// 13
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

for (let key in car) {
  console.log("key = " + key);
}

// 14
let settings = {
  theme: "dark",
  language: "en",
  notifications: "on"
};

for (let key in settings) {
  console.log(key + ": " + settings[key]);
}



/* =========================
   SECTION 5: CHALLENGE
   ========================= */

// 15
let nums3 = [7, 2, 19, 4, 10];
let max = nums3[0];

for (let i = 1; i < nums3.length; i++) {
  if (nums3[i] > max) {
    max = nums3[i];
  }
}
console.log(max);

// 16
let abc = ["a", "b", "c"];
for (let i = abc.length - 1; i >= 0; i--) {
  console.log(abc[i]);
}

// 17
let cities = [
  { name: "Cairo", population: 18.82e6 },
  { name: "Tokyo", population: 37.26e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "Shanghai", population: 23.48e6 }
];

for (let city of cities) {
  if (city.population >= 20e6) {
    console.log(city.name);
  }
}
