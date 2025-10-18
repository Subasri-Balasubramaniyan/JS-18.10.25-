/* Singleton pattern - Use Case: Database connections, logging service, configuration manager. */

class Database {
  constructor() {
    if (Database.instance) return Database.instance;
    this.connection = "Connected to database";
    Database.instance = this;
  }
}
// Creating instances
const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true
/* Database.instance
Acts as a static property that will store the single instance of the class.

if (Database.instance) return Database.instance;
This checks if an instance already exists.
If yes, it simply returns that existing instance instead of creating a new one.

this.connection = "Connected to database";
This sets up the connection (simulated here with a message).

Database.instance = this;
Stores the current instance in the static variable Database.instance. */