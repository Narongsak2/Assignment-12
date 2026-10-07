export class BorrowRecord {
  private id: number;
  private borrowerName: string;
  private bookIsbn: string;
  private borrowDate: string;

  constructor(id: number, borrowerName: string, bookIsbn: string, borrowDate: string) {
    this.id = id;
    this.borrowerName = borrowerName;
    this.bookIsbn = bookIsbn;
    this.borrowDate = borrowDate;
  }

  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
  getBorrowerName(): string {
    return this.borrowerName;
  }
  setBorrowerName(borrowerName: string): void {
    this.borrowerName = borrowerName;
  }
  getBookIsbn(): string {
    return this.bookIsbn;
  }
  setBookIsbn(bookIsbn: string): void {
    this.bookIsbn = bookIsbn;
  }
  getBorrowDate(): string {
    return this.borrowDate;
  }
  setBorrowDate(borrowDate: string): void {
    this.borrowDate = borrowDate;
  }
}
