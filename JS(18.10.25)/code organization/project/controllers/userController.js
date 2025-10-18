// CONTROLLER: Connects routes and services
const UserService = require('../services/userService');
const UserModel = require('../models/userModel');

function addUser(req, res) {
  try {
    const { name } = req.body;
    const message = UserService.registerUser(name);
    res.json({ success: true, message });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

function getUsers(req, res) {
  res.json(UserModel.getAllUsers());
}

module.exports = { addUser, getUsers };


/* 🧠 Clean Code Practices:

Clear error handling

Descriptive variable names

No business logic — just coordinates flow */