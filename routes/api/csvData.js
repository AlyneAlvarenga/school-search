const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');

router.get('/:school/csvData', (req, res) => {
  Student.aggregate([
    { $match: { schoolName: req.params.school } },
    { $unwind: "$grades" },
  ]).then(objs => {
    res.json(objs)
  })

})

module.exports = router;