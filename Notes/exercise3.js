/* =========================================================
   EXERCISES — CONDITIONALS, TERNARY, instanceof, LENGTH
   =========================================================
   Instructions:
   - Use console.log() to check your work
   - Do NOT use loops
   - Use only what we covered today
========================================================= */


/* =========================
   PART 1: VERY BASIC (WARM-UP)
   ========================= */

// 1) Create a variable age and assign it any number.
//    Write an if statement that logs:
//    "Adult" if age is 18 or more
//    "Minor" otherwise


// 2) Create a variable isLoggedIn and set it to true.
//    Write an if statement that logs:
//    "Welcome back!" if true
//    Nothing if false


// 3) Create a variable score.
//    If score is greater than 50, log "Pass".
//    Otherwise log "Fail".



/* =========================
   PART 2: instanceof / delete
   ========================= */

// 4) Create a variable called data and assign it an empty array.
//    Use typeof to log its type.
//    Use instanceof to check if it is an Array.


// 5) Create an object called user with keys:
//    name and age
//    Delete the age property
//    Log user.age (what do you get?)


// 6) Create an object called book with keys:
//    title, pages
//    Log the object before and after deleting pages.



/* =========================
   PART 3: LENGTH & indexOf
   ========================= */

// 7) Create a string called word = "JavaScript".
//    Log the length of the string.


// 8) Create an array called colors with 3 colors.
//    Log the length of the array.


// 9) Use indexOf to find the position of:
//    - "Script" inside "JavaScript"
//    - "blue" inside an array of colors



/* =========================
   PART 4: TERNARY OPERATOR (INTRO)
   ========================= */

// 10) Create a variable age.
//     Use a ternary to assign a message:
//     "Can vote" or "Too young"
//     Log the message.


// 11) Create a variable number.
//     Use a ternary to assign:
//     "Even" or "Odd"
//     Log the result.


// 12) Create a variable username.
//     If it has a value, use it.
//     Otherwise default to "Guest".
//     Log the final value.



/* =========================
   PART 5: if / else if / else
   ========================= */

// 13) Create a variable temperature.
//     If temperature is greater than 85 → log "Hot"
//     Else if greater than 65 → log "Warm"
//     Else → log "Cold"


// 14) Create a variable role.
//     If role is "admin" → log "Full access"
//     Else if role is "user" → log "Limited access"
//     Else → log "Guest access"


// 15) Create variables:
//     cartValue
//     points
//     If cartValue is 300 or more OR points is 500 or more,
//     log "Free shipping"
//     Otherwise log "Shipping applies"



/* =========================
   PART 6: NESTED CONDITIONS (SLIGHTLY HARDER)
   ========================= */

// 16) Create variables:
//     userAge
//     hasTicket
//     If userAge is 18 or more:
//        If hasTicket is true → log "Entry allowed"
//        Else → log "Ticket required"
//     Else → log "Too young"


// 17) Create variable grade (number).
//     Use if / else if / else to assign:
//     A → 90+
//     B → 80+
//     C → 70+
//     D → 60+
//     F → below 60
//     Log the letter grade.



/* =========================
   PART 7: THINKING QUESTIONS
   ========================= */

// 18) What does delete do to an object property?

// 19) What value does indexOf return if it does NOT find something?

// 20) When should you use a ternary instead of an if statement?
