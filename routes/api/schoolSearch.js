const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');

// function escapeRegex(text) {
//   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// };

// router.get('/:school', (req, res) => {
//   if (req.params.school) {
//     const regex = new RegExp(escapeRegex(req.params.school), 'gi');
//     Student.find({ schoolName: regex }, (err, items) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.status(200).json(items);
//       }
//     })
//   }

// })
router.get('/:school', (req, res) => {
  Student.find({ schoolName: req.params.school}, (err, items) => {
    res.status(200).json(items);
  })
  
})

module.exports = router;