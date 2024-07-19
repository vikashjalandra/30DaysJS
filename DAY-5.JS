// Task 1
function evenODD(num) {
    if (num%2==0) {
        console.log(`${num} is Even`);
    } else if (num%2!=0) {
        console.log(`${num} is Odd`);
    } else {
        console.log('Invalid Input');
    }
} 

evenODD(7)

// Task 2
function square(num) {
    console.log(`Square of ${num} is ${num*num}`);
}

square(1000000)

// Task 3
function max(num1, num2) {
    if (num1>num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num1<num2) {
        console.log(`${num2} is greater than ${num1}`);
    } else if(num1===num2){
        console.log(`${num2} and ${num1} are equal`);
    } else{
        console.log('Invalid Input');
    }
}

max(5,'5')

// Task 4

function conCt(str1,str2) {
    if (typeof str1=='string' && typeof str2=='string') {
        let str = String.concat(str1,str2);
        console.log(str);
    }
}

console.log('vikash','kumawat');

// Task 5
const sum =(num1,num2)=>{
console.log(`sum of ${num1} and ${num2} is ${num1+num2}`);
}

sum(6,5)

// Task 6
const char = (str,char)=>{ 
    let str1 = str
    console.log(str1.includes(char));
}

char('vikash','s')

// Task 7
function mul(num1,num2=7) {
    console.log(num1*num2);
}

mul(2,3)

// Task 8
function greet(name,age=15) {
    console.log(`Hello ${name}, Congratulation you are ${age} now`);
}

greet('vikash',22)

// Task 9
let fun=()=>{
    console.log('Hello World');
}
function high(func,num) {
    for (let i = 0; i < num; i++) {
        func()
        
    }
}
high(fun,3)

// Task 10
let func1=(val)=>{
    ++val
    return val
}

let func2=(num)=>{
    ++num
    return num
}

function now(f1,f2,n){
    let newFunc1 =f1(n)
    let newFunc2 = f2(newFunc1)
    console.log(newFunc2);
}

now(func1,func2,2)

