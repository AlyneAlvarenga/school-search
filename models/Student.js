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
//       { subject: 'History of Magic', grade: 60 },
//       { subject: 'Potions', grade: 65 },
//       { subject: 'Charms', grade: 60 },
//     ]
//   })

// Student.create({
//     schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//     studentFirstName: `Neville`,
//     studentLastName: 'Longbottom',
//     grades: [
//       { subject: 'History of Magic', grade: 50 },
//       { subject: 'Potions', grade: 50 },
//       { subject: 'Charms', grade: 60 },
//     ]
//   })

// Student.create({
//   schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//   studentFirstName: `Hermione`,
//   studentLastName: 'Granger',
//   grades: [
//     { subject: 'History of Magic', grade: 100 },
//     { subject: 'Potions', grade: 100 },
//     { subject: 'Charms', grade: 100 },
//   ]
// })

// Student.create({
//   schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//   studentFirstName: `Harry`,
//   studentLastName: 'Potter',
//   grades: [
//     { subject: 'History of Magic', grade: 80 },
//     { subject: 'Potions', grade: 85 },
//     { subject: 'Charms', grade: 95 },
//   ]
// })

// Student.create({
//   schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//   studentFirstName: `Luna`,
//   studentLastName: 'Lovegood',
//   grades: [
//     { subject: 'History of Magic', grade: 80 },
//     { subject: 'Potions', grade: 80 },
//     { subject: 'Charms', grade: 90 },
//   ]
// })

// Student.create({
//   schoolName: `Hogwarts School of Witchcraft and Wizardry`,
//   studentFirstName: `Cedric`,
//   studentLastName: 'Diggory',
//   grades: [
//     { subject: 'History of Magic', grade: 90 },
//     { subject: 'Potions', grade: 96 },
//     { subject: 'Charms', grade: 90 },
//   ]
// })
  
//   Student.create({
//     schoolName: `Xavier's School for Gifted Youngsters`,
//     studentFirstName: `Storm`,
//     studentLastName: 'Munroe',
//     grades: [
//       { subject: 'Math', grade: 80 },
//       { subject: 'Science', grade: 100 },
//       { subject: 'Combat', grade: 95 },
//     ]
//   })
  
//   Student.create({
//     schoolName: `Xavier's School for Gifted Youngsters`,
//     studentFirstName: `Jean`,
//     studentLastName: 'Grey',
//     grades: [
//       { subject: 'Math', grade: 90 },
//       { subject: 'Science', grade: 80 },
//       { subject: 'Combat', grade: 80 },
//     ]
//   })
  
//   Student.create({
//     schoolName: `Xavier's School for Gifted Youngsters`,
//     studentFirstName: `Scott`,
//     studentLastName: 'Summers',
//     grades: [
//       { subject: 'Math', grade: 90 },
//       { subject: 'Science', grade: 80 },
//       { subject: 'Combat', grade: 80 },
//     ]
//   })

// Student.create({
//   schoolName: `Xavier's School for Gifted Youngsters`,
//   studentFirstName: `Logan`,
//   studentLastName: 'Wolverine',
//   grades: [
//     { subject: 'Math', grade: 50 },
//     { subject: 'Science', grade: 50 },
//     { subject: 'Combat', grade: 100 },
//   ]
// })

// Student.create({
//   schoolName: `Xavier's School for Gifted Youngsters`,
//   studentFirstName: `Kurt`,
//   studentLastName: 'Nightcrawler',
//   grades: [
//     { subject: 'Math', grade: 90 },
//     { subject: 'Science', grade: 95 },
//     { subject: 'Combat', grade: 98 },
//   ]
// })

// Student.create({
//   schoolName: `Xavier's School for Gifted Youngsters`,
//   studentFirstName: `Henry`,
//   studentLastName: 'Beast',
//   grades: [
//     { subject: 'Math', grade: 90 },
//     { subject: 'Science', grade: 95 },
//     { subject: 'Combat', grade: 98 },
//   ]
// })

// Student.create({
//   schoolName: `Midtown School of Science and Technology`,
//   studentFirstName: `Peter`,
//   studentLastName: 'Parker',
//   grades: [
//     { subject: 'Math', grade: 100 },
//     { subject: 'Gym', grade: 95 },
//     { subject: 'Literature', grade: 80 },
//   ]
// })

// Student.create({
//   schoolName: `Midtown School of Science and Technology`,
//   studentFirstName: `Ned`,
//   studentLastName: 'Leeds',
//   grades: [
//     { subject: 'Math', grade: 90 },
//     { subject: 'Gym', grade: 60 },
//     { subject: 'Literature', grade: 70 },
//   ]
// })

// Student.create({
//   schoolName: `Midtown School of Science and Technology`,
//   studentFirstName: `Michelle`,
//   studentLastName: 'Jones',
//   grades: [
//     { subject: 'Math', grade: 100 },
//     { subject: 'Gym', grade: 80 },
//     { subject: 'Literature', grade: 95 },
//   ]
// })

// Student.create({
//   schoolName: `Midtown School of Science and Technology`,
//   studentFirstName: `Flash`,
//   studentLastName: 'Thompson',
//   grades: [
//     { subject: 'Math', grade: 60 },
//     { subject: 'Gym', grade: 80 },
//     { subject: 'Literature', grade: 60 },
//   ]
// })

module.exports = Student;