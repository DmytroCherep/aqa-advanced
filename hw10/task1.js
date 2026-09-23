import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Harry Potter", "J. K. Rowling", 1997);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook(
    "The Martian",
    "Andy Weir",
    2011,
    "EPUB"
);

ebook1.printInfo();


// Getters and setters
book1.title = "The Hobbit: An Unexpected Journey";
book1.year = 1938;

console.log(book1.title);
console.log(book1.year);

ebook1.fileFormat = "PDF";

console.log(ebook1.fileFormat);


// Find the oldest book
const books = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(books);

console.log("Oldest book:");
oldestBook.printInfo();


// Create EBook from Book
const ebook2 = EBook.fromBook(book2, "PDF");

console.log("EBook created from Book:");
ebook2.printInfo();