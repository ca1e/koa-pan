import mongoose from 'mongoose'

const Schema = mongoose.Schema

let userSchema = new mongoose.Schema({
  name: String,
  passwd: String,
  status: String,
  uks: [],
  level: Number,
  createTime : {type : Date, default: Date.now},
  lastLogin : {type : Date, default: Date.now},
})

userSchema.statics.findByName = function (n) {
  return this.find({ name: n })
}

export default mongoose.model('userinfo', userSchema)
