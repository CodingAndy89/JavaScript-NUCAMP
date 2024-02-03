class Books {
    constructor(title, author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        if (book instanceof Books) {
            this.books.push(book);
            console.log(`${book.title} has been added to the library. \n`);
        }
        else {
            console.log('Invalid book object. Please enter correct details.');
        }
    }
    checkOutBook(title) {
        try {
            let found = false;
            for (let book of this.books) {
                if (book.title === title && book.available) {
                    found = true;
                    book.available = false;
                    console.log(`Check out : ${book.title}`);
                    break;
                }
            }
            if (!found) {
                throw new Error(`The book: "${title}" was not found or already checked out. \n`);
            }
        }
        catch(error) {
            console.log(error.message);
        }
    }
    getAvailableBooks() {
        let bookList = [];
        for (let book of this.books) {
            if (book.available) {
                bookList.push(book.title);
            }
        }
        console.log(`There are ${bookList.length} titles currently on the shelf: \n ${bookList.join(", ")}`);
    }
}

const newBooks =
`[
    {"title": "JavaScript: The Definitive Guide", "author": "David Flanagan"},
    {"title": "Head First JavaScript Programming", "author": "Eric T Morrison"},
    {"title": "Eloquent JavaScript, 3rd Edition", "author": "Marijn Haverbeke"},
    {"title": "The Principles of Object-Oriented JavaScript", "author": "Nicholas C. Zakas"}
]`;

receiveBooks = function(newBooks) {
    console.log(`Adding new books in our library!\n`);
    const booksToAdd = JSON.parse(newBooks);
    for (let i=0; i < booksToAdd.length; i++) {
        libraryObject.addBook(new Books(booksToAdd[i].title, booksToAdd[i].author));
    }
}

const libraryObject = new Library();

const book1 = new Books("Here, There and Everywhere", "Sudha Murty");
const book2 = new Books("Wings of Fire", "APJ Abdul Kalam");
const book3 = new Books("The day that changed Everything", "Catherine Miller");
const book4 = new Books("One night at the call center", "Chetan Bhagat");

libraryObject.addBook(book1);
libraryObject.addBook(book2);
libraryObject.addBook(book3);
libraryObject.addBook(book4);

libraryObject.checkOutBook("Here, There and Everywhere");
libraryObject.getAvailableBooks();
receiveBooks(newBooks);

console.log(`There are currently ${libraryObject.books.length} books in the library's database.\n`);
libraryObject.addBook(new Books("Eloquent JavaScript", "Marijn Haverbeke"));
receiveBooks(newBooks);
libraryObject.checkOutBook("Eloquent JavaScript");
libraryObject.checkOutBook("Grokking the Coding Interview");

libraryObject.getAvailableBooks();