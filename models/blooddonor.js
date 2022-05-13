const mongoose = require('mongoose')
const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
   type: String,
   required: true
  },
bloodGroup: {
      type: String,
      required: true
  }
})
module.exports = mongoose.model('Donor', donorSchema)