export class BorrowRecord{ 
  private id: number;
  private borrowerName: string;
  private bookIsbn: string;
  private borrowDate: string;

  constructor(id: number, borrowerName: string,bookIsbn: string,borrowDate: string){
    this.id = id;
    this.borrowerName = borrowerName;
    this.bookIsbn = bookIsbn;
    this.borrowDate = borrowDate;
  }

getBorrowRecord():BorrowRecord {
  return new BorrowRecord(this.id,this.borrowerName,this.bookIsbn,this.borrowDate)
}

setBorrowRecord(id: number,borrowerName: string,bookIsbn: string,borrowDate: string){
  this.id = id;
  this.borrowerName = borrowerName;
  this.bookIsbn = bookIsbn;
  this.borrowDate = borrowDate;
}
}