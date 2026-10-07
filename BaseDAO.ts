import Database from "better-sqlite3";

export abstract class BaseDAO {
  protected db: Database.Database;

  constructor(db?: Database.Database) {
    this.db = db ?? new Database("library.db");
  }

  getConnection(): Database.Database {
    return this.db;
  }

  abstract initTable(): void;
}
