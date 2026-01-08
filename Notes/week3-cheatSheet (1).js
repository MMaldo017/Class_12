/* =========================================================
   Week 3 JavaScript Cheat Sheet
   (Save as: week3-cheatsheet.js)
   ---------------------------------------------------------
   How to use:
   1) Include this file with <script src="week3-cheatsheet.js"></script>
   2) Open DevTools (F12) → Console.
   3) Uncomment example lines to see results.
   ========================================================= */


/* =========================
   FUNCTIONS (CORE)
   =========================
   - A function is a reusable block of code with its own scope.
   - Call it to run it. If you don’t call it, it won’t run.
   - Return ends the function and hands back a value.
*/
// console.log(addNumbers());
/*
function statement syntax:

   function functionName(){
      code to run when the function is called
   };

   need to be called:

   functionName();

   function statements are hoisted
*/

// function addNumbers(){
//    return 5 + 5;
// };

// function hello(){
//    return "Hello World"
// };

// console.log(hello());


// console.log(myName);

// let myName = "Martin"







// Function Statement (HOISTED)
//parameters are placeholders for the input
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); //  arguments
console.log(add(100, 78));


// Function Expression (NOT hoisted)
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12

// Parameters vs Arguments
// function greet(name) {               // name = parameter
//   return `Hello, ${name}!`;
// }
// console.log(greet(17));      // "Alice" is an argument
// let randomArr = ["Martin", 18, null, false];
// function firstElement(arr){
//    return arr[0]
// };

// console.log(firstElement(false));

// Return ends execution immediately
// function firstEven(nums) {
//   for (let n of nums) {
//     if (n % 2 === 0){
//       return n;
//     } 
//   }
//   return null;
// }
// console.log(firstEven([1,3,5,8,9])); // 8


/* =========================
   HOISTING (IMPORTANT)
   =========================
   - Function statements are hoisted.
   - Function expressions / arrow functions are NOT hoisted.
*/
// ok();                 // ✅ works (statement hoisted)
function ok(){ /*...*/ }

// notOk();             // ❌ ReferenceError
const notOk = function(){ /*...*/ };


/* =========================
   CALLBACKS
   =========================
   - A callback is a function passed into another function.
   - Used in array methods, event handlers, timers, etc.
*/
// let inner = function(){
//    console.log("Inner 1");
// };

// let outer = function(callback){
//    console.log("outer 1");
//    callback();//inner()
//    console.log("outer 2")
// };

// outer(inner);



// function doTwice(fn) {
//   fn();
//   fn();
// }
// doTwice(() => console.log("Hi")); // "Hi" "Hi"


/* =========================
   ASYNCHRONY: setTimeout / setInterval
   =========================
   Why do we need asynchronous functions:
      1. fecthing data from the server 
         a. Promises
         b. async/await
      2.reading files
      3. waiting for user input
      4.Timers (countdowns, intervals)

   - setTimeout(fn, ms): run once after delay
   - setInterval(fn, ms): run repeatedly until cleared

   async funtion: a function that returns a Promise, and allows you to use the keyword "await"
      syntax: async function myFunction(){    }
               async myFunction = async () => {   }

      Promise ---> is an object or something that represents a value that will exist in the future ---> need the new keyword
*/

// function wait(ms){
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          resolve("Done waiting")
//       }, ms)
//    })
// };

// async function run(){
//    console.log("Start");

//    const message = await wait(2000);
//    console.log(message);

//    console.log("End");
// };

// run()

// setTimeout()  ---> that takes a function (callback), runs that function after a specified time or delay
      //syntax: setTimeout(function, delay in milliseconds)

// console.log("Loading data....");

// setTimeout(() => console.log("Data recieved"), 3000);

// console.log("End");

// let myInterval = setInterval(() => console.log("Tick"), 2500);
//    //to stop setInterval use clearInterval

// setTimeout(() => {
//    clearInterval(myInterval)
// }, 10000)


// let tick = 0;
// const id = setInterval(() => {
//   // console.log("tick", ++tick);
//   if (tick >= 3) clearInterval(id); // stop after 3 times
// }, 1000);

