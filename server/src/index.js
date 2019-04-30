require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

const Schema = mongoose.Schema;

const streetScoresSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  filename: String,
  lat: String,
  long: String,
  cleanliness: Number,
  img_url: String
}, {collection: 'street-scores'});

const streetScoresModel = mongoose.model('street-scores', streetScoresSchema);

const app = express()

const whitelist = [
  'http://localhost:8080',
  undefined
]
const corsOptions = {
  origin: function (origin, callback) {

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/garbage', async function (req, res) {
  const data = await streetScoresModel.find()
  res.send(JSON.stringify(data))
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`))
