/* =========================================================
   OOP EXERCISES (BEGINNER → BUILD UP)
   =========================================================
   RULES:
   - Only the first couple are fill-in-the-blank
   - After that, you write the code yourself
   - Use console.log to test everything
   - Focus: class syntax, constructor, this, methods, encapsulation,
            inheritance, polymorphism
========================================================= */


/* =========================
   SECTION 1: WARM-UP (FILL IN THE BLANK)
   ========================= */

// 1) Fill in the blanks to create a basic class
class ________ {
  constructor(make, model) {
    this.________ = make;
    this.________ = model;
  }
}

const car1 = new ________("Toyota", "Camry");
// console.log(car1.make, car1.model);


// 2) Fill in the blanks to add a method
class Phone {
  constructor(brand) {
    this.brand = brand;
  }

  ________() {
    console.log(`${this.brand} is ringing...`);
  }
}

const p1 = new Phone("iPhone");
// p1.ring();



/* =========================
   SECTION 2: REAL LIFE CLASSES (WRITE IT YOURSELF)
   ========================= */

// 3) Create a class User with:
//    - properties: username, email
//    - method: login() → logs "<username> logged in."
//    - method: logout() → logs "<username> logged out."
// Create 2 users and test login/logout.




// 4) Create a class Product with:
//    - properties: name, price
//    - method: display() → logs "Product: <name> $<price>"
// Create 3 products and call display() on each.




// 5) Create a class ShoppingCart with:
//    - property: items (starts as an empty array)
//    - method: addItem(product) → adds product to items
//    - method: showItems() → logs each item name + price
// Create a cart, add products, then show them.
// (You can use .push inside addItem)




/* =========================
   SECTION 3: ENCAPSULATION (BANK ACCOUNT)
   ========================= */

// 6) Create a class BankAccount with:
//    - private field: #balance
//    - constructor(owner, startingBalance)
//    - method: deposit(amount) → increases balance
//    - method: withdraw(amount) → decreases balance ONLY if enough money
//    - method: getBalance() → returns the balance
// Create an account and test deposit/withdraw/getBalance.
// IMPORTANT: Try console.log(account.#balance) (it should error)




/* =========================
   SECTION 4: INHERITANCE (BANK ACCOUNT TYPES)
   ========================= */

// 7) Create a subclass SavingsAccount that extends BankAccount:
//    - add property: interestRate
//    - method: addInterest() → adds interest to the current balance
// (Hint: interest = balance * interestRate, then deposit it)




// 8) Create a subclass BusinessAccount that extends BankAccount:
//    - add property: overdraftLimit
//    - override withdraw(amount) so it allows going negative
//      down to -overdraftLimit (not beyond)
// Test both subclasses.



/* =========================
   SECTION 5: POLYMORPHISM (SAME METHOD NAME, DIFFERENT BEHAVIOR)
   ========================= */

// 9) Create an array called accounts that contains:
//    - one BankAccount
//    - one SavingsAccount
//    - one BusinessAccount
// Call withdraw(50) on each and observe behavior differences.
// (You may need to set balances so you can see the difference)




/* =========================
   SECTION 6: MINI PROJECT — VIDEO GAME CHARACTERS
   =========================
   Build a simple Character system.
*/

// 10) Create a class Character with:
//     - properties: name, health, attackPower
//     - method: attack(target)
//         logs: "<name> attacks <target.name> for <attackPower> damage!"
//         calls target.takeDamage(attackPower)
//     - method: takeDamage(amount)
//         subtracts from health
//         logs: "<name> now has <health> health."
//         if health <= 0, set health to 0 and log "<name> has been defeated!"




// 11) Create two characters and make them fight (attack each other)
//     Example: hero attacks monster, monster attacks hero...




// 12) Create a subclass Warrior that extends Character:
//     - add method: powerStrike(target)
//         deals attackPower + 10 damage
//         logs: "<name> uses Power Strike!"




// 13) Create a subclass Mage that extends Character:
//     - add method: fireball(target)
//         deals attackPower + 20 damage
//         logs: "<name> casts Fireball!"




// 14) Create a small party (array) of characters:
//     - one Character
//     - one Warrior
//     - one Mage
// Loop through them and call attack() on the same target.
// This demonstrates polymorphism (shared method name: attack)




/* =========================
   SECTION 7: BONUS (MEDIUM CHALLENGE)
   ========================= */

// 15) Add a private field #isAlive to Character (starts true)
//     - If a character is defeated, set #isAlive to false
//     - Prevent dead characters from attacking
//       (If dead, log: "<name> cannot attack, they are defeated.")
