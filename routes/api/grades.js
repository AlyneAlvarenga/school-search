const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');

router.get('/:school/grades', (req, res) => {
  Student.aggregate([
    { $match: { schoolName: req.params.school }},
    { $unwind: "$grades" },
  // gives me eight objects, where "grades" now holds an object with a single subject and grade. so Logan appears in two objects, one with "grades": "science" and another with "grades": "math"
    { $group: { _id: "$grades.subject", grades: {"$push": "$grades.grade"} } }
  ]).then(objs => {
    res.json(objs)
  })

})

module.exports = router;