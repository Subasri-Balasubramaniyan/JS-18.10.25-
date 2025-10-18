// MODEL: Handles data
const users = [];

function addUser(user) {
  users.push(user);
}

function getAllUsers() {
  return users;
}

module.exports = { addUser, getAllUsers };


/* 🧠 Clean Code Practices:

Small, focused functions (addUser, getAllUsers)

Meaningful names

Module exports used for separation */