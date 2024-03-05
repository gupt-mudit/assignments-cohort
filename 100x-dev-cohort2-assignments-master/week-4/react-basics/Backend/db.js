const mongoose = require('mongoose');
const { boolean } = require('zod');

// Connect to MongoDB
mongoose.connect('mongodb+srv://gupta_mudit:Starboy%4001@cluster0.tyihsd6.mongodb.net/todos');

const todoSchema = new mongoose.Schema({
 title: String,
 description: String,
 completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = { Todo}
    