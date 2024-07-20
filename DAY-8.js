// Task 1
let person ={
    name:'Vikash',
    age:22
}
let str =`Name:${person.name} and Age:${person.age}`

console.log(str);

// Task 2
let str2 = `My \n is \n vikash`
console.log(str2);

// Task 3
let arr=[1,2];
let [one,two]=arr

console.log(one);

// Task 4
let {name,age}=person
console.log(name);

// Task 5
let arr1=[4,3,5]
let arr2=[9,9,9]
let arr3=[...arr1,...arr2]
console.log(arr3);

// Task 6
function sum(...nums) {
    return nums.reduce((acc,curr)=>acc+curr)
}

console.log(sum(1,2,3,4,5,6,7,8,9))

// Task 7
function defSum(num1,num2=1) {
    console.log(num1*num2);
}
defSum(4,4)

// Task 8