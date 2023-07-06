const authController = require('./authController'); 

const express = require('express') 

const router = express.Router(); 


router.post('/login' , authController.authenticate) 



module.exports =router