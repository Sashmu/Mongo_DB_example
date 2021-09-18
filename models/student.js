const mongoose = require('mongoose')

//4. Import the Schema class from the mongoose package
const Schema = mongoose.Schema;

//5. Create a new instance of the Schema class and keep it in a variabe. In this schema we are going to put the structure of our model.
const myOwnSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  age: {type: Number},
  registered: {type: Boolean, default: false},
  grades: {type: Array},
  school: {type: Schema.Types.ObjectId, ref: 'School'}
})

//6. Connect the schema to the model (The first argument is the name that we are going to give to the schema. It should be in singular)
const Student = mongoose.model('Student', myOwnSchema)

module.exports=Student