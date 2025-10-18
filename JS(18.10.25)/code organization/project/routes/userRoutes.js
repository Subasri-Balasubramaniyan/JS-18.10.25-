// ROUTES: Defines endpoints
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/add', UserController.addUser);
router.get('/list', UserController.getUsers);

module.exports = router;


/* 
🧠 Clean Code Practices:

Routes are concise and readable

Uses controller functions instead of inline code

 */