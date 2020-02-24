'use strict'

let mongoose      = require('mongoose'),
    FlightDetails = mongoose.model('FlightDetails')

exports.create = async (req, res) => {

  console.log(req.body)
  var throwErrors = []

  await new FlightDetails(req.body).save((err, flightDetail) => {
    if (err) {
      var errors = err.errors
      for (var key in errors) {
        if (errors.hasOwnProperty(key)) {
          throwErrors.push(errors[key].message)
          console.log(errors[key].message)
        }
      }
      return res.status(400).json({message: throwErrors})
    }
    res.status(201).json({flightDetail: flightDetail})
  })
}

exports.index = async (req, res) => {
  let flightDetails = await FlightDetails.find().exec()
  res.status(200).json({ flightDetails: flightDetails })
}

exports.show = async (req, res) => {
  await FlightDetails.findOne({_id: req.params.id}, (err, flightDetail) => {
    if (err) {
      return res.status(400).json({ Errors: err.errors })
    }
    res.status(200).json({ flightDetail: flightDetail })
  })
}

exports.update = async (req, res) => {
  await FlightDetails.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true, useFindAndModify: false, runValidators: true}, (err, flightDetail) => {
    if (err) {
      return res.status(400).json({ Errors: err.errors })
    }
    res.status(200).json({ flightDetail: flightDetail })
  })
}
