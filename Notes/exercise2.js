/* =========================================================
   EXERCISES — Operators, Strings, Comparison, Logical
   (Same difficulty, different code)
   =========================================================
   Instructions:
   - Write code under each problem.
   - Use console.log() to test your answers.
   - Ignore loops for now (no for/while needed).
========================================================= */


/* =========================
   PART 1: ARITHMETIC OPERATORS
   ========================= */

// 1) Create two numbers: price = 24.50 and taxRate = 0.08
//    Calculate taxAmount (price * taxRate) and log it.


// 2) Create a variable total = 50.
//    Add 12.75 to it using compound assignment.
//    Log total.


// 3) Create two numbers: a = 17 and b = 5
//    Log the remainder when a is divided by b.


// 4) Create a variable base = 3.
//    Create a variable power = 4.
//    Calculate base to the power of power and log it.


// 5) Create a string numStr = "200".
//    Convert it into a number using unary + and log:
//      - the converted value
//      - typeof the converted value



/* =========================
   PART 2: UNARY + / - (COERCION / NEGATION)
   ========================= */

// 6) Create a string negativeStr = "15".
//    Convert it into -15 using unary minus.
//    Log the result.


// 7) Predict the output (write a comment), then run it:
//    console.log(+"abc");
//    console.log(-"7");
//    console.log(+"12");
//    (Uncomment to test)



/* =========================
   PART 3: STRING TOOLS (CONCAT + TEMPLATE LITERALS)
   ========================= */

// 8) Create variables city = "Tokyo" and country = "Japan".
//    Use concatenation (+) to log: "Tokyo, Japan"


// 9) Create variables user = "Gandalf" and level = 99.
//    Use a template literal to log:
//    "User Gandalf is level 99"


// 10) Create a multi-line template literal called message that contains:
//     Line 1: "Welcome!"
//     Line 2: "Please read the rules."
//     Log message.



/* =========================
   PART 4: COMPARISON OPERATORS
   ========================= */

// 11) Create variables n1 = 10 and n2 = "10".
//     Log these comparisons:
//     - n1 === n2
//     - n1 == n2


// 12) Create variable age = 20.
//     Log whether age is greater than or equal to 18.


// 13) Create two strings word1 = "cat" and word2 = "dog".
//     Log whether word1 is less than word2 (lexicographic).


// 14) Create variable score = 75.
//     Log whether score is NOT equal to 100 (use !==).



/* =========================
   PART 5: LOGICAL OPERATORS (&&, ||, !)
   ========================= */

// 15) Create variables hasTicket = true and isVip = false.
//     Log the result of:
//     - hasTicket && isVip
//     - hasTicket || isVip


// 16) Create variable isOnline = false.
//     Log the opposite value using !


// 17) Short-circuit practice:
//     Log the result of:
//     - "Admin" || "Guest"
//     - "" || "Guest"


// 18) Short-circuit practice with AND:
//     Log the result of:
//     - 0 && "Hello"
//     - 1 && "Hello"


// 19) Create variables usernameInput = "".
//     Create displayName using OR so it becomes either usernameInput or "Guest".
//     Log displayName.



/* =========================
   PART 6: MIXED PRACTICE (SAME LEVEL)
   ========================= */

// 20) Create variables:
//     items = 3
//     priceEach = 9.99
//     totalCost = items * priceEach
//     Log totalCost.
//
//     Then convert totalCost into a string using String() and log the typeof.


// 21) Create variables:
//     enteredPin = "1234" (string)
//     correctPin = 1234 (number)
//     Log strict equality and loose equality comparisons.


// 22) Create a variable points = 0.
//     Use ! to convert it into a boolean and log it.
//     Then log Boolean(points) too.
//     (Compare the outputs.)


// 23) Create variables firstName = "Alice" and lastName = "Ng".
//     Use a template literal to log:
//     "Name: Alice Ng (length: X)"
//     (Use .length for the full name string you build.)


// 24) Create two variables:
//     a = "5"
//     b = 5
//     Log the result of:
//     - a + b
//     - a - b
//     - a * b
//     - a / b
//     (This is about type coercion.)
