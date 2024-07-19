// Task 1 
let arr = [1, 2, 3, 4, 5,];
console.log(arr);

// Task 2
console.log(`First Element: ${arr[0]} and Last Element: ${arr[arr.length - 1]}`);

// Task 3
arr.push(6);
console.log(arr);

// Task 4
arr.pop()
console.log(arr);

// Task 5
arr.shift()
console.log(arr);

// Task 6
arr.unshift(0);
console.log(arr);

// Task 7
let arr2 = arr.map((item)=> item*2);
console.log(arr2);

// Task 8
let arr3 = arr.filter((item)=> item%2 === 0);
console.log(arr3);

// Task 9
let arr4 = arr.reduce((item, sum)=> sum += item);
console.log(arr4);

// Task 10
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}

// Task 11
arr.forEach((item)=> console.log(item));

// Task 12
// Function to create a 2D array with given number of rows and columns
function create2DArray(rows, cols) {
    let array = new Array(rows);
    for (let i = 0; i < rows; i++) {
        array[i] = new Array(cols);
    }
    return array;
}

// Initialize a 2D array with 3 rows and 4 columns
let array2D = create2DArray(3, 4);

// Fill the array with values
for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        array2D[i][j] = i * array2D[i].length + j;
    }
}

console.log(array2D);
