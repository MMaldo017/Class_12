/* =========================================================
   ANSWER KEY — OBJECT UTILITIES, LOOPS, ARRAY METHODS
   (NO FUNCTIONS)
   ========================================================= */


/* =========================
   SECTION 1: OBJECT UTILITIES
   ========================= */

// 1
let user = {
  name: "Alice",
  age: 30,
  email: "alice@email.com"
};
console.log(Object.keys(user));

// 2
console.log(Object.values(user));

// 3
console.log(Object.entries(user));

// 4
let settings = {
  theme: "dark",
  language: "en"
};
Object.freeze(settings);
settings.theme = "light"; // will NOT change
console.log(settings);

// 5
let profile = {
  name: "Sam",
  role: "student"
};
Object.seal(profile);
profile.role = "admin"; // allowed
console.log(profile);



/* =========================
   SECTION 2: BREAK
   ========================= */

// 6
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

// 7
let names = ["Martin", "Felix", "Alice", "Bob"];
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Felix") {
    break;
  }
  console.log(names[i]);
}



/* =========================
   SECTION 3: CONTINUE
   ========================= */

// 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// 9
let products = ["TV", "Cable", "PS5", "Laptop"];
for (let i = 0; i < products.length; i++) {
  if (products[i] === "Cable") {
    continue;
  }
  console.log(products[i]);
}



/* =========================
   SECTION 4: NESTED LOOPS
   ========================= */

// 10
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}

// 11
let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// 12
let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 78 },
  { name: "Charlie", grade: 85 }
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, students[i].grade);
}



/* =========================
   SECTION 5: ARRAY METHODS
   ========================= */

// 13
let group1 = ["Alice", "Bob"];
let group2 = ["Charlie", "Dana"];
let combined = group1.concat(group2);
console.log(combined);

// 14
let colors = ["red", "blue", "green"];
colors.pop();
console.log(colors);

// 15
let animals = ["dog", "cat"];
animals.push("bird", "fish");
console.log(animals);

// 16
let cities = ["Tokyo", "Paris", "Chicago"];
cities.shift();
console.log(cities);

// 17
let foods = ["pizza", "taco"];
foods.unshift("burger");
console.log(foods);



/* =========================
   SECTION 6: SLICE / SPLICE
   ========================= */

// 18
let numbers = [10, 20, 30, 40, 50];
let lastTwo = numbers.slice(3);
console.log(lastTwo);

// 19
let letters = ["a", "b", "c", "d"];
letters.splice(1, 1);
console.log(letters);

// 20
let skills = ["HTML", "CSS", "JS", "Python"];
console.log(skills.indexOf("JS"));
