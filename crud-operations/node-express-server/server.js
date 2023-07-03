const express= require("express");
const cors= require('cors');


const router = require('./studentInfo/studentsRouter')



const app = express();



var corOptions = {
    origin:"https://localhost:8081"
}




// middlewares 
app.use(express.json());
app.use(cors())
//app.use(express.urlencoded({extended:true}))


// Router from routes 
app.use('/api/students', router)



app.get("/", (req,res) => {
    res.send('hello')
})




var port = process.env.PORT || 8081 ;
console.log(port)

app.listen(port, ()=> {
    console.log(`Listening on the port  ${port}`)
})