// setTimeout(() => console.log("Runs later"), 500);


/* =========================
   ARROW FUNCTIONS
   =========================
   - Shorthand for function expressions.
   - `param => expression` (implicit return)
   - `param => { statements; return value; }` (block body)
   - if you only have a single parameter, you do not need the ()
   - => --> anything to the right of that arrow is what is being returned
*/
// let squareFun = (x) => {
//    return x * x;
// }
// const square = x => x * x;
// console.log(square(5)); // 25

// const toSentence = (first, last) => {
//   const name = `${first} ${last}`;
//   return `Hello, ${name}.`;
// };
// console.log(toSentence("Martin", "Maldonado"));




//write a function called showContact
   //two arguments, the first is a list of contacts, and the second is the index number of the contact to display

// function showContact(contactList, index){

//       let myContact = contactList[index];
//       //if the number is not between 0 and the number of indices in the given array
//       if(index < 0 || index >= contactList.length){
//          console.log("Error: index number out of range of the array");
//          return;
//       }
//       console.log(`Name: ${myContact.name}, Phone: ${myContact.phone}, Email: ${myContact.email} `)
// };

// showContact(contacts, 2);


//create a function to show all contacts

// function showAllContacts(contactsList){

//       //how do we show all contacts 
//       for(let i of contactsList){
//          console.log(`Contacts: ${i.name}, ${i.phone}, ${i.email}`)
//       }

// };

// showAllContacts(contacts);

//addNewContact ---> that adds a new contact to the contacts array, {name, phone, email}(.push)

// addNewContact
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];
// //function that adds a name, phone, and email to a array
// function addNewContact(array, name, phone, email){

//    //check to see if they put in all the fields
//    if(!name || !phone || !email){
//       console.log("Please enter all the information")
//       return;
//    }

//    array.push({
//    name: String(name), 
//    phone: String(phone), 
//    email: String(email)
// });
   
// };

// addNewContact(contacts, "Martin", 1111111111, "email@email.com");
// addNewContact(contacts, "Zach", 1111111111, "zachEmail@email.com");
// addNewContact(contacts, "Elijah", 1111111111, "elijah@email.com")

// console.log(contacts)
 


/* =========================
   ARRAY METHODS (ESSENTIAL 5)
   =========================
   All take a callback with parameters like (value, index, array)
*/

// 1) forEach: iterate (no return) ---> takes a callback function to run at each element of said array
//console.log method

const students = ["Alex", "Martin", "Sam"];
students.forEach(student => console.log(`Hello, ${student}.`))
//n = 6, n = 4, n = 3, n = 2, n = 5, n = 1
nums.forEach(n => console.log(n));

// 2) map: transform → new array
const doubled = nums.map(n => n * 2);
console.log(doubled); // [12,8,6,4,10,2]






// 3) filter: keep items that pass a  condition
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk",
//     age: 23
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com",
//     age: 59
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu",
//     age: 34
// }];

// const rentalAge = contacts.filter(a => a.age >= 25)
// //a = {whole object}
// console.log(rentalAge);


// const ages = [24,19, 39, 44, 21];
// const adults = ages.filter(age => age >= 21);
// console.log(adults)
// const evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [6,4,2]

// 4) reduce: fold to a single value
const taxed = nums.map(total => Number((total * 1.10).toFixed(2)))
// console.log(taxed);
//syntax reduce .reduce((acc, element) => {}, initial value of acc)
const sum = taxed.reduce((acc, n) => acc + n, 0);//

// console.log(sum); 

// 5) sort: order items (⚠️ mutates!)
// Default compares as strings; provide a compare fn for numbers:
//spread op ...
//nums.sort()  ---> that would actually chance the orginal array
//!!!  .sort() ---> converts the values into strings
const nums = [6, 4, 3, 2, 5, 1];
const asc = [...nums].sort((a, b) => a - b);
const desc = [...nums].sort((a, b) => b - a);
console.log(typeof asc[0], desc);



// Sort objects by key:
const users = [
  { name: "Martin", age: 33 },
  { name: "Bob", age: 44 },
  { name: "Stacy", age: 24 }
];
console.table(users.sort((a,b) => a.age - b.age));

