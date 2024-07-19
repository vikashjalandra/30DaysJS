// Task 1
for (let i = 1; i <=10; i++) {
    // console.log(i);
    
}

// Task 2

function table(num) {
    for (let i = 1; i <= 10; i++) {
        // console.log(`${num} * ${i} = ${num * i}`);
    }
}
table(5);

// Task 3
let sum=0;
let i=0;

while (i<10) {
    i++;
    sum += i;
}
// console.log(sum);

// Task 4
let index=10
while (index>0) {
    // console.log(index);
    index--;   
}

// Task 5
let d = 0;
do {
    d++
    // console.log(d);
} while (d<5);

// Task 6

function factorial(n) {
    if (n < 0) {
        return "Factorial of a negative number doesn't exist.";
    }
    
    let result = 1;
    let i = n;

    do {
        result *= i;
        i--;
    } while (i > 0);

    return result;
}
console.log( factorial(5))

// Task 7

function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            
                pattern += "*";
        }
        console.log(pattern);
    }
}

const numberOfRows = 5; // You can change this value to get a larger or smaller pattern
printPattern(numberOfRows);
