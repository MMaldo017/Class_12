/* =========================================================
   WEEK 1 ANSWERS — ABSOLUTE BEGINNER SAFE
   ========================================================= */


/* =========================
   1) VARIABLES
   ========================= */

let firstName = "Martin";
console.log(firstName);

firstName = "Felix";
console.log(firstName);

const MAX_USERS = 100;
console.log(MAX_USERS);

var legacyMode = true;
console.log(legacyMode);



/* =========================
   2) typeof PRACTICE
   ========================= */

console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);



/* =========================
   3) TYPE CONVERSION
   ========================= */

let convertedNumber = Number("11");
console.log(convertedNumber);

let badNumber = Number("abc");
console.log(badNumber);
console.log(typeof badNumber);

let convertedString = String(123);
console.log(convertedString);

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("text"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));



/* =========================
   4) OBJECTS
   ========================= */

let student = {
  name: "Martin",
  age: 33,
  email: "martin@email.com"
};

console.log(student.name);

student.role = "student";
console.log(student);

delete student.email;
console.log(student);

let profile = {
  social: {
    ig: "tag",
    facebook: null
  }
};

console.log(profile.social.ig);



/* =========================
   5) ARRAYS
   ========================= */

let items = ["A", 99, true, null, "Z"];

console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]);

console.log(items);

items[items.length] = "DONE";
console.log(items);

items[4] = undefined;
console.log(items);

let names = ["Olivia", "Emma", "Mateo", "Sam"];

let firstTwo = [names[0], names[1]];
let lastTwo = [names[2], names[3]];

console.log(firstTwo);
console.log(lastTwo);



/* =========================
   6) SCOPE
   ========================= */

{
  let insideBlock = "inside";
  console.log(insideBlock);
}

// console.log(insideBlock); // ReferenceError

{
  var leakedVar = "var leaks";
  console.log(leakedVar);
}

console.log(leakedVar);
