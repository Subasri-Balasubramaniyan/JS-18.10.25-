// SERVICE: Business logic layer
const UserModel = require('../models/userModel');

function registerUser(name) {
  if (!name) throw new Error("Name is required");
  UserModel.addUser({ name });
  return `User ${name} registered successfully.`;
}

module.exports = { registerUser };


/* 🧠 Clean Code Practices:

Handles validation

Throws clear errors

Single responsibility: user registration logic only */