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
  
//   Student.create({
//     schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//     studentFirstName: `Ron`,
//     studentLastName: 'Weasley',
//     grades: [
//       { subject: 'History of Magic', grade: 50 },
//       { subject: 'Potions', grade: 50 },
//     ]
//   })

// Student.create({
//   schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//   studentFirstName: `Hermione`,
//   studentLastName: 'Granger',
//   grades: [
//     { subject: 'History of Magic', grade: 100 },
//     { subject: 'Potions', grade: 100 },
//   ]
// })

// Student.create({
//   schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//   studentFirstName: `Harry`,
//   studentLastName: 'Potter',
//   grades: [
//     { subject: 'History of Magic', grade: 80 },
//     { subject: 'Potions', grade: 85 },
//   ]
// })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Storm`,
  //   studentLastName: 'Munroe',
  //   grades: [
  //     { subject: 'Math', grade: 80 },
  //     { subject: 'Science', grade: 100 },
  //   ]
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Jean`,
  //   studentLastName: 'Grey',
  //   grades: [
  //     { subject: 'Math', grade: 90 },
  //     { subject: 'Science', grade: 80 },
  //   ]
  // })
  
  // Student.create({
  //   schoolName: `Xavier's School for Gifted Youngsters`,
  //   studentFirstName: `Scott`,
  //   studentLastName: 'Summers',
  //   grades: [
  //     { subject: 'Math', grade: 90 },
  //     { subject: 'Science', grade: 80 },
  //   ]
  // })

module.exports = Student;