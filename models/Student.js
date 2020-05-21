const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  schoolName: String,
  studentName: String,
  studentGrade: Number,
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;