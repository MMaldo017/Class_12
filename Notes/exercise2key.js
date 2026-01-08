/* =========================================================
   ANSWER KEY — Operators, Strings, Comparison, Logical
   ========================================================= */


/* =========================
   PART 1: ARITHMETIC OPERATORS
   ========================= */

// 1
let price = 24.50;
let taxRate = 0.08;
let taxAmount = price * taxRate;
console.log(taxAmount);

// 2
let total = 50;
total += 12.75;
console.log(total);

// 3
let a = 17;
let b = 5;
console.log(a % b);

// 4
let base = 3;
let power = 4;
console.log(base ** power);

// 5
let numStr = "200";
let converted = +numStr;
console.log(converted);
console.log(typeof converted);



/* =========================
   PART 2: UNARY + / - (COERCION / NEGATION)
   ========================= */

// 6
let negativeStr = "15";
let negativeNum = -negativeStr;
console.log(negativeNum);

// 7
// console.log(+"abc"); // NaN
// console.log(-"7");   // -7
// console.log(+"12");  // 12



/* =========================
   PART 3: STRING TOOLS (CONCAT + TEMPLATE LITERALS)
   ========================= */

// 8
let city = "Tokyo";
let country = "Japan";
console.log(city + ", " + country);

// 9
let user = "Gandalf";
let level = 99;
console.log(`User ${user} is level ${level}`);

// 10
let message = `Welcome!
Please read the rules.`;
console.log(message);



/* =========================
   PART 4: COMPARISON OPERATORS
   ========================= */

// 11
let n1 = 10;
let n2 = "10";
console.log(n1 === n2); // false
console.log(n1 == n2);  // true

// 12
let age = 20;
console.log(age >= 18); // true

// 13
let word1 = "cat";
let word2 = "dog";
console.log(word1 < word2); // true

// 14
let score = 75;
console.log(score !== 100); // true



/* =========================
   PART 5: LOGICAL OPERATORS (&&, ||, !)
   ========================= */

// 15
let hasTicket = true;
let isVip = false;
console.log(hasTicket && isVip); // false
console.log(hasTicket || isVip); // true

// 16
let isOnline = false;
console.log(!isOnline); // true

// 17
console.log("Admin" || "Guest"); // "Admin"
console.log("" || "Guest");      // "Guest"

// 18
console.log(0 && "Hello"); // 0
console.log(1 && "Hello"); // "Hello"

// 19
let usernameInput = "";
let displayName = usernameInput || "Guest";
console.log(displayName);



/* =========================
   PART 6: MIXED PRACTICE
   ========================= */

// 20
let items = 3;
let priceEach = 9.99;
let totalCost = items * priceEach;
console.log(totalCost);

let totalCostStr = String(totalCost);
console.log(typeof totalCostStr); // "string"

// 21
let enteredPin = "1234";
let correctPin = 1234;
console.log(enteredPin === correctPin); // false
console.log(enteredPin == correctPin);  // true

// 22
let points = 0;
console.log(!points);          // true (because 0 is falsy)
console.log(Boolean(points));  // false

// 23
let firstName = "Alice";
let lastName = "Ng";
let fullName = `${firstName} ${lastName}`;
console.log(`Name: ${fullName} (length: ${fullName.length})`);

// 24
let a2 = "5";
let b2 = 5;
console.log(a2 + b2); // "55"
console.log(a2 - b2); // 0
console.log(a2 * b2); // 25
console.log(a2 / b2); // 1
