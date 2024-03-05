const express = require('express')
const {createTodo,updateTodo} = require("./type")
const {Todo} = require ("./db")
const { default: mongoose } = require("mongoose");
const app = express()
const port = 3000
app.use(express.json());

app.get('/todos', async (req, res) => {
  const show= await Todo.find({});
  res.json({show});
})

app.post('/todo',(req,res)=>{
 const posttodo = req.body;
 const parsetodo = createTodo.safeParse(posttodo);
 
 if(!parsetodo.success){
    res.status(411).json({
        msg: "wrong inputs bhai !!"
    })
    return;
 }
  Todo.create({title: posttodo.title, description: posttodo.description, completed: false
}).then(()=>{res.json({msg: "todo posted !"})})
})


app.put('/completed',async (req,res)=>{
 const uptodo = req.body;
 const parseuptodo = updateTodo.safeParse(uptodo);
 if(!parseuptodo.success){
    res.status(411).json({msg: "wrong inputs bhai !! "})
 }
  await Todo.update({
    _id: req.body.id
  },{
    completed: true
  }
  )
  res.json({msg: "todo completed!"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})