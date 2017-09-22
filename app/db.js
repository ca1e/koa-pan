import mongoose from 'mongoose'
import { db } from './config'

mongoose.Promise = global.Promise

const dbOptions = {
  useMongoClient: true,
  user: db.user, pass: db.pass
}

let moo = mongoose.connect(db.DB_URL, dbOptions)

moo.then(
  () => { console.log(`Mongoose connection open to ${db.DB_URL}`)},
  (err) => { console.log(`Mongoose connection error: ${err}`)}
)

export default moo
