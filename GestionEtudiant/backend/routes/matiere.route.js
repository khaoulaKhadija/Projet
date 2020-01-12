let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let matiereSchema = require('../models/Matiere');

// CREATE Student
router.route('/create-matiere').post((req, res, next) => {
  matiereSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});


// READ Students
router.route('/').get((req, res) => {
  matiereSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-matiere/:id').get((req, res) => {
  matiereSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-matiere/:id').put((req, res, next) => {
  matiereSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-matiere/:id').delete((req, res, next) => {
  matiereSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;