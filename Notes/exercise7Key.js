/* =========================================================
   ANSWER KEY — CALLBACK FUNCTIONS (BEGINNER)
   ========================================================= */


/* =========================
   SECTION 1: CALLBACK BASICS
   ========================= */

// 1
const sayHi = () => {
  console.log("Hi!");
};

// 2
const runCallback = cb => {
  cb();
};

// 3
runCallback(sayHi);



/* =========================
   SECTION 2: CALLBACKS WITH DATA
   ========================= */

// 4
const logName = name => {
  console.log(name);
};

// 5
const processName = (name, callback) => {
  callback(name);
};

// 6
processName("Alice", logName);



/* =========================
   SECTION 3: CALLBACKS + NUMBERS
   ========================= */

// 7
const double = num => {
  console.log(num * 2);
};

// 8
const handleNumber = (num, callback) => {
  callback(num);
};

// 9
handleNumber(5, double);



/* =========================
   SECTION 4: CALLBACKS + LOOPS
   ========================= */

// 10
const logValue = value => {
  console.log(value);
};

// 11
const loopArray = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

// 12
let colors = ["red", "blue", "green"];
loopArray(colors, logValue);



/* =========================
   SECTION 5: THINK & PREDICT
   ========================= */

// 13
const test = cb => cb();
test(() => console.log("Hello")); // logs: Hello

// 14
// If a callback is passed but never called,
// nothing will happen — the function exists
// but is never executed.

// 15
// Callbacks are useful because they allow us
// to pass behavior into a function and decide
// what happens later or inside another function.
