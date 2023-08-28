const mongoose = require('mongoose');

//defining a model
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TasksSchema = new Schema({
    title: String,
    description: String ,
    dueDate: Date,
    priority: String ,
    status: String
    // user : {type : mongoose.Schema.Types.ObjectId , ref: 'User' }

})
const Tasks =mongoose.model('Tasks',ContactsSchema);

module.exports = Tasks;