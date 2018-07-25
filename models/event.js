var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  }
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
