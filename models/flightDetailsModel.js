'use strict';
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var flightDetailsSchema = new Schema({
  flightCode: {
    type: String,
    required: [true, 'Fight Code cannot be blank.']
  },
  flightProvider: {
    type: String,
    required: [true, 'Flight Provider cannot be blank.']
  },
  sourcePortName: {
    type: String,
    required: [true, 'Source Port Name cannot be blank.']
  },
  sourcePortCode: {
    type: String,
    required: [true, 'Source Port Code cannot be blank.']
  },
  destinationPortName: {
    type: String,
    required: [true, 'Destination Port Name cannot be blank.']
  },
  destinationPortCode: {
    type: String,
    required: [true, 'Destination Port Code cannot be blank.']
  },
  scheduledArrival: {
    type: Date,
    default: Date.now
  },
  scheduledDeparture: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["LANDED", "ON SCHEDULE", "DELAYED"],
    required: [true, 'Status cannot be blank.']
  }
});

module.exports = mongoose.model('FlightDetails', flightDetailsSchema);