/* BONUS: find / some / every */
const found = nums.find(n => n > 4);     // first > 4
const anyEven = nums.some(n => n % 2==0);// true if any
const allPos = nums.every(n => n > 0);   // true if all
// console.log(found, anyEven, allPos);


/* =========================
   STRING & NUMBER QUICKIES
   ========================= */
const s = "Hello World";
// console.log(s.toLowerCase(), s.includes("World"), s.indexOf("o"));

const n = 12.3456;
// console.log(n.toFixed(2)); // "12.35"
// console.log(Number.isNaN(Number("abc"))); // true


/* =========================
   COMPARISONS & LOGIC
   =========================
   - Prefer strict equality (===, !==)
   - && and || short-circuit and return a value
*/

const age = 19;
const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // "Yes"

// Short-circuit defaults:
const inputName = "";
const displayName = inputName || "Guest";
// console.log(displayName); // "Guest"


/* =========================
   DOM BASICS (SELECT / CHANGE)
   =========================
   - These require a real HTML page with matching elements.
   - Uncomment if you have elements present in the DOM.
*/

// SELECT
// const title = document.getElementById("title");
// const firstPara = document.querySelector(".text");
// const allItems = document.querySelectorAll("li");

// CHANGE CONTENT
// if (title) title.textContent = "New Title";

// STYLES & CLASSES
// if (firstPara) {
//   firstPara.style.color = "skyblue";
//   firstPara.classList.add("highlight");
// }

// CREATE / APPEND
// const list = document.getElementById("list");
// if (list) {
//   const li = document.createElement("li");
//   li.textContent = "New Item";
//   list.appendChild(li);
// }


/* =========================
   EVENTS (INTERACTIVITY)
   =========================
   - addEventListener("event", handler)
   - handler can be a named function or an arrow function
*/

// const btn = document.getElementById("btn");
// if (btn) btn.addEventListener("click", () => alert("Clicked!"));

// Prevent form submit (stay on page):
// const form = document.getElementById("myForm");
// if (form) form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = form.querySelector("input")?.value || "";
//   console.log("Submitted:", value);
// });


/* =========================
   COMMON PATTERNS & PITFALLS
   =========================
   - Avoid mutating arrays while iterating; use map/filter.
   - Don’t forget `return` inside arrow function blocks.
   - `sort()` mutates the original array (clone with [...arr]).
   - Arrow functions don’t have their own `this` (lexical this).
*/

// Example: clone before sort
const original = [3,2,1];
const sortedClone = [...original].sort((a,b) => a-b);
// console.log(original, sortedClone);


/* =========================
   PRACTICE SNIPPETS (UNCOMMENT)
   ========================= */

// 1) Write a function that returns the average:
function average(arr) {
  if (!arr.length) return 0;
  const total = arr.reduce((acc, n) => acc + n, 0);
  return total / arr.length;
}
// console.log(average([10, 20, 30])); // 20

// 2) Use filter + map to get names of adults:
const people = [
  {name: "Ana", age: 17},
  {name: "Luis", age: 21},
  {name: "Mia", age: 19},
];
// console.log(people.filter(p => p.age >= 18).map(p => p.name)); // ["Luis","Mia"]

// 3) Debounce (basic idea): wait until user stops typing
function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
// const onInput = debounce((v) => console.log("Search:", v), 300);
// onInput("w"); onInput("wa"); onInput("wat"); // only last runs


/* =========================
   QUICK GLOSSARY
   =========================
- Function Statement: `function f(){}` (hoisted)
- Function Expression: `const f = function(){}` (not hoisted)
- Arrow Function: `const f = x => x * 2`
- Callback: A function passed to another function
- setTimeout / setInterval: schedule tasks; clear with clearTimeout/clearInterval
- Array Helpers: forEach (iterate), map (transform), filter (keep), reduce (fold), sort (order)
- Event Listener: Runs when the event occurs (click, submit, input)
- Prevent Default: Keep the browser from doing its default action
*/


/* =========================================================
   End of Week 3 Cheat Sheet
   ========================================================= */
