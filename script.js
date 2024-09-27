//Step 2: If-else Condition

let number = 1 // Assign any number here

if (number > 0) {
    console.log("number is positive")
} else if (number < 0) {
    console.log("number is negative")
} else {
    console.log("number is zero")
}



// Step 3: Switch Statement
let day = 3
switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Enter numbers from 1 to 7 only")


}


// Step 4: Loops (For, While, Do...While)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// WHILE
let k = 1;

while (k <= 5) {
    console.log(k);
    k = k + 1;
}
// DO WHILE
let j = 1;

do {
    console.log(j);
    j = j + 1;
} while (j <= 5);

// Step 5: Control Flow with break and continue
for (let a = 1; a <= 5; a++) {
    console.log(a)
    if (a === 3) {
        break;
    }
}

for (let a = 1; a <= 5; a++) {
    if (a === 3) {
        continue;
    }
    console.log(a)
}

// Step 6: Scope and Context
let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    // Access globalVar and localVar inside the function
    console.log(globalVar)
    console.log(localVar)
}
scopeExample()
