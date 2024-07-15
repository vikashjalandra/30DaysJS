// Task 1
function addNums(num1, num2) {
    console.log(`Sum: ${num1 + num2}`);
}
addNums(5, 10);

// Task 2
function subtractNums(num1, num2) {
    if (num1 > num2) {
        console.log(`Subtraction: ${num1 - num2}`);
    } else if (num2 > num1) {
        console.log(`Subtraction: ${num2 - num1}`);
    }
}
subtractNums(10, 5);
subtractNums(1, 5);

// Task 3
function multiplyNums(num1, num2) {
    console.log(`Multiplication: ${num1 * num2}`);
}
multiplyNums(5, 10);

// Task 4
function divideNums(num1, num2) {
    if (num1 > num2) {
        console.log(`Division: ${num1 / num2}`);
    } else if (num2 > num1) {
        console.log(`Division: ${num2 / num1}`);
    }
}
divideNums(10, 5);

// Task 5
function remainder(num1, num2) {
    if (num1 > num2) {
        console.log(`Remainder: ${num1 % num2}`);
    } else if (num2 > num1) {
        console.log(`Remainder: ${num2 % num1}`);
    }

}
remainder(10, 5);

// Task 6

let num1 = 5;
num1 += 4;
console.log(num1);

// Task 7
let num2 = 10;
num2 -= 3;
console.log(num2);

// Task 8
function compareNums1(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);

    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}`);
    } else {
        console.log(`Numbers are equal or invalid`);
    }
}
compareNums1(10, 5);
compareNums1(5, 10);

// Task 9
function compareNums2(num1, num2) {
    if (num1 >= num2) {
        console.log(`${num1} is greater than or equal to ${num2}`);
    } else if (num2 >= num1) {
        console.log(`${num2} is greater than or equal to ${num1}`);
    } else {
        console.log(`Numbers are invalid`);
    }
}
compareNums2(10, 5);
compareNums2(5, 10);

// Task 10
function compareNums3(num1, num2) {
    if (num1 == num2) {
        if (num1 === num2) {
            console.log(`Numbers are equal and type is same`);
        } else if (num1 !== num2) {
            console.log(`Numbers are equal but type is different`);
        }
    } else {
        console.log(`Numbers are not equal`);
    }
}
compareNums3(10, 10);
compareNums3(10, '10');
compareNums3(10, '5');
compareNums3(10, 5);

// Task 11

let user = {
    name: 'vikash',
    age: 25
}

if (user.name === 'vikash' && user.age === 25) {
    console.log(`User is valid`);

} else {
    console.log(`User is invalid`);
}

// Task 12
let user1 = {
    name: 'vikash',
    age: 25
}

if (user1.name === 'vikash' || user1.age === 25) {
    console.log(`User is valid`);
} else {
    console.log(`User is invalid`);
}

// Task 13
let num = 10;

if (num!==11) {
    console.log(`Number is not 10`);
}

// Task 14
let num3 = 10;

console.log(num3 >0? 'Number is positive': 'Number is negative');
console.log(num3<0?'Number is Negative':'Number is Positive');


// Feature Request 1
function allMethods(num1,num2){
    console.log(`Sum:${num1+num2}`);
    if (num1>num2) {
        console.log(`Subtraction:${num1-num2}`);
    } else if (num2>num1) {
        console.log(`Subtraction:${num2-num1}`);
    }
    console.log(`Multiplication:${num1*num2}`);
    if (num1>num2) {
        console.log(`Division:${num1/num2}`);
    } else if (num2>num1) {
        console.log(`Division:${num2/num1}`);
    }
}

allMethods(10,5);

// Feature Request 2
function compareNums(num) {
    if (num>10 && num<20) {
        console.log(`Number is between 10 and 20`);
    } else {
        console.log(`Number is not between 10 and 20`);
    }

    if (num1>10 || num1<20) {
        console.log(`Number is either greater than 10 or less than 20`);
    } else {
        console.log(`Number is not greater than 10 or less than 20`);
    }
}

compareNums(15);

// Feature Request 3
function signCheck(num) {
    console.log(num>0? 'Number is positive': 'Number is negative');
}

signCheck(1);