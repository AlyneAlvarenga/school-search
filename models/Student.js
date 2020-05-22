const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  schoolName: String,
  studentFirstName: String,
  studentLastName: String,
  studentGrade: Number,
});
  
  const Student = mongoose.model('student', StudentSchema);
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Logan`,
  //   studentLastName: 'Wolverine',
  //   studentGrade: 50,
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Storm`,
  //   studentLastName: 'Munroe',
  //   studentGrade: 90,
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Jean`,
  //   studentLastName: 'Grey',
  //   studentGrade: 80,
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Scott`,
  //   studentLastName: 'Summers',
  //   studentGrade: 80,
  // })

module.exports = Student;