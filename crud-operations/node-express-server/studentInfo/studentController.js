const db = require("./models");


// creating main model 
const Student = db.students

//source work for the server 


//1.create student 
const addStudent = async (req, res) => {
  try {let info = {
    student_id:req.body.student_id,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    standard:req.body.standard
}
console.log(info)
const student = await Student.create(info)
res.status(200).send(student)} 
catch  {
    res.status(400).send('something failed')
}
    
}


//2.get all students 
const getAllStudents = async (req, res) => {
    try{
        let students = await Student.findAll({attributes : {exclude: ['createdAt', 'updatedAt']}});
        res.status(200).send(students);

    }
    catch  {
        res.status(400).send('something failed')
    }

}

//3.get single student

const getOneStudent = async (req,res) => {
    try {    let id = req.params.id 
        let student = await Student.findOne({attributes : {exclude: ['createdAt', 'updatedAt']},where : {student_id:id}})
        res.status(200).send(student)}
        catch {
            res.status(400).send({"Error":"Something went Wrong"})
        }

}


//4. updating a particular student details 

const updateStudent = async(req,res) => {
    try {
        let id = req.params.id 
        const student  = await Student.update(req.body, {where: {student_id:id}});
        res.status(200).send(student)

    }
    catch {
        res.status(400).send("Something went Wrong")
    }
   
}


//5.turncate (deleting) particular student 



const deleteStudent = async(req,res) => {
    try {    let id = req.params.id
        await Student.destroy({where: {student_id:id}});
       res.status(200).send({data:'student details deleted'})}
    catch {
        res.status(400).send("Something went Wrong")
    }

}


module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent

}