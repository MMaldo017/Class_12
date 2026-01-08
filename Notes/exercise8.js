/* =========================================================
   EXERCISES — ASYNCHRONY (BEGINNER)
   setTimeout / setInterval / async-await (INTRO)
   =========================================================
   RULES:
   - Do NOT change existing code unless instructed
   - Fill in blanks first
   - Use console.log to observe order of execution
========================================================= */


/* =========================
   SECTION 1: FILL IN THE BLANK (WARM-UP)
   ========================= */

// 1) Fill in the missing parts
// This function should log "Hello" AFTER 2 seconds

setTimeout(() => {
  console.log("_____");
}, _____);


// 2) Fill in the blanks so this logs "Tick" every second

let intervalId = setInterval(() => {
  console.log("_____");
}, _____);


// 3) Fill in the blanks to STOP the interval after 5 seconds

setTimeout(() => {
  _____(intervalId);
}, _____);



/* =========================
   SECTION 2: UNDERSTANDING ORDER (NO BLANKS)
   ========================= */

// 4) What will log FIRST and what will log LAST?
// Write your answer as comments ABOVE the code

console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 1000);

console.log("End");



/* =========================
   SECTION 3: GUIDED ASYNC / AWAIT
   ========================= */

// 5) Fill in the blanks so this function:
// - waits 2 seconds
// - then logs "Finished waiting"

function wait(ms){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished waiting");
    }, ms);
  });
}

async function run(){
  console.log("Begin");

  const result = _____ _____(2000);
  console.log(result);

  console.log("Done");
}

// Call the function
_____();



/* =========================
   SECTION 4: WRITE IT YOURSELF (SIMPLE)
   ========================= */

// 6) Write a setTimeout that logs:
//    "This runs later"
//    after 3 seconds




// 7) Write a setInterval that logs:
//    "Counting..."
//    every 2 seconds




// 8) Stop the interval from #7 after 6 seconds




/* =========================
   SECTION 5: THINK & PREDICT
   ========================= */

// 9) What does this function return immediately?
// Write your answer as a comment

async function demo(){
  return "Hello";
}


// 10) Why does async/await help us read code more easily?
// Write your answer as a comment
