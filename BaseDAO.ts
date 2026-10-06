import Database from "better-sqlite3"

abstract class BaseDao{
  protected DataAccess:  Database.Database;
  
  constructor(DBpath: string = "library.DB") {
    this.DataAccess = new Database(DBpath);
  }

protected abstract initTable(): void 
}