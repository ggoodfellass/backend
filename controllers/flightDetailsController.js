'use strict';

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
          throwErrors.push(errors[key].message);
          console.log(errors[key].message);
        }
      }
      return res.status(400).json({message: throwErrors});
    }
    res.status(201).json({flightDetail: flightDetail});
  })
}

exports.show = async (req, res) => {
  let flightDetails = await FlightDetails.find().exec()
  res.status(200).json({ flightDetails: flightDetails });
}
