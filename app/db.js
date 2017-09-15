import mongoose from 'mongoose'
import { db } from './config'

mongoose.Promise = global.Promise

const dbOptions = {db: { native_parser: true },
  server: { poolSize: 5 },replset: { rs_name: 'myReplicaSetName' },
  user: db.user, pass: db.pass
}

let moo = mongoose.connect(db.DB_URL, dbOptions)

moo.connection.on('connected',
() => { console.log(`Mongoose connection open to ${db.DB_URL}`)})
moo.connection.on('error',
(err) => { console.log(`Mongoose connection error: ${err}`)})
moo.connection.on('disconnected',
() => { console.log('Mongoose connection disconnected')})

export default moo