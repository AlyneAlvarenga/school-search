const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');

router.get('/:school/grades', (req, res) => {
  Student.aggregate([
    { $match: { schoolName: req.params.school }},
    { $unwind: "$grades" },
  // gives me several objects, where "grades" now holds an object with a single subject and grade. so for example Logan appears in three objects, one with "grades": "science", another with "grades": "math", and another with "grades" "combat"
    { $group: { _id: "$grades.subject", grades: {"$push": "$grades.grade"} } }
  ]).then(objs => {
    res.json(objs)
  })

})

module.exports = router;