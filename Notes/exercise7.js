/* =========================================================
   EXERCISES — CALLBACK FUNCTIONS (BEGINNER)
   =========================================================
   RULES:
   - Use arrow functions
   - Callbacks must be passed into another function
   - No map / filter / reduce
   - Use console.log to verify behavior
   ========================================================= */


/* =========================
   SECTION 1: CALLBACK BASICS (WARM-UP)
   ========================= */

// 1) Create an arrow function called sayHi
//    It logs "Hi!" to the console




// 2) Create a function called runCallback
//    It takes one parameter (cb)
//    It CALLS the callback function




// 3) Call runCallback and pass sayHi into it




/* =========================
   SECTION 2: CALLBACKS WITH DATA
   ========================= */

// 4) Create an arrow function called logName
//    It takes a name and logs it




// 5) Create a function called processName
//    It takes two parameters:
//    - name
//    - callback
//    It should call the callback and pass the name into it




// 6) Call processName with:
//    "Alice" and logName




/* =========================
   SECTION 3: CALLBACKS + NUMBERS
   ========================= */

// 7) Create an arrow function called double
//    It takes a number and logs the number doubled




// 8) Create a function called handleNumber
//    It takes:
//    - a number
//    - a callback
//    It should call the callback with the number




// 9) Call handleNumber with:
//    5 and double




/* =========================
   SECTION 4: CALLBACKS + LOOPS
   ========================= */

// 10) Create an arrow function called logValue
//     It logs a value




// 11) Create a function called loopArray
//     It takes:
//     - an array
//     - a callback
//     Use a loop to call the callback for EACH item




// 12) Call loopArray with this array and logValue:
let colors = ["red", "blue", "green"];



/* =========================
   SECTION 5: THINK & PREDICT
   ========================= */

// 13) What will be logged?
const test = cb => cb();
test(() => console.log("Hello"));




// 14) What happens if we pass a callback
//     but never CALL it inside the function?




// 15) Why are callbacks useful in programming?
//     (Answer in a comment)
