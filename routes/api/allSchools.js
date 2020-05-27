const express = require('express');
const router = express.Router();

//Bring Student model
const Student = require('../../models/Student');

//GET all schools: api/allSchools
router.get('/', (req, res) => {
  Student.aggregate([
    {$group: {_id: "$schoolName"}}
  ]).then(objs => {
    res.json(objs)
  })
})

module.exports = router;