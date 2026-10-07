import { BaseDAO } from "./BaseDAO";
import { BookDAO } from "./BookDAO";

export class BorrowRecordDAO extends BaseDAO {
  private bookDAO: BookDAO;

  constructor(bookDAO: BookDAO) {
    super(bookDAO.getConnection());
    this.bookDAO = bookDAO;
    this.initTable();
  }

  initTable(): void {
    this.db
      .prepare(
        `CREATE TABLE IF NOT EXISTS borrow_records (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          borrowerName TEXT NOT NULL,
          bookIsbn TEXT NOT NULL,
          borrowDate TEXT NOT NULL
        )`
      )
      .run();
  }

  borrowBook(borrowerName: string, isbn: string): boolean {
    const book = this.bookDAO.findBookByIsbn(isbn);
    if (book === null) {
      return false;
    }
    if (book.getIsAvailable() !== true) {
      return false;
    }

    const transaction = this.db.transaction((): boolean => {
      const inserted = this.db
        .prepare("INSERT INTO borrow_records (borrowerName, bookIsbn, borrowDate) VALUES (?, ?, ?)")
        .run(borrowerName, isbn, new Date().toISOString());
      if (inserted.changes === 0) {
        throw new Error("Failed to insert borrow record");
      }
      const updated = this.bookDAO.updateAvailability(isbn, false);
      if (!updated) {
        throw new Error("Failed to update book availability");
      }
      return true;
    });

    try {
      return transaction();
    } catch {
      return false;
    }
  }
}
