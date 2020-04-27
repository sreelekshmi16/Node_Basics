const express = require('express');
const Joi = require('joi')
const app = express()
const logger = require('./middleware/logger');
const courses = require('./routes/courses')
const home = require('./routes/home');

// const courses =[{id:1,name:"React"},{id:2,name:"Node"},{id:3,name:"Angular"}]


app.use(express.json())
app.use('/api/courses',courses)
app.use('/',home)
const logging = app.use(logger);
const port = 5000

// function validateCourse(course){

//     const schema ={
//         name : Joi.string().min(3).required()
//     }

//   return Joi.validate(course,schema)
// }



app.get('/', (req, res) => res.send('Hello World.............???!'))


// app.get('/api/courses',(req,res)=>{

//     res.send(courses);
// })

// app.get('/api/courses/:id',(req,res)=>{
//     const course = courses.find(c=>c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('This course id  not existing');
//     res.send(course)
// })


// app.post('/api/courses',(req,res)=>{
//     const course={
//         id : courses.length + 1,
//         name: req.body.name
//     };
//     const{error} = validateCourse(req.body)
//     if(error){
//         return res.status(400).send(error.detail[0].message)

//     }
//     courses.push(course);
//     res.send(course)
// });

// app.delete('/api/courses/:id',(req,res)=>{
//     const course = courses.find(c=>c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('This course id  not existing');
//     const index = courses.indexOf(course)
//     courses.splice(index,1)
//     res.send(course)

// })

// app.put('/api/courses/:id',(req,res)=>{
//     const course = courses.find(c=>c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('This course id  not existing');

//     course.name = req.body.name;
//     res.send(course)

// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
