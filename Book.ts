export class Book {
  private id: number;
  private isbn: string;
  private title: string;
  private author: string;
  private isAvailable: boolean;

  constructor(id: number, isbn: string, title: string, author: string, isAvailable: boolean) {
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }

  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
  getIsbn(): string {
    return this.isbn;
  }
  setIsbn(isbn: string): void {
    this.isbn = isbn;
  }
  getTitle(): string {
    return this.title;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  getAuthor(): string {
    return this.author;
  }
  setAuthor(author: string): void {
    this.author = author;
  }
  getIsAvailable(): boolean {
    return this.isAvailable;
  }
  setIsAvailable(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
  }

  getInfo(): string {
    const status = this.isAvailable ? "Available" : "Borrowed";
    return `[${this.isbn}] ${this.title} by ${this.author} - Status: ${status}`;
  }
}
