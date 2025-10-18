// Model
class UserModel {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }
}

// View
class UserView {
  display(users) {
    console.log("User List:", users);
  }
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
/* ⚙️ Step-by-Step Explanation
1. 🧱 Model Layer (Data / Logic)
class UserModel {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }
}


Purpose: Handles data and business logic.

this.users stores the data (list of users).

addUser(user) updates the data by adding a new user.

✅ Responsible for data storage and manipulation.
❌ Not responsible for displaying anything.

2. 👁️ View Layer (Presentation)
class UserView {
  display(users) {
    console.log("User List:", users);
  }
}


Purpose: Displays data to the user.

It knows how to show the data but not how to get or change it.

display(users) simply prints the list of users to the console.

✅ Responsible for UI (presentation).
❌ Does not handle business logic or data management.

3. 🕹️ Controller Layer (Coordinator)
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


Purpose: Acts as a bridge between the Model and the View.

Takes user input (in this case, the name "Subasri").

Updates the Model → adds the user.

Then updates the View → displays the new list.

✅ Controls flow between data and UI.

4. Bringing It All Together
const model = new UserModel();
const view = new UserView();
const controller = new UserController(model, view);
controller.addUser("Subasri");


Create instances of each layer:

model → handles data

view → handles display

controller → coordinates both

controller.addUser("Subasri") does:

Calls model.addUser("Subasri") → adds to the array.

Calls view.display(model.users) → shows the updated list. */