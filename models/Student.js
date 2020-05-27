const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  schoolName: String,
  studentFirstName: String,
  studentLastName: String,
  grades: [
    { subject: String, grade: Number},
  ]
});
  
const Student = mongoose.model('student', StudentSchema);

module.exports = Student;