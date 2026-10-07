import { BookDAO } from "./dao/BookDAO";
import { BorrowRecordDAO } from "./dao/BorrowRecordDAO";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO(bookDAO);

console.log("addBook ISBN-101:", bookDAO.addBook("ISBN-101", "Clean Code", "Robert C. Martin"));
console.log("addBook ISBN-102:", bookDAO.addBook("ISBN-102", "The Pragmatic Programmer", "Andrew Hunt"));
console.log("addBook duplicate:", bookDAO.addBook("ISBN-101", "Clean Code", "Robert C. Martin"));

console.log("");
bookDAO.findAll().forEach((book) => console.log(book.getInfo()));

console.log("");
console.log("borrow ISBN-101 (Somchai):", borrowRecordDAO.borrowBook("Somchai", "ISBN-101"));
console.log("borrow ISBN-101 again (Somsri):", borrowRecordDAO.borrowBook("Somsri", "ISBN-101"));
console.log("borrow ISBN-999 (missing):", borrowRecordDAO.borrowBook("Somchai", "ISBN-999"));

console.log("");
bookDAO.findAll().forEach((book) => console.log(book.getInfo()));
