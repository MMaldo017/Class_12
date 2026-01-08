/* =========================================================
   ANSWER KEY — ASYNCHRONY (BEGINNER)
   setTimeout / setInterval / async-await
   ========================================================= */


/* =========================
   SECTION 1: FILL IN THE BLANK
   ========================= */

// 1
setTimeout(() => {
  console.log("Hello");
}, 2000);

// 2
let intervalId = setInterval(() => {
  console.log("Tick");
}, 1000);

// 3
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);



/* =========================
   SECTION 2: UNDERSTANDING ORDER
   ========================= */

// FIRST: "Start"
// SECOND: "End"
// LAST: "Middle"

console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 1000);

console.log("End");



/* =========================
   SECTION 3: GUIDED ASYNC / AWAIT
   ========================= */

function wait(ms){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished waiting");
    }, ms);
  });
}

async function run(){
  console.log("Begin");

  const result = await wait(2000);
  console.log(result);

  console.log("Done");
}

run();



/* =========================
   SECTION 4: WRITE IT YOURSELF
   ========================= */

// 6
setTimeout(() => {
  console.log("This runs later");
}, 3000);

// 7
let countInterval = setInterval(() => {
  console.log("Counting...");
}, 2000);

// 8
setTimeout(() => {
  clearInterval(countInterval);
}, 6000);



/* =========================
   SECTION 5: THINK & PREDICT
   ========================= */

// 9
// This function immediately returns a Promise
// that resolves to the value "Hello"

async function demo(){
  return "Hello";
}

// 10
// async/await helps code read from top to bottom,
// making asynchronous code look and behave more
// like normal synchronous code.
