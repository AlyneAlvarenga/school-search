const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  schoolName: String,
  studentFirstName: String,
  studentLastName: String,
  grades: {
    Math: Number,
    Science: Number,
  }
});
  
  const Student = mongoose.model('student', StudentSchema);
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Logan`,
  //   studentLastName: 'Wolverine',
  //   grades: {
  //     Math: 50,
  //     Science: 50,
  //   }
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Storm`,
  //   studentLastName: 'Munroe',
  //   grades: {
  //     Math: 90,
  //     Science: 100,
  //   }
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Jean`,
  //   studentLastName: 'Grey',
  //   grades: {
  //     Math: 80,
  //     Science: 70,
  //   }
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Scott`,
  //   studentLastName: 'Summers',
  //   grades: {
  //     Math: 80,
  //     Science: 70,
  //   }
  // })

module.exports = Student;