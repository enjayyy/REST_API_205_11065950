const mongoose = require('mongoose')
import {Schema, Model} from "mongoose"

const Patient = new Schema({
  Temperature:String,
    BloodPressure:String,
   Pulse:String,
 
   
}

)
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;