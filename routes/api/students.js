const express = require('express');
const router = express.Router();

//Bring Student model
const Student = require('../../models/Student');

//GET api/students
router.get('/', (req, res) => {
  Student.find()
    .sort({name: -1})  
    .then(items => {
      res.json(items)
    })
})

module.exports = router;