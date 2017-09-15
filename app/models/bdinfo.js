import mongoose from 'mongoose'

const Schema = mongoose.Schema

let ukSchema = new mongoose.Schema({
  uk: String,
  cookie: String,
  time : {type : Date, default: Date.now},
})

ukSchema.statics.findByUk = function (uk) {
  return this.find({ uk: uk })
}

export default mongoose.model('bdinfo', ukSchema)