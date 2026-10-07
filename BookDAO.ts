import Database from "better-sqlite3";
import { BaseDAO } from "./BaseDAO";
import { Book } from "../models/Book";

interface BookRow {
  id: number;
  isbn: string;
  title: string;
  author: string;
  isAvailable: number;
}

export class BookDAO extends BaseDAO {
  constructor(db?: Database.Database) {
    super(db);
    this.initTable();
  }

  initTable(): void {
    this.db
      .prepare(
        `CREATE TABLE IF NOT EXISTS books (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          isbn TEXT NOT NULL UNIQUE,
          title TEXT NOT NULL,
          author TEXT NOT NULL,
          isAvailable INTEGER NOT NULL DEFAULT 1
        )`
      )
      .run();
  }

  private toBook(row: BookRow): Book {
    return new Book(row.id, row.isbn, row.title, row.author, row.isAvailable === 1);
  }

  addBook(isbn: string, title: string, author: string): boolean {
    try {
      const result = this.db
        .prepare("INSERT INTO books (isbn, title, author, isAvailable) VALUES (?, ?, ?, 1)")
        .run(isbn, title, author);
      return result.changes > 0;
    } catch {
      return false;
    }
  }

  findBookByIsbn(isbn: string): Book | null {
    const row = this.db.prepare("SELECT * FROM books WHERE isbn = ?").get(isbn) as BookRow | undefined;
    return row ? this.toBook(row) : null;
  }

  updateAvailability(isbn: string, isAvailable: boolean): boolean {
    const result = this.db
      .prepare("UPDATE books SET isAvailable = ? WHERE isbn = ?")
      .run(isAvailable ? 1 : 0, isbn);
    return result.changes > 0;
  }

  findAll(): Book[] {
    const rows = this.db.prepare("SELECT * FROM books ORDER BY id").all() as BookRow[];
    return rows.map((row) => this.toBook(row));
  }
}
