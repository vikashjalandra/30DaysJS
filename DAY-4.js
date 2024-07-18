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
let fact1=1
let fact2=1
let fact3 = 5

// console.log(fact2+=fact1);

do {
    fact1++
    fact2*=fact1
} while (fact3<fact1);
console.log(fact2);