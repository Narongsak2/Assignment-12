export class Book{
  private id:  number;
  private isbn:  string;
  private title:  string;
  private author:  string;
  private isAvailable: boolean;

  constructor(id: number,isbn: string,title: string, auther: string, isAvailable : boolean){
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = auther;
    this.isAvailable = isAvailable;
  }
  getBook(): Book{
    return new Book(this.id,this.isbn,this.title,this.author,this.isAvailable);
  }
  setBook(id: number,isbn: string,title: string,author: string,isAvailable: boolean): void{
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;

  }
  getInfo(): string {
    return (`ISBN[${this.isbn}] Title: ${this.title} by  ${this.author} - Status: ${this.isAvailable ? "Available" : "NotAvirible"}`);
  }
}

const book1 = new Book(1,"101", "Clean Code ","Robert C. Martin",true);
console.log(book1.getInfo());