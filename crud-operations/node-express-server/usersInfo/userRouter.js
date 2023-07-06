const userController = require('./userController'); 

const express = require('express') 

const router = express.Router(); 


router.post('/users' , userController.getDetails) 
router.get('/get', userController.get)
router.delete('/delete/:id', userController.deleteUser)


module.exports =
 router