🧩 Design Patterns & Code Organization in JavaScript

This document explains important Design Patterns and Code Organization principles using simple JavaScript examples.

🎨 1. Design Patterns

Design patterns are reusable solutions to common software design problems.
They improve code readability, reusability, and scalability.

🧱 1. Singleton Pattern

Ensures only one instance of a class exists throughout the program.

class Database {
  constructor() {
    if (Database.instance) return Database.instance;
    this.connection = "Connected to database";
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true

⚙️ 2. Factory Pattern

Creates objects without exposing the creation logic.

class Car { drive() { return "Driving a car"; } }
class Bike { drive() { return "Riding a bike"; } }

class VehicleFactory {
  static createVehicle(type) {
    if (type === "car") return new Car();
    if (type === "bike") return new Bike();
  }
}

const vehicle = VehicleFactory.createVehicle("car");
console.log(vehicle.drive()); // Driving a car

📢 3. Observer Pattern

Defines a one-to-many relationship between objects so when one changes, others are notified.

class Subject {
  constructor() { this.observers = []; }
  subscribe(observer) { this.observers.push(observer); }
  notify(data) { this.observers.forEach(o => o.update(data)); }
}

class Observer {
  update(data) { console.log(`Received: ${data}`); }
}

const subject = new Subject();
const obs1 = new Observer();
subject.subscribe(obs1);
subject.notify("New Event!"); // Received: New Event!

🧩 4. Module Pattern

Encapsulates related functions and keeps variables private.

const CounterModule = (() => {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();

CounterModule.increment();
console.log(CounterModule.getCount()); // 1

🧠 5. MVC (Model-View-Controller)

Separates application logic into Model, View, and Controller.

// Model
class UserModel {
  constructor() { this.users = []; }
  addUser(user) { this.users.push(user); }
}

// View
class UserView {
  display(users) { console.log("User List:", users); }
}

// Controller
class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  addUser(user) {
    this.model.addUser(user);
    this.view.display(this.model.users);
  }
}

const model = new UserModel();
const view = new UserView();
const controller = new UserController(model, view);
controller.addUser("Subasri");

⚡ 6. Strategy Pattern

Defines a family of algorithms, encapsulates each, and allows switching between them dynamically.

class StrategyA { execute() { return "Strategy A executed"; } }
class StrategyB { execute() { return "Strategy B executed"; } }

class Context {
  setStrategy(strategy) { this.strategy = strategy; }
  executeStrategy() { return this.strategy.execute(); }
}

const context = new Context();
context.setStrategy(new StrategyA());
console.log(context.executeStrategy()); // Strategy A executed
context.setStrategy(new StrategyB());
console.log(context.executeStrategy()); // Strategy B executed

🏗️ 2. Code Organization
📁 Example Folder Structure
project/
│
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── services/
│   └── userService.js
├── app.js
└── package.json


Each layer has a single responsibility:

models/ → Data and business logic

controllers/ → Handle requests/responses

services/ → Handle business operations

routes/ → Define API routes

app.js → Application entry point

🧹 Clean Code Practices
Principle	Description
Meaningful Names	Use clear, descriptive variable and function names
Single Responsibility	Each module/class should do one job
DRY (Don’t Repeat Yourself)	Reuse code instead of duplicating logic
Consistent Formatting	Keep indentation, naming, and structure consistent
Error Handling	Use try–catch blocks and informative messages
Comments	Explain “why,” not “what”
Separation of Concerns	Keep logic, UI, and data handling separate
🧠 Example of Clean Node.js Code
// controllers/userController.js
const UserService = require('../services/userService');

function addUser(req, res) {
  try {
    const { name } = req.body;
    const message = UserService.registerUser(name);
    res.json({ success: true, message });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

module.exports = { addUser };

✅ Summary
Concept	Description
Design Patterns	Provide reusable software architecture solutions
Code Organization	Keeps project modular, scalable, and easy to maintain
Clean Code	Makes code readable, consistent, and bug-resistant
