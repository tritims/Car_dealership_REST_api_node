const express = require('express');

const router = express.Router();

//Require controllers
const usersController = require('../controllers/users');

router.route('/')
    .get(usersController.index)
    .post(usersController.newUser)
    
    

module.exports = router;