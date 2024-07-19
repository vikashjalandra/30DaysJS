// Task 1
const book ={
    title:'Heaven',
    auther:'God',
    year:1
}
// console.log(book);

// Task 2
console.log(`Title:${book.title} Auther:${book.auther}`);

// Task 3
const titleAuth = `Title:${book.title} and Auther:${book.auther}`
// console.log(titleAuth);

// Task 4
function yearUpdate(year) {
    book.year=year
    // console.log(book.year);
}
yearUpdate(2029)

// Task 5
const librery = {
    name:'Supreme',
    books:[
        {
            title:'Heaven',
            auther:'God',
            year:1
        },
        {
            title:'Hell',
            auther:'Devil',
            year:-9
        },
    ]
}

// console.log(librery);

// Task 6
let booksName =[] 
librery.books.map((book)=>{
    booksName.push(book.title)
});

// console.log(`Librery name:${librery.name} and books: ${booksName}`);

// Task 7
book.bookNameYear=function(){
    // console.log(`Book Name:${this.title} and year:${this.year}`);
}
book.bookNameYear()

// Task 8
for (const key in book) {
    if (Object.hasOwnProperty( key)) {
        const element = book[key];
        console.log(element);
        
    }
}

// Task 9
console.log(`Keys:${Object.keys(book)} and Values:${Object.values(book)}`);