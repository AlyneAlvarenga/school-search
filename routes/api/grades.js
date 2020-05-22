const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');

router.get('/:school/grades', (req, res) => {
  Student.aggregate([
    { $match: { schoolName: req.params.school }},
    { $unwind: "$grades" },
    { $group: { _id: "$grades.subject", grades: {"$push": "$grades.grade"} } }
  ]).then(objs => {
    res.json(objs)
  })

})

module.exports = router;