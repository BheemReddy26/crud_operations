const studentController = require('./studentController') 

const express = require('express') 

const router = express.Router();

router.get('/allStudents', studentController.getAllStudents)


router.get('/allStudents/:id', studentController.getOneStudent)


router.post('/addStudent', studentController.addStudent)



router.put('/updateStudent/:id', studentController.updateStudent)


router.delete('/deleteStudent/:id', studentController.deleteStudent)


module.exports = router;

