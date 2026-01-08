/* =========================
   ARRAY METHODS (ESSENTIAL 5)
   =========================
   All take a callback with parameters like (value, index, array)
*/


/* =========================
   BASIC PRACTICE
   ========================= */

// 1) forEach
// Use forEach to log each student name with:
// "Student: <name>"

const students = ["Alex", "Martin", "Sam"];

// your code here



// 2) map
// Use map to create a new array where each number is doubled

const nums = [6, 4, 3, 2, 5, 1];

// your code here



// 3) filter
// Use filter to keep only numbers greater than 3

// your code here



// 4) reduce
// Use reduce to find the total of all numbers in nums

// your code here



// 5) sort
// Create two NEW arrays:
// - one sorted ascending
// - one sorted descending

// your code here



/* =========================
   MEDIUM CHALLENGE SECTION
   =========================
   RULES:
   - Use ONLY: forEach, map, filter, reduce, sort
   - Use arrow functions
   - console.log your final answers
*/


/* =========================
   CHALLENGE 1: RECEIPT TOTAL + TAX
   =========================
   You have item prices.
   1) Use map to create a new array with 10% tax added.
   2) Use reduce to get the total cost AFTER tax.
   3) Log: "Total after tax: <total>"
*/

let prices1 = [12.5, 3.99, 25.0, 8.75];

// your code here



/* =========================
   CHALLENGE 2: CLEAN + SORT SCORES
   =========================
   You have a mixed array.
   1) Use filter to keep ONLY numbers.
   2) Use filter again to keep ONLY scores >= 70.
   3) Use sort to sort them from highest to lowest.
   4) Log the final array.
*/

let mixedScores = [95, "A", 40, true, 88, null, 72, "90", 100, 67, 70];

// your code here



/* =========================
   CHALLENGE 3: INVENTORY REPORT
   =========================
   You have an inventory list.
   1) Use filter to keep ONLY items that are inStock === true.
   2) Use map to create an array of strings like: "TV ($800)"
   3) Use reduce to count how many items are in stock.
   4) Use sort to sort the in-stock items by price low → high.
   5) Log:
      - The sorted in-stock objects
      - The label strings
      - "Items in stock: X"
*/

let inventory = [
  { item: "TV", price: 800, inStock: true },
  { item: "Cable", price: 10, inStock: true },
  { item: "PS5", price: 600, inStock: false },
  { item: "Laptop", price: 1200, inStock: true },
  { item: "Headphones", price: 90, inStock: false }
];

// your code here
