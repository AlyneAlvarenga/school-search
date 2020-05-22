const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');

router.get('/:school', (req, res) => {
  Student.find({ schoolName: req.params.school}, (err, items) => {
    res.status(200).json(items);
  })
  
})

module.exports = router;