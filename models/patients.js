const mongoose = require('mongoose')
import {Schema, Model} from "mongoose"
const patientSchema = mongoose.Schema(

const Patient = new Schema({
    PatientId:String,
    surname:String,
    OtherNames:String,
    PhoneNumber:String,
    Gender:String,
    ResidentialAddress:String,
    EmergencyContact:String,
}

))
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;